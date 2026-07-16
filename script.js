const form = document.querySelector("#log-form");
const input = document.querySelector("#log-input");
const list = document.querySelector("#log-list");
const count = document.querySelector("#entry-count");
const status = document.querySelector("#form-status");

if (window.Lenis && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
  const animateScroll = (time) => {
    lenis.raf(time);
    window.requestAnimationFrame(animateScroll);
  };
  window.requestAnimationFrame(animateScroll);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  const item = document.createElement("li");
  const number = String(list.children.length + 1).padStart(2, "0");
  item.innerHTML = `<span class="entry-number">${number}</span><span></span><time datetime="2026-07-17">just now</time>`;
  item.children[1].textContent = value;
  list.append(item);
  count.textContent = `${list.children.length} notes`;
  status.textContent = "Note added to the log.";
  input.value = "";
  input.focus();
});
