<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Axyomis-X | Ultra-Fluid Science Learning Hub</title>
<meta name="description" content="Axyomis-X - Advanced Intelligence & Premium Science Learning Platform.">
<meta name="author" content="Sahil Kumar Karna">
<meta name="theme-color" content="#E5D3B3">

<!-- Premium E-Book Typography -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Rajdhani:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Spline 3D Viewer Script -->
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.1.2/build/spline-viewer.js"></script>

<!-- MathJax Setup for Byju's-Style Equations -->
<script>
  window.MathJax = {
    tex: { inlineMath: [['$', '$'],['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
    startup: { typeset: false }
  };
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<style>
/* ═══════════════════════════════════════════════════
   AXYOMIS-X — 120FPS GPU-ACCELERATED E-BOOK AESTHETIC
   ═══════════════════════════════════════════════════ */
:root {
  --gold: #E5D3B3;
  --gold-dim: rgba(229, 211, 179, 0.15);
  --platinum: #f4f4f5; 
  --silver: #a1a1aa;
  --deep: #09090b;
  --surface: #18181b;
  --glass-bg: rgba(24, 24, 27, 0.6);
  --glass-border: rgba(229, 211, 179, 0.1);
  --text: #F8F9FA; 
  --muted: #71717a;
  --r: 20px; 
  --glow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.02);
  --tr: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; font-size:16px; -webkit-overflow-scrolling: touch; }
body { 
  background: #09090b; 
  color:var(--text); 
  font-family:'Inter', sans-serif; 
  overflow-x:hidden; 
  cursor:default; 
  line-height: 1.7;
}

/* HARDWARE ACCELERATED CUSTOM CURSOR */
.cursor-dot { width:6px; height:6px; background:var(--gold); position:fixed; top:0; left:0; border-radius:50%; pointer-events:none; z-index:99999; box-shadow:0 0 10px var(--gold); will-change:transform; transform: translate3d(0,0,0); }
.cursor-ring { width:35px; height:35px; border:1px solid var(--gold-dim); position:fixed; top:0; left:0; border-radius:50%; pointer-events:none; z-index:99998; background:rgba(229, 211, 179, 0.02); will-change:transform, width, height; transform: translate3d(0,0,0); transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s; }
a, button, input, .rich-card, .feed-item, .subject-btn { cursor:pointer; }

/* CANVAS BACKGROUNDS (GPU BOUND) */
#starfield { position:fixed; inset:0; z-index:-2; pointer-events:none; will-change: transform; transform: translate3d(0,0,0); }
.ambient-glow { position: fixed; top: 50%; left: 50%; width: 60vw; height: 60vw; background: radial-gradient(circle, rgba(229, 211, 179, 0.05) 0%, transparent 70%); border-radius: 50%; pointer-events: none; z-index: -1; transform: translate3d(-50%, -50%, 0); will-change: transform; }

/* LOADING SCREEN */
#loader { position:fixed; inset:0; background:var(--deep); z-index:100000; display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s; will-change: opacity, transform; transform: translate3d(0,0,0); }
#loader.loader-exit { opacity: 0; transform: scale(1.05) translate3d(0,0,0); pointer-events: none; }
#sparkles-canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; opacity: 0.8; mix-blend-mode: screen; will-change: transform; transform: translate3d(0,0,0); }
.loader-content-wrapper { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; }
.loader-brand { font-family:'Playfair Display', serif; font-weight:600; font-size:clamp(3rem, 6vw, 5rem); color: var(--gold); letter-spacing: 2px; margin-bottom: 20px; text-shadow: 0 0 30px rgba(229, 211, 179, 0.3); }
.progress-bar-container { width:300px; height:2px; background:rgba(255,255,255,0.05); overflow:hidden; position:relative; transform: translate3d(0,0,0); }
.progress-bar { width:0%; height:100%; background:var(--gold); transition:width 0.1s linear; will-change: width; box-shadow:0 0 10px var(--gold); }

/* NAVIGATION */
nav { position:fixed; top:0; width:100%; z-index:1000; padding:1.2rem 3rem; display:flex; align-items:center; justify-content:space-between; background:rgba(9, 9, 11, 0.7); -webkit-backdrop-filter:blur(20px); backdrop-filter:blur(20px); border-bottom:1px solid var(--glass-border); transform: translate3d(0,0,0); will-change: transform; }
.brand { display:flex; align-items:center; gap:15px; text-decoration:none; }
.brand-name { font-family:'Playfair Display', serif; font-size:1.5rem; font-weight:600; color:var(--text); letter-spacing:1px; }
.nav-links { display:flex; gap:2rem; }
.nav-links a { color:var(--silver); font-size:0.85rem; font-weight:500; text-transform:uppercase; letter-spacing:1.5px; text-decoration:none; transition:var(--tr); }
.nav-links a:hover { color:var(--gold); }

/* LAYOUT STRUCTURING (E-Book Style) */
#app { padding-top:120px; max-width: 1500px; margin: 0 auto; }
.section-title { text-align:center; font-family:'Playfair Display', serif; font-size:3.5rem; font-weight:600; color:var(--text); margin:6rem 0 1rem; }
.section-title span { color:var(--gold); font-style: italic; }
.section-desc { text-align:center; color:var(--silver); font-size:1.15rem; max-width:800px; margin:0 auto 4rem; font-weight:300; line-height:1.8; }
.grid-wrapper { padding:0 2rem; margin-bottom: 8rem; }

/* HERO SECTION */
.scientiax-hero { display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 40px; min-height: 80vh; padding: 2rem; position: relative; }
.hero-text { flex: 1.2; z-index: 10; }
.hero-title { font-family: 'Playfair Display', serif; font-size: 4.5rem; line-height: 1.1; margin-bottom: 1.5rem; }
.hero-desc { color: var(--silver); font-size: 1.2rem; font-weight: 300; margin-bottom: 3rem; max-width: 600px; line-height: 1.8; text-align: justify; }
.hero-3d-wrapper { flex: 1; height: 600px; position: relative; display: flex; justify-content: center; align-items: center; perspective: 1200px; }
.glass-card { position: relative; width: 100%; max-width: 500px; height: 100%; max-height: 600px; background: var(--glass-bg); border-radius: var(--r); border: 1px solid var(--glass-border); box-shadow: var(--glow); -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); transform-style: preserve-3d; will-change: transform; transform: translate3d(0,0,0); }
.viewer-wrapper { position: absolute; inset: 0; border-radius: var(--r); overflow: hidden; transform: translateZ(40px); }
spline-viewer { width: 100%; height: 100%; display: block; }

/* SEARCH TOOLBAR (Premium) */
.chat-toolbar { display: flex; align-items: center; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--glass-border); border-radius: 50px; padding: 8px 8px 8px 25px; transition: var(--tr); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.chat-toolbar:focus-within { border-color: var(--gold); background: rgba(255, 255, 255, 0.06); }
.chat-toolbar input { flex: 1; background: transparent; border: none; color: var(--text); font-size: 1.1rem; outline: none; font-family: 'Inter', sans-serif; }
.chat-toolbar input::placeholder { color: var(--muted); }
.rainbow-btn { background: var(--gold); color: var(--deep); border: none; padding: 14px 30px; border-radius: 50px; font-weight: 600; font-family: 'Inter', sans-serif; letter-spacing: 0.5px; transition: var(--tr); will-change: transform; transform: translate3d(0,0,0); }
.rainbow-btn:hover { transform: translate3d(0, -2px, 0); box-shadow: 0 10px 20px rgba(229, 211, 179, 0.2); }

/* GRID CARDS (GPU Accelerated) */
.subject-menu { display:flex; gap:12px; justify-content:center; margin-bottom:3rem; flex-wrap:wrap; }
.subject-btn { background:transparent; border:1px solid var(--glass-border); color:var(--silver); padding:10px 24px; border-radius:50px; font-weight:500; transition:var(--tr); font-size:1rem; letter-spacing: 0.5px; text-transform: uppercase; font-family: 'Rajdhani', sans-serif;}
.subject-btn.active, .subject-btn:hover { background:var(--gold); color:var(--deep); border-color:var(--gold); box-shadow: 0 0 15px rgba(229, 211, 179, 0.3); }
.rich-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:25px; max-height: 800px; overflow-y: auto; padding: 10px; }

