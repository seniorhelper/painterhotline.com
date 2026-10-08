/* Painter Hotline - Ringo, the hotline operator */
(function () {
  "use strict";
  var TEL = "+17202085645", DISP = "720-208-5645";

  /* ---------- Ringo artwork: a retro hotline phone with a painter's cap ---------- */
  function ringo(extra) {
    return '<svg class="' + (extra || '') + '" viewBox="0 0 260 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ringo, the Painter Hotline operator">' +
      '<defs><linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f05a2a"/><stop offset="1" stop-color="#cf3f14"/></linearGradient>' +
      '<linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1668c9"/><stop offset="1" stop-color="#0a4fae"/></linearGradient></defs>' +
      /* cord */
      '<path class="rg-cord" d="M38 206 q14 22 34 10 q20-12 34 10 q20 22 40 6" fill="none" stroke="#0a4fae" stroke-width="7" stroke-linecap="round"/>' +
      /* base */
      '<rect x="36" y="196" width="188" height="72" rx="20" fill="url(#phoneGrad)"/>' +
      '<rect x="52" y="214" width="156" height="40" rx="12" fill="#fff" opacity=".92"/>' +
      '<circle cx="86" cy="234" r="7" fill="#0a4fae"/><circle cx="112" cy="234" r="7" fill="#0f7e74"/>' +
      '<circle cx="138" cy="234" r="7" fill="#ffc233"/><circle cx="164" cy="234" r="7" fill="#c33a09"/>' +
      '<circle class="rg-led" cx="190" cy="234" r="7" fill="#19b35c"/>' +
      /* handset */
      '<g class="rg-shake">' +
      '<rect x="44" y="150" width="172" height="40" rx="20" fill="url(#phoneGrad)"/>' +
      '<rect x="36" y="134" width="56" height="54" rx="18" fill="url(#phoneGrad)"/>' +
      '<rect x="168" y="134" width="56" height="54" rx="18" fill="url(#phoneGrad)"/>' +
      '<rect x="48" y="146" width="32" height="30" rx="12" fill="#2b2b2b" opacity=".35"/>' +
      '<rect x="180" y="146" width="32" height="30" rx="12" fill="#2b2b2b" opacity=".35"/>' +
      /* face on the handset */
      '<circle cx="104" cy="168" r="8" fill="#fff"/><circle cx="106" cy="169" r="4" fill="#17212e"/>' +
      '<circle cx="156" cy="168" r="8" fill="#fff"/><circle cx="158" cy="169" r="4" fill="#17212e"/>' +
      '<path d="M116 180 q14 12 28 0" stroke="#7a2b0c" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      /* painter cap */
      '<path d="M66 140 a64 40 0 0 1 128 0z" fill="url(#capGrad)"/>' +
      '<path d="M188 136 h34 a7 7 0 0 1 0 14 h-34z" fill="#1668c9"/>' +
      '<rect x="104" y="118" width="52" height="15" rx="4" fill="#ffc233"/>' +
      '<text x="130" y="130" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="bold" fill="#07336f" text-anchor="middle">HOTLINE</text>' +
      '</g>' +
      /* brush tucked in the base */
      '<rect x="206" y="120" width="11" height="76" rx="5" fill="#c98b3a" transform="rotate(14 212 158)"/>' +
      '<rect x="200" y="104" width="23" height="16" rx="4" fill="#b9bdc2" transform="rotate(14 212 112)"/>' +
      '<rect x="198" y="88" width="27" height="20" rx="4" fill="#1f6feb" transform="rotate(14 212 98)"/>' +
      /* ring waves */
      '<g class="rg-ring" fill="none" stroke="#ffc233" stroke-width="6" stroke-linecap="round">' +
      '<path d="M22 118 q-14-16-10-38"/><path d="M238 118 q14-16 10-38"/></g>' +
      '</svg>';
  }

  var css = document.createElement('style');
  css.textContent = [
    '.rg-launch{position:fixed;right:16px;bottom:16px;z-index:980;display:flex;flex-direction:column;align-items:flex-end;gap:4px}',
    '.rg-btn{width:148px;height:170px;background:none;border:0;padding:0;cursor:pointer;filter:drop-shadow(0 10px 20px rgba(7,51,111,.32));transition:transform .2s}',
    '.rg-btn:hover{transform:translateY(-4px) rotate(-2deg)}',
    '.rg-btn svg{width:100%;height:100%;display:block}',
    '.rg-shake{transform-origin:130px 170px;animation:rgshake 4.6s ease-in-out infinite}',
    '@keyframes rgshake{0%,72%,100%{transform:rotate(0)}76%{transform:rotate(-4deg)}80%{transform:rotate(4deg)}84%{transform:rotate(-3deg)}88%{transform:rotate(2deg)}}',
    '.rg-ring{opacity:0;animation:rgring 4.6s ease-in-out infinite}',
    '@keyframes rgring{0%,70%,100%{opacity:0}76%{opacity:1}86%{opacity:.4}}',
    '.rg-led{animation:rgled 2.2s ease-in-out infinite}',
    '@keyframes rgled{0%,100%{opacity:1}50%{opacity:.35}}',
    '.rg-cord{stroke-dasharray:6 10;animation:rgcord 2.4s linear infinite}',
    '@keyframes rgcord{to{stroke-dashoffset:-32}}',
    '.rg-tip{background:#fff;color:#122033;border:2px solid #0a4fae;border-radius:14px 14px 4px 14px;padding:10px 30px 10px 13px;font:700 .92rem/1.3 Inter,system-ui,sans-serif;max-width:238px;box-shadow:0 10px 26px rgba(7,51,111,.2);position:relative;margin-right:22px;cursor:pointer}',
    '.rg-tip button{position:absolute;top:3px;right:5px;border:0;background:none;font-size:1.05rem;color:#5d6b7e;cursor:pointer;line-height:1}',
    '.rg-dock{position:fixed;right:0;top:44%;transform:translateY(-50%);z-index:975;display:flex;flex-direction:column;gap:8px;align-items:flex-end}',
    '.rg-dock button{display:flex;align-items:center;gap:9px;background:#07336f;color:#fff;border:0;border-radius:12px 0 0 12px;padding:12px 14px 12px 12px;font:700 .86rem Inter,system-ui,sans-serif;cursor:pointer;box-shadow:-4px 6px 18px rgba(7,51,111,.26)}',
    '.rg-dock button.alt{background:#c33a09}',
    '.rg-dock button:hover{filter:brightness(1.1);padding-right:18px}',
    '.rg-dock .mini{width:30px;height:34px;flex-shrink:0}',
    '.rg-dock .mini svg{width:100%;height:100%}',
    '.rg-panel{position:fixed;right:16px;bottom:16px;width:400px;max-width:calc(100vw - 24px);height:646px;max-height:calc(100vh - 110px);background:#fff;border:1px solid #dce3ec;border-radius:16px;box-shadow:0 28px 72px rgba(7,51,111,.32);z-index:1000;display:flex;flex-direction:column;overflow:hidden}',
    '.rg-head{background:linear-gradient(135deg,#07336f,#1f6feb);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}',
    '.rg-head .av{width:46px;height:46px;border-radius:14px;background:#fff;display:grid;place-items:center;overflow:hidden;flex-shrink:0}',
    '.rg-head .av svg{width:42px;height:auto}',
    '.rg-head b{font:700 1.02rem Inter,system-ui,sans-serif;display:block}',
    '.rg-head i{font-style:normal;font-size:.76rem;color:rgba(255,255,255,.82);display:flex;align-items:center;gap:6px}',
    '.rg-head i::before{content:"";width:8px;height:8px;border-radius:50%;background:#2ee07a;box-shadow:0 0 0 0 rgba(46,224,122,.7);animation:rgled 2.2s ease-in-out infinite}',
    '.rg-head .call{margin-left:auto;background:#ffc233;color:#3a2b00;border:0;border-radius:8px;padding:8px 10px;font:700 .82rem Inter,system-ui,sans-serif;text-decoration:none}',
    '.rg-head .x{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:8px;padding:6px 9px;cursor:pointer;font-weight:700}',
    '.rg-tape{height:5px;background:linear-gradient(90deg,#c33a09,#ffc233,#0f7e74,#1f6feb);}',
    '.rg-prog{height:4px;background:#e7edf5}.rg-prog i{display:block;height:100%;width:0;background:#c33a09;transition:width .35s}',
    '.rg-body{flex:1;overflow-y:auto;padding:14px;background:#f4f1ec;font:1rem/1.55 Inter,system-ui,sans-serif;color:#122033}',
    '.rg-msg{max-width:88%;padding:10px 13px;border-radius:14px;margin-bottom:10px;font-size:.95rem}',
    '.rg-msg.bot{background:#fff;border:1px solid #dce3ec;border-bottom-left-radius:4px}',
    '.rg-msg.me{background:#07336f;color:#fff;margin-left:auto;border-bottom-right-radius:4px}',
    '.rg-msg a{color:inherit}',
    '.rg-opts{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px;background:#fff;border-top:1px solid #dce3ec}',
    '.rg-opt{background:#fff;border:1px solid #0a4fae;color:#0a4fae;border-radius:9px;padding:8px 11px;font:600 .88rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.rg-opt:hover{background:#0a4fae;color:#fff}',
    '.rg-opt.hot{background:#c33a09;border-color:#c33a09;color:#fff}',
    '.rg-foot{display:flex;gap:7px;padding:10px 14px;border-top:1px solid #dce3ec;background:#fff}',
    '.rg-foot input{flex:1;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#f4f1ec}',
    '.rg-foot button{background:#ffc233;border:0;border-radius:9px;padding:10px 14px;font-weight:700;color:#3a2b00;cursor:pointer}',
    '.rg-f{background:#fff;border:1px solid #dce3ec;border-radius:12px;padding:14px;margin-bottom:10px}',
    '.rg-f label{display:block;font:600 .84rem Inter,system-ui,sans-serif;color:#122033;margin:9px 0 4px}',
    '.rg-f input,.rg-f select,.rg-f textarea{width:100%;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#f4f1ec;color:#122033}',
    '.rg-f .duo{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}',
    '.rg-f button.go{width:100%;margin-top:12px;background:#c33a09;color:#fff;border:0;border-radius:9px;padding:13px;font:700 1rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.rg-note{font-size:.8rem;color:#5d6b7e;margin-top:8px}',
    '.rg-ticket{background:#07336f;color:#fff;border-radius:12px;padding:16px;margin-bottom:12px;font-family:Inter,system-ui,sans-serif}',
    '.rg-ticket b{display:block;font-size:1.35rem;color:#ffc233;letter-spacing:.04em}',
    '.rg-ticket .ln{display:flex;justify-content:space-between;gap:10px;font-size:.86rem;padding:5px 0;border-bottom:1px dashed rgba(255,255,255,.26)}',
    '.rg-ticket .ln:last-of-type{border-bottom:0}',
    '.rg-ticket small{display:block;margin-top:8px;color:rgba(255,255,255,.82);font-size:.82rem}',
    '@media (max-width:640px){.rg-panel{right:6px;left:6px;width:auto;bottom:74px;top:60px;height:auto;max-height:none}',
    '.rg-launch{right:4px;bottom:74px}.rg-btn{width:104px;height:120px}.rg-tip{font-size:.84rem;max-width:176px;margin-right:12px}',
    '.rg-dock{top:150px;bottom:auto;transform:none}.rg-dock button{padding:10px 10px 10px 8px;font-size:.74rem}.rg-dock .mini{width:24px;height:28px}}',
    '@media (prefers-reduced-motion:reduce){.rg-shake,.rg-ring,.rg-led,.rg-cord{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }

  var launch = el('<div class="rg-launch"><button class="rg-btn" id="rgBtn" aria-label="Open the hotline chat with Ringo" aria-expanded="false">' + ringo('') + '</button></div>');
  document.body.appendChild(launch);
  var dock = el('<div class="rg-dock">' +
    '<button data-mode="quote"><span class="mini">' + ringo('') + '</span>Rapid quote</button>' +
    '<button class="alt" data-mode="callback"><span class="mini">' + ringo('') + '</span>Call me back</button></div>');
  document.body.appendChild(dock);

  var panel = null, answers = {}, log = [], capture = null, started = false;

  function openPanel(mode) {
    if (!panel) {
      panel = el('<div class="rg-panel" role="dialog" aria-modal="false" aria-label="Painter Hotline chat">' +
        '<div class="rg-head"><span class="av">' + ringo('') + '</span><span><b>Ringo</b><i>Hotline open now</i></span>' +
        '<a class="call" href="tel:' + TEL + '">' + DISP + '</a><button class="x" aria-label="Close the hotline chat">X</button></div>' +
        '<div class="rg-tape"></div><div class="rg-prog"><i id="rgProg"></i></div>' +
        '<div class="rg-body" id="rgBody"></div><div class="rg-opts" id="rgOpts"></div>' +
        '<div class="rg-foot"><label class="sr" for="rgIn">Type a message to the hotline</label>' +
        '<input id="rgIn" placeholder="Ask the hotline anything..." autocomplete="off"><button id="rgSend">Send</button></div></div>');
      document.body.appendChild(panel);
      panel.querySelector('.x').addEventListener('click', closePanel);
      panel.querySelector('#rgSend').addEventListener('click', typed);
      panel.querySelector('#rgIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') typed(); });
    }
    panel.hidden = false;
    launch.style.display = 'none';
    document.getElementById('rgBtn').setAttribute('aria-expanded', 'true');
    if (mode === 'quote') startQuote();
    else if (mode === 'callback') startCallback();
    else if (!started) greet();
  }
  function closePanel() {
    if (panel) panel.hidden = true;
    launch.style.display = '';
    document.getElementById('rgBtn').setAttribute('aria-expanded', 'false');
  }
  document.getElementById('rgBtn').addEventListener('click', function () { openPanel(); });
  dock.querySelectorAll('button').forEach(function (b) { b.addEventListener('click', function () { openPanel(b.dataset.mode); }); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-quote]');
    if (a) { e.preventDefault(); openPanel('quote'); }
  });

  function say(html, who) {
    var b = document.getElementById('rgBody');
    b.appendChild(el('<div class="rg-msg ' + (who || 'bot') + '">' + html + '</div>'));
    b.scrollTop = b.scrollHeight;
  }
  function opts(list) {
    var o = document.getElementById('rgOpts'); o.innerHTML = '';
    list.forEach(function (x) {
      var b = el('<button class="rg-opt' + (x.hot ? ' hot' : '') + '" type="button">' + x.label + '</button>');
      b.addEventListener('click', function () { say(x.label, 'me'); log.push('Visitor: ' + x.label); o.innerHTML = ''; x.fn(); });
      o.appendChild(b);
    });
  }
  function prog(p) { var b = document.getElementById('rgProg'); if (b) b.style.width = (p * 100) + '%'; }
  function form(html) {
    document.getElementById('rgOpts').innerHTML = '';
    var b = document.getElementById('rgBody'), f = el('<div class="rg-f">' + html + '</div>');
    b.appendChild(f); b.scrollTop = b.scrollHeight; return f;
  }

  /* ---------- knowledge base ---------- */
  var SITE_ID = "painterhotline.com";
  var KB = [
    [/\\b(referral|find me a painter|match|directory|lead service|are you a painter|do you paint|hotline)\\b/i, 'We are the painting company, not a service that hands you off. Six crews of our own people: interior, exterior, cabinets, commercial, decks and fences, and specialty coatings. Whichever one fits your project is the one that shows up.'],
    [/\\b(crew|who does|specialis|specializ|same (guys|people)|subcontract)\\b/i, 'Six separate crews, and they stay in their lane. The cabinet crew sprays every day, so doors come back looking like furniture instead of brushwork. The commercial crew works nights and phases a building. The exterior crew knows what altitude UV and chinook winds do to a coating. Most companies send one crew at everything, and it shows.'],
    [/\\b(fix|redo|bad (job|paint)|failed|peel|someone else|other painter)\\b/i, 'We get called out for that more than you would think, and it is almost never the paint. It is one of four things skipped before the paint: no wash, no scraping to a sound edge, no primer on bare substrate, or uncaulked joints. We will tell you honestly whether yours can be recoated or has to come off. More on <a href="/fix-a-bad-paint-job/">fixing a bad paint job</a>.'],
    [/\\b(twice|again|cheap (bid|quote|job)|cheaper|lowest|save money)\\b/i, 'Worth running the numbers. A $6,000 job that skips the prep looks identical to a $9,500 job that does not, for about eighteen months. Then it lifts, and the next painter has to remove it before doing the real work. Six grand, plus removal, plus the proper job. The $3,500 you saved cost about eight. We are rarely the cheapest bid and we would rather say that now.'],
    [/\\b(virtual|photo|upload|estimate|quote|how long.*(quote|estimate))\\b/i, 'Send photos instead of booking a visit. Four quick questions, upload the pictures, and a written estimate comes back within 24 hours naming every surface, the prep per surface, the product and sheen, the coat count and the warranty. <a href="/virtual-estimate/">Start the virtual estimate</a>.'],
    [/\\b(walkthrough|tour|how you work|what makes you|why you)\\b/i, 'There is a two-minute walkthrough that covers exactly that: how we are organized, why most paint jobs fail, what doing it twice costs, and what we will and will not promise. It ends with one honest question. <a href="/walkthrough/">Take the walkthrough</a>.'],
    [/\\b(prep|preparation|what.*included|scope|process)\\b/i, 'Exterior: protect everything, pressure wash, scrape to a sound edge, repair substrate, sand transitions, fill, caulk every joint, prime bare and repaired areas, then two finish coats. Interior: cover and protect, patch, match texture, caulk, spot prime, two coats. Each step is itemised by surface on your estimate rather than summarised as prep.'],
    [/\\b(warranty|guarantee|stand behind|if it fails)\\b/i, 'Five years on workmanship, written, with the exclusions actually printed rather than buried. Covers peeling, flaking and adhesion failure from our prep or application. Does not cover normal UV fading, or water arriving from a roof or a sprinkler. Free inspection on any claim. <a href="/our-warranty/">Full terms</a>.'],
    [/\\b(not perfect|mistake|problem|complain|go wrong)\\b/i, 'We are not perfect and we will not pretend we are. Every painting company has a day that goes sideways. What we control is answering the phone when it happens and fixing it without an argument. Same number during the project and after the invoice.'],
    [/\\b(cost|price|how much|expensive|budget)\\b/i, 'Published 2026 Front Range figures: exteriors roughly $1.55 to $4.10 a square foot, interiors about $1.50 to $3.50, cabinets $2,000 to $8,000 a kitchen. Condition drives it far more than size. Full breakdown on <a href="/what-it-costs/">what it costs</a>, and the 25% off labour runs through October 31.'],
    [/\\b(cabinet|kitchen|oak|spray|refinish)\\b/i, 'The cabinet crew degreases, scuff sands, bonding primes and sprays, with doors done off-site and boxes in place behind containment. Published ranges put refinishing at $2,000 to $8,000 against $15,000 or more to replace, and replacing usually drags countertops with it. <a href="/cabinet-refinishing/">Cabinet crew</a>.'],
    [/\\b(commercial|office|retail|warehouse|hoa|tenant|after hours)\\b/i, 'The commercial crew works nights and weekends and phases a property so only one area is ever out of use. Certificate of insurance before the first day, matched to whatever your manager or board requires. <a href="/commercial-painting/">Commercial crew</a>.'],
    [/\\b(deck|fence|stain|seal|log|timber)\\b/i, 'Pour a cup of water on the boards. Beads means the seal is fine; soaks in means it is time. Clean, brighten to restore the pH, sand where the grain raised, then seal. Stain rather than paint on anything horizontal, because film coatings peel and then need stripping. <a href="/deck-and-fence-staining/">Deck and fence crew</a>.'],
    [/\\b(epoxy|elastomeric|stucco|brick|masonry|industrial|garage floor)\\b/i, 'That is the specialty coatings crew. Different chemistry, different prep, different failure modes. Epoxy floors need mechanical profiling and a moisture test. Masonry needs a coating chosen for vapour permeability, not film thickness. Painting brick is close to permanent and we will talk it through first. <a href="/specialty-coatings/">Specialty coatings</a>.'],
    [/\\b(season|when can you|winter|spring|weather|cold|temperature)\\b/i, 'Exteriors run roughly mid-May to early October. Local records put the average last spring freeze near May 5 and the first autumn freeze near October 7, and elevation tightens both ends. What governs a given day is the overnight low, because the film cures after dark. Interiors we do year-round.'],
    [/\\b(lead|1978|old house|historic|asbestos)\\b/i, 'Pre-1978 housing may contain lead paint, and federal EPA rules require certified firms plus containment and verified cleanup when painted surfaces are disturbed. Tell us the year built and it gets planned into the scope rather than discovered mid-project.'],
    [/\\b(insur|licen|bonded|certificate)\\b/i, 'Fully insured, certificate provided at the estimate. Colorado issues no statewide painting licence, so insurance plus a detailed written scope is the whole of your protection.'],
    [/\\b(brand|sherwin|ppg|benjamin|what paint)\\b/i, 'Sherwin-Williams, PPG and Benjamin Moore. Your estimate names the exact line and sheen per surface, so you can pull the manufacturer data sheet and check it.'],
    [/\\b(area|serve|where|location|castle rock|longmont|breck|fort morgan|how far)\\b/i, 'Colorado\'s Front Range and the corridors out of it: Castle Rock up to Longmont, west along I-70 into Summit County, and east along I-70 to about Byers and Deer Trail, plus Fort Morgan on planned trips. <a href="/where-we-work/">The real map</a>.'],
    [/\\b(think about it|get back to you|need time|compare|other (bid|quote))\\b/i, 'Take the time. Compare on four lines rather than the total: the preparation included, the exact product and sheen, the coat count, and the warranty terms. A lower number is nearly always one of those being smaller. Those questions work on anybody, including us.'],
    [/\\b(deposit|payment|financ|pay|invoice)\\b/i, 'A deposit holds your dates and the balance is due at completion, after you walk the work with us. The terms are printed on the written estimate.'],
  ];

  function lookup(t) { for (var i = 0; i < KB.length; i++) if (KB[i][0].test(t)) return KB[i][1]; return null; }

  function typed() {
    var inp = document.getElementById('rgIn'), t = inp.value.trim();
    if (!t) return;
    inp.value = ''; say(t, 'me'); log.push('Visitor: ' + t);
    if (capture) { var fn = capture; capture = null; fn(t); return; }
    var a = lookup(t);
    say(a || 'I would rather get you a real answer than guess at that one. The fastest path is a rapid quote, or call <a href="tel:' + TEL + '">' + DISP + '</a> and ask a painter directly.');
    menu();
  }
  function menu() {
    opts([{ label: 'Run a rapid quote', hot: true, fn: startQuote },
          { label: 'Have someone call me', fn: startCallback },
          { label: 'Another question', fn: function () { say('Go ahead, type it below.'); } }]);
  }

  function greet() {
    started = true;
    say('Hotline, this is <strong>Ringo</strong>. I can do three things well: run a <strong>rapid quote</strong> in about ninety seconds, get a painter to <strong>call you back</strong> in a window you pick, or just answer what you actually want to know before anybody talks price. Where do you want to start?');
    opts([{ label: 'Rapid quote', hot: true, fn: startQuote },
          { label: 'Call me back', fn: startCallback },
          { label: 'What makes you different?', fn: whyUs },
          { label: 'I have a question first', fn: function () { say('Ask away. Cost, timing, prep, warranty, towns we cover, anything.'); } }]);
  }

  /* ---------- value building ---------- */
  function whyUs() {
    log.push('Visitor asked why Painter Hotline');
    say('Short version, and none of it is hard to verify.');
    setTimeout(function () {
      say('<strong>Specialized crews.</strong> Exterior, interior, cabinets and commercial are different skills. You get the crew that does your kind of work every day, not whoever was free.');
    }, 350);
    setTimeout(function () {
      say('<strong>20+ years in Colorado.</strong> Which mostly means we know what fails here: south walls chalking, sprinklers soaking the bottom courses, caulk joints opening over the freeze-thaw season.');
    }, 900);
    setTimeout(function () {
      say('<strong>A dedicated project manager</strong> so one person owns your project, <strong>full insurance</strong> with the certificate in your file, and a <strong>5-year workmanship warranty</strong> in writing.');
      opts([
        { label: 'What does doing it twice cost?', fn: twiceCost },
        { label: 'Run a rapid quote', hot: true, fn: startQuote },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 1500);
  }
  function twiceCost() {
    say('Here is the math nobody enjoys. A cheap repaint that skips washing, scraping and priming usually looks fine through the first season. By the second or third Colorado winter the trim is peeling and the south wall is chalking.');
    setTimeout(function () {
      say('Now the next painter has to <strong>remove</strong> the failed coating before they can start, which is work nobody paid for the first time. So you pay for the cheap job, the removal, and then the job done correctly. That is why our preparation is itemized in writing instead of hidden in a lump sum.');
      opts([
        { label: 'Makes sense, price my project', hot: true, fn: startQuote },
        { label: 'What is in your prep?', fn: function () { say(lookup('prep') || ''); menu(); } },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 900);
  }

  /* ---------- rapid quote ---------- */
  var Q = {};
  function startQuote() {
    Q = {}; answers = {}; prog(.1);
    say('Rapid quote it is. <strong>What are we painting?</strong>');
    opts([
      { label: 'Home exterior', fn: function () { Q.t = 'ext'; answers.project = 'Exterior house painting'; qExtSize(); } },
      { label: 'Interior rooms', fn: function () { Q.t = 'int'; answers.project = 'Interior painting'; qIntSize(); } },
      { label: 'Kitchen cabinets', fn: function () { Q.t = 'cab'; answers.project = 'Cabinet painting'; qCab(); } },
      { label: 'Deck or fence', fn: function () { Q.t = 'deck'; answers.project = 'Deck or fence staining'; qDeck(); } },
      { label: 'Commercial property', fn: function () { Q.t = 'com'; answers.project = 'Commercial property'; qCommercial(); } }
    ]);
  }
  function qExtSize() {
    prog(.25); say('<strong>What size is the building?</strong>');
    opts([
      { label: 'Single story', fn: function () { Q.sq = 1600; Q.h = 1; answers.size = 'Single story'; qExtCond(); } },
      { label: 'Two story', fn: function () { Q.sq = 2600; Q.h = 1.12; answers.size = 'Two story'; qExtCond(); } },
      { label: 'Large or walkout', fn: function () { Q.sq = 3400; Q.h = 1.2; answers.size = 'Large or walkout'; qExtCond(); } },
      { label: 'Townhome or condo', fn: function () { Q.sq = 1100; Q.h = 1.05; answers.size = 'Townhome or condo'; qExtCond(); } }
    ]);
  }
  function qExtCond() {
    prog(.45); say('<strong>How is the existing paint holding up?</strong> Rub a sunny wall and look at the trim.');
    opts([
      { label: 'Faded but sound', fn: function () { Q.c = 1; answers.condition = 'Faded but sound'; qZone(); } },
      { label: 'Chalky, caulk cracking', fn: function () { Q.c = 1.14; answers.condition = 'Chalky with cracked caulk'; qZone(); } },
      { label: 'Peeling in spots', fn: function () { Q.c = 1.3; Q.visit = true; answers.condition = 'Peeling in spots'; qZone(); } },
      { label: 'Peeling badly, bare wood', fn: function () { Q.c = 1.45; Q.visit = true; answers.condition = 'Peeling badly with bare wood'; qZone(); } }
    ]);
  }
  function qIntSize() {
    prog(.25); say('<strong>How much space?</strong>');
    opts([
      { label: '1 room', fn: function () { Q.sq = 350; answers.size = '1 room'; qIntScope(); } },
      { label: '2-3 rooms', fn: function () { Q.sq = 850; answers.size = '2-3 rooms'; qIntScope(); } },
      { label: '4-6 rooms', fn: function () { Q.sq = 1600; answers.size = '4-6 rooms'; qIntScope(); } },
      { label: 'Whole house', fn: function () { Q.sq = 2400; answers.size = 'Whole house'; qIntScope(); } }
    ]);
  }
  function qIntScope() {
    prog(.45); say('<strong>Walls only, or trim and ceilings too?</strong>');
    opts([
      { label: 'Walls only', fn: function () { Q.c = 1; answers.scope = 'Walls only'; qZone(); } },
      { label: 'Walls and trim', fn: function () { Q.c = 1.14; answers.scope = 'Walls and trim'; qZone(); } },
      { label: 'Walls, trim and ceilings', fn: function () { Q.c = 1.3; answers.scope = 'Walls, trim and ceilings'; qZone(); } },
      { label: 'Repairs needed first', fn: function () { Q.c = 1.35; Q.visit = true; answers.scope = 'Repairs needed before painting'; qZone(); } }
    ]);
  }
  function qCab() {
    prog(.3); say('<strong>Roughly how many cabinet doors and drawer fronts?</strong>');
    opts([
      { label: '10-18', fn: function () { Q.d = 15; answers.size = '10-18 pieces'; qCabFinish(); } },
      { label: '20-35', fn: function () { Q.d = 28; answers.size = '20-35 pieces'; qCabFinish(); } },
      { label: '36-50', fn: function () { Q.d = 43; answers.size = '36-50 pieces'; qCabFinish(); } },
      { label: 'More than 50', fn: function () { Q.d = 60; answers.size = 'More than 50 pieces'; qCabFinish(); } }
    ]);
  }
  function qCabFinish() {
    prog(.5); say('<strong>What is on them now?</strong>');
    opts([
      { label: 'Stained wood', fn: function () { Q.c = 1.05; answers.condition = 'Stained wood'; qZone(); } },
      { label: 'Factory painted, good', fn: function () { Q.c = 1; answers.condition = 'Factory painted, good shape'; qZone(); } },
      { label: 'Painted and chipping', fn: function () { Q.c = 1.25; Q.visit = true; answers.condition = 'Previously painted, chipping'; qZone(); } },
      { label: 'Laminate or thermofoil', fn: function () { Q.c = 1.18; Q.visit = true; answers.condition = 'Laminate or thermofoil'; qZone(); } }
    ]);
  }
  function qDeck() {
    prog(.3); say('<strong>What are we sealing?</strong>');
    opts([
      { label: 'Small deck', fn: function () { Q.sq = 260; answers.size = 'Small deck'; qDeckCond(); } },
      { label: 'Medium deck', fn: function () { Q.sq = 450; answers.size = 'Medium deck'; qDeckCond(); } },
      { label: 'Large deck with rails', fn: function () { Q.sq = 700; answers.size = 'Large deck with railings'; qDeckCond(); } },
      { label: 'Fence, or deck and fence', fn: function () { Q.sq = 850; answers.size = 'Fence, or deck and fence'; qDeckCond(); } }
    ]);
  }
  function qDeckCond() {
    prog(.5); say('<strong>What shape is the wood in?</strong>');
    opts([
      { label: 'Maintained', fn: function () { Q.c = 1; answers.condition = 'Maintained'; qZone(); } },
      { label: 'Gray and weathered', fn: function () { Q.c = 1.18; answers.condition = 'Gray and weathered'; qZone(); } },
      { label: 'Old stain peeling', fn: function () { Q.c = 1.4; Q.visit = true; answers.condition = 'Old stain peeling, stripping needed'; qZone(); } },
      { label: 'Boards may need replacing', fn: function () { Q.c = 1.32; Q.visit = true; answers.condition = 'Possible board replacement'; qZone(); } }
    ]);
  }
  function qCommercial() {
    answers.project = 'Commercial property'; Q.visit = true;
    prog(.5); say('Commercial work always starts with a walkthrough so the scope, access and phasing are right before anyone quotes a number. <strong>What kind of property?</strong>');
    opts([
      { label: 'Office or suite', fn: function () { answers.size = 'Office or suite'; qZone(); } },
      { label: 'Retail or restaurant', fn: function () { answers.size = 'Retail or restaurant'; qZone(); } },
      { label: 'Warehouse or industrial', fn: function () { answers.size = 'Warehouse or industrial'; qZone(); } },
      { label: 'HOA or multi-unit', fn: function () { answers.size = 'HOA or multi-unit'; qZone(); } }
    ]);
  }
  function qZone() {
    prog(.68); say('<strong>Where is the property?</strong> Region affects scheduling and sometimes product choice.');
    opts([
      { label: 'Denver metro', fn: function () { Q.z = 1; answers.region = 'Denver metro'; qWhen(); } },
      { label: 'North or Boulder County', fn: function () { Q.z = 1.02; answers.region = 'North / Boulder County'; qWhen(); } },
      { label: 'Eastern plains', fn: function () { Q.z = 1.04; answers.region = 'Eastern plains'; qWhen(); } },
      { label: 'Foothills or mountains', fn: function () { Q.z = 1.12; answers.region = 'Foothills or mountain town'; qWhen(); } }
    ]);
  }
  function qWhen() {
    prog(.82); say('<strong>How soon do you want it done?</strong>');
    opts([
      { label: 'This week if possible', fn: function () { answers.timeline = 'This week if possible'; result(); } },
      { label: 'Within a month', fn: function () { answers.timeline = 'Within a month'; result(); } },
      { label: '1 to 3 months', fn: function () { answers.timeline = '1 to 3 months'; result(); } },
      { label: 'Pricing and planning', fn: function () { answers.timeline = 'Pricing and planning'; result(); } }
    ]);
  }
  function ticket() {
    var n = Math.floor(Math.random() * 9000) + 1000;
    return 'PH-' + (new Date().getMonth() + 1) + (new Date().getDate()) + '-' + n;
  }
  function result() {
    prog(.9);
    var c = Q.c || 1, z = Q.z || 1, lo, hi;
    if (Q.t === 'ext') { lo = Q.sq * 1.55 * (Q.h || 1); hi = Q.sq * 4.10 * (Q.h || 1); }
    else if (Q.t === 'int') { lo = Q.sq * 1.50; hi = Q.sq * 3.50; }
    else if (Q.t === 'cab') { lo = 1800 + (Q.d - 20) * 62; hi = 3600 + (Q.d - 20) * 126; }
    else if (Q.t === 'deck') { lo = Q.sq * 2.10; hi = Q.sq * 4.60; }
    else { lo = 0; hi = 0; }
    Q.ticket = ticket();
    answers.ticket = Q.ticket;
    if (lo) {
      lo = Math.round(lo * c * z / 50) * 50; hi = Math.round(hi * c * z / 50) * 50;
      var lod = Math.round(lo * .75 / 50) * 50, hid = Math.round(hi * .75 / 50) * 50;
      answers.ballpark = '$' + lo.toLocaleString() + ' - $' + hi.toLocaleString();
      answers.ballpark_after_discount = '$' + lod.toLocaleString() + ' - $' + hid.toLocaleString();
      say('<div class="rg-ticket"><b>$' + lo.toLocaleString() + ' - $' + hi.toLocaleString() + '</b>' +
        '<span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span>' +
        '<span class="ln"><span>Scope</span><span>' + (answers.size || answers.scope || '') + '</span></span>' +
        '<span class="ln"><span>Region</span><span>' + (answers.region || '') + '</span></span>' +
        '<span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span>' +
        '<small>Published 2026 Front Range range for this scope. With 25% off labor on projects booked by October 31, 2026, most of this scope lands around <strong>$' + lod.toLocaleString() + ' - $' + hid.toLocaleString() + '</strong>. Paint and materials are not included in the discount.</small></div>');
    } else {
      say('<div class="rg-ticket"><b>Walkthrough first</b><span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span><span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span><small>Commercial scopes get measured on site so the bid is line-item accurate rather than a guess.</small></div>');
    }
    if (Q.visit) {
      say('Heads up: what you described is worth <strong>seeing in person</strong>. Peeling, water damage, failing finishes and commercial access all change the prep plan, and the visit is free either way.');
      answers.recommendation = 'Site visit recommended';
    } else {
      answers.recommendation = 'Photo quote suitable';
    }
    setTimeout(function () {
      say('One honest question before I take your details: if a written proposal comes back at that number, with the preparation spelled out and your dates confirmed, is that something you would be ready to move forward on?');
      opts([
        { label: 'Yes, if the details are right', hot: true, fn: function () { answers.intent = 'Ready to move forward if details fit'; collect('quote'); } },
        { label: 'Maybe, I want to compare', fn: function () { answers.intent = 'Comparing options'; say('Smart. When you compare, look at four lines: the preparation, the exact product and sheen, the number of coats, and the warranty. A lower number is almost always one of those four being smaller. Let me get you the written version so you have something real to compare.'); collect('quote'); } },
        { label: 'Just gathering information', fn: function () { answers.intent = 'Information gathering'; say('No pressure at all. I will still get you the written scope so you have a real benchmark whenever you are ready.'); collect('quote'); } }
      ]);
    }, 700);
  }

  function startCallback() {
    answers = {}; log.push('Visitor chose callback'); prog(.5);
    say('Easy. Pick a window and a painter will call you back at that time.');
    opts([
      { label: 'Next hour or two', fn: function () { answers.callback_window = 'Next hour or two'; collect('callback'); } },
      { label: 'This afternoon', fn: function () { answers.callback_window = 'This afternoon'; collect('callback'); } },
      { label: 'Tomorrow morning', fn: function () { answers.callback_window = 'Tomorrow morning'; collect('callback'); } },
      { label: 'Any time, just call', fn: function () { answers.callback_window = 'Any time'; collect('callback'); } }
    ]);
  }

  function collect(kind) {
    prog(.95);
    say(kind === 'callback' ? 'Who am I putting on the board?' : 'Last step. Where should the written quote go, and can you add photos?');
    var f = form(
      '<label for="rgNm">Your name</label><input id="rgNm" autocomplete="name">' +
      '<div class="duo"><div><label for="rgPh">Phone</label><input id="rgPh" type="tel" inputmode="tel" autocomplete="tel"></div>' +
      '<div><label for="rgZp">ZIP code</label><input id="rgZp" inputmode="numeric" autocomplete="postal-code" maxlength="10"></div></div>' +
      '<label for="rgEm">Email</label><input id="rgEm" type="email" autocomplete="email">' +
      (kind === 'callback' ? '<label for="rgWhat">What is the project?</label><input id="rgWhat" placeholder="Exterior repaint, cabinets, deck...">' :
        '<label for="rgPhotos">Photos (up to 4)</label><input id="rgPhotos" type="file" accept="image/*" multiple>') +
      '<label for="rgMs">Anything else?</label><textarea id="rgMs" rows="2"></textarea>' +
      '<button class="go" type="button" id="rgGo">' + (kind === 'callback' ? 'Put me on the callback list' : 'Send it to the hotline') + '</button>' +
      '<p class="rg-note">Used only to prepare your quote. Prefer to talk now? Call <a href="tel:' + TEL + '">' + DISP + '</a>.</p>');
    f.querySelector('#rgGo').addEventListener('click', function () { send(kind, f, this); });
  }

  function send(kind, f, btn) {
    var nm = f.querySelector('#rgNm').value.trim(), ph = f.querySelector('#rgPh').value.trim();
    if (!nm || ph.replace(/\D/g, '').length < 10) { say('I need a name and a 10-digit number so someone can actually reach you.'); return; }
    btn.disabled = true; btn.textContent = 'Sending...';
    var fd = new FormData();
    fd.append('source_site', 'painterhotline.com Ringo ' + (kind === 'callback' ? 'callback request' : 'rapid quote'));
    fd.append('user_name', nm); fd.append('user_phone', ph);
    fd.append('user_email', f.querySelector('#rgEm').value.trim());
    fd.append('user_zip', f.querySelector('#rgZp').value.trim());
    if (f.querySelector('#rgWhat')) fd.append('project_type', f.querySelector('#rgWhat').value.trim());
    fd.append('user_message', f.querySelector('#rgMs').value.trim());
    fd.append('request_type', kind === 'callback' ? 'Callback requested' : 'Rapid quote');
    Object.keys(answers).forEach(function (k) { fd.append(k, answers[k]); });
    fd.append('chat_transcript', log.join('\n') || 'Hotline intake only');
    var fin = f.querySelector('#rgPhotos');
    var pics = (window.PHL && PHL.photos) ? PHL.photos(fin) : Promise.resolve([]);
    pics.then(function (list) {
      list.forEach(function (p, i) { fd.append('photo_' + (i + 1), p); });
      return (window.PHL && PHL.send) ? PHL.send(fd, 'HOTLINE ' + (kind === 'callback' ? 'CALLBACK' : 'RAPID QUOTE') + ': Painter Hotline') : Promise.resolve('fail');
    }).then(function (state) {
      prog(1);
      if (state === 'ok') {
        f.remove();
        say('You are on the board, ' + nm.split(' ')[0] + '.' + (answers.ticket ? ' Ticket <strong>' + answers.ticket + '</strong>.' : '') + ' A painter will call to confirm the details. Need us sooner, call <a href="tel:' + TEL + '">' + DISP + '</a>.');
        opts([{ label: 'Thanks, Ringo', fn: closePanel }]);
      } else if (state === 'blocked' || state === 'fast') {
        btn.disabled = false; btn.textContent = 'Send it to the hotline';
        say('Give that one more second, then send it again.');
      } else {
        btn.disabled = false; btn.textContent = 'Try again';
        say('I could not confirm that went through. Please call <a href="tel:' + TEL + '">' + DISP + '</a> so it does not get lost.');
      }
    });
  }

  var hid = false;
  try { hid = sessionStorage.getItem('rgTipX') === '1'; } catch (e) { }
  if (!hid) {
    setTimeout(function () {
      if (panel && !panel.hidden) return;
      var tip = el('<div class="rg-tip" role="status">Hotline is open. I can price your project in about ninety seconds.<button type="button" aria-label="Dismiss">&times;</button></div>');
      launch.insertBefore(tip, launch.firstChild);
      tip.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') { tip.remove(); try { sessionStorage.setItem('rgTipX', '1'); } catch (x) { } }
        else openPanel();
      });
    }, 1400);
  }

  var s2 = document.createElement('style');
  s2.textContent = '.ringer b{white-space:nowrap}@media (max-width:760px){.ringer b{font-size:1.08rem!important;letter-spacing:-.02em}}@media (max-width:400px){.ringer b{font-size:1rem!important}}';
  document.head.appendChild(s2);
})();
