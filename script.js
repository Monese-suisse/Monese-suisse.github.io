document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
  e.preventDefault();
  // prototype only: mock submit (no sensitive data sent)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  msg.hidden = false;
  msg.textContent = `Merci ${name || ''} — votre demande (${email || '—'}) a été enregistrée en mode prototype.`;
  form.reset();
});
