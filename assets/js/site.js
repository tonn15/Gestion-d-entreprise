document.addEventListener("DOMContentLoaded", () => {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const target = (link.getAttribute("href") || "").split("/").pop().toLowerCase();
    if (target === current) {
      link.classList.add("active");
    }
  });
});
