# Repository import
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