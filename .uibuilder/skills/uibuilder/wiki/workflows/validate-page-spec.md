# 页面规格校验与画布落地

页面规格只在完整规格模式中使用，是中间施工清单，不是最终交付物。简单按顺序拼接已批准组件时，使用轻量拼接模式，不输出、不保存完整 `*-spec.json`。

输出页面规格前，必须符合 `assets/page-spec-schema.json`，并使用 `scripts/validate-component-usage.js` 校验组件使用；校验后必须继续把页面规格落到 Figma 画布。

## 必须包含

- `audience_type`
- `requirement_summary`
- `matched_reference`
- `similarity_contract`
- `sections`
- `component_gaps`
- `validation`

## 画布落地

如果当前环境可用 Figma MCP、Figma 插件或其他画布编辑工具，必须继续执行：

1. 创建目标 Frame。
2. 按 `sections` 顺序插入或复用真实 Figma 组件实例。
3. 写入 props 文案和数据。
4. 设置变体和状态。
5. 按对应页面模式或用户给定顺序排列布局和间距。
6. 对 C 端页面，检查所有模块都在同一个 `414px` 顶层页面 Frame 内，并由父级纵向 Auto Layout 排列，且水平居中；全宽头图和按钮保持 `414px`，普通卡片使用 `16px` 左右外边距。
7. 检查所有可见模块仍然是 component instance，且没有 detach、重绘或修改内部样式。
8. 最终返回画布位置或链接。

只有在当前环境没有可用画布工具时，才允许退化为 JSON 和明确搭建步骤。

相关：

- [组件必须来自组件库](../concepts/approved-components-only.md)
- [相似性契约](../concepts/similarity-contract.md)
- [页面搭建流程](./build-page.md)

来源：

- `assets/page-spec-schema.json`
- `scripts/validate-component-usage.js`
