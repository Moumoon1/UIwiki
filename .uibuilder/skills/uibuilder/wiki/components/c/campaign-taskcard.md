# Campaign/taskCard

规范组件名：`Campaign/taskCard`

用于我的任务、任务列表、任务进度或任务卡。

## Variants

| Variant | 说明 |
|---------|------|
| `basic` | 普通任务列表（默认） |
| `hotTopic` | 热词库、灵感库，无 icon 任务 |
| `special` | 限时任务、精选任务，带收益栏 |
| `checkin` | 签到打卡任务 |
| `withGuidance` | AI 同款、一键同款、有指导或示例视频的任务 |
| `locked` | 门槛解锁任务、待解锁任务 |

默认使用 `basic`。根据任务类型选择对应 variant。

被用于：

- [C端活动页](../../pages/c/campaign.md)

运行时来源：当前 Wiki 文件。
