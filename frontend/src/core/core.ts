/**
 * @author tensenrey
 */
export default class ApplicationCore {
  private readonly reactLifyCycle: Function;

  /**
   * Application Constructor
   * @param reactLifyCycle 
   */
  constructor(reactLifyCycle: Function) {
    this.reactLifyCycle = reactLifyCycle;
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
      const layers = await Promise.all([this._guardLayer(), this.session()]);

      if (layers) {
        this._runReactLifeCycleLayer();
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
  private session() {
    const token = localStorage.getItem("secret");
    return this._makeCall<{}>(window.location.origin + "/api/auth/session", { method: "POST", body: JSON.stringify({ token }) });
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
      return await this.reactLifyCycle();
    } catch (e) {
      throw this._ExceptionHandler("ReactLifeCycleException", e);
    }
  }
}
