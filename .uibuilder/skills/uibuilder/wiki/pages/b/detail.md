# B端详情页

适用场景：查看单条记录的详情，包括元数据、动态、关联记录或操作。

锁定结构：

1. `Shell/AppShell`
2. `Layout/PageHeader`
3. 用于摘要元数据的 `Layout/Section`
4. 用于主要详情的 `Layout/Section`
5. 用于关联记录的 `Data/DataTable` 或已批准列表组件
6. 用于上下文操作的 `Overlay/Drawer` 或 `Overlay/Modal`

使用组件：

- [B端组件目录](../../components/b/component-catalog.md)

必须遵守：

- [B端还是C端](../../concepts/audience-type.md)
- [组件必须来自组件库](../../concepts/approved-components-only.md)
- [相似性契约](../../concepts/similarity-contract.md)
- [页面规格校验](../../workflows/validate-page-spec.md)

运行时来源：当前 Wiki 文件。
