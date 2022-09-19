from importlib.resources import path
import os
from glob import glob

filepath = "/Users/dragonzord/Documents/SchoolDocs/Schmidl-DS-Practice/javascript_journey"

# this counter how many repos had .git in them
# print(sum(1 for _, dirnames, _ in os.walk("repos") if ".git" in dirnames))

# this worked to remove the .git directory from this dir
i = [str(i) for i in range(10, 30)]


for dirpath, dirname, _ in os.walk(filepath):
    if ".git" in dirpath or "images" in dirpath:
        continue

    if len(dirpath) == 101 and dirpath[-2:] not in i:
        print(dirpath)
        first = dirpath[-15:-13]
        second = dirpath[-12:-10]
        last = dirpath[-2:]
        os.system(f"touch chapters{first}_{second}/chapter{last}/chapter{last}.js")
