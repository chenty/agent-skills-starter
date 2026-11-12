import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const promoted = ['engineering', 'productivity'];
const allBuckets = [...promoted, 'misc', 'in-progress', 'deprecated'];
const errors = [];
const skills = [];

for (const bucket of allBuckets) {
  const bucketPath = path.join(root, 'skills', bucket);
  if (!fs.existsSync(bucketPath)) {
    errors.push(`Missing skills/${bucket}/`);
    continue;
  }
  const entries = fs.readdirSync(bucketPath, { withFileTypes: true });
  for (const entry of entries.filter((item) => item.isDirectory())) {
    const name = entry.name;
    const dir = path.join(bucketPath, name);
    const skillFile = path.join(dir, 'SKILL.md');
    const metadata = path.join(dir, 'agents', 'openai.yaml');
    if (!fs.existsSync(skillFile)) errors.push(`Missing ${path.relative(root, skillFile)}`);
    if (!fs.existsSync(metadata)) errors.push(`Missing ${path.relative(root, metadata)}`);
    if (!fs.existsSync(skillFile)) continue;
    const text = fs.readFileSync(skillFile, 'utf8');
    const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter) errors.push(`${path.relative(root, skillFile)} needs YAML frontmatter`);
    else {
      const fields = Object.fromEntries(frontmatter[1].split(/\r?\n/).map((line) => {
        const separator = line.indexOf(':');
        return separator < 0
          ? [line.trim(), '']
          : [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
      }));
      const declaredName = (fields.name ?? '').replace(/^['"]|['"]$/g, '');
      if (declaredName !== name) errors.push(`${path.relative(root, skillFile)} frontmatter name must be "${name}"`);
      if (!fields.description) errors.push(`${path.relative(root, skillFile)} needs a description`);
    }
    skills.push({ bucket, name });
    if (promoted.includes(bucket)) {
      const doc = path.join(root, 'docs', bucket, `${name}.md`);
      if (!fs.existsSync(doc)) errors.push(`Promoted skill needs ${path.relative(root, doc)}`);
    }
  }
}

const manifestPath = path.join(root, '.claude-plugin', 'plugin.json');
if (fs.existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const expected = skills.filter((s) => promoted.includes(s.bucket)).map((s) => `./skills/${s.bucket}/${s.name}`).sort();
    const actual = [...(manifest.skills ?? [])].sort();
    if (JSON.stringify(expected) !== JSON.stringify(actual)) {
      errors.push(`plugin.json skills must match promoted skill folders. Expected: ${JSON.stringify(expected)}`);
    }
  } catch (error) {
    errors.push(`Invalid plugin.json: ${error.message}`);
  }
} else errors.push('Missing .claude-plugin/plugin.json');

if (errors.length) {
  console.error(`Structure check failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Structure check passed. ${skills.length} skill(s) found; ${skills.filter((s) => promoted.includes(s.bucket)).length} promoted.`);
}
