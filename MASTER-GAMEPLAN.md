# MASTER GAMEPLAN: painterhotline.com

Updated: 2026-11-08 (overnight session). Live: https://painterhotline.com (GitHub Pages, repo seniorhelper/painterhotline.com, branch main).
Brand: Painter Hotline, 720-208-5645, trade name of Search Converts LLC. Never link to or mention Bighorn Painting.

## State (verified 2026-11-08)
- 80 indexable pages, 0 duplicate titles, schema on every page (HousePainter/LocalBusiness, FAQPage, BreadcrumbList), llms.txt, sitemap with lastmod.
- GA4 G-S47CNPYMEL now on every real page (8 pages were untagged: cabinet-painting, colors, guides, 3 guide posts, interior-painting-cost, winter-interior-painting). Search Console file verification googleadb17462a109b3ca.html in root. No AdSense (lead-gen site; no painting site in the network carries ads).
- Forms: every lead form (78) posts to the company lead server https://clients.eyetoad.com/lead/send.php with honeypot, 4-second human timer and name + 10-digit phone validation. Test lead 20261108-100338-b96c4d saved on the server. The alert email did NOT reach Gmail within 40 minutes: see Morning to-do 1.
- Lighthouse mobile (home, before tonight's push): Performance 94, Accessibility 97, Best Practices 100, SEO 100. The one a11y failure (footer credit contrast) is fixed in this push.

## Real search data
Search Console, last 28 days to Nov 6 (read 2026-11-08): 0 clicks, 532 impressions, average position 55. Top impression queries: interior house painting cost calculator (56), how long does it take to paint a house, painting company near me, residential painter near me, painter answering service, house painters twin lakes co, residential painting broomfield. Read: the site is seen but not trusted; trust signals (GBP, reviews, local links) come before more pages.

## Keyword targets (one owner per term)
| Term | Owner page | Real SERP seen 2026-11-08 |
|---|---|---|
| house painters denver / denver painters | / (home) | Page 1: Yelp list, Imhoff Painting, Reddit threads, Golden Touch, Team Dave Logan, Kind Home Painting (1,700+ reviews, "warranty with no exclusions"), CertaPro Westminster (4.8, 249), Mod Paint Works. PAA: 4 cost questions ("How much does it cost to paint a house in Denver?"). We are not on page 1. |
| painting contractors denver | /residential-painting/ | Page 1: Yelp, Colorado Commercial & Residential Painting (since 1983), Emerald Isle, Diamond Certified, Kind Home, Cherry Coatings (commercial), Team Dave Logan, Imperial Painters, Thumbtack. |
| exterior painting cost denver / how much to paint a house denver | /what-it-costs/ | Angi and HomeAdvisor cost pages lead. PAA is all cost questions: this page is our best shot at an AI Overview citation. |
| interior painting cost denver | /interior-painting-cost/ | Angi Denver interior page. |
| cabinet painting denver | /cabinet-painting/ | Franchises (CertaPro, N-Hance, Five Star, Fresh Coat); nobody shows a price. |
| winter interior painting denver | /winter-interior-painting/ | CertaPro and 360 Painting blog posts, no sourced temperature limits. |
| lead safe painter denver / pre-1978 | /lead-safe-painting/ | Thin competition; EPA pages. |
| fix a bad paint job | /fix-a-bad-paint-job/ | Low competition, high intent. |

## Competitors (what to beat)
1. Kind Home Painting: 1,700+ reviews, plain-language warranty, strong brand. Beat with published prices, sourced facts and specialist crews. We cannot out-review them; we can out-explain them.
2. CertaPro (Denver + Westminster): big review counts, EPA certification stated, but no prices, placeholder text and a dead chat button on the Denver page.
3. Imhoff / Improovy / Five Star: no prices, contradictory warranty copy, template leftovers.
Gap everyone leaves open: dated, cited price ranges; temperature limits with a manufacturer source; honest RRP lead-paint rules; HOA color-approval steps.

## Done tonight (2026-11-08)
- Sourced Denver price table added to /what-it-costs/ (Angi exterior $2,170 to $4,433 avg $3,250, $1.55 to $4.10 per sq ft; Angi interior $927 to $2,943 avg $1,891; both read live, dated).
- Manufacturer-sourced 35°F application floor (Sherwin-Williams Duration) added to /exterior-painting/.
- EPA RRP FAQ details (30-day same-room rule, any-size window replacement) with citation added to /lead-safe-painting/; dateModified bumped.
- GA4 tag + lead/phone events added to 8 untagged pages. Legacy FormSubmit `_captcha`/`_template` flags removed from the form handler on every page (forms use the company lead server now). Footer "Need a website?" link to eyetoad.com set to nofollow (one credit per page, nothing followed sitewide). Footer credit contrast fixed. Two unused images removed. Sitemap lastmod updated for changed URLs.
- Research file: RESEARCH-painterhotline-2026-11-08.md (ranks from the WebSearch tool are UNVERIFIED; the four real SERPs above were read in a browser).

## Morning to-do (ranked)
1. Lead alerts: test lead 20261108-100338-b96c4d saved on clients.eyetoad.com but no email reached zachwennstedt@gmail.com (inbox, spam, trash checked). Open cPanel, read lead-store/mail-log.txt and lead-config.php `to` for painterhotline.com. Until fixed, painting leads sit on the server unseen. Also: there is no automatic path from the lead server to the Lead Board; leads only reach the board when Claude imports them from Gmail.
2. Google Business Profile: none exists. The head terms are a map-pack and review game (Kind Home 1,700+, CertaPro 249). A verified GBP with the real service area is the single biggest ranking lever left. No address: use a service-area profile.
3. Search Console: confirm the property is readable from Zach's account (known access problem) and pull real positions for the terms above.
4. Decide whether the DPC page claim "Colorado requires the lead pamphlet for 2 sq ft or more" (on denverpaintcontractors.com/how-to-hire-a-painter-denver/) has a source; it is not on this site but shares the brand.
5. Next content (only after GSC data): a "how often to repaint in Colorado" guide is the one remaining gap from research, but every number found was contractor opinion; publish only with a real source.

## Rules carried forward
White-hat only. No city-swapped pages, no fake reviews, no self-serving review schema, one nofollow eyetoad credit per page, no followed sitewide links. Every stat needs a URL and a checked date. Run `site-security-check` scan on the folder and the live URL before and after every push.

## 2026-11-10 (overnight, branch seo-leads-2026-11-10, not pushed)
- NEW /guides/epoxy-garage-floor-cost-colorado/ (about 1,650 words). Why: GSC showed ~171 impressions for epoxy garage floor cost / coating cost queries (Franktown, Kiowa, Castle Pines, Lone Tree, Arapahoe/Elbert county, Longmont) at positions 38-50, and /epoxy-garage-floors/ has no prices. No town prices invented, no town pages.
- Sources opened live 2026-11-10: Angi epoxy flooring cost (updated Oct 30, 2026: national avg $2,526, typical $1,650-$3,494, $2-$12/sq ft, Aurora CO $1,651-$3,614 avg $2,606, two-car 500 sq ft $1,500-$6,000, patching $25-$250, resurfacing $1,000-$5,000); Bob Vila polyaspartic $4-$9/sq ft (updated Jan 2024); Rust-Oleum EpoxyShield water-based TDS ESH-39 (60-85F, vehicle 3 days); APF Polyaspartic 7500 PDS 10.31.25 (50-85F, cures to 40F, vehicle ~24 h, no kerosene/propane heaters); CDOT 2012 release (liquid magnesium chloride). HomeAdvisor and Fixr epoxy pages returned 403/404.
- /epoxy-garage-floors/ now links to the guide in "What moves the price" (dateModified 2026-11-10). Added to /guides/ (card + ItemList), sitemap, llms.txt.
- Open item: /epoxy-garage-floors/ says EPA puts UV at "about 6% per 1,000 meters (about 2% per 1,000 feet)"; WHO says ~10% per 1,000 m. Not changed tonight.
