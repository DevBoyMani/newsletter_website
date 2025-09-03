const btn = document.querySelector(".coolBeans");

btn.addEventListener("mouseenter", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = x / rect.width;

  // Change origin based on mouse position
  btn.style.setProperty("--origin-x", percent * 100 + "%");
});

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = x / rect.width;

  btn.style.setProperty("--origin-x", percent * 100 + "%");
});
