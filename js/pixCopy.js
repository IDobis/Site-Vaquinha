(function () {
  "use strict";

  var cfg = window.siteConfig;
  if (!cfg || !cfg.pixCopiaColaPayload || !cfg.pixKey) {
    console.error(
      "Site-Vaquinha: defina window.siteConfig.pixKey e pixCopiaColaPayload em js/config.js."
    );
    return;
  }

  /**
   * @param {string} payload
   * @returns {string}
   */
  function buildPixDeeplink(payload) {
    return "pix://pay?brcode=" + encodeURIComponent(payload);
  }

  function init() {
    var link = document.getElementById("pix-link");
    if (link) {
      link.setAttribute("href", buildPixDeeplink(cfg.pixCopiaColaPayload));
      if (cfg.pixKey) {
        link.textContent = "Doar com PIX — " + cfg.pixKey;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
