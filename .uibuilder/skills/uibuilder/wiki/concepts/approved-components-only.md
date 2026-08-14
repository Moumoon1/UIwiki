# 组件必须来自组件库

每一个可见 UI 区域都必须映射到已批准组件。

## B 端组件来源

- [B端组件目录](../components/b/component-catalog.md)

## C 端组件来源

- [C端组件目录](../components/c/component-catalog.md)

## 规则

- 不要悄悄创造新的 UI 组件。
- 如果没有完全匹配的组件，复用最接近的已批准组件。
- 完整规格模式下，组件差距必须写入 `component_gaps`；轻量拼接模式下，在交付说明中说明缺口并升级为完整规格模式。
- 不要编造用户没有提供的业务文案、规则内容、奖励金额、版权声明、FAQ、二维码信息或示例数据。
- 缺失内容使用 `TODO`、`待用户提供` 或保留组件默认内容。
- 每个页面模式的锁定结构是默认模块白名单。用户明确给出模块顺序且组件已批准时，优先按用户顺序拼接。

## 模块白名单

完整规格模式下，page spec 的 `sections` 必须与所选页面模式的锁定结构或用户明确给定的组件顺序一一对应。

禁止：

- 新增锁定结构之外的 section、卡片、CTA、说明区、装饰区或状态区。
- 为了让页面更完整而添加用户没有要求的模块。
- 用相似组件替换锁定结构中的模块。

如果用户明确要求新增未批准模块，必须升级为完整规格模式，并写入 `similarity_contract.exceptions` 和 `component_gaps`。

## 组件实例锁定

使用 Figma 组件时，必须插入真实 component instance，并保持内部结构和样式不变。

允许：

- 选择已有 variant。
- 修改组件暴露的文字、图片、状态、数据和 props。
- 调整组件实例之间的外部布局和间距。
- 在组件支持范围内调整实例宽度、约束或响应式行为。

禁止：

- detach instance。
- 修改组件内部 Auto Layout、padding、gap、radius、shadow、fill、stroke、font。
- 移动、删除、新增或重排组件内部图层。
- 复制内部图层后手工重画组件。

如果需求必须改变组件内部视觉或结构，写入 `component_gaps`，不要直接改组件。

相关：

- [页面规格校验](../workflows/validate-page-spec.md)
- [页面搭建流程](../workflows/build-page.md)
