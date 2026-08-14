#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.error("用法：node scripts/validate-component-usage.js <page-spec.json> [component-catalog.md]");
  process.exit(2);
}

const specPath = process.argv[2];

if (!specPath) usage();

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function extractCatalogComponents(markdown) {
  const components = new Set();
  const canonicalNamePattern = /^规范组件名[：:]\s*`([^`]+)`\s*$/gm;
  const figmaComponentPattern = /^(?:Figma component|Figma 组件)[：:]\s*`([^`]+)`\s*$/gm;
  const tableComponentPattern = /^\|[^|\n]*\|\s*`([^`]+)`\s*\|/gm;
  const linkedComponentPattern = /^-\s+\[([^\]]+)\]\(([^)]+\.md)\)\s*$/gm;
  let match;

  while ((match = canonicalNamePattern.exec(markdown))) {
    components.add(match[1]);
  }

  while ((match = figmaComponentPattern.exec(markdown))) {
    components.add(match[1]);
  }

  while ((match = tableComponentPattern.exec(markdown))) {
    components.add(match[1]);
  }

  while ((match = linkedComponentPattern.exec(markdown))) {
    const label = match[1];
    if (label.includes("/") || label === "rankCard" || label === "rankingIncome") {
      components.add(label);
    }
  }

  return components;
}

function walkSections(sections, visitor) {
  for (const section of sections || []) {
    visitor(section);
    if (Array.isArray(section.children)) {
      walkSections(section.children, visitor);
    }
  }
}

const spec = readJson(specPath);
const catalogPath =
  process.argv[3] ||
  path.join(
    __dirname,
    "..",
    "wiki",
    "components",
    spec.audience_type === "c端" ? "c" : "b",
    "component-catalog.md"
  );
const catalog = fs.readFileSync(catalogPath, "utf8");
const allowedComponents = extractCatalogComponents(catalog);
const errors = [];

if (!Array.isArray(spec.sections) || spec.sections.length === 0) {
  errors.push("规格必须至少包含一个 section。");
}

walkSections(spec.sections, (section) => {
  const component = section.component || section.figma_component;

  if (!component) {
    errors.push(`Section "${section.name || "（未命名）"}" 缺少 component 或 figma_component。`);
    return;
  }

  if (!allowedComponents.has(component)) {
    errors.push(
      `Section "${section.name || component}" 使用了 "${component}"，但它没有列在组件目录中。`
    );
  }
});

const similarity = spec.similarity_contract || {};
for (const [key, value] of Object.entries(similarity)) {
  if (key !== "exceptions" && value === false) {
    const exception = Array.isArray(similarity.exceptions)
      ? similarity.exceptions.find((item) => item.field === key)
      : null;
    if (!exception) {
      errors.push(`相似性契约 "${key}" 为 false，但没有提供例外原因。`);
    }
  }
}

if (errors.length > 0) {
  console.error("校验失败：");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("校验通过：所有 section 都使用了已批准的目录组件。");
