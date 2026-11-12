# Agent Skills Starter

一个可跨 agent harness 维护、可组合、便于逐步发布的技能仓库骨架。它借鉴了成熟技能仓库的组织思路，但不包含原仓库的技能内容。

> 当前仓库名为 `agent-skills-starter`，项目描述、作者信息、插件标识和发布渠道均为可替换占位值。

## 设计原则

- **技能是独立单元**：每个技能有自己的目录、入口说明和必要的参考资料。
- **成熟度明确**：正式发布、实验、暂存和弃用内容分开管理。
- **面向人和 agent 分别写作**：`SKILL.md` 是执行说明，`docs/` 是帮助人理解何时使用的介绍。
- **索引与发布集合一致**：README、插件清单和文档应明确哪些技能可发现、可安装。
- **优先小步验证**：每个技能围绕真实任务与观察到的失败迭代，不为凑目录而添加技能。

## 目录地图

```text
.agents/          仓库级 agent 约定、模板与 ADR
.changeset/       版本变更记录
.claude-plugin/   Claude Code 插件/市场清单
.out-of-scope/    已决定不做的事项及理由
docs/             面向使用者的技能介绍
skills/
  engineering/    正式发布的工程类技能
  productivity/   正式发布的通用效率类技能
  in-progress/    公开试验中，默认不发布
  misc/           冻结或低优先级技能
  deprecated/     已弃用技能及迁移提示
scripts/          仓库一致性检查
```

## 开始使用

1. 将 `agent-skills-starter` 改成你的仓库名和用途，更新 `package.json` 与 `.claude-plugin/` 中的占位元数据。
2. 从 `.agents/templates/` 复制技能模板，在 `skills/engineering/` 或 `skills/productivity/` 中创建技能。
3. 决定技能是 **user-invoked**（仅用户显式触发）还是 **model-invoked**（也允许 agent 根据任务自动触发），并在各 harness 元数据中保持一致。
4. 对正式技能补齐 `docs/<bucket>/<skill-name>.md`，更新对应分类 README 和 `.claude-plugin/plugin.json`。
5. 运行 `npm run check`，在真实任务中验证技能，再决定是否发布。

## 技能状态

- `engineering/`、`productivity/`：正式技能。应进入顶层索引、分类索引、文档和插件发布清单。
- `in-progress/`：实验技能。公开征求反馈，但默认不进入正式发布清单。
- `misc/`：保留但不主动维护的技能。明确写出维护状态。
- `deprecated/`：停止推荐的技能。保留迁移或替代说明，避免静默删除。

## 正式技能索引

### Engineering

#### User-invoked

<!-- Add human-only skills here. -->

#### Model-invoked

- [`create-skill`](./skills/engineering/create-skill/SKILL.md)：从需求梳理到起草、测试和迭代技能。

### Productivity

#### User-invoked

<!-- Add human-only skills here. -->

#### Model-invoked

<!-- Add links to promoted productivity skills here. -->

## 开发检查

```bash
npm run check
```

该检查验证技能目录、元数据、文档和插件清单之间的基本一致性。它不能替代在目标 agent 环境中的实际试用。

## 许可

选择并填写适合本仓库的许可证后再公开发布。
