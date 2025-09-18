import os
import requests

RES_DIR = "resources"
URLS_FILE = "download_urls.txt"

os.makedirs(RES_DIR, exist_ok=True)

def download(url):
    filename = url.split("/")[-1].split("?")[0]
    if not filename.lower().endswith(".pdf"):
        filename += ".pdf"
    local = os.path.join(RES_DIR, filename)
    if os.path.exists(local):
        print("✅ Already exists:", filename)
        return
    try:
        print("⬇️ Downloading:", url)
        r = requests.get(url, stream=True, timeout=60)
        r.raise_for_status()
        with open(local, "wb") as f:
            for chunk in r.iter_content(1024*1024):
                if chunk:
                    f.write(chunk)
        print("✅ Saved:", local)
    except Exception as e:
        print("❌ Failed:", url, e)

if __name__ == "__main__":
    if not os.path.exists(URLS_FILE):
        print(f"⚠️ Create {URLS_FILE} with one URL per line.")
    else:
        with open(URLS_FILE, "r", encoding="utf-8") as f:
            for line in f:
                url = line.strip()
                if url:
                    download(url)
