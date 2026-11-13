/* ============================================================
   Research Genius Hub: the one file you edit to change prices,
   contact details, payment details and samples.
   ============================================================ */
window.RGH = {
  businessName: "Research Genius Hub",
  email: "researchgeniushub@gmail.com",
  formSubmit: true,               // lets students attach files and send orders to your email (free FormSubmit service); set false to use email buttons only

  // WhatsApp Business number, digits only with country code, no "+" or spaces. Leave "" to hide the WhatsApp button.
  whatsapp: "254106858200",
  whatsappDisplay: "+254 106 858 200",

  // ---- Pricing (GBP) ----
  wordsPerPage: 275,
  aiRemovalRate: 5.25,               // per page, flat, any deadline
  // Undergraduate and Masters prices per page
  tiers: [
    { id: "urgent",  label: "Under 24 hours",        rate: 11.25 },
    { id: "oneday",  label: "1 to 2 days",           rate: 9.75 },
    { id: "standard",label: "2 to 4 days",           rate: 9 },
    { id: "relaxed", label: "5 days or more",        rate: 7.5 }
  ],
  // PhD-level prices per page (same deadline bands)
  tiersPhd: [
    { id: "urgent",  label: "Under 24 hours",        rate: 15 },
    { id: "oneday",  label: "1 to 2 days",           rate: 12.75 },
    { id: "standard",label: "2 to 4 days",           rate: 11.25 },
    { id: "relaxed", label: "5 days or more",        rate: 9.75 }
  ],
  // Approximate display rates only (1 GBP = X). The live site refreshes these automatically when it can.
  // Rates below: ECB reference rates, 23 Oct 2026. Update them now and then.
  fx: { USD: 1.3368, CAD: 1.8709, AUD: 1.9037, EUR: 1.1943, CNY: 8.917 },
  fxDate: "23 Oct 2026",

  // ---- Payments ----
  // Only methods you fill in are shown to students. Leave a field "" to hide that method.
  paypalClientId: "",             // PayPal REST app Client ID (live), for the PayPal button
  paypalMe: "",                   // or just your PayPal.me name, e.g. "ResearchGeniusHub"

  // Manual payment methods: shown with their details and the order number as the reference.
  manualPay: [
    { label: "PayPal", lines: [["PayPal email", "Muigaimoses1@live.com"]],
      note: "Send the amount shown. PayPal converts it if your account uses another currency. Choose Goods and services if asked, and put your order number in the note." },
    { label: "Mobile money (Wise, Wave, World Remit)", lines: [["Mobile number", "+254712117244"]],
      note: "Send from Wise, Wave or World Remit to this mobile number, then tell us the transfer reference." }
  ],

  // Hosted payment links (card, Wise, Payoneer, Paystack, Flutterwave...).
  // In "url" you can use {amount} (e.g. 24.00), {order} (order number) and {currency}.
  payLinks: [
    { id: "card",     label: "Card",     url: "", note: "Pay by Visa or Mastercard on a secure payment page." },
    { id: "wise",     label: "Wise",     url: "", note: "Pay from your bank in GBP, USD, CAD, AUD or EUR with a low-fee transfer." },
    { id: "payoneer", label: "Payoneer", url: "", note: "Pay with Payoneer." },
    { id: "whatsapp", label: "Other method", url: "https://wa.me/254106858200", note: "Prefer another payment method? Message us on WhatsApp and we will arrange it." }
  ],

  // Bank transfer details, one entry per currency. Entries with no account number or IBAN are hidden.
  banks: [
    { currency: "GBP", accountName: "", bankName: "", sortCode: "", accountNumber: "", iban: "", swift: "" },
    { currency: "USD", accountName: "", bankName: "", routing: "", accountNumber: "", swift: "" },
    { currency: "CAD", accountName: "", bankName: "", routing: "", accountNumber: "", swift: "" },
    { currency: "AUD", accountName: "", bankName: "", bsb: "", accountNumber: "" },
    { currency: "EUR", accountName: "", bankName: "", iban: "", swift: "" }
  ],

  // ---- Chat assistant ----
  // "Chat with us" opens WhatsApp directly (site-chat.js). No third-party chat is used.
  chat: { replyWithin: "1 hour" },

  // ---- Online coaching ----
  // 1 hour = first rate. More than 1 hour = additional rate for EVERY hour (2 hours = 2 x 13).
  coaching: { first: 11.25, additional: 9.75, noticeHours: 3 },   // GBP per hour; minimum notice before the lesson

  // ---- Student reviews ----
  // Add REAL reviews only, with the student's permission. The Reviews section stays hidden while this list is empty.
  // Example: { name: "A. Student", service: "Dissertation support", text: "..." }
  testimonials: [],

  // ---- Part payment ----
  // Students can pay this % now; they preview the finished work online and download unlocks when the balance is confirmed.
  partPayPercent: 50, partPayMin: 20,   // set partPayPercent to 0 to switch part payment off

  // ---- Negotiable prices and referrals ----
  // Prices are negotiable on WhatsApp. Maximum discounts a student can enter on the order form (staff approve the final price).
  negotiable: true,
  discounts: { new: 30, referral: 20, loyalty: 15 },   // new client / referred by a student's Referral ID / returning client (percent)

  // ---- Services (used by the staff page to limit what each staff member sees) ----
  // Keep in sync with the Service list on the order form.
  services: ["Research support", "Essay guidance and model answer", "Report or business plan", "Assignment guide", "Editing and proofreading", "Dissertation or proposal support", "Data analysis guidance (Excel, SPSS, NVivo)", "PowerPoint presentation", "AI content removal", "Full sample access", "Online coaching", "Journal publication guidance"],

  // ---- Sample access ----
  samplePerPage: 1,               // minimum per page (shown as "from $1"). Each sample has its own rate, set in Admin > Samples

  // ---- Accounts and file uploads ----
  // Leave blank to run in demo mode (data saved in the visitor's own browser only).
  // To go live, create a free Supabase project and paste its URL and anon key (see README.md).
  supabase: { url: "https://vgnyudtimuelfxjbcjvk.supabase.co", anonKey: "sb_publishable_-BMlXThhQ8aA3VmQBAJ1gQ_6ZmfsTLF" },

  // ---- Samples ----
  // Students read the introduction free. The full sample costs samplePerPage x pages.
  // Public files go in /samples: use ONLY the introduction file there (see tools/make_intro.py).
  // Keep the full documents private and email them after payment is confirmed.
  samples: [
    { title: "Example sample (layout only)", example: true, subject: "Business Management", level: "Undergraduate, Year 3", pages: 6, style: "Harvard",
      introFile: "",
      introText: "Remote working has moved from a niche arrangement to a mainstream way of organising work, yet the evidence on its effect on employee productivity remains mixed. Early studies reported gains in output and satisfaction (Bloom et al., 2015), while later research highlights weaker collaboration and slower innovation when teams are rarely co-located. This essay evaluates both bodies of evidence, argues that outcomes depend more on how work is managed than on where it is done, and concludes with implications for managers." },
    { title: "Argumentative essay", subject: "Sociology", level: "Undergraduate, Year 2", pages: 6,  style: "Harvard", introFile: "", introText: "" },
    { title: "Literature review",   subject: "Nursing", level: "Masters", pages: 10, style: "APA 7", introFile: "", introText: "" }
  ]
};

