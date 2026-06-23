# C端组件目录

C 端组件优先从 Figma 组件源读取真实组件，再按模块映射表匹配。

## C 端外部布局

- 页面画布宽度固定为 `414px`。
- 普通卡片区域左右外边距固定为 `16px`，内容区目标宽度为 `382px`。
- 模块之间的外部间距固定为 `16px`。
- 必须创建一个 `414px` 宽的顶层页面 Frame，并使用纵向 Auto Layout。
- 顶层页面 Frame 的 Auto Layout 设置：direction 为 `vertical`，padding-left 为 `0`，padding-right 为 `0`，item spacing 为 `16px`，horizontal alignment 为 `center`，height 为 hug contents 或按内容自适应。
- 所有页面模块必须作为同一个顶层页面 Frame 的直接子级，按页面模式或用户给定顺序从上到下排列，并在父级 Frame 内水平居中。
- `Campaign/HeroImageCard`、`Campaign/bigButton` 和 `Consumer/panel` 等头图、底部按钮、吸底按钮及底部弹出面板类模块是全宽模块，保持 `414px` 宽，不套 `16px` 页面边距。
- 普通卡片模块使用 `382px` 目标宽度或组件自身支持的内容区宽度，在 `414px` 页面内水平居中。
- 这些值只控制组件实例之间的外部布局，不得修改组件内部 padding、gap、Auto Layout 或样式。
- 不得把模块插入后停留在同一坐标，不得使用绝对定位堆叠模块，不得让模块脱离顶层页面 Frame 的 Auto Layout。

Figma 组件源：

- `https://www.figma.com/design/VM9S0hzNKZfIUD7oTDqP6n/%E7%AD%96%E7%95%A5%E6%B4%BB%E5%8A%A8%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=0-1&t=bCSa6g37T4AUAPYH-1`

## 页面和活动模块

- [Consumer/AppShell](consumer-appshell.md)
- [Campaign/HeroImageCard](campaign-heroimagecard.md)
- [Campaign/introCard](campaign-introcard.md)
- [Campaign/registerCard](campaign-registercard.md)
- [Campaign/contactusCard](campaign-contactuscard.md)
- [Campaign/bigButton](campaign-bigbutton.md)
- [Campaign/bonusCard](campaign-bonuscard.md)
- [Campaign/suggestedContentCard](campaign-suggestedcontentcard.md)
- [Campaign/normalQuestionCard](campaign-normalquestioncard.md)
- [Campaign/incomewithAvatar](campaign-incomewithavatar.md)
- [Campaign/taskCard](campaign-taskcard.md)
- [Campaign/workCard](campaign-workcard.md)
- [Campaign/drawCard](campaign-drawcard.md)
- [rankingIncome](rankingincome.md)
- [rankCard](rankcard.md)

## 状态组件

- [Feedback/EmptyState](./feedback-emptystate.md)
- [Feedback/LoadingState](./feedback-loadingstate.md)
- [Feedback/ErrorState](./feedback-errorstate.md)

被用于：

- [C端报名页](../../pages/c/registration.md)
- [C端政策介绍页](../../pages/c/policy.md)
- [C端活动页](../../pages/c/campaign.md)
- [C端榜单页](../../pages/c/leaderboard.md)

运行时来源：当前 Wiki 文件及其链接的组件说明页。