/* CARD OPTIMIZATIONS FOR 120FPS */
.rich-card { background: var(--surface); border: 1px solid var(--glass-border); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; min-height: 180px; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s; will-change: transform, box-shadow; transform: translate3d(0,0,0); padding: 1.5rem; justify-content: center;}
.rich-card:hover { transform: translate3d(0, -8px, 0); box-shadow: 0 20px 40px rgba(0,0,0,0.8); border-color: var(--gold-dim); background: rgba(229, 211, 179, 0.05); }
.rc-title { font-family:'Playfair Display', serif; font-size:1.4rem; font-weight:600; color:var(--gold); margin-bottom:8px; line-height: 1.2; }
.rc-desc { font-family:'Inter', sans-serif; font-size:0.9rem; color:var(--silver); line-height:1.6; }

/* 3D DEEP DIVE SPLIT SECTIONS */
.split-layout { display:grid; grid-template-columns: 1fr; gap:4rem; padding: 3rem; background: var(--surface); border: 1px solid var(--glass-border); border-radius: var(--r); }
@media(min-width: 1200px) { .split-layout { grid-template-columns: 1.2fr 1.5fr; } }
.split-content { display:flex; flex-direction:column; max-height:800px; overflow-y:auto; padding-right:20px; }
.split-menu { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:2rem; position:sticky; top:0; background:var(--surface); padding-bottom:15px; z-index:10; border-bottom: 1px solid var(--glass-border); }
.split-iframe-container { position:relative; width:100%; height:800px; border-radius:16px; background:var(--deep); overflow:hidden; transform: translate3d(0,0,0); will-change: transform; border: 1px solid var(--glass-border); box-shadow: inset 0 0 50px rgba(0,0,0,1); }
.split-iframe-container iframe { width:100%; height:100%; border:none; }

/* DATA ANALYTICS GRID */
.analytics-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(350px, 1fr)); gap:25px; }
.stat-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 2rem; transition: var(--tr); display: flex; flex-direction: column; transform: translate3d(0,0,0); will-change: transform; }
.stat-card:hover { border-color:var(--gold); transform: translate3d(0, -5px, 0); box-shadow: 0 15px 30px rgba(0,0,0,0.6); }
.stat-card h4 { font-family:'Playfair Display', serif; color:var(--gold); margin-bottom:20px; font-size:1.4rem; font-weight:600; line-height: 1.3;}
.stat-vs-container { display:flex; justify-content:space-between; align-items:stretch; gap:15px; margin-bottom:20px; }
.stat-side { flex:1; background:rgba(0,0,0,0.4); border-radius:12px; padding:15px; text-align:center; border:1px solid rgba(255,255,255,0.02); display:flex; flex-direction:column; justify-content:center;}
.stat-side span { font-family:'JetBrains Mono', monospace; font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:5px; }
.stat-side strong { font-family:'Inter', sans-serif; font-size:1.6rem; font-weight:600; color:var(--text); }
.stat-side.global strong { color:var(--platinum); }
.stat-side.nepal strong { color:#ff6b6b; }
.stat-context { font-family:'Inter', sans-serif; font-size:0.95rem; font-weight:300; color:var(--silver); font-style:italic; line-height:1.6; border-top:1px dashed rgba(255,255,255,0.1); padding-top:15px; text-align:justify; margin-top: auto;}

/* BYJU'S STYLE ADVANCED READER MODAL */
#reader-modal { position:fixed; inset:0; z-index:9000; display:flex; align-items:center; justify-content:center; background:rgba(9, 9, 11, 0.95); -webkit-backdrop-filter:blur(15px); backdrop-filter:blur(15px); opacity: 0; pointer-events: none; transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1); will-change: opacity; }
#reader-modal.open { opacity: 1; pointer-events: auto; }
.reader-content { background: var(--surface); border:1px solid var(--glass-border); border-radius:var(--r); width:100%; max-width:1200px; height: 90vh; overflow-y:auto; padding:0; position:relative; box-shadow: 0 40px 100px rgba(0,0,0,0.9); transform: translate3d(0, 30px, 0) scale(0.98); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); will-change: transform; scroll-behavior: smooth; }
#reader-modal.open .reader-content { transform: translate3d(0,0,0) scale(1); }
.reader-header-img { width: 100%; height: 350px; object-fit: cover; border-bottom: 1px solid var(--glass-border); }
.reader-body { padding: 4rem; display: flex; flex-direction: column; gap: 2rem; }
.reader-body h2 { font-family:'Playfair Display', serif; font-size:3.5rem; line-height: 1.1; color:var(--gold); margin-bottom: 1rem; text-transform: capitalize; }
.reader-body .article-text { font-size:1.15rem; font-weight:300; line-height:2.0; color:var(--silver); text-align: justify; }

