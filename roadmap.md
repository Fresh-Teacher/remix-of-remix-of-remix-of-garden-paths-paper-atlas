# Repository import
- [x] Prepare Senior Two PDF previews: 1,135 covers with page counts and sizes; 112 Word/archive files stay plain file cards; all four collections checked on desktop and phone.
- [x] Prepare Senior Three PDF previews: 2,148 covers with page counts and sizes; 114 confirmed missing files marked; all five available collections checked and phone pagination verified.
- [ ] Recover eight Senior Three PDFs: two damaged files and six password-protected files need readable, unlocked replacements.
- [ ] Prepare Senior Four PDF previews: generate covers, page counts and sizes; mark confirmed missing files and check collection cards.
- [x] Prepare Senior Five PDF previews: 1,887 covers with page counts and sizes; 77 confirmed missing files marked; all five available collections checked and phone pagination verified.
- [ ] Recover three Senior Five PDF links: two truncated Waves copies and one truncated Physics marking guide need complete replacement PDFs.
- [ ] Prepare Senior Six PDF previews: generate covers, page counts and sizes; mark confirmed missing files and check collection cards.
- [ ] Prepare Primary Seven PDF previews: generate covers, page counts and sizes; mark confirmed missing files and check collection cards.
- [x] Prepare Senior One PDF previews: 1,218 covers with page counts and sizes; 67 confirmed missing files marked; all six collections checked and phone layout verified.
- [ ] Recover two Senior One Biology PDFs: both source files require passwords; unlocked replacements required.
- [x] Prepare Primary 6 PDF previews: 2,102 real covers with page counts and sizes; 188 confirmed missing files marked; all eight collections checked, including phone cards.
- [ ] Recover five Primary 6 PDFs: two damaged files, two password-protected source copies, and one malformed Maths book require readable replacements.
- [x] Prepare Primary 4 PDF previews: 130 real covers with page counts and sizes; 161 confirmed missing files marked; all three collections checked on desktop and past papers on phone.
- [x] Prepare Primary 3 PDF previews: 1,764 real covers with page counts and sizes; 214 confirmed missing files marked; all seven collections checked on desktop and past papers on phone.
- [ ] Recover five Primary 3 PDFs: original files are damaged and fail both PDFium and Poppler; valid replacement PDFs required.
- [x] Inspect source and preserve project-owned runtime settings.
- [x] Copy app pages, catalogs, styles, and project-owned media.
- [x] Run imported tests and check the library on desktop and phone (246 tests passed; 657 page URLs checked at both sizes).
- [ ] Verify the MTC P.4 Scheme reader: its original external PDF returns 404; replacement file required.
- [ ] Complete settled-content verification for all collection pages: P.5 MTC cards and covers confirmed on desktop and phone; other remote-source collections remain unconfirmed.

# Document loading optimization
- [x] Stop stylesheet downloads from delaying collection data.
- [x] Use catalog file sizes and only probe missing sizes when size controls are used; baking accepts offline size metadata, but existing catalogs do not yet include it.
- [x] Preserve covers and controls; test collection navigation on desktop and phone (28 regression tests and 2 baking tests passed; 12 cards, zero browsing HEAD requests, cover rendering and document navigation confirmed).