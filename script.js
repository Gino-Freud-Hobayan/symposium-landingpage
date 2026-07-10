// GOOGLE FORM LINK
// Both buttons on the page will use it automatically.
const GOOGLE_FORM_URL = "";

function wireRegisterButton(btn, note) {
  if (!btn) return;
  if (GOOGLE_FORM_URL) {
    btn.href = GOOGLE_FORM_URL;
    btn.target = "_blank";
    btn.rel = "noopener";
  } else {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (note) note.hidden = false;
    });
  }
}
wireRegisterButton(document.getElementById("heroRegisterBtn"), null);
wireRegisterButton(document.getElementById("registerBtn"), document.getElementById("note"));

// =========================================================
// REVEAL ON SCROLL
// =========================================================
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

// =========================================================
// COUNTDOWN TO EVENT
// =========================================================
const EVENT_DATE = new Date("2026-07-20T08:30:00+08:00");  // 20 July 2026 - 0830H

function updateCountdown() {
  const days = document.getElementById("cd-days");
  const hours = document.getElementById("cd-hours");
  const mins = document.getElementById("cd-mins");
  if (!days) return;

  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) {
    days.textContent = "0";
    hours.textContent = "0";
    mins.textContent = "0";
    return;
  }
  days.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  mins.textContent = Math.floor((diff / (1000 * 60)) % 60);
}
updateCountdown();
setInterval(updateCountdown, 60 * 1000);