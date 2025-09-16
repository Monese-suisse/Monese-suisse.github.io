# Monese-suisse.github.io.index.html,styles.css,script.js
product showcase and prototype + customer information repository + contact/application form to open an account (prototype not operational).
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Banque Nouvelle — Sans contact mobile</title>
  <meta name="description" content="Prototype — Banque axée sur les alternatives au paiement mobile : cartes physiques, tokens, QR fixes et sécurité renforcée." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <h1 class="brand">Banque<span class="accent"> Nouvelle</span></h1>
      <nav class="nav">
        <a href="#services">Services</a>
        <a href="#security">Sécurité</a>
        <a href="#about">À propos</a>
        <a href="#contact" class="cta">Ouvrir un compte</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h2>Une banque moderne — sans dépendre du mobile</h2>
          <p>
            Nous proposons des solutions bancaires sécurisées sans nécessiter l'utilisation d'un smartphone :
            cartes à puce, tokens matériels et paiements web tokenisés.
          </p>
          <p class="lead-cta"><a href="#contact" class="btn-primary">Demander l'accès au prototype</a></p>
        </div>
        <div class="hero-card">
          <div class="card-mock">
            <div class="chip"></div>
            <div class="card-number">•••• •••• •••• 1234</div>
            <div class="card-name">M. CLIENT</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section services">
      <div class="container">
        <h3>Nos services</h3>
        <div class="grid">
          <article>
            <h4>Comptes courants</h4>
            <p>Comptes personnels et professionnels avec options d'accès sans application mobile.</p>
          </article>
          <article>
            <h4>Cartes physiques</h4>
            <p>Cartes EMV & contactless (physique) pour paiements en magasin — pas d'application requise.</p>
          </article>
          <article>
            <h4>Tokens matériels</h4>
            <p>Authentification forte via clé OTP physique ou smartcard.</p>
          </article>
          <article>
            <h4>Paiement web sécurisé</h4>
            <p>Paiements en ligne via tokenisation & 3-D Secure sans passer par smartphone.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="security" class="section security">
      <div class="container">
        <h3>Sécurité & conformité (prototype)</h3>
        <ul>
          <li>Chiffrement TLS obligatoire</li>
          <li>Authentification multifacteur (MFA) privilégiant les tokens matériels</li>
          <li>Vérification d'identité (KYC) pour ouverture de compte — démonstration seulement</li>
          <li>Audits et PCI-DSS requis en production</li>
        </ul>
      </div>
    </section>

    <section id="about" class="section about">
      <div class="container">
        <h3>À propos</h3>
        <p>Banque Nouvelle est un prototype visant à explorer des services bancaires accessibles aux personnes qui ne souhaitent pas utiliser un smartphone pour leurs opérations bancaires.</p>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="container">
        <h3>Demande d'ouverture (prototype)</h3>
        <form id="contactForm" class="form">
          <label>Nom complet
            <input type="text" name="name" required />
          </label>
          <label>Email
            <input type="email" name="email" required />
          </label>
          <label>Type de service souhaité
            <select name="service">
              <option>Compte personnel</option>
              <option>Compte professionnel</option>
              <option>Token matériel</option>
            </select>
          </label>
          <p class="note">Remarque : formulaire prototype — ne collecte pas de données sensibles.</p>
          <button type="submit" class="btn-primary">Envoyer la demande</button>
        </form>
        <div id="formMessage" aria-live="polite" class="form-message" hidden></div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>Prototype — Banque Nouvelle © <span id="year"></span> — Ce site n'est pas une institution bancaire.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

:root{
  --bg:#f7f8fb;
  --card:#ffffff;
  --accent:#0b62d6;
  --muted:#6b7280;
  --container:1100px;
}
*{box-sizing:border-box}
body{
  font-family: system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;
  margin:0;background:var(--bg);color:#111;
  -webkit-font-smoothing:antialiased;
}
.container{max-width:var(--container);margin:0 auto;padding:0 20px}

.site-header{background:#fff;border-bottom:1px solid #e6e9ef;position:sticky;top:0;z-index:30}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:14px 0}
.brand{font-weight:700;margin:0;font-size:1.15rem}
.accent{color:var(--accent)}
.nav a{margin-left:18px;text-decoration:none;color:var(--muted)}
.nav .cta{padding:8px 12px;border-radius:6px;background:var(--accent);color:#fff;text-decoration:none;margin-left:22px}

.hero{padding:56px 0}
.hero-inner{display:flex;gap:36px;align-items:center}
.hero-text{flex:1}
.hero h2{font-size:1.7rem;margin:0 0 12px}
.hero p{color:var(--muted);line-height:1.5}
.lead-cta .btn-primary{display:inline-block;margin-top:12px}

.hero-card{width:320px;flex:0 0 320px}
.card-mock{background:linear-gradient(180deg,#0b62d6,#0b78e0);color:#fff;border-radius:12px;padding:20px;height:190px;display:flex;flex-direction:column;justify-content:space-between}
.chip{width:42px;height:28px;background:rgba(255,255,255,0.25);border-radius:4px}
.card-number{font-weight:600;letter-spacing:2px}
.card-name{font-size:.85rem;text-transform:uppercase;opacity:.9}

/* sections */
.section{padding:36px 0;background:transparent}
.services .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:16px}
.services article{background:var(--card);padding:18px;border-radius:8px;border:1px solid #eef2f6}
.security ul{margin:10px 0 0;padding-left:20px;color:var(--muted)}
.about p{color:var(--muted)}

/* form */
.form{display:grid;gap:10px;max-width:520px}
.form label{display:block;font-size:.95rem;color:var(--muted)}
.form input,.form select{width:100%;padding:10px;border-radius:6px;border:1px solid #d7dde6;margin-top:6px}
.note{font-size:.85rem;color:#9aa3b2;margin:6px 0}
.btn-primary{background:var(--accent);color:#fff;padding:10px 14px;border:none;border-radius:8px;cursor:pointer}

/* footer */
.site-footer{padding:18px 0;border-top:1px solid #e6e9ef;background:#fff;margin-top:28px;text-align:center;color:var(--muted);font-size:.9rem}

/* responsive */
@media (max-width:880px){
  .hero-inner{flex-direction:column}
  .hero-card{width:100%;order:2}
  .nav a{display:none}
  .header-inner{gap:12px}

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

