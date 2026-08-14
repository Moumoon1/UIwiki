# C端政策介绍页

适用场景：活动政策、参与规则、奖励说明、激励政策、补贴政策、权益介绍或 FAQ。

锁定结构：

| 顺序 | 模块组件 | 组件说明页 |
|---|---|---|
| 1 | `Consumer/AppShell` | [Consumer/AppShell](../../components/c/consumer-appshell.md) |
| 2 | `Campaign/HeroImageCard` | [Campaign/HeroImageCard](../../components/c/campaign-heroimagecard.md) |
| 3 | `Campaign/introCard` | [Campaign/introCard](../../components/c/campaign-introcard.md) |
| 4 | `Campaign/bonusCard`（默认 `4awards`） | [Campaign/bonusCard](../../components/c/campaign-bonuscard.md) |
| 5 | `Campaign/suggestedContentCard` | [Campaign/suggestedContentCard](../../components/c/campaign-suggestedcontentcard.md) |
| 6 | `Campaign/normalQuestionCard` | [Campaign/normalQuestionCard](../../components/c/campaign-normalquestioncard.md) |
| 7 | `Campaign/conceptCard` | [Campaign/conceptCard](../../components/c/campaign-conceptcard.md) |
| 8 | `Campaign/contactusCard` | [Campaign/contactusCard](../../components/c/campaign-contactuscard.md) |
| 9 | `Campaign/bottomArea` | [Campaign/bottomArea](../../components/c/campaign-bottomArea.md) |

模块白名单：只能使用以上 9 个模块。除非用户明确要求新增模块，否则不得新增其他 section、卡片、CTA、说明区或装饰区。

使用组件：

- [C端组件目录](../../components/c/component-catalog.md)

必须遵守：

- [B端还是C端](../../concepts/audience-type.md)
- [组件必须来自组件库](../../concepts/approved-components-only.md)
- [相似性契约](../../concepts/similarity-contract.md)
- [页面规格校验](../../workflows/validate-page-spec.md)

运行时来源：当前 Wiki 文件。
