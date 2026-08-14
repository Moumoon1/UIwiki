#!/usr/bin/env node

const fs = require("fs");

const outputPath = process.argv[2] || "page-spec.example.json";

const spec = {
  audience_type: "b端",
  requirement_summary: "TODO：总结用户需求",
  matched_reference: {
    pattern: "管理列表页",
    reference_frame: "TODO",
    reference_screenshot: "TODO",
    reason: "该需求描述的是管理可搜索记录。"
  },
  similarity_contract: {
    same_shell: true,
    same_header_structure: true,
    same_primary_action_placement: true,
    same_filter_or_control_position: true,
    same_main_content_density: true,
    same_state_model: true,
    changed_only_domain_content: true,
    exceptions: []
  },
  sections: [
    {
      name: "应用 Shell",
      component: "Shell/AppShell",
      figma_component: "Shell/AppShell",
      variant: {
        navigation: "side",
        width: "fluid"
      },
      props: {}
    },
    {
      name: "页头",
      component: "Layout/PageHeader",
      figma_component: "Layout/PageHeader",
      props: {
        title: "TODO",
        description: "TODO"
      }
    }
  ],
  component_gaps: [],
  validation: {
    all_visible_ui_uses_library_components: true,
    anti_patterns_removed: true,
    notes: []
  }
};

fs.writeFileSync(outputPath, `${JSON.stringify(spec, null, 2)}\n`);
console.log(`已写入 ${outputPath}`);
