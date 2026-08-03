# Addon Services — Extraction Index

Source Google Sheet: https://docs.google.com/spreadsheets/d/1ZMeLwIw8utYXR07v9pSIo7q2wNJTNktAXmRkUGVnh3M/edit?gid=1611052226#gid=1611052226 (tab: "Addon services")

Total services found: 33

Successfully extracted: 15

Failed (permission denied — doc not shared "anyone with the link"): 18


## Method note

Clicking hyperlinked cells directly in the browser was unreliable (the canvas-rendered grid intercepted clicks and instead navigated the sheet's active tab to "Sheet1"). Instead, the sheet's underlying XLSX export (`.../export?format=xlsx&gid=1611052226`) was downloaded and unzipped — the OOXML `xl/worksheets/_rels/sheet1.xml.rels` file contains the true hyperlink target URLs for every cell, keyed by relationship ID, and `xl/worksheets/sheet1.xml` maps each relationship ID to its cell reference (A3:A35). Row order was cross-checked against the plain CSV export (`.../export?format=csv&gid=1611052226`) to confirm service names line up with the correct row.

Each Google Doc's content was then fetched via `https://docs.google.com/document/d/{ID}/export?format=txt`. This worked for docs shared as "Anyone with the link can view" native Google Docs. It failed (redirected to a Google sign-in page, both via curl and via an authenticated-looking browser session) for docs whose link pattern was `...edit?usp=drive_link&ouid=...&rtpof=true&sd=true` or a bare `/edit` with no sharing params — these are evidently NOT shared "anyone with the link," but restricted to specific people, since the Google Sheet cell only carries the URL, not the doc's own permissions. This was independently verified in the browser for 3 of the failing docs (Roofing SEO, Corporate Website Design, Google SEO) — all three redirected to `accounts.google.com` sign-in, confirming it's a genuine permissions restriction on the source documents rather than a fetch-method problem.


## Results

| Row | Service Name | Google Doc URL | Status | Output File |
|---|---|---|---|---|
| 3 | SEO By Industry | https://docs.google.com/document/d/1yKg0oJ_D0XHTBewIKkBDvvXDc7ZCzT97uK8BxdZdsP4/edit?usp=sharing | OK | SEO By Industry.txt |
| 4 | Roofing SEO | https://docs.google.com/document/d/1zvTQYNksWHutT79rhc7cpkbPf5ikJbEN/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 5 | HVAC SEO | https://docs.google.com/document/d/1jVLeuAcpwQ8AGef59g6ep6XFI4O4Gz-J/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 6 | Plumbing SEO | https://docs.google.com/document/d/19H4ZNWbnbbq3BwhSz90eUt2D8jad9B-W/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 7 | Garage Doors SEO | https://docs.google.com/document/d/16l_g1nFDH3JKHwW5lriUZDl2mVYB6RFa/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 8 | Locksmiths SEO | https://docs.google.com/document/d/1Cod3Olyx7pzpk0fVbg78T90CMq38ATdc/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 9 | SEO for Moving Companies | https://docs.google.com/document/d/1T85DileTZOORQifhhqDZQXwdLQsClyy4/edit | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 10 | Security Camera Installation SEO | https://docs.google.com/document/d/1MNtRtg_Y304tHjFml7tN_KRhm_ByPyzF/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 11 | Handyman SEO | https://docs.google.com/document/d/1HiB2-_DlHGu0WrH546z-GHXxRQZ4JUEX/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 12 | General Contractors SEO | https://docs.google.com/document/d/1L-LHN2zq8FDvDt1t78ptaSmP7zDfzCtv/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 13 | Landscaping and lawn care SEO | https://docs.google.com/document/d/16bXPIZtPDbThNmL1nlgpgnD5ALR0FWPu/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 14 | Fences and Gates SEO | https://docs.google.com/document/d/1UHTHqCMJwfcQvPwiLRctNtvPx5oYfD7w/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 15 | Pool Deck Remodeling SEO | https://docs.google.com/document/d/1YVJnxUYxsBVNMVBXlBhA6qAsig6vPDKS/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 16 | B2B SEO | https://docs.google.com/document/d/1ZiCfSjgtlMxfG4tXgRr3i1n9QmcinM3CBy1azKs_zWQ/edit?usp=sharing | OK | B2B SEO.txt |
| 17 | Google Ads Management | https://docs.google.com/document/d/1NxdKN5uGE7oQPDkpMMa2Q24EhYcI3dzVs0-fRkJWWnk/edit?usp=sharing | OK | Google Ads Management.txt |
| 18 | SEO Services | https://docs.google.com/document/d/163jsveQuftVP2td3Me_L8CyD5OoXTkV6gJzMFS-f6_I/edit?usp=sharing | OK | SEO Services.txt |
| 19 | eCommerce SEO | https://docs.google.com/document/d/1iX7C8gGtGPX-egGvdkbIvmBbmtj4xVxXNVLQlK4daBo/edit?usp=sharing | OK | eCommerce SEO.txt |
| 20 | Enterprise SEO | https://docs.google.com/document/d/18UjZB9C4PILZE9LmnY5JQHxMApBvAY8h3Kw_KtQbRHI/edit?usp=sharing | OK | Enterprise SEO.txt |
| 21 | SaaS SEO | https://docs.google.com/document/d/1GGidXE0ZUm6xqptliuOkJCTVhDIGhLujZ-OB1RxBy8Y/edit?usp=sharing | OK | SaaS SEO.txt |
| 22 | Local SEO | https://docs.google.com/document/d/1jfuzvWfua2kBMuCDV9PY48pN2Z4e9pWZsHWoWmPEE9A/edit?usp=sharing | OK | Local SEO.txt |
| 23 | Lead Gen SEO | https://docs.google.com/document/d/1VNoi531d_eTw5_wvb60RbpI6CYeY1ZCNfS4kGvuOwDo/edit?usp=sharing | OK | Lead Gen SEO.txt |
| 24 | Technical SEO | https://docs.google.com/document/d/1PagE7wYglne7RCr3vmIPJCxPmykRYQxgnI_O2EMCN1o/edit?usp=sharing | OK | Technical SEO.txt |
| 25 | SEO Audits | https://docs.google.com/document/d/1H1DI9rGUnbe9yu6rpLmMCi8lfLWriW_mPRso-cfNGOM/edit?usp=sharing | OK | SEO Audits.txt |
| 26 | SEO Packages | https://docs.google.com/document/d/1y852vDwJZzsNJaXkiZuqfDXwUtahpWE25Pnk79OrjQA/edit?usp=sharing | OK | SEO Packages.txt |
| 27 | SEO Consulting | https://docs.google.com/document/d/1zUME9M2HXKiJwQDud9C9DBlFoKM_EqtJGEhJ_F4tekI/edit?usp=sharing | OK | SEO Consulting.txt |
| 28 | SEO Copywriting | https://docs.google.com/document/d/1IAF_62yWrUnZPuA3tKgxZqO7vmfehp9evDl31OVbb7g/edit?usp=sharing | OK | SEO Copywriting.txt |
| 29 | AI SEO | https://docs.google.com/document/d/1R3lBfVDfRH7OOtAljBSaAzRMPbcUy97FAPOU9xHTj-0/edit?usp=sharing | OK | AI SEO.txt |
| 30 | Generative Engine Optimization (GEO) | https://docs.google.com/document/d/19UNGqjGqi4OgaU6ieM5uSrxqfxygIwfP/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 31 | Google SEO | https://docs.google.com/document/d/17vVcGD7k7ZfdjvczDmCi13Z_TIhAyeot/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 32 | SEO for WordPress | https://docs.google.com/document/d/1Yoq2fKMRxyaUcKqGVsxF_ZWmMeY5XHuR/edit | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 33 | Link Building | https://docs.google.com/document/d/1tPhDmQAJngXeEOGyAeG1hHOEshRMhtHu/edit | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 34 | Corporate Website Design | https://docs.google.com/document/d/1l4Hjd--lTz9qdz-d7lRY1mA81t4RbEpw/edit | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |
| 35 | WordPress Website Design | https://docs.google.com/document/d/1ekp_IHXsVCbLeStQvma07fjKjS6F3OaE/edit | FAILED — permission denied (sign-in required; not shared "anyone with link") | (none — extraction failed) |

## Failed docs — detail

The following could not be extracted because the individual Google Doc is not shared "Anyone with the link," so it redirects to a Google sign-in page for both signed-out curl requests and the browser session used for this task:

- **Roofing SEO** (row 4) — https://docs.google.com/document/d/1zvTQYNksWHutT79rhc7cpkbPf5ikJbEN/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **HVAC SEO** (row 5) — https://docs.google.com/document/d/1jVLeuAcpwQ8AGef59g6ep6XFI4O4Gz-J/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Plumbing SEO** (row 6) — https://docs.google.com/document/d/19H4ZNWbnbbq3BwhSz90eUt2D8jad9B-W/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Garage Doors SEO** (row 7) — https://docs.google.com/document/d/16l_g1nFDH3JKHwW5lriUZDl2mVYB6RFa/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Locksmiths SEO** (row 8) — https://docs.google.com/document/d/1Cod3Olyx7pzpk0fVbg78T90CMq38ATdc/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **SEO for Moving Companies** (row 9) — https://docs.google.com/document/d/1T85DileTZOORQifhhqDZQXwdLQsClyy4/edit
- **Security Camera Installation SEO** (row 10) — https://docs.google.com/document/d/1MNtRtg_Y304tHjFml7tN_KRhm_ByPyzF/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Handyman SEO** (row 11) — https://docs.google.com/document/d/1HiB2-_DlHGu0WrH546z-GHXxRQZ4JUEX/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **General Contractors SEO** (row 12) — https://docs.google.com/document/d/1L-LHN2zq8FDvDt1t78ptaSmP7zDfzCtv/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Landscaping and lawn care SEO** (row 13) — https://docs.google.com/document/d/16bXPIZtPDbThNmL1nlgpgnD5ALR0FWPu/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Fences and Gates SEO** (row 14) — https://docs.google.com/document/d/1UHTHqCMJwfcQvPwiLRctNtvPx5oYfD7w/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Pool Deck Remodeling SEO** (row 15) — https://docs.google.com/document/d/1YVJnxUYxsBVNMVBXlBhA6qAsig6vPDKS/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Generative Engine Optimization (GEO)** (row 30) — https://docs.google.com/document/d/19UNGqjGqi4OgaU6ieM5uSrxqfxygIwfP/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **Google SEO** (row 31) — https://docs.google.com/document/d/17vVcGD7k7ZfdjvczDmCi13Z_TIhAyeot/edit?usp=drive_link&ouid=113404867195778210828&rtpof=true&sd=true
- **SEO for WordPress** (row 32) — https://docs.google.com/document/d/1Yoq2fKMRxyaUcKqGVsxF_ZWmMeY5XHuR/edit
- **Link Building** (row 33) — https://docs.google.com/document/d/1tPhDmQAJngXeEOGyAeG1hHOEshRMhtHu/edit
- **Corporate Website Design** (row 34) — https://docs.google.com/document/d/1l4Hjd--lTz9qdz-d7lRY1mA81t4RbEpw/edit
- **WordPress Website Design** (row 35) — https://docs.google.com/document/d/1ekp_IHXsVCbLeStQvma07fjKjS6F3OaE/edit

To complete these, the sheet/doc owner needs to either (a) change each doc's sharing setting to "Anyone with the link — Viewer," or (b) share the docs with a Google account this task can authenticate as, then re-run the extraction.

