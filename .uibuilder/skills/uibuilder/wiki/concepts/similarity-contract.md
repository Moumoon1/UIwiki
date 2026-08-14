# 相似性契约

相似性契约用于完整规格模式，约束生成页面继承参考页面的结构，而不是重新设计页面。轻量拼接模式只需要遵循用户给定顺序、组件目录和布局规则，不需要输出相似性契约。

必须检查：

- `same_shell`
- `same_header_structure`
- `same_primary_action_placement`
- `same_filter_or_control_position`
- `same_main_content_density`
- `same_state_model`
- `changed_only_domain_content`

任何 `false` 值都必须附带简短原因，并且必须关联到用户需求。

相关：

- [B端管理列表页](../pages/b/admin-list.md)
- [B端详情页](../pages/b/detail.md)
- [B端表单页](../pages/b/form.md)
- [B端运营仪表盘](../pages/b/dashboard.md)
- [B端向导式设置](../pages/b/wizard.md)
- [C端报名页](../pages/c/registration.md)
- [C端政策介绍页](../pages/c/policy.md)
- [C端活动页](../pages/c/campaign.md)
- [C端榜单页](../pages/c/leaderboard.md)
