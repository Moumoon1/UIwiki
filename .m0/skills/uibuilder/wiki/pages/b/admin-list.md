# B端管理列表页

适用场景：管理、审核、审批、配置、搜索或操作记录。

锁定结构：

1. `Shell/AppShell`
2. `Layout/PageHeader`
3. `Data/FilterBar`
4. `Data/DataTable`
5. `Data/Pagination`
6. 需要创建/编辑时使用 `Overlay/Drawer`
7. 需要破坏性确认时使用 `Overlay/Modal`

使用组件：

- [B端组件目录](../../components/b/component-catalog.md)

必须遵守：

- [B端还是C端](../../concepts/audience-type.md)
- [组件必须来自组件库](../../concepts/approved-components-only.md)
- [相似性契约](../../concepts/similarity-contract.md)
- [页面规格校验](../../workflows/validate-page-spec.md)

运行时来源：当前 Wiki 文件。
