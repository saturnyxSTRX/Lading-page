
:root {
  --matte-black: #141414;
  --metallic-gold: #FFD700;
  --neon-green: #00FF76;
  --serif-title: 'Playfair Display', serif;
  --futuristic-body: 'Orbitron', 'Montserrat', Arial, sans-serif;
}

/* Reset and base styles */
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background: var(--matte-black);
  color: #e3e3e3;
  font-family: var(--futuristic-body);
  font-size: 1rem;
  min-height: 100vh;
}

/* Header */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: rgba(20,20,20,0.98);
  border-bottom: 1px solid var(--metallic-gold);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  z-index: 99;
  box-shadow: 0 2px 8px #000a;
}
.logo {
  font-size: 2rem;
  color: var(--metallic-gold);
  font-family: var(--serif-title);
  letter-spacing: 2px;
  transition: transform 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
.logo.animated-entry {
  animation: logoEntry 1.3s cubic-bezier(.68,-0.55,.27,1.55) 1;
}
@keyframes logoEntry {
  from { transform: scale(0.7) rotate(-15deg); opacity: 0; }
  to { transform: scale(1) rotate(0deg); opacity: 1; }
}
.nav a {
  color: var(--metallic-gold);
  text-decoration: none;
  margin: 0 0.8rem;
  font-size: 1rem;
  font-family: var(--futuristic-body);
  transition: color 0.2s;
}
.nav a:hover { color: var(--neon-green); }

/* Main sections */
main {
  margin-top: 4.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Welcome Section */
.welcome {
  background: linear-gradient(120deg, #141414 70%, #1e1e1e 100%);
  padding: 3rem 1rem 2rem 1rem;
  text-align: center;
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: 0 4px 20px #0007;
}
.title {
  font-family: var(--serif-title);
  font-size: 2.1rem;
  color: var(--metallic-gold);
  margin-bottom: 0.6rem;
  letter-spacing: 1px;
}
.title .highlight { color: var(--neon-green); }
.subtitle {
  font-family: var(--futuristic-body);
  font-size: 1.1rem;
  color: #d3d3d3;
  margin-bottom: 1.3rem;
}
.token { color: var(--metallic-gold); font-weight: bold; }
.iota { color: var(--neon-green); }
.buttons {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}
button {
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: 28px;
  font-size: 1rem;
  font-family: var(--futuristic-body);
  font-weight: bold;
  cursor: pointer;
  transition: background 0.22s, transform 0.15s;
  box-shadow: 0 2px 6px #0004;
}
button.primary {
  background: var(--metallic-gold);
  color: #222;
}
button.primary:hover, .play:hover {
  background: var(--neon-green);
  color: #141414;
  transform: translateY(-2px) scale(1.03);
}
button.secondary {
  background: var(--neon-green);
  color: #222;
}
button.secondary:hover {
  background: var(--metallic-gold);
  color: #141414;
  transform: translateY(-2px) scale(1.03);
}
.play {
  background: #232323;
  color: var(--metallic-gold);
  border: 1px solid var(--metallic-gold);
}
.play:hover { background: var(--neon-green); color: #141414; }

/* Games Section */
.games {
  padding: 2rem 1rem;
  background: #181818;
  border-radius: 1.2rem;
  box-shadow: 0 2px 10px #000a;
  text-align: center;
}
.games h2 { font-family: var(--serif-title); font-size: 1.7rem; color: var(--metallic-gold); margin-bottom: 1.2rem; }
.game-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.game-card {
  background: #222;
  border: 1px solid var(--metallic-gold);
  border-radius: 1rem;
  padding: 1.1rem 1rem;
  box-shadow: 0 4px 16px #0007;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.17s;
}
.game-card:hover {
  box-shadow: 0 8px 24px var(--neon-green);
  transform: scale(1.03);
}
.game-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.8rem;
  /* Placeholder for SVG background or inline SVGs */
}
.game-icon.roulette {
  background: url('icons/roulette.svg') no-repeat center / contain;
}
.game-icon.dice {
  background: url('icons/dice.svg') no-repeat center / contain;
}
.game-icon.blackjack {
  background: url('icons/blackjack.svg') no-repeat center / contain;
}
.game-icon.slots {
  background: url('icons/slots.svg') no-repeat center / contain;
}
.game-icon.crash {
  background: url('icons/crash.svg') no-repeat center / contain;
}
.game-card h3 { color: var(--metallic-gold); font-size: 1.2rem; font-family: var(--serif-title); }
.game-card p { color: #bbb; font-size: 0.97rem; margin: 0.5rem 0 1rem 0; }

/* Token $BB Section */
.token-section {
  background: linear-gradient(90deg, #222 80%, #00ff7622 100%);
  border-radius: 1.2rem;
  padding: 2rem 1rem;
  box-shadow: 0 2px 10px #0007;
  color: #e3e3e3;
}
.token-section h2 { color: var(--metallic-gold); font-family: var(--serif-title); font-size: 1.45rem; margin-bottom: .7rem; }
.token-section ul { margin: 1rem 0 1.4rem 1rem; }
.token-section li { margin-bottom: .4rem; color: var(--neon-green); }

/* How It Works Section */
.how-it-works {
  background: #181818;
  border-radius: 1.2rem;
  padding: 2rem 1rem;
  box-shadow: 0 2px 10px #000a;
  color: #e3e3e3;
}
.how-it-works h2 { color: var(--metallic-gold); font-family: var(--serif-title); font-size: 1.3rem; margin-bottom: .7rem; }
.how-it-works ol { margin-left: 1.1rem; margin-bottom: 1rem; }
.how-it-works li { margin-bottom: 0.5rem; color: var(--neon-green); font-weight: 500; }
.wallet-icons { display: flex; gap: 1.5rem; justify-content: center; }
.wallet-icon {
  width: 40px; height: 40px;
  background: #232323;
  border-radius: 50%;
  border: 2px solid var(--metallic-gold);
}
.wallet-icon.nightly { background-image: url('icons/nightly.svg'); background-size: 60% 60%; background-repeat: no-repeat; background-position: center; }
.wallet-icon.iota { background-image: url('icons/iota.svg'); background-size: 60% 60%; background-repeat: no-repeat; background-position: center; }

/* Staking Arena Section */
.staking-arena {
  background: linear-gradient(120deg, #141414 80%, #FFD70022 100%);
  border-radius: 1.2rem;
  padding: 2rem 1rem;
  box-shadow: 0 2px 10px #0007;
  color: #e3e3e3;
  text-align: center;
}
.staking-arena h2 { color: var(--metallic-gold); font-family: var(--serif-title); font-size: 1.3rem; margin-bottom: .7rem; }
.apy-box {
  background: #222;
  border: 1px solid var(--neon-green);
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1.3rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  color: var(--neon-green);
  margin-bottom: 1.2rem;
}
.apy-value { font-weight: bold; color: var(--metallic-gold); font-size: 1.2rem; }
.rewards-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0 1.5rem 0;
}
.rewards-table th, .rewards-table td {
  padding: 0.55rem 0.3rem;
  border-bottom: 1px solid #333;
  text-align: center;
}
.rewards-table th { color: var(--metallic-gold); font-family: var(--serif-title); }
.rewards-table td { color: var(--neon-green); }

/* Footer */
.footer {
  background: #111;
  color: #bbb;
  padding: 1.1rem 1rem 0.7rem 1rem;
  border-top: 1px solid var(--metallic-gold);
  text-align: center;
  font-size: .95rem;
  margin-top: 3rem;
}
.legal-links { margin-bottom: 0.5rem; }
.legal-links a {
  color: var(--neon-green);
  margin: 0 0.7rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.18s;
}
.legal-links a:hover { color: var(--metallic-gold); }
.branding { color: var(--metallic-gold); font-family: var(--serif-title); }

/* Responsive styles */
@media (min-width: 700px) {
  main { gap: 3rem; }
  .game-cards {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .game-card {
    min-width: 180px;
    max-width: 220px;
  }
  .welcome, .games, .token-section, .how-it-works, .staking-arena {
    padding: 3rem 2.5rem;
  }
}

/* Animations for buttons/cards */
button, .game-card {
  transition: box-shadow .22s, transform .18s;
}
button:hover, .game-card:hover {
  box-shadow: 0 4px 20px var(--neon-green), 0 0 6px var(--metallic-gold);
  transform: scale(1.03);
}
