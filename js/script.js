const countdown = () => {
  const targetDate = new Date("2025-07-22T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('launchMessage').style.display = 'block';
    document.getElementById('launchMessage').textContent = 'Sitemiz Açıldı!';
    return;
  }

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
};

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

window.onload = function() {
  countdown();
  setInterval(countdown, 1000);

  if (!document.querySelector('.logo').complete || document.querySelector('.logo').naturalHeight === 0) {
    document.querySelector('.logo').style.display = 'none';
    document.querySelector('.logo-fallback').style.display = 'block';
  }
};

function validateForm() {
  const email = document.querySelector('input[name="email"]').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Lütfen geçerli bir e-posta adresi girin!');
    return false;
  }
  return true;
}
