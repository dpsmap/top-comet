// ===== Top Comet Oversea Employment Agency — shared script =====

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
}

// Gallery lightbox
function openLb(item) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lbImg').src = item.querySelector('img').src;
  lb.classList.add('open');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.getElementById('lightbox')?.classList.remove('open');
});

// Contact form (static demo)
const cform = document.getElementById('cform');
if (cform) {
  cform.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formOk').classList.add('show');
    this.reset();
    setTimeout(() => document.getElementById('formOk').classList.remove('show'), 6000);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
