/* Lead source tagging. Invisible to visitors.
   Remembers how a visitor first arrived (landing page, referrer, UTM tags, Google Ads click id)
   and adds those details to every quote request emailed through FormSubmit, so each lead
   shows which page and campaign produced it. Nothing is sent anywhere else. */
(function () {
  "use strict";
  var KEY = "ph_src_v1", src = null;
  function read() { try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  try {
    var q = new URLSearchParams(location.search), now = {}, tagged = false;
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "msclkid", "fbclid"].forEach(function (k) {
      var v = q.get(k); if (v) { now[k] = v.slice(0, 200); tagged = true; }
    });
    var ref = document.referrer && document.referrer.indexOf(location.host) === -1 ? document.referrer.slice(0, 300) : "";
    src = read();
    /* A new campaign click replaces the stored first touch; plain internal browsing never does. */
    if (!src || tagged) {
      now.landing_page = (location.pathname + location.search).slice(0, 300);
      now.first_referrer = ref || (src && src.first_referrer) || "(direct)";
      now.first_seen = new Date().toISOString();
      src = now; save(src);
    }
  } catch (e) {}

  var orig = window.fetch;
  if (!orig) return;
  window.fetch = function (url, opts) {
    try {
      var u = typeof url === "string" ? url : (url && url.url) || "";
      if (/formsubmit\.co\/ajax\//.test(u) && opts && opts.body && typeof FormData !== "undefined" && opts.body instanceof FormData) {
        var fd = opts.body, s = src || {};
        fd.append("lead_page", location.pathname);
        fd.append("lead_landing_page", s.landing_page || location.pathname);
        fd.append("lead_referrer", s.first_referrer || "(unknown)");
        ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "msclkid", "fbclid"].forEach(function (k) {
          if (s[k]) fd.append("lead_" + k, s[k]);
        });
        if (s.first_seen) fd.append("lead_first_seen", s.first_seen);
        fd.append("lead_device", window.innerWidth < 760 ? "phone" : "desktop");
      }
    } catch (e) {}
    return orig.apply(this, arguments);
  };
})();
