# Monese-suisse.github.io
    <!>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MONESE A Banking Alternative</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background: url("background.jpg") no-repeat center top; /*IMG_8041.jpg*/
      background-size: cover;
      color: #333;
    }

    header {
      text-align: center;
      padding: 40px 20px;
      background: rgba(255,255,255,0.9); /* Fond blanc translucide */
      border-radius: 20px;
      margin: 20px;
    }

    .logo img {
      height: 80px;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 2rem;
      margin: 10px 0;
      color: #000;
    }

    .notification {
      background: white;
      padding: 20px;
      margin: 20px auto;
      max-width: 600px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 600px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      font-weight: 500;
      transition: 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    }

    .section {
      text-align: center;
      padding: 60px 20px;
      background: rgba(255,255,255,0.95);
      margin: 20px;
      border-radius: 20px;
    }

    .section h2 {
      color: #0055ff;
      margin-bottom: 15px;
    }

    .section p {
      max-width: 600px;
      margin: auto;
    }

    img.phone {
      max-width: 250px;
      margin: 30px auto;
      display: block;
    }
  </style>
</head>
<body>
  <!-- En-tête avec logo -->
  <header>
    <div class="logo">
      <img src="mon-logo.png" alt="IMG_8053.jpg">
    </div>
    <h1>Instant payment transfers</h1>
  </header>

  <!-- Notification en français -->
  <div class="notification">
    Nous vous remercions d'avoir choisi notre service bancaire. 
    Votre demande a bien été prise en compte. Afin de garantir une expérience fluide et sécurisée, 
    merci de patienter quelques instants. Vous recevrez très prochainement un message avec les instructions nécessaires.
  </div>

  <!-- Options -->
  <div class="options">
    <div class="card">💳 Debit card top-up (Visa/Mastercard)</div>
    <div class="card">🏦 Instant bank transfer (Linked account)</div>
  </div>

  <!-- Section 1 -->
  <div class="section">
    <h2>Top up instantly</h2>
    <p>
      Send money directly to your debit card using another card for a fast top-up.
    </p>
    <img src="https://dummyimage.com/250x500/000/fff&text=Smartphone" alt="Phone mockup" class="phone">
  </div>

  <!-- Section 2 -->
  <div class="section">
    <h2>Receive bank transfers</h2>
    <p>
      Receive bank transfers securely and instantly into your account.
    </p>
  </div>
</body>
</html>