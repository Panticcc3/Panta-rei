// Selektuj dugme
const backToTopBtn = document.querySelector(".backtotop");

// Klik event - scroll na vrh
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // glatko skrolovanje
  });
});

// Opcionalno: prikaži dugme samo kad se skroluje dole
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// otvori modal kad klikneš na termin
document.querySelectorAll(".termini button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("rezervacijaModal").style.display = "block";
  });
});

// zatvori modal kad klikneš na X
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("rezervacijaModal").style.display = "none";
});

// zatvori modal kad klikneš van njega
window.addEventListener("click", (e) => {
  if (e.target.id === "rezervacijaModal") {
    document.getElementById("rezervacijaModal").style.display = "none";
  }
});
