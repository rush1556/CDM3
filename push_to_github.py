#!/usr/bin/env python3
"""
Connect Digital Media - GitHub Push Utility for rush1556/CDM
Usage:
  python3 push_to_github.py YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
"""

import sys
import os
import certifi

os.environ['SSL_CERT_FILE'] = certifi.where()
os.environ['REQUESTS_CA_BUNDLE'] = certifi.where()

from dulwich import porcelain
from dulwich.repo import Repo

REPO_PATH = os.path.dirname(os.path.abspath(__file__))
GITHUB_REPO = "rush1556/CDM"

def push_repo(token=None):
    if not token:
        if len(sys.argv) > 1:
            token = sys.argv[1].strip()
        else:
            token = input("Enter your GitHub Personal Access Token (PAT): ").strip()

    if not token:
        print("❌ Error: GitHub Token is required to authenticate.")
        print("👉 Generate a token at: https://github.com/settings/tokens (select 'repo' scope)")
        return False

    remote_url = f"https://{token}@github.com/{GITHUB_REPO}.git"
    
    print(f"📦 Staging all files in {REPO_PATH}...")
    porcelain.add(REPO_PATH, paths=[])

    try:
        porcelain.commit(
            REPO_PATH,
            message=b"Update: Connect Digital Media complete agency website & admin panel",
            author=b"Rushikesh Patil <admin@connectdigitalmedia.co.in>",
            committer=b"Rushikesh Patil <admin@connectdigitalmedia.co.in>"
        )
        print("✓ Committed changes.")
    except Exception:
        print("✓ Working tree clean / committed.")

    print(f"🚀 Pushing to GitHub (https://github.com/{GITHUB_REPO})...")
    try:
        porcelain.push(REPO_PATH, remote_url, "refs/heads/main:refs/heads/main")
        print(f"🎉 SUCCESS! All files pushed to: https://github.com/{GITHUB_REPO}")
        return True
    except Exception as e:
        try:
            porcelain.push(REPO_PATH, remote_url, "refs/heads/main:refs/heads/master")
            print(f"🎉 SUCCESS! All files pushed to: https://github.com/{GITHUB_REPO}")
            return True
        except Exception as e2:
            print(f"❌ Push error: {e2}")
            return False

if __name__ == "__main__":
    push_repo()
