#!/usr/bin/env python3
"""校验草稿是否包含必需章节。用法：python3 validate_output.py 草稿.md"""
import sys

REQUIRED = [
    "一句话钩子",
    "顶级玩家思考",
    "人性机制",
    "爆款评分",
    "可复制玩法",
    "Seedream 5.5 提示词",
    "短视频脚本",
    "完整解说文案",
    "发布文案",
    "裂变话术",
    "最终推荐",
]

def main():
    if len(sys.argv) < 2:
        print("用法：python3 validate_output.py <草稿.md>")
        sys.exit(1)
    text = open(sys.argv[1], encoding="utf-8").read()
    missing = [r for r in REQUIRED if r not in text]
    if missing:
        print("缺失章节：")
        for m in missing:
            print(f" - {m}")
        sys.exit(1)
    if "Seedream 5.5" not in text:
        print("缺失：Seedream 5.5 提及")
        sys.exit(1)
    print("通过：必需章节齐全。")

if __name__ == "__main__":
    main()
