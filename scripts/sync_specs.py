import json
import urllib.request
import os

SPECS = [
    {
        "name": "ozon-seller-openapi.json",
        "url": "https://raw.githubusercontent.com/MissiaL/ozon-api/main/references/ozon-seller-openapi.json"
    },
    {
        "name": "ozon-performance-openapi.json",
        "url": "https://raw.githubusercontent.com/MissiaL/ozon-api/main/references/ozon-performance-openapi.json"
    }
]

def sync():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    specs_dir = os.path.join(root, "specs")
    public_dir = os.path.join(root, "docs", "public")
    os.makedirs(specs_dir, exist_ok=True)
    os.makedirs(public_dir, exist_ok=True)

    for item in SPECS:
        print(f"Fetching {item['name']}...")
        req = urllib.request.Request(item["url"], headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
        parsed = json.loads(data.decode("utf-8"))
        # 统一排序与格式化
        formatted = json.dumps(parsed, ensure_ascii=False, indent=2)
        
        for d in [specs_dir, public_dir]:
            target = os.path.join(d, item["name"])
            with open(target, "w", encoding="utf-8") as f:
                f.write(formatted)
        print(f"Synced {item['name']} successfully.")

if __name__ == "__main__":
    sync()
