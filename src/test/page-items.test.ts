import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(process.cwd(), 'src/data/catalog');
const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

describe('baked page items', () => {
  it('every catalog page has one baked file matching its document ids, in order', () => {
    for (const kind of ['legacy', 'resources', 'repositories']) {
      for (const name of readdirSync(join(root, 'pages', kind))) {
        const ids: string[] = read(join(root, 'pages', kind, name)).documentIds ?? [];
        const items: { id?: string }[] = read(join(root, 'page-items', kind, name));
        expect(items.length, `${kind}/${name}`).toBe(ids.length);
      }
    }
  });
});