/* INJECTED E-BOOK CONTENT STYLES */
.rich-data-injection { color: var(--platinum); font-family: 'Inter', sans-serif; font-size: 1.15rem; line-height: 1.9; }
.rich-data-injection h3 { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: var(--gold); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(229, 211, 179, 0.2); padding-bottom: 10px; }
.rich-data-injection h4 { font-family: 'Rajdhani', sans-serif; font-size: 1.8rem; color: #fff; margin: 2rem 0 1rem; text-transform: uppercase; letter-spacing: 1px; }
.rich-data-injection h5 { font-family: 'Inter', sans-serif; font-size: 1.3rem; color: var(--gold); margin: 1.5rem 0 0.5rem; }
.rich-data-injection p { margin-bottom: 1.5rem; text-align: justify; }
.rich-data-injection ul, .rich-data-injection ol { margin: 0 0 1.5rem 2rem; }
.rich-data-injection li { margin-bottom: 0.8rem; }
.rich-data-injection strong { color: var(--text); font-weight: 500; }
.math-box { margin: 2rem 0; padding: 2rem; background: rgba(0,0,0,0.5); border-left: 4px solid var(--gold); border-radius: 8px; overflow-x: auto; font-size: 1.3rem; color: var(--gold); text-align: center; box-shadow: inset 0 0 20px rgba(0,0,0,1); }
.data-table { width: 100%; border-collapse: collapse; margin: 2rem 0; background: rgba(255,255,255,0.02); border-radius: 8px; overflow: hidden; }
.data-table th, .data-table td { padding: 15px; text-align: left; border-bottom: 1px solid var(--glass-border); }
.data-table th { background: rgba(229, 211, 179, 0.1); color: var(--gold); font-family: 'Rajdhani', sans-serif; text-transform: uppercase; font-size: 1.1rem; }
.nepal-context { background: rgba(229,211,179,0.03); padding: 2.5rem; border-left: 4px solid #ff6b6b; border-radius: 0 12px 12px 0; margin: 3rem 0; position: relative; }
.nepal-context::before { content: '\f024'; font-family: 'Font Awesome 6 Free'; font-weight: 900; position: absolute; top: 20px; right: 20px; font-size: 3rem; color: rgba(255, 107, 107, 0.1); pointer-events: none; }
.nepal-context h4 { color: #ff6b6b; margin-top: 0; }

.close-btn { position:absolute; top:25px; right:30px; background:rgba(0,0,0,0.8); border:1px solid var(--glass-border); color:var(--platinum); width: 50px; height: 50px; border-radius: 50%; font-size:1.5rem; transition:var(--tr); z-index: 10; cursor: pointer; display: flex; justify-content: center; align-items: center; }
.close-btn:hover { background: var(--gold); color: var(--deep); transform: translate3d(0,0,0) rotate(90deg); border-color: var(--gold); }

/* Scrollbars */
::-webkit-scrollbar { width:8px; }
::-webkit-scrollbar-track { background: var(--deep); }
::-webkit-scrollbar-thumb { background: rgba(229, 211, 179, 0.3); border-radius:10px;}
::-webkit-scrollbar-thumb:hover { background:var(--gold); }

@media(max-width: 1100px) {
  .scientiax-hero { flex-direction: column; text-align: center; }
  .hero-desc { margin: 0 auto 3rem; }
  nav { padding: 1rem; flex-direction: column; gap: 15px; }
  #app { padding-top: 180px; }
}
</style>
</head>
<body>

<!-- HARDWARE ACCELERATED CURSOR -->
<div class="cursor-dot" id="cursor-dot"></div>
<div class="cursor-ring" id="cursor-ring"></div>

<!-- LOADER -->
<div id="loader">
  <canvas id="sparkles-canvas"></canvas>
  <div class="loader-content-wrapper">
    <div class="loader-brand">AXYOMIS-X</div>
    <div class="progress-bar-container">
      <div class="progress-bar" id="loader-bar"></div>
    </div>
  </div>
</div>

<!-- GPU CANVAS BACKGROUNDS -->
<canvas id="starfield"></canvas>
<div class="ambient-glow" id="glow"></div>

<!-- NAVIGATION -->
<nav>
  <a href="#" class="brand">
    <div class="brand-name">Axyomis-X</div>
  </a>
  <div class="nav-links">
    <a href="#study-hub">Curriculum</a>
    <a href="#cosmos-section">Astrophysics</a>
    <a href="#anatomy-section">Anatomy</a>
    <a href="#hospital-section">Clinical Hub</a>
    <a href="#analytics-section">Nepal Analytics</a>
  </div>
</nav>

<div id="app">

  <!-- E-BOOK HERO SECTION -->
  <section class="scientiax-hero">
    <div class="hero-text">
      <h1 class="hero-title">The Universal<br><span style="color:var(--gold); font-style:italic;">Learning Matrix.</span></h1>
      <p class="hero-desc">
        A completely fluid, 120fps optimized spatial learning environment powering the democratization of scientific education. From absolute fundamental mechanics to highly advanced neurosurgery simulations, designed explicitly to bridge the global knowledge gap.
      </p>
      <div class="chat-toolbar">
        <span style="margin-right:15px; margin-left:10px; font-size:1.2rem; color:var(--silver);"><i class="fas fa-search"></i></span>
        <input type="text" id="hero-search-input" placeholder="Query quantum mechanics, cardiology, algorithms..." onkeydown="if(event.key==='Enter') openReader(this.value, '', null)">
        <button class="rainbow-btn" onclick="openReader(document.getElementById('hero-search-input').value, '', null)">Synthesize</button>
      </div>
    </div>
    <div class="hero-3d-wrapper" id="card">
        <div class="glass-card">
            <div class="viewer-wrapper">
                <spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"></spline-viewer>
            </div>
        </div>
    </div>
  </section>

  <!-- UNIFIED CURRICULUM DATABASE -->
  <section id="study-hub" class="grid-wrapper">
    <h2 class="section-title">Academic <span>Curriculum Core</span></h2>
    <p class="section-desc">A continuous, unbroken flow of global knowledge spanning fundamental arithmetic up to advanced university-level theoretical sciences. Designed without restrictive grade boundaries.</p>
    <div class="subject-menu">
      <button class="subject-btn active" onclick="switchSubject('Physics', this)">Physics</button>
      <button class="subject-btn" onclick="switchSubject('Chemistry', this)">Chemistry</button>
      <button class="subject-btn" onclick="switchSubject('Biology', this)">Biology</button>
      <button class="subject-btn" onclick="switchSubject('Mathematics', this)">Mathematics</button>
      <button class="subject-btn" onclick="switchSubject('IT', this)">Information Tech</button>
    </div>
    <div class="rich-grid" id="study-grid"></div>
  </section>

  <!-- 3D COSMOS -->
  <section id="cosmos-section" class="grid-wrapper">
    <h2 class="section-title">Cosmos & <span>Astrophysics</span></h2>
    <p class="section-desc">Immersive interactive models detailing orbital mechanics, terminal stellar evolution, and deep-space phenomena supported by rigorous mathematical proofs.</p>
    <div class="split-layout">
      <div class="split-content">
        <div class="split-menu" id="cosmos-menu"></div>
        <div id="cosmos-text-container" class="deep-dive-text"></div>
      </div>
      <div class="split-iframe-container">
        <iframe id="cosmos-iframe" title="Astrophysics Model" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <!-- 3D ANATOMY -->
  <section id="anatomy-section" class="grid-wrapper">
    <h2 class="section-title">Spatial <span>Anatomy</span></h2>
    <p class="section-desc">High-fidelity 3D medical visualization. Manipulate exact clinical structures including neuroanatomy, cardiovascular networks, and internal organ topography.</p>
    <div class="split-layout">
      <div class="split-content">
        <div class="split-menu" id="anatomy-menu"></div>
        <div id="ana-text-container" class="deep-dive-text"></div>
      </div>
      <div class="split-iframe-container">
        <iframe id="ana-iframe" title="Anatomy System" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <!-- 3D HOSPITAL & NEPAL CONTEXT -->
  <section id="hospital-section" class="grid-wrapper">
    <h2 class="section-title">Clinical <span>Infrastructure</span></h2>
    <p class="section-desc">Exploration of highly specialized medical hardware and sterile environments. Features direct infrastructural comparative analysis highlighting systemic disparities within Nepal.</p>
    <div class="split-layout">
      <div class="split-content">
        <div class="split-menu" id="hospital-menu"></div>
        <div id="hosp-text-container" class="deep-dive-text"></div>
      </div>
      <div class="split-iframe-container">
        <iframe id="hosp-iframe" title="Hospital Setup" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <!-- DATA ANALYTICS GRID -->
  <section id="analytics-section" class="grid-wrapper">
    <h2 class="section-title">Infrastructure <span>Analytics</span></h2>
    <p class="section-desc">Quantitative baseline metrics juxtaposing Nepal's existing medical capabilities against global WHO optimal standards. Visualizing the urgent necessity for decentralized clinical resources.</p>
    <div class="analytics-grid" id="analytics-grid"></div>
  </section>

</div>

<!-- BYJU'S STYLE ADVANCED READER MODAL -->
<div id="reader-modal">
  <div class="reader-content">
    <button class="close-btn" onclick="closeReader()"><i class="fas fa-times"></i></button>
    <img id="rm-img" class="reader-header-img" src="" alt="Subject Visual" style="display:none;">
    <div class="reader-body">
      <h2 id="rm-title">Initializing...</h2>
      <div class="article-text" id="rm-extract"></div>
    </div>
  </div>
</div>

<footer style="text-align:center; padding:4rem; border-top:1px solid rgba(255,255,255,0.05); background:#050505; color:var(--muted); font-family:'Rajdhani', sans-serif; letter-spacing: 2px; text-transform:uppercase;">
  &copy; 2026 Axyomis-X. Engineered by Sahil Kumar Karna. Dedicated to the democratization of science.
</footer>

<script>
/* ════════════════════════════════════════════════════
   MASSIVE DATA INJECTION (CURRICULUM, COSMOS, ANATOMY, HOSPITAL, ANALYTICS)
   ════════════════════════════════════════════════════ */

// 1. UNIFIED CURRICULUM (Grade 1 - 12 Continuous Flow)
const dataSets = {
  Physics:[
    "Measurement and Units", "Scalars and Vectors", "Kinematics (1D and 2D Motion)", "Newton's Laws of Motion", 
    "Friction and Drag Dynamics", "Work, Energy, and Power", "Conservation of Energy", "Center of Mass", 
    "Rotational Kinematics", "Torque and Angular Momentum", "Gravitation and Kepler's Laws", "Fluid Statics and Pressure",
    "Fluid Dynamics (Bernoulli's Equation)", "Simple Harmonic Motion", "Wave Mechanics and Sound", "Doppler Effect",
    "Temperature and Heat Transfer", "Laws of Thermodynamics", "Kinetic Theory of Gases", "Entropy",
    "Electric Charge and Coulomb's Law", "Electric Fields and Gauss's Law", "Electric Potential and Capacitance", 
    "Direct Current (DC) Circuits", "Magnetic Fields and Forces", "Electromagnetic Induction (Faraday's Law)", 
    "Alternating Current (AC) Circuits", "Maxwell's Equations", "Electromagnetic Spectrum", "Geometric Optics (Reflection/Refraction)",
    "Physical Optics (Interference/Diffraction)", "Special Theory of Relativity", "Photoelectric Effect", 
    "Bohr Model of the Atom", "Quantum Mechanics (Schrödinger Equation)", "Nuclear Physics (Radioactivity)", 
    "Particle Physics (Standard Model)", "Astrophysics and Cosmology"
  ],
  Chemistry:[
    "States of Matter", "Atomic Structure", "Isotopes and Mass Spectrometry", "Periodic Trends", 
    "Ionic Bonding and Lattice Energy", "Covalent Bonding and Lewis Structures", "VSEPR Theory and Molecular Geometry",
    "Intermolecular Forces", "Ideal Gases and Kinetic Molecular Theory", "Solutions and Colligative Properties",
    "Stoichiometry and Mole Concept", "Chemical Kinetics (Rate Laws)", "Collision Theory and Activation Energy",
    "Chemical Equilibrium (Le Chatelier's Principle)", "Acids and Bases (pH and pOH)", "Buffer Solutions",
    "Titrations and Indicators", "Thermodynamics (Enthalpy, Entropy, Gibbs Free Energy)", "Electrochemistry (Galvanic Cells)",
    "Electrolysis", "Nuclear Chemistry", "Introduction to Organic Chemistry", "Alkanes, Alkenes, and Alkynes",
    "Aromatic Compounds (Benzene)", "Alcohols, Ethers, and Epoxides", "Aldehydes and Ketones", "Carboxylic Acids and Derivatives",
    "Amines and Amides", "Stereochemistry and Chirality", "Reaction Mechanisms (SN1, SN2, E1, E2)",
    "Polymers and Polymerization", "Biochemistry: Amino Acids and Proteins", "Carbohydrates and Lipids", "Enzyme Kinetics"
  ],
  Biology:[
    "Characteristics of Life", "Scientific Method", "Biological Molecules (Macromolecules)", "Cell Theory and Cell Types",
    "Cellular Organelles and Function", "Cell Membrane Structure and Transport", "Osmosis and Diffusion",
    "Cell Cycle (Mitosis and Meiosis)", "Cellular Respiration (Glycolysis, Krebs Cycle, ETC)", "Photosynthesis (Light/Dark Reactions)",
    "Mendelian Genetics", "Non-Mendelian Inheritance", "DNA Structure and Replication", "Transcription and Translation",
    "Gene Expression and Regulation (Operons)", "Biotechnology (CRISPR, PCR, Gel Electrophoresis)", "Evolution by Natural Selection",
    "Population Genetics (Hardy-Weinberg)", "Speciation and Phylogeny", "Taxonomy and Classification",
    "Microbiology (Bacteria and Viruses)", "Fungi and Protists", "Plant Anatomy and Physiology", "Plant Reproduction",
    "Animal Tissues", "Human Digestive System", "Human Respiratory System", "Human Circulatory System (Heart and Blood)",
    "Human Immune System (Innate and Adaptive)", "Human Excretory System (Kidneys)", "Human Nervous System (Action Potentials)",
    "Human Endocrine System (Hormones)", "Human Reproductive System", "Skeletal and Muscular Systems",
    "Ecology (Populations and Communities)", "Ecosystems and Energy Flow", "Biogeochemical Cycles", "Conservation Biology"
  ],
  Mathematics:[
    "Number Systems (Real, Rational, Irrational)", "Fractions, Decimals, and Percentages", "Ratios and Proportions",
    "Linear Equations and Inequalities", "Systems of Linear Equations", "Quadratic Equations (Factoring and Formula)",
    "Polynomial Functions", "Rational and Radical Expressions", "Exponential and Logarithmic Functions",
    "Euclidean Geometry (Lines, Angles, Polygons)", "Circles and Theorems", "Area, Volume, and Surface Area",
    "Trigonometric Ratios (SOH CAH TOA)", "Unit Circle and Radians", "Trigonometric Identities and Equations",
    "Law of Sines and Cosines", "Vectors and Matrices", "Matrix Determinants and Inverses", "Sequences and Series",
    "Limits and Continuity", "Derivatives (Power, Product, Quotient, Chain Rules)", "Applications of Derivatives (Optimization)",
    "Indefinite and Definite Integrals", "Fundamental Theorem of Calculus", "Techniques of Integration (Substitution, Parts)",
    "Differential Equations", "Set Theory and Logic", "Permutations and Combinations", "Probability Theory",
    "Descriptive Statistics (Mean, Median, Variance)", "Inferential Statistics and Distributions (Normal, Binomial)"
  ],
  IT:[
    "Computer Hardware Architecture", "Operating Systems (Functions and Types)", "Binary, Octal, and Hexadecimal Number Systems",
    "Logic Gates and Boolean Algebra", "Introduction to Programming", "Variables, Data Types, and Operators",
    "Control Structures (Loops and Conditionals)", "Functions and Recursion", "Object-Oriented Programming (Classes, Objects)",
    "Data Structures (Arrays, Linked Lists, Stacks, Queues)", "Trees and Graphs", "Algorithmic Complexity (Big O Notation)",
    "Sorting Algorithms (Merge, Quick, Bubble)", "Searching Algorithms (Binary, Linear)", "Database Management Systems (DBMS)",
    "SQL (Queries, Joins, Normalization)", "Computer Networks (OSI Model, TCP/IP)", "IP Addressing and Subnetting",
    "Web Development (HTML, CSS, JavaScript)", "Client-Server Architecture", "Cybersecurity (Encryption, Malware, Phishing)",
    "Cryptography (RSA, AES)", "Cloud Computing (IaaS, PaaS, SaaS)", "Artificial Intelligence (Concepts and History)",
    "Machine Learning Algorithms", "Neural Networks and Deep Learning", "Data Science and Big Data Analytics"
  ]
};

// 2. 3D COSMOS DATA (E-Book Style Detailed HTML Strings)
const COSMOS_DATA = {
  solar: { 
    title: "Solar System Dynamics", 
    sfId: "600b747a80934238b7183b6c70b991e4", 
    desc: `
      <div class="rich-data-injection">
        <h3>Heliocentric Orbital Mechanics</h3>
        <p>The Solar System operates on precise orbital mechanics defined by gravitational forces stretching across an immense heliosphere. The central gravitational anchor, the Sun, dictates the kinetic pathways of eight major planets, dozens of dwarf planets, and countless millions of asteroids and cometary bodies.</p>
        
        <h4>Kepler's Laws of Planetary Motion</h4>
        <p>Before Newton formulated the theory of universal gravitation, Johannes Kepler empirically derived three laws describing the motion of planets:</p>
        <ul>
          <li><strong>Law of Ellipses:</strong> The orbit of every planet is an ellipse with the Sun at one of the two foci. This explains varying orbital velocities.</li>
          <li><strong>Law of Equal Areas:</strong> A line joining a planet and the Sun sweeps out equal areas during equal intervals of time. Planets move fastest at perihelion (closest to Sun) and slowest at aphelion.</li>
          <li><strong>Law of Harmonies:</strong> The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit.</li>
        </ul>
        
        <div class="math-box">$$ P^2 = \frac{4\pi^2}{G(M + m)} a^3 $$</div>
        <p style="text-align: center; color: var(--silver); font-size: 0.95rem;">(Newton's formulation of Kepler's Third Law, where P is period, G is gravitational constant, M is solar mass, and a is semi-major axis)</p>
        
        <h4>Architectural Zones</h4>
        <table class="data-table">
          <tr><th>Zone</th><th>Composition</th><th>Primary Bodies</th></tr>
          <tr><td>Inner Solar System</td><td>Dense, rocky terrestrial formations, rich in heavy metals.</td><td>Mercury, Venus, Earth, Mars</td></tr>
          <tr><td>Asteroid Belt</td><td>Rocky debris and failed planetary matter residing between Mars and Jupiter.</td><td>Ceres, Vesta, Pallas</td></tr>
          <tr><td>Outer Solar System</td><td>Massive gas and ice giants with immense gravitational fields and ring systems.</td><td>Jupiter, Saturn, Uranus, Neptune</td></tr>
          <tr><td>Trans-Neptunian Region</td><td>Frozen volatiles (water, ammonia, methane) scattered in the Kuiper Belt and Oort Cloud.</td><td>Pluto, Eris, Cometary Nuclei</td></tr>
        </table>
      </div>
    `
  },
  sun: { 
    title: "Supernova Explosion", 
    sfId: "b4a7ae96dbd944708e4023645620014d", 
    desc: `
      <div class="rich-data-injection">
        <h3>Terminal Stellar Nucleosynthesis</h3>
        <p>A supernova is the incredibly luminous, catastrophic explosion of a supermassive star at the end of its stellar lifecycle. This hyper-energetic event perfectly demonstrates the extreme astrophysical forces required to fuse heavier elements beyond iron.</p>
        
        <h4>Core Collapse Mechanism (Type II Supernova)</h4>
        <p>Massive stars (greater than 8 solar masses) sustain themselves by burning increasingly heavy elements in their core through nuclear fusion. The sequence progresses from hydrogen to helium, carbon, neon, oxygen, and finally silicon.</p>
        <ul>
          <li><strong>The Iron Trap:</strong> Once the core fuses into iron-56, fusion no longer releases energy; it <em>consumes</em> energy. The core loses outward radiation pressure.</li>
          <li><strong>Gravitational Free-Fall:</strong> Without radiation pressure, the immense mass of the outer layers crushes the iron core. Core temperatures reach 100 billion Kelvin.</li>
          <li><strong>Neutron Degeneracy:</strong> Protons and electrons are crushed together to form neutrons and neutrinos. The core halts its collapse violently when it hits quantum neutron degeneracy pressure.</li>
          <li><strong>The Rebound:</strong> The infalling outer layers hit the incompressible neutron core and bounce outward at a fraction of the speed of light, generating a shockwave that obliterates the star.</li>
        </ul>

        <h4>Energy Release Profile</h4>
        <div class="math-box">$$ E_{bind} = \frac{3GM^2}{5R} $$</div>
        <p style="text-align:center;">The immense gravitational binding energy released during core collapse is roughly $10^{46}$ Joules, primarily carried away by an intense neutrino burst.</p>
      </div>
    `
  },
  blackhole: {
    title: "Black Hole Geometry",
    sfId: "c26eff50075d460ab994a9847d92584c",
    desc: `
      <div class="rich-data-injection">
        <h3>Gravitational Singularities</h3>
        <p>A black hole is a region of spacetime exhibiting gravitational acceleration so completely overwhelming that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can violently deform spacetime to form a black hole.</p>
        
        <h4>Anatomy of a Black Hole</h4>
        <ul>
          <li><strong>The Singularity:</strong> At the very center of a black hole lies a one-dimensional point which contains a huge mass in an infinitely small space, where density and gravity become infinite and the laws of physics as we know them completely break down.</li>
          <li><strong>Event Horizon:</strong> The boundary defining the region of space around a black hole from which nothing can escape. It is the "point of no return."</li>
          <li><strong>Photon Sphere:</strong> A spherical boundary of zero thickness in which photons moving on tangents to that sphere would be trapped in a circular orbit about the black hole.</li>
          <li><strong>Accretion Disk:</strong> A highly compressed, superheated disk of stellar matter, gas, and dust orbiting the black hole at relativistic speeds, emitting massive amounts of X-ray radiation due to extreme friction.</li>
        </ul>

        <h4>The Schwarzschild Radius</h4>
        <p>The radius of the event horizon for a non-rotating black hole is calculated using the Schwarzschild equation:</p>
        <div class="math-box">$$ r_s = \frac{2GM}{c^2} $$</div>
        <p>If Earth were theoretically compressed to form a black hole, its Schwarzschild radius would be approximately 9 millimeters.</p>
      </div>
    `
  }
};

// 3. 3D ANATOMY DATA (E-Book Style Detailed HTML Strings)
const ANATOMY_DATA = {
  heart: { 
    title: "Anatomical Heart", 
    sfId: "e48637d3399a4e5184bdf169929dc36e", 
    desc: `
      <div class="rich-data-injection">
        <h3>Cardiovascular Myocardium and Electrophysiology</h3>
        <p>The human heart is a highly specialized, tirelessly working muscular organ situated within the mediastinum. It functions as a dual-pump system, driving deep oxygenation through the pulmonary circuit and high-pressure systemic distribution across the entire anatomy.</p>
        
        <h4>Internal Architecture: Chambers and Valves</h4>
        <table class="data-table">
          <tr><th>Structure</th><th>Function & Dynamics</th></tr>
          <tr><td><strong>Right Atrium</strong></td><td>Receives deoxygenated blood from the superior/inferior vena cava. Pumps through the Tricuspid valve.</td></tr>
          <tr><td><strong>Right Ventricle</strong></td><td>Pumps deoxygenated blood through the pulmonary semilunar valve into the pulmonary trunk towards the lungs.</td></tr>
          <tr><td><strong>Left Atrium</strong></td><td>Receives highly oxygenated blood from pulmonary veins. Pumps through the Bicuspid (Mitral) valve.</td></tr>
          <tr><td><strong>Left Ventricle</strong></td><td>Possesses the thickest myocardium. Pumps blood at immense pressure through the aortic valve to the entire body.</td></tr>
        </table>

        <h4>The Cardiac Conduction System</h4>
        <p>The heart does not rely on the central nervous system to initiate a beat; it is autorhythmic. Action potentials propagate through a distinct electrical pathway:</p>
        <ul>
          <li><strong>Sinoatrial (SA) Node:</strong> The natural pacemaker located in the right atrium wall, firing at 60-100 bpm.</li>
          <li><strong>Atrioventricular (AV) Node:</strong> Introduces a critical 0.1-second delay, allowing the atria to fully contract and empty blood into ventricles before ventricular systole.</li>
          <li><strong>Bundle of His & Purkinje Fibers:</strong> Rapidly conduct the electrical signal down the interventricular septum and up the ventricular walls, causing a massive, synchronized upward contraction.</li>
        </ul>

        <h4>Hemodynamic Calculation</h4>
        <p>Overall heart efficiency is measured via Cardiac Output:</p>
        <div class="math-box">$$ CO = HR \times SV $$</div>
        <p>Where Cardiac Output (CO) equals Heart Rate (HR, beats per minute) multiplied by Stroke Volume (SV, volume of blood pumped per beat). A healthy resting CO is approximately 5 Liters per minute.</p>
      </div>
    `
  },
  brain: {
    title: "Neuroanatomy & Cerebrum",
    sfId: "95b4e19bb32c4edeb46fcb3db048037c",
    desc: `
      <div class="rich-data-injection">
        <h3>Advanced Neurological Architecture</h3>
        <p>The human brain is the most complex biological structure known to exist, comprised of roughly 86 billion massive neural networks operating in parallel. Enclosed within the cranial vault and suspended in cerebrospinal fluid, it dictates all sensory processing, motor execution, and higher-order cognitive logic.</p>

        <h4>Major Anatomical Divisions</h4>
        <ul>
          <li><strong>The Cerebrum:</strong> Divided into two massive hemispheres connected by the corpus callosum. The heavily folded outer layer (Cerebral Cortex) increases surface area for billions of neuronal somas (gray matter). It is segmented into distinct lobes: Frontal (logic/motor), Parietal (somatosensory), Temporal (auditory/memory), and Occipital (visual).</li>
          <li><strong>The Cerebellum:</strong> "The little brain" located posteriorly. Contains roughly 50% of the brain's total neurons. Essential for precise motor timing, balance, and proprioceptive coordination.</li>
          <li><strong>The Diencephalon:</strong> Houses the Thalamus (the master sensory relay station) and the Hypothalamus (regulator of autonomic functions, temperature, hunger, and the endocrine system via the pituitary gland).</li>
          <li><strong>The Brainstem:</strong> Consisting of the midbrain, pons, and medulla oblongata. It handles absolute critical life functions: respiratory drive, cardiac rhythm, and involuntary reflexes.</li>
        </ul>

        <h4>The Limbic System & Memory</h4>
        <p>Deep within the cerebrum lies the limbic system. The <strong>Hippocampus</strong> rigorously encodes short-term stimuli into long-term declarative memory, while the adjacent <strong>Amygdala</strong> rapidly processes emotional responses, particularly fear conditioning and threat detection.</p>
      </div>
    `
  },
  internal: {
    title: "Visceral Splanchnology",
    sfId: "8a43f3a308994699a4000b17004d5220",
    desc: `
      <div class="rich-data-injection">
        <h3>Systemic Interconnectivity of Internal Organs</h3>
        <p>The immense density of the human visceral cavity is perfectly packed to optimize biological function. The thoracic and abdominopelvic cavities house a highly interdependent network of organs constantly maintaining biochemical homeostasis.</p>
        
        <h4>Digestive & Hepatic Processing</h4>
        <p>The alimentary canal utilizes aggressive mechanical and chemical breakdown. The stomach utilizes strong hydrochloric acid (pH ~1.5) and pepsinogen. However, true metabolic control lies within the <strong>Liver</strong>:</p>
        <ul>
          <li><strong>Detoxification:</strong> Hepatocytes actively filter the blood arriving directly from the intestines via the hepatic portal vein, neutralizing toxins and heavily metabolizing drugs.</li>
          <li><strong>Bile Production:</strong> Synthesizes alkaline bile, stored in the gallbladder, which is critical for the emulsification of heavy dietary lipids in the duodenum.</li>
          <li><strong>Glycogen Storage:</strong> Heavily regulates systemic blood glucose by storing excess glucose as glycogen and releasing it via glucagon signaling during fasting states.</li>
        </ul>

        <h4>Renal Filtration System</h4>
        <p>The paired kidneys receive a massive 20% of cardiac output. Inside, millions of microscopic functional units called <strong>Nephrons</strong> meticulously filter the blood plasma:</p>
        <div class="math-box">$$ GFR = K_f \times P_{net} $$</div>
        <p>The Glomerular Filtration Rate (GFR) determines kidney health. The kidneys actively reabsorb vital sodium, glucose, and water while permanently excreting toxic nitrogenous wastes (urea, creatinine) into the bladder as urine.</p>
      </div>
    `
  }
};

// 4. HOSPITAL DATA (E-Book Style with NEPAL CONTEXT)
const HOSPITAL_DATA = {
  icu: { 
    title: "Intensive Care Unit (ICU)", 
    sfId: "eaca09ed02ba401f8728113e17a2ce3b", 
    desc: `
      <div class="rich-data-injection">
        <h3>Critical Care Architecture</h3>
        <p>The Intensive Care Unit (ICU) represents the absolute pinnacle of modern clinical life support. Patients admitted here are physiologically unstable, requiring continuous, aggressive invasive monitoring and mechanical intervention to prevent imminent multi-organ failure.</p>
        
        <h4>Essential Life-Support Hardware</h4>
        <ul>
          <li><strong>Mechanical Ventilators:</strong> Machines that force highly oxygenated, pressurized air directly into the endotracheal tube of paralyzed or comatose patients, ensuring alveolar gas exchange.</li>
          <li><strong>Invasive Hemodynamic Monitors:</strong> Arterial lines inserted directly into the radial artery to provide beat-by-beat real-time blood pressure mapping, far more accurate than external cuffs.</li>
          <li><strong>Vasopressor Infusion Pumps:</strong> Microprocessor-controlled syringe pumps delivering microgram-precise doses of Norepinephrine or Epinephrine to chemically force blood vessels to constrict, combating severe septic or cardiogenic shock.</li>
        </ul>

        <div class="nepal-context">
          <h4>Nepal Regional Context: The Critical Care Disparity</h4>
          <p>In Nepal, ICU infrastructure is profoundly centralized. The <strong>Bagmati Province</strong> (specifically the Kathmandu Valley) contains over 65% of the nation's total critical care beds and nearly all specialized intensivists. Conversely, provinces like <strong>Karnali</strong> and <strong>Madhesh</strong> suffer from acute, lethal deficits.</p>
          <p>A patient experiencing severe respiratory failure in rural Karnali often faces a 12-to-18-hour transport over treacherous terrain to reach a functional mechanical ventilator. Even when rural hospitals possess ICU beds, chronic power instability, oxygen plant failures, and a severe lack of trained specialized nurses render the equipment effectively useless, driving preventable mortality rates exponentially higher than global averages.</p>
        </div>
      </div>
    `
  },
  nicu: {
    title: "Neonatal Intensive Care (NICU)",
    sfId: "5ceaaa4482a84774b9922366cfb228e7", // Placeholder SFID, reuse autopsy lab for visual for now
    desc: `
      <div class="rich-data-injection">
        <h3>Advanced Neonatal Resuscitation</h3>
        <p>The NICU is a deeply specialized micro-environment strictly designed for premature or severely ill newborns. Due to their profoundly underdeveloped physiology—particularly immature lungs lacking surfactant—these infants require delicate, highly calibrated technological support.</p>

        <h4>Micro-Environmental Control</h4>
        <ul>
          <li><strong>Thermoregulated Incubators:</strong> Premature infants lack brown fat and cannot shivering to generate heat. Closed incubators provide a perfectly controlled, humidified, and heated micro-environment to prevent fatal hypothermia.</li>
          <li><strong>CPAP (Continuous Positive Airway Pressure):</strong> Non-invasive respiratory support using nasal prongs to keep underdeveloped, sticky alveoli from collapsing during exhalation.</li>
          <li><strong>Phototherapy Units:</strong> Intense blue-light arrays utilized to break down toxic bilirubin in the blood, aggressively treating severe neonatal jaundice to prevent irreversible brain damage (kernicterus).</li>
        </ul>

        <div class="nepal-context">
          <h4>Nepal Regional Context: Infant Mortality Vectors</h4>
          <p>Neonatal care outside of major urban centers in Nepal faces catastrophic logistical hurdles. While advanced NICU care thrives in tertiary hospitals like Tribhuvan University Teaching Hospital (TUTH) in Kathmandu, rural birthing centers operate blindly.</p>
          <p>If a premature birth occurs in the high-altitude villages of Dolpo or the plains of Saptari, the absolute lack of <strong>transport incubators</strong> means the neonate often perishes from cold stress (hypothermia) or asphyxiation before ever reaching a regional hospital. This lack of decentralized NICU equipment directly contributes to Nepal's struggle to lower its rural neonatal mortality rate to meet SDG goals.</p>
        </div>
      </div>
    `
  },
  ot: {
    title: "Operating Theater Setup",
    sfId: "8d1b28daf13643488cbca29a465e23c8", // Placeholder
    desc: `
      <div class="rich-data-injection">
        <h3>The Sterile Surgical Environment</h3>
        <p>The Operating Theater (OT) is a heavily restricted, hyper-sterile environment engineered with positive air pressure to violently push airborne pathogens out of the room when doors open, protecting the exposed surgical field.</p>

        <h4>Surgical Hardware Dynamics</h4>
        <ul>
          <li><strong>Anesthesia Workstation:</strong> A complex vaporizing unit that blends pure oxygen with volatile liquid anesthetics (like Isoflurane), forcing the patient into a state of deep, reversible coma and amnesia.</li>
          <li><strong>Electrosurgical Cautery Unit:</strong> Replaces the traditional scalpel in many procedures. Uses high-frequency alternating current to instantly slice through tissue while simultaneously coagulating cut blood vessels, preventing fatal hemorrhage.</li>
          <li><strong>Shadowless LED Arrays:</strong> Multi-axis overhead lighting designed to eliminate all shadows cast by the surgeon's hands, illuminating deep into the visceral cavity.</li>
        </ul>

        <div class="nepal-context">
          <h4>Nepal Regional Context: The 'Surgical Camp' Reliance</h4>
          <p>While Kathmandu hosts state-of-the-art neurosurgical and cardiothoracic OTs, rural Nepal is heavily dependent on intermittent <strong>"Surgical Camps"</strong>. Due to the lack of permanent anesthesiologists and functioning autoclaves (sterilizers) in district hospitals, visiting teams from urban centers must travel to perform bulk elective surgeries (like hernia repairs or cataract removals).</p>
          <p>For acute, life-threatening surgical emergencies (e.g., severe traumatic brain injury from a bus accident), the rural OT is largely incapable. Survival depends entirely on the availability and weather-dependence of expensive helicopter medevac rescues back to Bagmati Province.</p>
        </div>
      </div>
    `
  }
};

// 5. GENERATE 15 NEPAL-SPECIFIC ANALYTICS METRICS
function generate15Analytics() {
  const container = document.getElementById('analytics-grid');
  if(!container) return;
  
  const metrics =[
    { title: "ICU Bed Density (per 100k)", glb: "15 Beds", nep: "2.8 Beds", ctx: "Severe central-hub concentration leaves rural populations entirely devoid of critical respiratory support during acute pandemics." },
    { title: "Pediatric Oncology Survival", glb: "85%", nep: "30%", ctx: "Late-stage diagnostic timelines and lack of rural pediatric chemotherapy access completely destabilize pediatric outcomes in Nepal." },
    { title: "Neonatal Transport Incubators", glb: "High", nep: "Critically Low", ctx: "Premature rural transfers suffer lethal hypothermia due to the complete absence of heated, oxygenated transport units." },
    { title: "Advanced MRI Distribution", glb: "Standardized", nep: "90% Urban", ctx: "High-tesla neurological imaging is almost entirely restricted to Kathmandu, blinding rural physicians to strokes and tumors." },
    { title: "Neurologist to Patient Ratio", glb: "1 : 25,000", nep: "1 : 700,000", ctx: "The extreme deficit of brain specialists causes high rates of misdiagnosis for epilepsy, neuro-trauma, and degenerative diseases." },
    { title: "Defibrillator Availability", glb: "Widespread", nep: "Hospital-Only", ctx: "Public access to AEDs (Automated External Defibrillators) in schools or transit hubs is effectively non-existent." },
    { title: "Trauma Medevac Response", glb: "< 30 mins", nep: "Hours/Days", ctx: "Relying on expensive private helicopters; adverse weather and night conditions completely ground rural rescue operations." },
    { title: "Surgical Site Infection Rate", glb: "< 3%", nep: "12 - 18%", ctx: "Inconsistent autoclave sterilization and compromised clean-water access in district outposts drive high post-operative sepsis." },
    { title: "ECMO Capability Centers", glb: "Regional", nep: "Highly Rare", ctx: "Extracorporeal Membrane Oxygenation (lung bypass) is available in fewer than a handful of elite tertiary centers." },
    { title: "Blood Bank Rural Coverage", glb: "Optimized", nep: "Fragmented", ctx: "Severe hemorrhagic shock from childbirth (PPH) remains fatal due to nonexistent cold-chain blood storage in remote hills." },
    { title: "Hemodialysis Access", glb: "Decentralized", nep: "Saturated", ctx: "End-stage renal patients in Nepal face massive waitlists and must often migrate to the capital to survive." },
    { title: "Oxygen Plant Independence", glb: "Standard", nep: "Vulnerable", ctx: "Relying heavily on trucked-in cylinders; landslides routinely cut off critical oxygen supply chains to rural wards." },
    { title: "Cath Lab Density (Cardiology)", glb: "Standardized", nep: "Centralized", ctx: "Immediate stenting for acute myocardial infarction (heart attack) is geographically impossible for 60% of the population." },
    { title: "Digital Spatial Learning Adoption", glb: "Growing", nep: "Minimal", ctx: "Axyomis-X seeks to aggressively replace outdated, rigid 2D textbooks with 3D clinical models to train rural medics faster." },
    { title: "National Health Budget", glb: "10 - 15%", nep: "~ 4.5%", ctx: "Chronically restricted governmental financial allocation necessitates the immediate deployment of hyper-efficient digital training alternatives." }
  ];

  container.innerHTML = metrics.map((m, i) => `
    <div class="stat-card" style="animation: slideIn 0.5s ease forwards; animation-delay: ${i * 0.05}s; opacity: 0;">
      <h4>${m.title}</h4>
      <div class="stat-vs-container">
        <div class="stat-side nepal"><span>Nepal Status</span><strong>${m.nep}</strong></div>
        <div class="stat-side global"><span>Global Baseline</span><strong>${m.glb}</strong></div>
      </div>
      <div class="stat-context">${m.ctx}</div>
    </div>
  `).join('');

  // Add keyframe animation for the grid
  const style = document.createElement('style');
  style.innerHTML = `@keyframes slideIn { from { opacity: 0; transform: translate3d(0, 20px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }`;
  document.head.appendChild(style);
}

// ════════════════════════════════════════════════════
//   120FPS HARDWARE-ACCELERATED CURSOR & 3D LOGIC
// ════════════════════════════════════════════════════
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
const heroCard = document.getElementById('card');
const glow = document.getElementById('glow');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX, ringY = mouseY;
let targetTargX = 0, targetTargY = 0;
let currentTargX = 0, currentTargY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; 
  mouseY = e.clientY;
  const xAxis = (mouseX - window.innerWidth / 2) / (window.innerWidth / 2);
  const yAxis = (mouseY - window.innerHeight / 2) / (window.innerHeight / 2);
  targetTargX = xAxis * 15; 
  targetTargY = -(yAxis * 15); 
});

function render120FPS() {
  dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  
  ringX += (mouseX - ringX) * 0.2; 
  ringY += (mouseY - ringY) * 0.2;
  ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
  
  currentTargX += (targetTargX - currentTargX) * 0.1; 
  currentTargY += (targetTargY - currentTargY) * 0.1;
  if (heroCard) {
    heroCard.style.transform = `translate3d(0,0,0) perspective(1200px) rotateY(${currentTargX}deg) rotateX(${currentTargY}deg)`;
  }
  
  if (glow) {
    const gx = (mouseX - window.innerWidth / 2) * 0.1;
    const gy = (mouseY - window.innerHeight / 2) * 0.1;
    glow.style.transform = `translate3d(calc(-50% + ${gx}px), calc(-50% + ${gy}px), 0)`;
  }
  
  requestAnimationFrame(render120FPS);
}
requestAnimationFrame(render120FPS);

document.querySelectorAll('a, button, input, .rich-card').forEach(el => {
  el.addEventListener('mouseenter', () => { 
    ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'var(--platinum)'; 
  });
  el.addEventListener('mouseleave', () => { 
    ring.style.width = '35px'; ring.style.height = '35px'; ring.style.borderColor = 'var(--gold-dim)'; 
  });
});

// ════════════════════════════════════════════════════
//   CANVAS OPTIMIZATIONS
// ════════════════════════════════════════════════════
function initStarfield() {
  const c = document.getElementById('starfield');
  const ctx = c.getContext('2d', { alpha: false }); 
  let stars =[];
  function resize(){ c.width = window.innerWidth; c.height = window.innerHeight; }
  function mkStars(){ stars = Array.from({length: 150}, () => ({ x: Math.random() * c.width, y: Math.random() * c.height, r: Math.random() * 1.5, s: Math.random() * 0.5 + 0.1, op: Math.random() })); }
  resize(); mkStars(); window.addEventListener('resize', resize);
  
  function loop(){
    ctx.fillStyle = '#09090b';
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#E5D3B3"; 
    stars.forEach(s => {
      ctx.globalAlpha = s.op; 
      ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.r * 2, s.r * 2); 
      s.y -= s.s; s.op += (Math.random() - 0.5) * 0.05;
      if(s.op < 0.2) s.op = 0.2; if(s.op > 1) s.op = 1;
      if(s.y < 0){ s.y = c.height; s.x = Math.random() * c.width; }
    });
    ctx.globalAlpha = 1.0;
    requestAnimationFrame(loop);
  }
  loop();
}
window.addEventListener('DOMContentLoaded', initStarfield);

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loader-bar');
  bar.style.width = '100%';
  setTimeout(() => {
    loader.classList.add('loader-exit');
    setTimeout(() => loader.style.display = 'none', 800);
  }, 600);
});

