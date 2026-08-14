# UIbuilder Project Instructions

Before performing any design, creation, update, or writing tasks in Figma (or when using the UIbuilder Figma integration or `use_figma` tools), you MUST strictly adhere to the following startup workflow:

1. **Forced Rule and Skill Reading**: 
   You MUST always read and load the full text of `.uibuilder/rules/force-uibuilder.md` and `.uibuilder/skills/uibuilder/SKILL.md` BEFORE formulating any plan, code, or running any writes.
   
2. **Auto-Apply uibuilder Standards**:
   - Always verify if the target is B-end or C-end.
   - For C-end layouts, strictly enforce:
     - 414px page width.
     - 382px normal card component width (automatically centered in the parent Auto Layout).
     - 16px vertical element spacing.
     - 0 padding-left/right on parent for full-width modules (e.g. banner, bigButton, AppShell) which should be 414px wide.
   - Always respect the "Locked Structure" (component white-list & strict order) defined in the respective wiki page.
