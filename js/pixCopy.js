(function () {
  "use strict";

  var cfg = window.siteConfig;
  if (!cfg || !cfg.pixCopiaColaPayload) {
    console.error("Site-Vaquinha: defina window.siteConfig.pixCopiaColaPayload em js/config.js.");
    return;
  }

  function init() {
    var btn = document.getElementById("pix-copiar-btn");
    var feedback = document.getElementById("pix-feedback");
    if (!btn || !feedback) return;

    btn.addEventListener("click", function () {
      var payload = cfg.pixCopiaColaPayload;
      var ok = function () {
        feedback.textContent = "Código copiado. No app: PIX → Chave PIX → colar e confirmar.";
      };
      var fail = function () {
        feedback.textContent =
          "Não foi possível copiar (use HTTPS ou localhost). Copie manualmente pelo QR ou pelo banco.";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(payload).then(ok).catch(fail);
      } else {
        fail();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
