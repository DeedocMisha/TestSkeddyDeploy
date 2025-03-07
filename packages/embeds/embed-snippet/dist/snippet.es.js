const p = "http://localhost:3000/embed/embed.js";
function r(c = p) {
  (function(a, l, d) {
    let n = function(t, e) {
      t.q.push(e);
    }, o = a.document;
    a.Cal = a.Cal || function() {
      let t = a.Cal, e = arguments;
      if (t.loaded || (t.ns = {}, t.q = t.q || [], o.head.appendChild(o.createElement("script")).src = l, t.loaded = !0), e[0] === d) {
        const s = function() {
          n(s, arguments);
        }, i = e[1];
        s.q = s.q || [], typeof i == "string" ? (t.ns[i] = t.ns[i] || s, n(t.ns[i], e), n(t, ["initNamespace", i])) : n(t, e);
        return;
      }
      n(t, e);
    };
  })(
    window,
    //! Replace it with "https://cal.com/embed.js" or the URL where you have embed.js installed
    c,
    "init"
  );
  /*!  Copying ends here. */
  return window.Cal;
}
const u = r.toString();
export {
  u as EmbedSnippetString,
  r as default
};
