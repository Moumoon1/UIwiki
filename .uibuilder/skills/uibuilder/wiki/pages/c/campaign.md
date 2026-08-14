# C端活动页

适用场景：用户参与活动、查看收益、完成任务、上传或查看作品、抽奖、邀请、打卡或领取奖励。

锁定结构：

| 顺序 | 模块组件 | 组件说明页 |
|---|---|---|
| 1 | `Consumer/AppShell` | [Consumer/AppShell](../../components/c/consumer-appshell.md) |
| 2 | `Campaign/HeroImageCard` | [Campaign/HeroImageCard](../../components/c/campaign-heroimagecard.md) |
| 3 | `Campaign/incomewithAvatar` | [Campaign/incomewithAvatar](../../components/c/campaign-incomewithavatar.md) |
| 4 | `Campaign/taskCard`（默认 `basic`） | [Campaign/taskCard](../../components/c/campaign-taskcard.md) |
| 5 | `Campaign/workCard` | [Campaign/workCard](../../components/c/campaign-workcard.md) |
| 6 | `Campaign/drawCard` | [Campaign/drawCard](../../components/c/campaign-drawcard.md) |
| 7 | `Campaign/rankCard`（默认 `showmore`） | [rankCard](../../components/c/rankcard.md) |
| 8 | `Campaign/contactusCard` | [Campaign/contactusCard](../../components/c/campaign-contactusCard.md) |
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
