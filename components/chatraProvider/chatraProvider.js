"use client";

import { useEffect } from "react";

export default function ChatraProvider() {
  useEffect(() => {
    if (window.Chatra) return; // prevent double load

    window.ChatraID = "5G8RuYD3adycyWNMg"; // OFFICE ID

    (function (d, w, c) {
      var s = d.createElement("script");
      w[c] =
        w[c] ||
        function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
      s.async = true;
      s.src = "https://call.chatra.io/chatra.js";
      d.head.appendChild(s);
    })(document, window, "Chatra");
  }, []);

  return null;
}
