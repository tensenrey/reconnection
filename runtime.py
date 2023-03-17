import os
import sys
import subprocess


def main() -> int:
    os.chdir("frontend")
    subprocess.Popen(["sh", "runtime.sh"], cwd=os.getcwd(),
                     creationflags=subprocess.CREATE_NEW_CONSOLE)

    os.chdir("..")

    os.chdir("backend")
    subprocess.Popen(["sh", "runtime.sh"], cwd=os.getcwd(),
                     creationflags=subprocess.CREATE_NEW_CONSOLE)

    return 0


if __name__ == "__main__":
    sys.exit(main())