// ════════════════════════════════════════════════════
//   ADVANCED "BYJU'S STYLE" READER MODAL & MATHJAX
// ════════════════════════════════════════════════════
async function getFallbackWikipediaImage(title) {
  try {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=images&imlimit=10&format=json&origin=*`);
    const data = await res.json();
    const pages = data.query.pages; const pageId = Object.keys(pages)[0];
    if (!pages[pageId].images) return null;
    const firstImageTitle = pages[pageId].images.filter(img => img.title.toLowerCase().match(/\.(jpg|jpeg|png)$/))[0]?.title;
    if(!firstImageTitle) return null;
    const urlRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(firstImageTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=1000&format=json&origin=*`);
    const urlData = await urlRes.json();
    const urlPages = urlData.query.pages; const urlPageId = Object.keys(urlPages)[0];
    return urlPages[urlPageId].imageinfo[0].thumburl || urlPages[urlPageId].imageinfo[0].url;
  } catch(e) { return null; }
}

async function openReader(query, context = '', injectedRichContent = null) {
  if(!query) return;
  const modal = document.getElementById('reader-modal');
  const titleEl = document.getElementById('rm-title');
  const extractEl = document.getElementById('rm-extract');
  const imgEl = document.getElementById('rm-img');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden'; 
  
  titleEl.textContent = "Synthesizing Knowledge...";
  extractEl.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Accessing deep theoretical archives...`;
  imgEl.style.display = "none";

  if (injectedRichContent) {
    titleEl.innerHTML = query;
    extractEl.innerHTML = injectedRichContent;
    document.querySelector('.reader-content').scrollTop = 0;
    if (window.MathJax && window.MathJax.typesetPromise) { 
      MathJax.typesetPromise([extractEl]).catch(err => console.log('MathJax err:', err)); 
    }
    return;
  }

  try {
    const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`);
    const searchData = await searchRes.json();
    if (!searchData.query.search.length) throw new Error("Not found");
    
    const pageId = searchData.query.search[0].pageid;
    const exactTitle = searchData.query.search[0].title;
    
    const detailRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&pageids=${pageId}&exintro=1&explaintext=1&pithumbsize=1000&origin=*`);
    const data = await detailRes.json(); 
    const pageData = data.query.pages[pageId];

    titleEl.textContent = pageData.title;
    let text = pageData.extract ? pageData.extract.replace(/\n/g, '<br><br>') : "Content under structural review.";
    
    if (["Physics", "Mathematics"].includes(context) || exactTitle.includes(" mechanics") || exactTitle.includes("Equation")) {
      text += `<div class="math-box">Theoretical Proof Check:<br>$$ \\int_a^b f(x) dx = F(b) - F(a) $$</div>`;
    }
    
    text += `<br><br><em style='color:var(--gold); display:block; padding-top:20px; border-top:1px solid rgba(229, 211, 179, 0.2); font-family:"Rajdhani", sans-serif; text-transform:uppercase;'>Data retrieved via global scientific API matrix.</em>`;
    extractEl.innerHTML = text;

    document.querySelector('.reader-content').scrollTop = 0;

    if (window.MathJax && window.MathJax.typesetPromise) { 
      MathJax.typesetPromise([extractEl]).catch(err => console.log('MathJax err:', err)); 
    }
    
    let imgSrc = (pageData.thumbnail && pageData.thumbnail.source) ? pageData.thumbnail.source : await getFallbackWikipediaImage(exactTitle);
    if(imgSrc) { 
      imgEl.src = imgSrc; 
      imgEl.style.display = "block"; 
    }
  } catch(error) {
    titleEl.textContent = "Archive Unreachable";
    extractEl.innerHTML = `Our matrix could not resolve a definitive academic article for <strong style="color:var(--gold)">"${query}"</strong>.`;
  }
}

function closeReader() { 
  document.getElementById('reader-modal').classList.remove('open'); 
  document.body.style.overflow = 'auto';
}

// ════════════════════════════════════════════════════
//   DYNAMIC UI GENERATION
// ════════════════════════════════════════════════════
function loadGrid(category) {
  const container = document.getElementById('study-grid');
  container.innerHTML = '';
  dataSets[category].forEach((topic, i) => {
    const card = document.createElement('div');
    card.className = 'rich-card';
    card.style.animation = `slideIn 0.3s ease forwards`;
    card.style.animationDelay = `${i * 0.02}s`;
    card.style.opacity = '0';
    card.onclick = () => openReader(topic, category, null);
    
    let icon = '<i class="fas fa-atom"></i>';
    if(category === 'Chemistry') icon = '<i class="fas fa-flask"></i>';
    if(category === 'Biology') icon = '<i class="fas fa-dna"></i>';
    if(category === 'Mathematics') icon = '<i class="fas fa-square-root-alt"></i>';
    if(category === 'IT') icon = '<i class="fas fa-laptop-code"></i>';

    card.innerHTML = `<div style="font-size:2rem; color:var(--gold); margin-bottom:15px;">${icon}</div><h4 class="rc-title">${topic}</h4><p class="rc-desc">Tap to access theoretical literature and academic archives.</p>`;
    container.appendChild(card);
  });
}

function switchSubject(sub, btn) {
  document.querySelectorAll('#study-hub .subject-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  loadGrid(sub);
}

function initIframeSection(dataObj, menuId, textId, iframeId) {
  const menu = document.getElementById(menuId);
  Object.keys(dataObj).forEach((key, index) => {
    const btn = document.createElement('button');
    btn.className = `subject-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = dataObj[key].title;
    btn.onclick = () => {
      document.querySelectorAll(`#${menuId} .subject-btn`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(textId).innerHTML = dataObj[key].desc;
      document.getElementById(iframeId).src = `https://sketchfab.com/models/${dataObj[key].sfId}/embed?autostart=1&ui_theme=dark&transparent=1`;
      
      // Trigger MathJax re-render for the deep dive section if it contains math
      if (window.MathJax && window.MathJax.typesetPromise) { 
        MathJax.typesetPromise([document.getElementById(textId)]).catch(err => console.log(err)); 
      }
    };
    menu.appendChild(btn);
  });
  menu.firstChild.click();
}

// Initialize System
window.onload = () => {
  loadGrid('Physics');
  initIframeSection(COSMOS_DATA, 'cosmos-menu', 'cosmos-text-container', 'cosmos-iframe');
  initIframeSection(ANATOMY_DATA, 'anatomy-menu', 'ana-text-container', 'ana-iframe');
  initIframeSection(HOSPITAL_DATA, 'hospital-menu', 'hosp-text-container', 'hosp-iframe');
  generate15Analytics();
};
</script>
</body>
</html>
