// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll helper
function scrollSection(id) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  document.getElementById('mobileNav').classList.remove('open');
}

// Dark mode
function applyDark(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  ['moonIcon', 'moonIconM'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isDark ? 'none' : '';
  });
  ['sunIcon', 'sunIconM'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isDark ? '' : 'none';
  });
}

const savedDark = localStorage.getItem('darkMode') === 'true';
applyDark(savedDark);

function toggleDark() {
  const isDark = !document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  applyDark(isDark);
}

document.getElementById('darkToggle').addEventListener('click', toggleDark);
document.getElementById('darkToggleMobile').addEventListener('click', toggleDark);

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// Hide .mobile-controls on desktop
function checkMobile() {
  const mc = document.querySelector('.mobile-controls');
  if (window.innerWidth >= 641) mc.style.display = 'none';
  else mc.style.display = 'flex';
}
checkMobile();
window.addEventListener('resize', checkMobile);