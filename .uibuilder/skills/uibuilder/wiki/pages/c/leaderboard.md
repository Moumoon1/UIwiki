# C端榜单页

适用场景：收益排行、活动排行、作品排行、邀请排行、积分榜或贡献榜。

锁定结构：

| 顺序 | 模块组件 | 组件说明页 |
|---|---|---|
| 1 | `Consumer/AppShell` | [Consumer/AppShell](../../components/c/consumer-appshell.md) |
| 2 | `Campaign/HeroImageCard` | [Campaign/HeroImageCard](../../components/c/campaign-heroimagecard.md) |
| 3 | `Campaign/rankingIncome` | [rankingIncome](../../components/c/rankingincome.md) |
| 4 | `Campaign/rankCard`（默认 `showall`） | [rankCard](../../components/c/rankcard.md) |
| 5 | `Campaign/contactusCard` | [Campaign/contactusCard](../../components/c/campaign-contactuscard.md) |

模块白名单：只能使用以上 5 个模块。除非用户明确要求新增模块，否则不得新增其他 section、卡片、CTA、说明区或装饰区。

组件目录中的规范组件名：

- `rankingIncome`
- `rankCard`

使用组件：

- [C端组件目录](../../components/c/component-catalog.md)

必须遵守：

- [B端还是C端](../../concepts/audience-type.md)
- [组件必须来自组件库](../../concepts/approved-components-only.md)
- [相似性契约](../../concepts/similarity-contract.md)
- [页面规格校验](../../workflows/validate-page-spec.md)

运行时来源：当前 Wiki 文件。
