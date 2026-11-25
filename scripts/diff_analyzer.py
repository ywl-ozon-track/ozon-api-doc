import os
import subprocess

def analyze():
    # 检测 specs 目录下的 git diff 并输出简要 markdown
    res = subprocess.run(["git", "status", "--porcelain", "specs"], capture_output=True, text=True)
    if not res.stdout.strip():
        print("No OpenAPI changes detected.")
        return

    print("### 🔍 OpenAPI Specification Changes Detected\n")
    print("The following specification files have been updated by upstream official docs:\n")
    for line in res.stdout.splitlines():
        print(f"- `{line.strip()}`")
    print("\nPlease review the API diff before approving and merging.")

if __name__ == "__main__":
    analyze()
