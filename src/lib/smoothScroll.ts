// Componente utilitário para rolagem suave customizada para âncoras internas
import { MouseEvent } from "react";

export function handleSmoothScroll(
  e: MouseEvent<HTMLAnchorElement>,
  offset = 40
) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#") && href.length > 1) {
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      e.preventDefault();
      const y =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}
