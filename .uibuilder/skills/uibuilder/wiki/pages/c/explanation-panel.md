# C端解释面板页

适用场景：解释页，解释面板页，规则解释、活动说明、权益说明、弹窗式解释。

锁定结构：

| 顺序 | 模块组件 | 组件说明页 |
|---|---|---|
| 1 | `Consumer/AppShell` | [Consumer/AppShell](../../components/c/consumer-appshell.md) |
| 2 | `Consumer/panel` | [Consumer/panel](../../components/c/consumer-panel.md) |

页面参数：

- 画布尺寸：414×896px
- 背景色：#666666
- panel 置于页面底部

模块白名单：只能使用以上 2 个模块。除非用户明确要求新增模块，否则不得新增其他 section、卡片、CTA、说明区或装饰区。

使用组件：

- [C端组件目录](../../components/c/component-catalog.md)

必须遵守：

- [B端还是C端](../../concepts/audience-type.md)
- [组件必须来自组件库](../../concepts/approved-components-only.md)
- [相似性契约](../../concepts/similarity-contract.md)
- [页面规格校验](../../workflows/validate-page-spec.md)

运行时来源：当前 Wiki 文件。
