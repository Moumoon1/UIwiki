# UI Builder Wiki

此 Wiki 是页面搭建的唯一运行时知识源。业务方调整自己的组件库、页面模式、组件说明和布局规则时，优先修改这里。

## 入口规则

- [B端还是C端](./concepts/audience-type.md)
- [组件必须来自组件库](./concepts/approved-components-only.md)
- [相似性契约](./concepts/similarity-contract.md)
- [页面搭建流程](./workflows/build-page.md)
- [页面规格校验](./workflows/validate-page-spec.md)

## 页面规则

B 端页面：

- [B端管理列表页](./pages/b/admin-list.md)
- [B端详情页](./pages/b/detail.md)
- [B端表单页](./pages/b/form.md)
- [B端运营仪表盘](./pages/b/dashboard.md)
- [B端向导式设置](./pages/b/wizard.md)

C 端页面：

- [C端报名页](./pages/c/registration.md)
- [C端政策介绍页](./pages/c/policy.md)
- [C端活动页](./pages/c/campaign.md)
- [C端榜单页](./pages/c/leaderboard.md)

## C 端定位流程

处理 C 端需求时，不要只按关键词硬路由。先理解用户目标、主工作流、数据对象和转化路径，再比较下面页面模式的适用场景，选择最接近且改动最少的模式：

- [C端报名页](./pages/c/registration.md)
- [C端政策介绍页](./pages/c/policy.md)
- [C端活动页](./pages/c/campaign.md)
- [C端榜单页](./pages/c/leaderboard.md)

选中页面模式后，读取该模式的锁定结构表格，并按表格中的“组件说明页”逐个进入对应组件页面。锁定结构是模块白名单；用户没有明确要求时，不要新增表格之外的模块。

## 组件目录

- [B端组件目录](./components/b/component-catalog.md)
- [C端组件目录](./components/c/component-catalog.md)
