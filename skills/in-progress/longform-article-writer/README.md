# 深度长文写作技能 (Longform Article Writer Skill)

一套可移植、平台无关的深度 AI 写作与编辑技能，专注于高质量中文自媒体、公众号与 Newsletter 深度长文创作。

## 目录结构

- `SKILL.md`：核心技能规范与 9 阶段标准写作工作流。
- `references/article-structure-library.md`：5 大核心文章模式与复合结构推进库。
- `references/material-integrity.md`：素材证据分级、第一人称边界与反捏造铁律。
- `references/quality-rubric.md`：100 分制编辑评审量表与修改优先级指南。
- `references/workflow-checklist.md`：写作全流程操作自检清单。

## 安装方式

### Claude Code

将整个 `longform-article-writer` 文件夹复制至项目或用户级技能目录：

```text
.claude/skills/longform-article-writer/
```

确保入口文件位于：

```text
.claude/skills/longform-article-writer/SKILL.md
```

### Codex

将整个 `longform-article-writer` 文件夹复制至：

```text
.agents/skills/longform-article-writer/
```

确保入口文件位于：

```text
.agents/skills/longform-article-writer/SKILL.md
```

### 其他兼容 Agent

将本目录放入该平台支持的技能扫描路径。若宿主不支持自动技能发现，可直接将 `SKILL.md` 作为系统提示词或知识文件挂载，并保留 `references/` 文件夹。

## 使用示例

- “使用 longform-article-writer 帮我评估这个选题，并给出 3 个不同的切入角度。”
- “基于附件中的访谈录音逐字稿，写一篇公众号深度文章。请严格依据素材，不要添加素材里没有的事实。”
- “用这个技能评审我的这篇草稿，给出评分、各维度表现和优先修改建议。”
- “帮我写一篇关于职场转型的文章大纲，先只向我澄清最关键的一两个缺失信息。”

## 设计原则

- **方法论通用可迁移**：强调结构、论证与读者价值，坚决不模仿特定在世作者的独有腔调。
- **真实性底线**：严禁伪造事实、假数据、虚假引言与不存在的用户案例。
- **编辑评审导向**：量表与评分用于辅助反思与精进稿件，而非机械化的形式主义评分。
