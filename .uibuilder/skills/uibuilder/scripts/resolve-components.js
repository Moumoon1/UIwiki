#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const arg = process.argv[2];
const catalogPath =
  arg === "b" || arg === "b端"
    ? path.join(__dirname, "..", "wiki", "components", "b", "component-catalog.md")
    : arg === "c" || arg === "c端"
      ? path.join(__dirname, "..", "wiki", "components", "c", "component-catalog.md")
      : arg || path.join(__dirname, "..", "wiki", "components", "b", "component-catalog.md");

const catalog = fs.readFileSync(catalogPath, "utf8");
const components = [];
const pattern = /^##\s+(.+?)\n\n(?:Figma component|Figma 组件)[：:]\s*`([^`]+)`/gm;
const tablePattern = /^\|\s*([^|\n]+?)\s*\|\s*`([^`]+)`\s*\|/gm;
const linkPattern = /^-\s+\[([^\]]+)\]\(([^)]+\.md)\)\s*$/gm;
let match;

while ((match = pattern.exec(catalog))) {
  components.push({
    heading: match[1],
    figma_component: match[2]
  });
}

while ((match = tablePattern.exec(catalog))) {
  if (match[1] === "---") continue;
  components.push({
    heading: match[1].trim(),
    figma_component: match[2]
  });
}

while ((match = linkPattern.exec(catalog))) {
  const label = match[1].trim();
  if (!label.includes("/") && label !== "rankCard" && label !== "rankingIncome") continue;
  components.push({
    heading: label,
    figma_component: label,
    page: match[2].trim()
  });
}

console.log(JSON.stringify(components, null, 2));
