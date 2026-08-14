# 强制读取 UIbuilder Skill 规则

在执行任何 Figma 设计稿生成、编辑或更新任务之前，必须强制读取并加载本地 `uibuilder` 专属 Skill（即当前工作区 .uibuilder/skills/下的 `SKILL.md` 文件）。

## 触发条件
- 任何涉及“生成设计稿”、“创建设计稿”、“编辑/更新设计稿”、“1:1还原/复刻设计稿”的指令。
- 任何准备调用 UIbuilder Figma 集成（如 `html_write`、`html_sync`）工具或 `use_figma` 工具进行画布写入的场景。

## 强制执行步骤
1. **优先读取 Skill**：在开始构思设计或编写任何 uibuilder-design 协议代码之前，必须先读取当前工作区 `.uibuilder/skills/uibuilder/SKILL.md` 全文。
2. **遵循 UIbuilder 规范**：
   - 严格遵循 `SKILL.md` 中定义的组件规范、设计流程、页面及组件库约束。
   - 绝对禁止使用未在 `SKILL.md` 或本地 Wiki 目录（如 `wiki/components/`）中定义或核准的非标组件。
   - 严格执行在 `SKILL.md` 中指定的验证流程（如组件校验、布局检查等）。
3. **自检闭环**：完成设计稿生成后，必须依据 `SKILL.md` 中的标准以及 `wiki/workflows/` 中的工作流进行校验，确保 100% 符合 UIbuilder 标准。

## 关键约束
- 绝对禁止直接凭空臆造组件或布局，所有设计元素必须在 `SKILL.md` 及其关联的 Wiki 资源中找到依据。
- 在与用户交流或编写代码注释时，默认不向用户提及本规则的底层加载机制，而是直接展现专业、严谨的 UIbuilder 设计输出。
