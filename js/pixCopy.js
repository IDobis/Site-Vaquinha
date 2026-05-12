(function () {
  "use strict";

  var SUCCESS_MSG =
    "Chave copiada. No app: PIX → Chave PIX (ou “PIX e transferir”) → colar e confirmar.";
  var FAIL_MSG =
    "Não foi possível copiar (use HTTPS ou localhost). Use o QR Code ou digite a chave no app.";

  function getChave() {
    var cfg = window.siteConfig;
    if (!cfg) return "";
    return String(cfg.pixKey || cfg.pixCopiaColaPayload || "").trim();
  }

  function copyViaExecCommand(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.setAttribute("aria-hidden", "true");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  function showFeedback(el, msg) {
    el.classList.add("pix-feedback--visible");
    el.textContent = "";
    requestAnimationFrame(function () {
      el.textContent = msg;
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }

  function tryCopy(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      return navigator.clipboard.writeText(text).then(function () {
        return true;
      }).catch(function () {
        return copyViaExecCommand(text);
      });
    }
    return Promise.resolve(copyViaExecCommand(text));
  }

  function init() {
    var chave = getChave();
    if (!chave) {
      console.error(
        "Site-Vaquinha: defina window.siteConfig.pixKey (ou pixCopiaColaPayload) em js/config.js."
      );
      return;
    }

    var btn = document.getElementById("pix-copiar-btn");
    var feedback = document.getElementById("pix-feedback");
    if (!btn || !feedback) return;

    btn.addEventListener("click", function () {
      tryCopy(chave).then(function (ok) {
        showFeedback(feedback, ok ? SUCCESS_MSG : FAIL_MSG);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
