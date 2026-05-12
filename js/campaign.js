/** Preenche barra de progresso e lista de doadores a partir de `window.siteConfig`. */
(function () {
  function formatBRL(value) {
    var n = typeof value === "number" && !Number.isNaN(value) ? value : 0;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(n);
  }

  function clampNonNegative(n) {
    var x = Number(n);
    if (!Number.isFinite(x) || x < 0) return 0;
    return x;
  }

  function init() {
    var cfg = window.siteConfig || {};
    var meta = clampNonNegative(cfg.metaReais);
    var arrec = clampNonNegative(cfg.arrecadadoReais);
    var rawDonors = cfg.doadores;
    var donors = Array.isArray(rawDonors)
      ? rawDonors.map(function (s) {
          return String(s).trim();
        }).filter(Boolean)
      : [];

    var pct = meta > 0 ? (arrec / meta) * 100 : 0;
    var pctRounded = Math.round(pct);
    var barWidth = Math.min(100, pct);

    var elVals = document.getElementById("progresso-valores");
    var elFill = document.getElementById("progresso-preenchimento");
    var elBar = document.getElementById("progresso-barra");
    var elPct = document.getElementById("progresso-porcentagem");
    var ul = document.getElementById("lista-doadores");
    var empty = document.getElementById("doadores-vazio");

    if (elVals) {
      if (meta > 0) {
        elVals.textContent = formatBRL(arrec) + " de " + formatBRL(meta);
      } else {
        elVals.textContent =
          "Defina a meta em reais em js/config.js (campo metaReais) para ver a porcentagem.";
      }
    }

    if (elFill) {
      elFill.style.width = barWidth + "%";
    }
    if (elBar) {
      elBar.setAttribute("aria-valuenow", String(Math.min(100, Math.round(barWidth))));
      elBar.setAttribute("aria-valuetext", pctRounded + "% da meta");
    }
    if (elPct) {
      elPct.textContent = pctRounded + "%";
    }

    if (ul && empty) {
      ul.innerHTML = "";
      if (donors.length === 0) {
        ul.hidden = true;
        empty.hidden = false;
      } else {
        empty.hidden = true;
        ul.hidden = false;
        donors.forEach(function (name) {
          var li = document.createElement("li");
          li.textContent = name;
          ul.appendChild(li);
        });
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
