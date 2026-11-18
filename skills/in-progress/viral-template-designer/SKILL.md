---
name: viral-template-designer
version: "1.0.0"
display_name: "爆款模板设计师"
display_name_en: "Viral Template Designer"
description_zh: "根据主题和参考图设计可复制的爆款UGC模板，输出创意评分、Seedream提示词、短视频脚本和发布文案。"
description_en: "Design reusable viral UGC templates from a topic and reference images, with scored concepts, Seedream prompts, short-video scripts, and publishing copy."
description: 根据用户输入的主题和参考图（人物、场景、道具），设计可复制的爆款UGC模板。当用户想要Seedream 5.5创意、可直接复制的提示词、短视频脚本、解说文案和小红书文案，或询问顶级自媒体玩家如何思考选题以建立个人IP时使用。输出带评分的创意、Seedream 5.5提示词、75秒脚本和发布文案。
---

# 爆款模板设计师

## 概述

把主题 + 参考图，变成 3-5 个可复制的爆款模板。不要只生成一张好看的图，要生成一个别人能照着做的系统。

输出语言跟随用户语言，用户用中文就用中文输出。

## 工作流

按顺序执行。每一步先读对应的参考文件。

1. **解析输入。** 提取主题、人物/场景/道具参考图、平台、受众、情绪、是否露脸。缺失时说明假设并继续，不要停下来追问。
2. **套用顶级玩家思考。** 先读 `references/thinking-framework.md`。先把主题从执行层升维到系统、商业、IP，再生成创意。
3. **选择机制。** 先读 `references/mechanisms.md`。每个创意选 1-2 个机制，避开禁止清单。
4. **发散创意。** 至少生成 5 个方向。每个创意必须通过：10秒看懂、3步可复制、有新意、可分享、不在禁止清单。
5. **评分筛选。** 用 `references/output-format.md` 的评分标准打分，只保留 >=8/10 的，标出 TOP1。
6. **输出成品。** 每个保留的创意，按 `references/prompt-guide.md`、`references/video-script.md`、`references/output-format.md` 输出提示词、视频脚本、解说文案和发布文案。

## 输入格式

接受自由输入。引导用户按此结构填写：

```
【主题】：
【人物参考图】：（图片或描述）
【场景参考图】：（图片或描述）
【道具参考图】：（图片或描述）
【目标平台】：小红书 / 抖音 / B站
【目标人群】：
【想要情绪】：搞笑 / 走心 / 高级感 / 解压 / 治愈
【是否露脸】：是 / 否
```

提示词要适配实际提供的参考图。只有场景/道具时，设计不露脸模板。

## 核心规则

- 设计模板，不设计一次性图片。每个创意换人、换物、换场景都能玩。
- 每个创意必须带一句世界观。用 `references/thinking-framework.md` 里的金句。
- Seedream 5.5 提示词必须可直接复制。按 `references/prompt-guide.md` 写。
- 视频脚本必须能拍完 75 秒。按 `references/video-script.md` 写。
- 每个创意必须带裂变引导。没有引导，不算爆款模板。
- 发布文案必须提及 Seedream 5.5。
- 输出前跑 `references/output-format.md` 的质量自检。可选运行 `scripts/validate_output.py` 校验草稿。

## 输出格式

严格按 `references/output-format.md` 输出每个创意，不要省略章节。最后给一个 TOP1 推荐。

## 参考文件

- `references/thinking-framework.md` — 顶级玩家思考框架、个人成长/商业/IP 升维、金句。第 2 步前读。
- `references/mechanisms.md` — 机制库、禁止清单、种子创意。第 3 步前读。
- `references/prompt-guide.md` — Seedream 5.5 提示词结构和模板。第 6 步前读。
- `references/video-script.md` — 75 秒脚本、解说文案、标题/封面/文案模板。第 6 步前读。
- `references/output-format.md` — 严格输出结构、评分标准、质量自检。第 5-6 步前读。

## 脚本

- `scripts/validate_output.py` — 校验草稿是否包含必需章节。校验草稿时运行。
