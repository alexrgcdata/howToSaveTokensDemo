// Local packaging checks only. This never calls a model or reads API credentials.
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const failures = [];

async function markdownFiles(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await markdownFiles(filename));
    else if (entry.name.endsWith('.md')) result.push(filename);
  }
  return result;
}

const files = [path.join(root, 'README.md'),
  ...await markdownFiles(path.join(root, 'docs')),
  ...await markdownFiles(path.join(root, 'toolkit'))];

for (const file of files) {
  const content = await readFile(file, 'utf8');
  const relative = path.relative(root, file);
  // Check local Markdown destinations, not remote availability or heading anchors.
  // Templates deliberately contain bracketed fields for their users to fill in.
  for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
    const destination = match[1];
    if (/^(https?:|mailto:|#)/.test(destination)) continue;
    const target = decodeURIComponent(destination.split('#')[0]);
    try {
      await stat(path.resolve(path.dirname(file), target));
    } catch {
      failures.push(`${relative}: missing link ${destination}`);
    }
  }
  if (path.basename(file) === 'SKILL.md') {
    const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const name = frontmatter?.[1].match(/^name: ([a-z0-9-]+)$/m)?.[1];
    const description = frontmatter?.[1].match(/^description: (.+)$/m)?.[1];
    if (name !== path.basename(path.dirname(file)) || !description) {
      failures.push(`${relative}: missing or inconsistent skill metadata`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${files.length} Markdown files: local links and skill metadata pass.`);
  console.log('No external requests or behavioral/token-savings claims were tested.');
}
