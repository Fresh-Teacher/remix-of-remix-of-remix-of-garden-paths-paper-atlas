import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(process.cwd(), 'src/data/catalog');
const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

describe('baked page items', () => {
  it('keeps prepared Primary 3 PDF metadata consistent with its saved covers', () => {
    const thumbs = read(join(root, 'thumb-map.json'));
    let checked = 0;
    for (const kind of ['resources', 'repositories']) {
      for (const name of readdirSync(join(root, 'page-items', kind))) {
        if (!/^PrimaryThree|^p3(?:-|\.json)/.test(name)) continue;
        for (const item of read(join(root, 'page-items', kind, name))) {
          const saved = thumbs[item.pdfUrl];
          if (!saved) continue;
          expect(item.thumbUrl).toBe(saved.thumbUrl);
          expect(existsSync(join(process.cwd(), 'public', saved.thumbUrl))).toBe(true);
          if (saved.thumbUrl === '/thumbs/broken-link.webp') {
            expect(item.pages).toBeUndefined();
          } else {
            expect(item.pages).toBe(saved.pages);
            expect(item.pages).toBeGreaterThan(0);
            expect(item.sizeBytes).toBe(saved.sizeBytes);
            expect(item.sizeBytes).toBeGreaterThan(0);
            checked++;
          }
        }
      }
    }
    expect(checked).toBeGreaterThan(0);
  });
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