/* ---------- Shared order status (same rules on the student and staff pages) ---------- */
(function () {
  var DAYS = function () { return (window.RGH && window.RGH.completeAfterDays) || 7; };
  var BADGE = { "On hold": "due", "Reviewing": "due", "In progress": "", "Complete": "paid" };
  function phase(o, evs) {
    var st = o.status, mine = (evs || []).filter(function (e) { return e.order_id === o.id; });
    var last = mine.length ? mine[mine.length - 1] : null;
    var when = new Date(last ? last.created_at : (o.created || o.created_at || Date.now()));
    if (st === "complete") return "Complete";
    if (st === "awaiting_quote" || st === "awaiting_payment") return "On hold";
    if (st === "payment_reported") return "Reviewing";
    if (st === "delivered") {
      if (last && last.phase === "hold") return "On hold";
      var idle = Date.now() - when.getTime() > DAYS() * 864e5;
      return idle && !(last && last.author_role === "student") ? "Complete" : "Reviewing";
    }
    if (last && last.phase === "hold") return "On hold";
    if (last && last.phase === "draft") return "Reviewing";
    return "In progress";
  }
  window.RGHStatus = { phase: phase, badge: function (p) { return BADGE[p] || ""; } };
})();

/* ---------- Shared document lists (student and staff pages) ---------- */
(function () {
  var OK = ["pdf","doc","docx","odt","rtf","txt","ppt","pptx","odp","xls","xlsx","csv","png","jpg","jpeg","gif","webp","heic","mp3","m4a","wav","aac","ogg","mp4","mov","webm","m4v"];
  var PREVIEWABLE = ["pdf","png","jpg","jpeg","gif","webp","txt","mp3","m4a","wav","mp4","mov","webm"];
  var MAX = 50 * 1048576;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var ext = function (n) { var m = /\.([a-z0-9]+)$/i.exec(n || ""); return m ? m[1].toLowerCase() : ""; };
  var safe = function (n) { return String(n).replace(/[^\w.\-]+/g, "_"); };
  function checkFile(f) {
    if (OK.indexOf(ext(f.name)) < 0) return f.name + " is not an accepted type. Use PDF, Word, PowerPoint, Excel, text, image, audio or video.";
    if (f.size > MAX) return f.name + " is " + Math.round(f.size / 1048576) + " MB. The limit is 50 MB per file: compress it or split it.";
    if (!f.size) return f.name + " is empty.";
    return "";
  }
  function parse(name) {
    var m = /^(\d{10,13})-(.*)$/.exec(name), ts = m ? Number(m[1]) : 0, rest = m ? m[2] : name, who = "";
    var preview = /^preview-/.test(rest); rest = rest.replace(/^preview-/, "");
    var w = /^(Staff|Admin)__(.*)$/.exec(rest); if (w) { who = w[1]; rest = w[2]; }
    return { ts: ts, title: rest, who: who, preview: preview };
  }
  // The note shown beside a team file: the event saved with the file, or the first team update after it
  function noteFor(ts, mine, path) {
    var byFile = path && mine.find(function (e) { return (e.files || []).some(function (x) { return x.path === path; }); });
    var ev = byFile || (ts ? mine.find(function (e) { return e.author_role === "staff" && new Date(e.created_at).getTime() >= ts - 60000; }) : null);
    if (!ev) return "";
    return (ev.author_role === "student" && ev.summary ? ev.summary + ". " : "") + (ev.message || "");
  }
  async function collect(sb, uid, id, evs, opts) {
    var base = uid + "/" + id + "/", mine = (evs || []).filter(function (e) { return e.order_id === id; });
    var list = async function (b, p) { var r = await sb.storage.from(b).list(p); return (r.data || []).filter(function (f) { return f.id; }); };
    var out = { student: [], team: [] };
    var sFiles = (await list("requirements", base)).map(function (f) { return { path: base + f.name, name: f.name }; })
      .concat((await list("requirements", base + "events/")).map(function (f) { return { path: base + "events/" + f.name, name: f.name }; }));
    sFiles.forEach(function (f) { var p = parse(f.name); out.student.push({ bucket: "requirements", path: f.path, title: p.title, ts: p.ts, note: noteFor(p.ts, mine, f.path) }); });
    if (opts && opts.items) {
      opts.items.forEach(function (it) { out.team.push({ bucket: it.bucket, path: it.path, title: it.title, ts: it.ts, who: it.who || "Team", note: noteFor(it.ts, mine, it.path), fn: true }); });
    } else {
      var dl = await list("deliveries", base), pv = await list("previews", base);
      var prev = pv.map(function (f) { return { name: f.name, p: parse(f.name) }; });
      dl.forEach(function (f) {
        var p = parse(f.name), pm = prev.find(function (x) { return x.p.title === p.title; });
        out.team.push({ bucket: "deliveries", path: base + f.name, title: p.title, ts: p.ts, who: p.who || "Team", note: noteFor(p.ts, mine, base + f.name), previewPath: pm ? base + pm.name : "" });
      });
    }
    out.student.sort(function (a, b) { return a.ts - b.ts; });
    out.team.sort(function (a, b) { return a.ts - b.ts; });
    return out;
  }
  var css = ".rgh-docs h5{margin:14px 0 6px;font-size:1rem}.rgh-docs table{width:100%;border-collapse:collapse;font-size:.9rem}.rgh-docs th,.rgh-docs td{border-bottom:1px solid #d9dee8;padding:7px 6px;text-align:left;vertical-align:top}.rgh-docs th{font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:#5b6577}.rgh-docs .code{font-family:monospace;font-size:.82rem;white-space:nowrap}.rgh-docs .lnk{background:none;border:0;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font:inherit}.rgh-docs .muted{color:#5b6577}.rgh-docs .note{white-space:pre-wrap}.rgh-docs .wrap{overflow-x:auto}";
  function style() { if (document.getElementById("rgh-docs-css")) return; var s = document.createElement("style"); s.id = "rgh-docs-css"; s.textContent = css; document.head.appendChild(s); }
  var dt = function (ts) { return ts ? new Date(ts).toLocaleString() : ""; };
  // opts.items + opts.view: student page (files come from the Edge Function). Without them: staff page (direct storage).
  async function render(box, sb, uid, o, evs, opts) {
    style(); opts = opts || {};
    box.innerHTML = "<p class=\"small muted\">Loading documents...</p>";
    var data;
    try { data = await collect(sb, uid, o.id, evs, opts); } catch (e) { box.innerHTML = "<p class=\"err\">Could not load documents. Refresh the page.</p>"; return; }
    var rows = [];
    var urlFor = async function (item, mode) {
      if (item.fn && opts.view) return opts.view(item, mode);
      var r = await sb.storage.from(item.bucket).createSignedUrl(item.path, 600, mode === "download" ? { download: item.title } : undefined);
      return r.data ? r.data.signedUrl : "";
    };
    var btn = function (item, mode, label) { rows.push({ item: item, mode: mode }); return "<button class=\"lnk\" data-i=\"" + (rows.length - 1) + "\">" + esc(label) + "</button>"; };
    var canOpen = function (item) { return !item.fn || opts.full || ext(item.title) === "pdf"; };
    var attach = function (item) {
      var out = btn(item, "download", item.title);
      if (PREVIEWABLE.indexOf(ext(item.title)) >= 0 && canOpen(item)) out += " &middot; " + btn(item, "view", "Preview");
      else if (!canOpen(item)) out += " <span class=\"muted\">(pay the balance to open)</span>";
      return out + (canOpen(item) ? " &middot; " + btn(item, "download", "Download") : "");
    };
    var code = function (n) { return esc((o.order_no || o.id) + "-T" + String(n).padStart(2, "0")); };
    var s1 = data.student.map(function (d) {
      return "<tr><td>" + esc(d.title) + "</td><td>" + esc(dt(d.ts)) + "</td><td class=\"note\">" + esc(d.note || "-") + "</td><td>" + attach({ bucket: d.bucket, path: d.path, title: d.title }) + "</td></tr>";
    }).join("");
    var s2 = data.team.map(function (d, i) {
      var item = { bucket: d.bucket, path: d.path, title: d.title, fn: !!d.fn };
      var prev = "";
      if (d.previewPath) prev = " &middot; " + btn({ bucket: "previews", path: d.previewPath, title: d.title }, "view", "Preview");
      return "<tr><td>" + esc(d.title) + "</td><td>" + esc(dt(d.ts)) + "</td><td>" + esc(d.who) + "</td><td class=\"note\">" + esc(d.note || "-") + "</td><td>" + attach(item) + prev + "</td><td class=\"code\">" + code(i + 1) + "</td></tr>";
    }).join("");
    box.innerHTML = "<div class=\"rgh-docs\">" +
      "<h5>Student uploads</h5><div class=\"wrap\">" + (s1 ? "<table><thead><tr><th>Document title</th><th>Date</th><th>Instructions</th><th>Attachment (preview)</th></tr></thead><tbody>" + s1 + "</tbody></table>" : "<p class=\"muted small\">No student uploads yet.</p>") + "</div>" +
      "<h5>Staff and admin uploads</h5><div class=\"wrap\">" + (s2 ? "<table><thead><tr><th>Document title</th><th>Date</th><th>Uploaded by</th><th>Instructions / comments</th><th>Attachment (preview)</th><th>Code</th></tr></thead><tbody>" + s2 + "</tbody></table>" : "<p class=\"muted small\">No documents from the team yet.</p>") + "</div>" +
      (opts.items && !opts.full ? "<p class=\"small muted\">Your work is shown in the share you have paid for. Pay the balance to remove the watermark and download.</p>" : "") + "</div>";
    box.querySelectorAll("[data-i]").forEach(function (b) {
      b.addEventListener("click", async function () {
        var r = rows[+b.dataset.i], mode = r.mode, w = mode === "view" ? window.open("", "_blank") : null, url = "";
        try { url = await urlFor(r.item, mode); }
        catch (x) { if (w) w.close(); alert(x.message || "That file could not be opened."); return; }
        if (!url) { if (w) w.close(); alert("That file could not be opened. Refresh the page and try again."); return; }
        if (mode === "download") { var a = document.createElement("a"); a.href = url; a.download = r.item.title; document.body.appendChild(a); a.click(); a.remove(); }
        else if (w) w.location = url; else window.open(url, "_blank");
      });
    });
  }
  window.RGHDocs = { check: checkFile, render: render, ext: ext, safe: safe };
})();
