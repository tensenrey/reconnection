/**
 * @author tensenrey
 */

import { Utils } from "@/utils/export";

interface Session {
  access: boolean;
}

export default class ApplicationCore {
  private readonly reactLifeCycle: Function;
  private readonly token = localStorage.getItem("secret");

  /**
   * Application Constructor
   * @param reactLifeCycle 
   */
  constructor(reactLifeCycle: Function) {
    this.reactLifeCycle = reactLifeCycle;
  }

  /**
   * @param input
   * @param init 
   * @description method for call rest api 
   */
  private async _makeCall<T>(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<T | undefined> {
    try {
      return await (await fetch(input, init)).json();
    } catch (e) {
      this._ExceptionHandler("MakeCallException", e);
    }
  }

  /**
   * @param title
   * @param error
   * @description Exception interception
   */
  private _ExceptionHandler(title: string, error: unknown): Error {
    throw new Error(`Core:${title}:: ` + error);
  }

  /**
   * @description validate layers
   */
  protected async run(): Promise<void> {
    try {
      const layers = await Promise.allSettled([this._guardLayer(), this.session()]);

      if (layers) {
        const session = layers[1];

        this._runReactLifeCycleLayer();

        if (session.status === "fulfilled" && session.value) {
          const { id } = Utils.JWTDecoder(this.token!);
          window.history.pushState({}, "reconnection", "/#/" + id);
        }
      } else {
        throw this._ExceptionHandler("LayersNotResolved", layers);
      }
    } catch (e) {
      throw this._ExceptionHandler("RunTimeException", e);
    }
  }

  /**
   * @param reactLifyCycle
   * @description Setup core
   */
  public static async setup(reactLifyCycle: Function): Promise<void> {
    const core = new ApplicationCore(reactLifyCycle);
    try {
      return await core.run();
    } catch (e) {
      throw core._ExceptionHandler("SetupException", e);
    }
  }

  /**
   * @description request for get user session
   */
  private session(): Promise<Session | undefined> {

    const request = this._makeCall<Session>(window.location.origin + "/api/auth/session", {
      headers: {
        "Content-Type": "application/json",
      }, method: "POST", body: JSON.stringify({ token: this.token })
    });

    return request;
  }

  /**
   * @description Guard Layer
   */
  private async _guardLayer() {
    try {
      console.log("guard layer runned");
    } catch (e) {
      throw this._ExceptionHandler("GuardLayerException", e);
    }
  }

  /**
   * @description React LifeCycle handshake
   */
  private async _runReactLifeCycleLayer(): Promise<React.FunctionComponent> {
    try {
      return await this.reactLifeCycle();
    } catch (e) {
      throw this._ExceptionHandler("ReactLifeCycleException", e);
    }
  }
}
