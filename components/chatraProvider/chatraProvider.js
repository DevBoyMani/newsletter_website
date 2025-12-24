"use client";

import { useEffect } from "react";

export default function ChatraProvider() {
  useEffect(() => {
    if (window.Chatra) return;

    window.ChatraID = "5G8RuYD3adycyWNMg";

    const load = () => {
      if (window.Chatra || document.getElementById("chatra-script")) return;

      (function (d, w, c) {
        const s = d.createElement("script");
        s.id = "chatra-script";
        w[c] =
          w[c] ||
          function () {
            (w[c].q = w[c].q || []).push(arguments);
          };
        s.async = true;
        s.src = "https://call.chatra.io/chatra.js";
        d.head.appendChild(s);
      })(document, window, "Chatra");

      window.removeEventListener("scroll", load, { passive: true });
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("touchstart", load);
    };

    window.addEventListener("scroll", load, { passive: true, once: true });
    window.addEventListener("pointerdown", load, { once: true });
    window.addEventListener("touchstart", load, { passive: true, once: true });

    // safety fallback: still load after some time
    const t = setTimeout(load, 7000);
    return () => clearTimeout(t);
  }, []);

  return null;
}
