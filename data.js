/* ==========================================================================
   CONNECT DIGITAL MEDIA - DESIGN SYSTEM & STYLESHEET
   Theme: WARM IVORY (#F8F7F4) & SIGNATURE BRAND RED (#E52D25) with ONYX BLACK
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@500;600;700;800&display=swap');

:root {
  /* Core Theme Colors */
  --bg-page: #F8F7F4;
  --bg-cream-darker: #f0eee9;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #ffffff;
  --bg-dark: #111827;
  --bg-dark-card: #1c2433;
  
  /* Brand Red Accent (#E52D25) */
  --red-primary: #E52D25;
  --red-dark: #c41e17;
  --red-bright: #ff4138;
  --red-light: #fff1f0;
  --red-glow: rgba(229, 45, 37, 0.28);
  --red-subtle: rgba(229, 45, 37, 0.08);

  /* WhatsApp Green */
  --wa-green: #25D366;
  --wa-green-dark: #128C7E;
  --wa-green-glow: rgba(37, 211, 102, 0.35);

  /* Typography & Neutral Colors */
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #6b7280;
  --text-light: #f9fafb;
  --emerald-primary: #10b981;

  /* Gradients */
  --gradient-brand: linear-gradient(135deg, #E52D25 0%, #ff4138 50%, #b91c1c 100%);
  --gradient-dark: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  --gradient-red-warm: linear-gradient(135deg, #E52D25 0%, #ea580c 100%);
  --gradient-card: linear-gradient(180deg, #ffffff 0%, #fdfdfc 100%);

  /* Borders & Shadows */
  --border-light: rgba(0, 0, 0, 0.08);
  --border-red: rgba(229, 45, 37, 0.22);
  --border-red-bright: rgba(229, 45, 37, 0.45);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 8px 24px -4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 16px 40px -8px rgba(0, 0, 0, 0.08);
  --shadow-red: 0 8px 25px rgba(229, 45, 37, 0.25);
  --shadow-wa: 0 8px 25px rgba(37, 211, 102, 0.35);

  /* Typography */
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif;

  /* Spacing & Radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ==========================================================================
   CSS RESET & BASE
   ========================================================================== */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-page);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-page);
}
::-webkit-scrollbar-thumb {
  background: rgba(229, 45, 37, 0.35);
  border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--red-primary);
}

/* Ambient Background Red & Warm Glow Orbs */
.ambient-mesh {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.ambient-mesh::before {
  content: '';
  position: absolute;
  top: -10%;
  left: 15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(229, 45, 37, 0.06) 0%, rgba(229, 45, 37, 0) 70%);
  filter: blur(80px);
  animation: floatOrb 24s infinite alternate ease-in-out;
}

.ambient-mesh::after {
  content: '';
  position: absolute;
  top: 45%;
  right: 10%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(229, 45, 37, 0.04) 0%, rgba(229, 45, 37, 0) 70%);
  filter: blur(100px);
  animation: floatOrb2 28s infinite alternate ease-in-out;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(120px, 80px) scale(1.1); }
  100% { transform: translate(-60px, 140px) scale(0.95); }
}

@keyframes floatOrb2 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-140px, -90px) scale(1.1); }
  100% { transform: translate(80px, 70px) scale(0.95); }
}

.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* ==========================================================================
   CONTAINER & TYPOGRAPHY
   ========================================================================== */

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.2;
}

.text-gradient {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

.section-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 56px auto;
}

.section-title {
  font-size: 2.5rem;
  margin-top: 14px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-top: 14px;
  line-height: 1.6;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: #ffffff;
  border: 1px solid var(--border-red);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--red-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  box-shadow: 0 2px 10px rgba(229, 45, 37, 0.08);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--red-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(229, 45, 37, 0.7);
  animation: pulseDot 1.8s infinite;
}

.pulse-dot-green {
  width: 8px;
  height: 8px;
  background-color: var(--wa-green);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  animation: pulseDotGreen 1.8s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(229, 45, 37, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(229, 45, 37, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(229, 45, 37, 0); }
}

@keyframes pulseDotGreen {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* ==========================================================================
   BUTTONS & CTAs
   ========================================================================== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-primary {
  background: var(--gradient-brand);
  color: #ffffff;
  box-shadow: var(--shadow-red);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(229, 45, 37, 0.4);
  color: #ffffff;
}

.btn-secondary {
  background: #ffffff;
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background: #fdfdfd;
  border-color: var(--border-red);
  color: var(--red-primary);
  transform: translateY(-2px);
}

.btn-whatsapp {
  background: var(--wa-green);
  color: #ffffff;
  box-shadow: var(--shadow-wa);
}

.btn-whatsapp:hover {
  background: var(--wa-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
  color: #ffffff;
}

.btn-sm {
  padding: 8px 18px;
  font-size: 0.85rem;
  border-radius: var(--radius-sm);
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.05rem;
  border-radius: var(--radius-md);
}

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 84px;
  z-index: 100;
  transition: all var(--transition-normal);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.site-header.scrolled {
  height: 72px;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--border-light);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.brand-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo-img {
  height: 56px;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: all var(--transition-fast);
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.04));
}

.site-header.scrolled .brand-logo-img {
  height: 48px;
}

.brand-logo:hover .brand-logo-img {
  transform: scale(1.04);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 700;
  font-size: 0.96rem;
  letter-spacing: -0.01em;
  transition: all var(--transition-fast);
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
}

.nav-link:hover, .nav-link.active {
  color: var(--red-primary);
  background: rgba(229, 45, 37, 0.04);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--red-primary);
  transition: width var(--transition-fast), opacity var(--transition-fast);
  border-radius: var(--radius-full);
  opacity: 0;
}

.nav-link:hover::after, .nav-link.active::after {
  opacity: 1;
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform var(--transition-fast);
}

.nav-item:hover .dropdown-arrow {
  transform: rotate(180deg);
}

/* ==========================================================================
   MEGA DROPDOWN MENU ("DIP DOWN" NAVBAR MENU)
   ========================================================================== */

.mega-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
  width: 960px;
  max-width: 95vw;
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-top: 3px solid var(--red-primary);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  padding: 28px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
}

.nav-item:hover .mega-dropdown-menu,
.nav-item.open .mega-dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.mega-dropdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.mega-col-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--red-primary);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--red-light);
  padding-bottom: 6px;
}

.mega-service-block {
  margin-bottom: 16px;
}

.mega-service-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  transition: color var(--transition-fast);
}

.mega-service-name:hover {
  color: var(--red-primary);
}

.mega-sublist {
  list-style: none;
  padding-left: 8px;
}

.mega-sublist li {
  margin-bottom: 4px;
}

.mega-sublist a {
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
  display: block;
  padding: 2px 0;
}

.mega-sublist a:hover {
  color: var(--red-primary);
  padding-left: 4px;
}

.mega-dropdown-footer {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

/* ==========================================================================
   INTERACTIVE DIP-DOWN ACCORDION CARDS (services.html)
   ========================================================================== */

.dipdown-controls-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}

.dipdown-search-box {
  position: relative;
  flex: 1;
  max-width: 420px;
}

.dipdown-search-input {
  width: 100%;
  padding: 12px 18px 12px 42px;
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-full);
  font-size: 0.92rem;
  outline: none;
  transition: all var(--transition-fast);
}

.dipdown-search-input:focus {
  border-color: var(--red-primary);
  box-shadow: 0 0 0 3px rgba(229, 45, 37, 0.1);
}

.dipdown-search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  width: 16px;
  height: 16px;
}

.toggle-all-btn {
  background: #ffffff;
  border: 1px solid var(--border-light);
  padding: 10px 18px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.toggle-all-btn:hover {
  border-color: var(--red-primary);
  color: var(--red-primary);
}

.service-accordion-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.service-accordion-card.open {
  border-color: var(--red-primary);
  box-shadow: var(--shadow-md);
}

.service-accordion-header {
  padding: 28px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #ffffff;
  user-select: none;
  transition: background var(--transition-fast);
}

.service-accordion-card.open .service-accordion-header {
  background: var(--bg-page);
  border-bottom: 1px solid var(--border-light);
}

.service-header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.service-num-badge {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--red-primary);
  min-width: 48px;
}

.service-header-titles h3 {
  font-size: 1.45rem;
  margin-bottom: 4px;
}

.service-header-titles p {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.service-header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sub-count-badge {
  background: var(--red-light);
  color: var(--red-primary);
  border: 1px solid var(--border-red);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
}

.accordion-chevron-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-page);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-primary);
  font-size: 1.2rem;
  transition: transform 0.3s ease, background 0.2s ease;
}

.service-accordion-card.open .accordion-chevron-btn {
  transform: rotate(180deg);
  background: var(--red-primary);
  color: #ffffff;
}

.service-accordion-body {
  padding: 36px;
  display: none;
  background: #ffffff;
  animation: fadeIn 0.3s ease;
}

.service-accordion-card.open .service-accordion-body {
  display: block;
}

.subpoints-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 32px;
}

.subpoint-card {
  background: var(--bg-page);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--transition-fast);
  position: relative;
}

.subpoint-card:hover {
  background: #ffffff;
  border-color: var(--border-red);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

.subpoint-card-title {
  font-weight: 700;
  font-size: 0.98rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.subpoint-card-title svg {
  color: var(--red-primary);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.subpoint-card-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 12px;
}

.subpoint-wa-link {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--wa-green-dark);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  transition: color var(--transition-fast);
}

.subpoint-wa-link:hover {
  color: var(--wa-green);
  text-decoration: underline;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.theme-toggle-btn:hover {
  background: rgba(229, 45, 37, 0.08);
  border-color: var(--border-red);
  color: var(--red-primary);
  transform: translateY(-1px);
}

.theme-toggle-btn .sun-icon {
  display: none;
}
.theme-toggle-btn .moon-icon {
  display: block;
}

[data-theme="dark"] .theme-toggle-btn {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  color: #fbbf24;
}

[data-theme="dark"] .theme-toggle-btn:hover {
  background: rgba(251, 191, 36, 0.15);
  border-color: #fbbf24;
  color: #fbbf24;
}

[data-theme="dark"] .theme-toggle-btn .sun-icon {
  display: block;
}
[data-theme="dark"] .theme-toggle-btn .moon-icon {
  display: none;
}

.mobile-menu-btn {
  display: none;
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  padding: 8px;
  cursor: pointer;
  color: var(--text-primary);
}

/* ==========================================================================
   HERO SECTION
   ========================================================================== */

.hero-section {
  padding: 160px 0 90px 0;
  position: relative;
  text-align: center;
}

.hero-content {
  max-width: 920px;
  margin: 0 auto;
}

.hero-badge {
  margin-bottom: 24px;
}

.hero-title {
  font-size: 3.6rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
  font-weight: 800;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 760px;
  margin: 0 auto 36px auto;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

/* ==========================================================================
   HERO AUTO-SLIDING SHOWCASE CAROUSEL
   ========================================================================== */
.hero-slider-wrapper {
  max-width: 900px;
  margin: 0 auto 56px auto;
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.25), 0 0 30px rgba(229, 45, 37, 0.12);
  overflow: hidden;
  position: relative;
  text-align: left;
}

/* Quick Slider Nav Tabs */
.slider-nav-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(17, 24, 39, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 12px;
  overflow-x: auto;
  scrollbar-width: none;
}

.slider-nav-tabs::-webkit-scrollbar {
  display: none;
}

.slider-tab-btn {
  background: none;
  border: none;
  color: #94a3b8;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.slider-tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.slider-tab-btn.active {
  background: rgba(229, 45, 37, 0.18);
  color: #ffffff;
  border: 1px solid var(--border-red);
}

/* Slider Viewport & Slides Track */
.hero-slider-viewport {
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;
}

.hero-slider-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide-item {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.97) translateY(8px);
  transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s;
  pointer-events: none;
}

.hero-slide-item.active {
  position: relative;
  opacity: 1;
  visibility: visible;
  transform: scale(1) translateY(0);
  pointer-events: auto;
}

.slide-card-inner {
  padding: 32px 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slide-meta-ads { background: radial-gradient(circle at 80% 20%, rgba(229, 45, 37, 0.12) 0%, rgba(17, 24, 39, 0) 70%); }
.slide-reels { background: radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.14) 0%, rgba(17, 24, 39, 0) 70%); }
.slide-whatsapp { background: radial-gradient(circle at 80% 20%, rgba(37, 211, 102, 0.12) 0%, rgba(17, 24, 39, 0) 70%); }
.slide-seo { background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(17, 24, 39, 0) 70%); }
.slide-d2c { background: radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.12) 0%, rgba(17, 24, 39, 0) 70%); }

.slide-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.slide-badge-tag {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: var(--radius-full);
}

.meta-badge { background: rgba(229, 45, 37, 0.2); color: var(--red-bright); border: 1px solid rgba(229, 45, 37, 0.4); }
.reels-badge { background: rgba(236, 72, 153, 0.2); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.4); }
.wa-badge { background: rgba(37, 211, 102, 0.2); color: #25D366; border: 1px solid rgba(37, 211, 102, 0.4); }
.seo-badge { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4); }
.d2c-badge { background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); }

.slide-status-chip {
  font-size: 0.8rem;
  color: #cbd5e1;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.slide-metrics-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.slide-kpi-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.slide-kpi-box:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.18);
}

.slide-kpi-lbl {
  display: block;
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 600;
  margin-bottom: 6px;
}

.slide-kpi-val {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.7rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
}

.text-red-bold { color: #ff4138 !important; }
.text-green-bold { color: #34d399 !important; }

.slide-kpi-sub {
  display: block;
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 600;
}

.slide-campaign-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.campaign-pill {
  font-size: 0.75rem;
  font-weight: 600;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.06);
  padding: 5px 12px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Slider Controls Bar */
.slider-controls-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: rgba(17, 24, 39, 0.98);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.slider-arrow-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.slider-arrow-btn:hover {
  background: var(--red-primary);
  border-color: var(--red-primary);
  transform: scale(1.08);
}

.slider-indicators-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.slider-dot {
  width: 32px;
  height: 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 0;
  transition: width 0.3s ease;
}

.slider-dot.active {
  width: 50px;
  background: rgba(255, 255, 255, 0.25);
}

.slider-dot .dot-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: var(--red-primary);
  border-radius: 4px;
}

.slider-dot.active .dot-progress {
  animation: fillProgress 3.5s linear forwards;
}

@keyframes fillProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}

@media (max-width: 768px) {
  .slide-metrics-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .slide-card-inner {
    padding: 20px 18px;
  }
  .slide-kpi-val {
    font-size: 1.4rem;
  }
}

/* Partners Marquee */
.hero-partners {
  padding-top: 24px;
  padding-bottom: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.partners-caption {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 14px;
}

.partners-marquee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
}

.partner-logo-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  color: #475569;
  transition: all var(--transition-fast);
  padding: 4px 10px;
  border-radius: var(--radius-md, 8px);
}

.partner-logo-item svg {
  transition: transform 0.25s ease;
}

.partner-logo-item:hover {
  color: var(--text-primary);
  background: rgba(0, 0, 0, 0.03);
}

.partner-logo-item:hover svg {
  transform: scale(1.15);
}

/* ==========================================================================
   STATS BAR
   ========================================================================== */

.stats-section {
  padding: 16px 0 24px 0;
  position: relative;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 24px 20px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-red);
  box-shadow: var(--shadow-md);
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--red-primary);
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.stat-subtext {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* ==========================================================================
   SERVICES MATRIX (With #E52D25 Icons)
   ========================================================================== */

.services-section {
  padding: 36px 0 80px 0;
  position: relative;
}

/* Full-Size Services Ecosystem Showcase Banner */
.services-full-showcase-card {
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 40px;
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 35px rgba(229, 45, 37, 0.12);
  position: relative;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.services-full-showcase-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.35), 0 0 45px rgba(229, 45, 37, 0.2);
}

.showcase-image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: block;
}

.services-showcase-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.services-full-showcase-card:hover .services-showcase-img {
  transform: scale(1.02);
}

.showcase-floating-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 32px;
  background: linear-gradient(180deg, rgba(9, 13, 22, 0) 0%, rgba(9, 13, 22, 0.92) 50%, rgba(9, 13, 22, 0.98) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.overlay-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid var(--border-red);
  padding: 8px 18px;
  border-radius: var(--radius-full);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.85rem;
  box-shadow: 0 4px 15px rgba(229, 45, 37, 0.25);
  backdrop-filter: blur(8px);
}

.overlay-stats-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.overlay-stat-item {
  display: flex;
  flex-direction: column;
}

.stat-tag {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  font-weight: 700;
}

.stat-highlight {
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 2px;
}

.text-emerald {
  color: #34d399 !important;
}

@media (max-width: 768px) {
  .showcase-floating-overlay {
    position: relative;
    background: #090d16;
    padding: 18px 20px;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-brand);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-red);
  box-shadow: var(--shadow-lg);
}

.service-card:hover::before {
  opacity: 1;
}

.service-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.service-icon-box {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: var(--red-light);
  color: var(--red-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(229, 45, 37, 0.12);
  transition: transform var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
}

.service-card:hover .service-icon-box {
  background: var(--red-primary);
  color: #ffffff;
  transform: scale(1.08);
}

.service-icon-box svg {
  width: 28px;
  height: 28px;
}

.service-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  background: #f3f4f6;
  color: var(--text-secondary);
}

.service-title {
  font-size: 1.35rem;
  margin-bottom: 12px;
}

.service-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

.service-highlights {
  list-style: none;
  margin-bottom: 24px;
  margin-top: auto;
}

.service-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.86rem;
  color: var(--text-primary);
  margin-bottom: 10px;
  font-weight: 500;
}

.service-highlights li svg {
  width: 16px;
  height: 16px;
  color: var(--red-primary);
  flex-shrink: 0;
  margin-top: 3px;
}

.service-stats-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--red-light);
  border: 1px solid var(--border-red);
  color: var(--red-primary);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
  margin-top: 12px;
}

/* ==========================================================================
   ABOUT US SECTION
   ========================================================================== */

.about-section {
  padding: 100px 0;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.about-top-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 56px;
}

.about-story-card {
  background: var(--bg-page);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.about-story-title {
  font-size: 2.2rem;
  margin-bottom: 18px;
  line-height: 1.25;
}

.about-story-p {
  font-size: 1.02rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.about-values-list {
  display: grid;
  gap: 16px;
}

.about-value-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
}

.about-value-metric {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--red-primary);
  min-width: 60px;
}

.about-value-text {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
}

.about-pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.pillar-card {
  background: var(--bg-page);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 30px 24px;
  transition: all var(--transition-fast);
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-red);
  background: #ffffff;
  box-shadow: var(--shadow-md);
}

.pillar-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--red-light);
  color: var(--red-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.pillar-title {
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.pillar-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

/* ==========================================================================
   INTERACTIVE INDIAN ROI CALCULATOR (₹ INR)
   ========================================================================== */

.calculator-section {
  padding: 100px 0;
  position: relative;
}

.calculator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-lg);
}

.calc-inputs-column {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.slider-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.slider-val-badge {
  background: var(--red-light);
  color: var(--red-primary);
  border: 1px solid var(--border-red);
  padding: 4px 14px;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
}

.custom-range {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: var(--radius-full);
  background: #e5e7eb;
  outline: none;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--red-primary);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(229, 45, 37, 0.4);
  transition: transform var(--transition-fast);
}

.custom-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.calc-results-panel {
  background: var(--bg-dark);
  color: #ffffff;
  border-radius: var(--radius-lg);
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.calc-pill-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  margin-bottom: 8px;
}

.calc-big-metric {
  margin-bottom: 28px;
}

.calc-big-value {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
}

.calc-sub-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 28px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sub-label {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-bottom: 4px;
}

.sub-val {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
}

/* ==========================================================================
   CASE STUDIES SECTION
   ========================================================================== */

.cases-section {
  padding: 100px 0;
}

.case-filter-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.filter-tab {
  background: #ffffff;
  border: 1px solid var(--border-light);
  padding: 10px 22px;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-tab:hover,
.filter-tab.active {
  background: var(--red-primary);
  color: #ffffff;
  border-color: var(--red-primary);
  box-shadow: 0 4px 14px rgba(229, 45, 37, 0.25);
}

.cases-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.case-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 36px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  cursor: pointer;
}

.case-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-red);
  box-shadow: var(--shadow-lg);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.case-client-badge {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.case-location {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.case-title {
  font-size: 1.3rem;
  line-height: 1.35;
  margin-bottom: 14px;
}

.case-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

.case-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: var(--bg-page);
  padding: 16px;
  border-radius: var(--radius-md);
  margin-bottom: 24px;
  margin-top: auto;
}

.metric-cell {
  text-align: center;
}

.metric-cell-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.metric-cell-val {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--text-primary);
}

.metric-cell-change {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--emerald-primary);
}

.case-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.case-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.case-tag-item {
  font-size: 0.75rem;
  background: #f3f4f6;
  padding: 3px 8px;
  border-radius: 4px;
  color: var(--text-secondary);
}

.case-view-link {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--red-primary);
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ==========================================================================
   INSTANT AI GROWTH GRADER
   ========================================================================== */

.grader-section {
  padding: 100px 0;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.grader-wrapper {
  background: var(--bg-page);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-md);
}

.grader-form-grid {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 1fr;
  gap: 16px;
  align-items: flex-end;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-primary);
  outline: none;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--red-primary);
  box-shadow: 0 0 0 3px rgba(229, 45, 37, 0.12);
}

.grader-result-box {
  margin-top: 36px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid var(--border-red);
  border-radius: var(--radius-lg);
  display: none;
  animation: fadeIn 0.4s ease;
}

.grader-result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.overall-score-badge {
  display: flex;
  align-items: center;
  gap: 18px;
}

.score-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--gradient-brand);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-red);
}

.score-meta h4 {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.score-meta p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.grader-breakdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.breakdown-card {
  background: var(--bg-page);
  padding: 18px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
}

.breakdown-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.breakdown-title {
  font-weight: 700;
  font-size: 0.88rem;
}

.breakdown-score {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--red-primary);
}

.breakdown-bar {
  height: 6px;
  background: #e5e7eb;
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: 8px;
}

.breakdown-fill {
  height: 100%;
  background: var(--red-primary);
  border-radius: var(--radius-full);
}

.breakdown-feedback {
  font-size: 0.78rem;
  color: var(--text-secondary);
}

/* ==========================================================================
   PRICING SECTION (₹ INR Plans)
   ========================================================================== */

.pricing-section {
  padding: 100px 0;
}

.pricing-toggle-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 48px;
}

.pricing-toggle-btn {
  background: #ffffff;
  border: 1px solid var(--border-light);
  padding: 8px 18px;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.pricing-toggle-btn.active {
  background: var(--red-primary);
  color: #ffffff;
  border-color: var(--red-primary);
}

.save-badge {
  background: #dcfce7;
  color: #15803d;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--radius-full);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: stretch;
}

.pricing-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  position: relative;
}

.pricing-card.featured {
  border: 2px solid var(--red-primary);
  box-shadow: var(--shadow-lg), 0 0 20px rgba(229, 45, 37, 0.1);
  transform: scale(1.03);
}

.pricing-badge {
  align-self: flex-start;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  margin-bottom: 20px;
}

.pricing-card:not(.featured) .pricing-badge {
  background: #f3f4f6;
  color: var(--text-secondary);
}

.pricing-card.featured .pricing-badge {
  background: var(--red-light);
  color: var(--red-primary);
  border: 1px solid var(--border-red);
}

.pricing-name {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.pricing-ad-target {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 20px;
  min-height: 20px;
}

.pricing-price-box {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 16px;
}

.pricing-currency {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
}

.pricing-amount {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
}

.pricing-period {
  font-size: 0.92rem;
  color: var(--text-muted);
}

.pricing-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 28px;
  line-height: 1.55;
}

.pricing-features {
  list-style: none;
  margin-bottom: 36px;
  margin-top: auto;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.4;
}

.pricing-features li svg {
  width: 18px;
  height: 18px;
  color: var(--red-primary);
  flex-shrink: 0;
}

/* ==========================================================================
   BLOGS & INSIGHTS SECTION
   ========================================================================== */

.blogs-section {
  padding: 100px 0;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.blog-card {
  background: var(--bg-page);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 36px;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-red);
  background: #ffffff;
  box-shadow: var(--shadow-md);
}

.blog-meta-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.blog-category-tag {
  background: var(--red-light);
  color: var(--red-primary);
  border: 1px solid var(--border-red);
  padding: 3px 10px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.blog-read-time {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.blog-card-title {
  font-size: 1.35rem;
  line-height: 1.35;
  margin-bottom: 12px;
}

.blog-card-summary {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
  margin-top: auto;
}

.blog-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.blog-author {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
}

.blog-read-btn {
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--red-primary);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ==========================================================================
   TESTIMONIALS SLIDER
   ========================================================================== */

.testimonials-section {
  padding: 100px 0;
}

.testimonial-slider-container {
  max-width: 860px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-lg);
  position: relative;
  text-align: center;
}

.test-stars {
  color: #f59e0b;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.test-highlight {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.test-content {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
  font-style: italic;
}

.test-author-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.test-avatar {
  font-size: 2.2rem;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--bg-page);
  display: flex;
  align-items: center;
  justify-content: center;
}

.test-meta {
  text-align: left;
}

.test-name {
  font-weight: 700;
  font-size: 1.05rem;
}

.test-role {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 28px;
}

.slider-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid var(--border-light);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.slider-btn:hover {
  background: var(--red-primary);
  color: #ffffff;
  border-color: var(--red-primary);
}

/* ==========================================================================
   CONTACT US SECTION (Form & Direct Contacts)
   ========================================================================== */

.contact-section {
  padding: 100px 0;
  position: relative;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: stretch;
}

.contact-form-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 44px;
  box-shadow: var(--shadow-lg);
}

.contact-info-panel {
  background: var(--bg-dark);
  color: #ffffff;
  border-radius: var(--radius-xl);
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-channels-list {
  display: grid;
  gap: 20px;
  margin: 32px 0;
}

.contact-channel-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: #ffffff;
  transition: all var(--transition-fast);
}

.contact-channel-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--red-primary);
  transform: translateX(4px);
}

.contact-channel-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--red-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
}

.contact-channel-icon.wa {
  background: var(--wa-green);
}

.contact-channel-title {
  font-size: 0.8rem;
  color: #94a3b8;
}

.contact-channel-val {
  font-weight: 700;
  font-size: 1rem;
}

.service-checkboxes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 6px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  color: var(--text-secondary);
  cursor: pointer;
}

.checkbox-label input {
  accent-color: var(--red-primary);
}

/* ==========================================================================
   FLOATING WHATSAPP BUTTON & WIDGET
   ========================================================================== */

.floating-wa-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 62px;
  height: 62px;
  background: var(--wa-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  z-index: 999;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  animation: pulseWa 2.5s infinite;
}

.floating-wa-btn:hover {
  transform: scale(1.1);
  background: var(--wa-green-dark);
}

.floating-wa-btn svg {
  width: 32px;
  height: 32px;
}

.wa-tooltip {
  position: absolute;
  right: 74px;
  background: #ffffff;
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  padding: 8px 14px;
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: var(--shadow-md);
  pointer-events: none;
  opacity: 0;
  transform: translateX(10px);
  transition: all var(--transition-fast);
}

.floating-wa-btn:hover .wa-tooltip {
  opacity: 1;
  transform: translateX(0);
}

@keyframes pulseWa {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
  70% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* ==========================================================================
   MODALS
   ========================================================================== */

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.25s ease;
}

.modal-backdrop.open {
  display: flex;
}

.modal-card {
  background: #ffffff;
  border-radius: var(--radius-xl);
  max-width: 620px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-card.large {
  max-width: 820px;
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  background: var(--red-light);
  color: var(--red-primary);
}

/* Step Indicator */
.step-indicator-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.step-dot {
  height: 4px;
  flex: 1;
  background: #e5e7eb;
  border-radius: var(--radius-full);
  transition: background var(--transition-fast);
}

.step-dot.active {
  background: var(--red-primary);
}

.step-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--red-primary);
  margin-bottom: 4px;
}

/* Blog Article Viewer in Modal */
.blog-modal-article h3 {
  font-size: 1.6rem;
  margin: 20px 0 12px 0;
}

.blog-modal-article h4 {
  font-size: 1.25rem;
  margin: 20px 0 10px 0;
  color: var(--red-primary);
}

.blog-modal-article p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.blog-modal-article ul, .blog-modal-article ol {
  margin: 0 0 20px 24px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.blog-modal-article li {
  margin-bottom: 8px;
}

.blog-callout {
  background: var(--red-light);
  border-left: 4px solid var(--red-primary);
  padding: 16px 20px;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin: 24px 0;
  font-size: 0.95rem;
  color: var(--text-primary);
}

/* ==========================================================================
   FAQS ACCORDION STYLES
   ========================================================================== */
.faqs-accordion {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md, 14px);
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  transition: all 0.25s ease;
}

.faq-item:hover {
  border-color: rgba(229, 45, 37, 0.35);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
}

.faq-item.active {
  border-color: var(--red-primary);
  box-shadow: 0 8px 25px rgba(229, 45, 37, 0.08);
}

.faq-question-btn {
  width: 100%;
  text-align: left;
  padding: 22px 26px;
  background: none;
  border: none;
  font-size: 1.08rem;
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  transition: color 0.2s ease;
}

.faq-item.active .faq-question-btn {
  color: var(--red-primary);
}

.faq-toggle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background: var(--red-light, #fff1f0);
  color: var(--red-primary);
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.faq-item.active .faq-toggle-icon {
  background: var(--red-primary);
  color: #ffffff;
  transform: rotate(45deg);
}

.faq-answer-box {
  max-height: 0;
  overflow: hidden;
  padding: 0 26px;
  color: #4b5563;
  font-size: 0.98rem;
  line-height: 1.65;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.faq-item.active .faq-answer-box {
  max-height: 500px;
  padding: 0 26px 24px 26px;
  opacity: 1;
}

/* ==========================================================================
   FOOTER
   ========================================================================== */

.site-footer {
  background: var(--bg-dark);
  color: #ffffff;
  padding: 80px 0 30px 0;
}

.footer-top-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 60px;
}

.footer-brand p {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-top: 14px;
  line-height: 1.6;
}

.footer-social-box {
  margin-top: 20px;
}

.footer-social-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #cbd5e1;
  margin-bottom: 10px;
}

.footer-social-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.social-pill-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-pill-link.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(220, 39, 67, 0.3);
}

.social-pill-link.facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 119, 242, 0.3);
}

.social-pill-link svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.footer-col h4 {
  color: #ffffff;
  font-size: 1.05rem;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  text-decoration: none;
  color: #94a3b8;
  font-size: 0.88rem;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: #ffffff;
}

.office-clocks-grid {
  display: grid;
  gap: 12px;
}

.clock-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clock-city {
  font-weight: 600;
  font-size: 0.85rem;
}

.clock-time {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--red-bright);
  font-size: 0.85rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: #64748b;
  flex-wrap: wrap;
  gap: 14px;
}

/* ==========================================================================
   DEDICATED SERVICES PAGE STYLING (12 Services)
   ========================================================================== */

.services-page-hero {
  padding: 150px 0 60px 0;
  text-align: center;
  position: relative;
  background: radial-gradient(circle at 50% 30%, rgba(229, 45, 37, 0.05) 0%, transparent 60%);
}

.services-page-hero h1 {
  font-size: 3.2rem;
  line-height: 1.15;
  margin: 18px 0 16px 0;
  letter-spacing: -0.02em;
}

.services-page-hero p {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 780px;
  margin: 0 auto 32px auto;
  line-height: 1.6;
}

.services-category-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0 48px 0;
}

.svc-filter-btn {
  background: #ffffff;
  border: 1px solid var(--border-light);
  padding: 10px 20px;
  border-radius: var(--radius-full);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.svc-filter-btn:hover,
.svc-filter-btn.active {
  background: var(--red-primary);
  color: #ffffff;
  border-color: var(--red-primary);
  box-shadow: 0 4px 14px rgba(229, 45, 37, 0.25);
}

.all-services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 80px;
}

.full-service-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.full-service-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-red);
  box-shadow: var(--shadow-lg);
}

.full-service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: var(--gradient-brand);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.full-service-card:hover::before {
  opacity: 1;
}

.svc-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.svc-card-meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.svc-card-number {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--red-primary);
  line-height: 1;
  opacity: 0.9;
}

.svc-card-title {
  font-size: 1.55rem;
  line-height: 1.25;
  margin-bottom: 6px;
}

.svc-card-tagline {
  font-size: 0.88rem;
  color: var(--red-primary);
  font-weight: 600;
}

.svc-card-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 24px;
}

.sub-services-header {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.sub-services-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 28px;
  margin-top: auto;
}

.sub-svc-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-page);
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-primary);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.sub-svc-item svg {
  width: 14px;
  height: 14px;
  color: var(--red-primary);
  flex-shrink: 0;
}

/* ==========================================================================
   SERVICE DETAIL STANDALONE PAGE STYLING
   ========================================================================== */

.breadcrumb-bar {
  padding: 130px 0 20px 0;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.breadcrumb-bar a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-fast);
}

.breadcrumb-bar a:hover {
  color: var(--red-primary);
}

.breadcrumb-separator {
  margin: 0 8px;
  color: var(--border-light);
}

.service-detail-hero {
  padding: 20px 0 60px 0;
  border-bottom: 1px solid var(--border-light);
  margin-bottom: 50px;
}

.detail-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--red-light);
  color: var(--red-primary);
  border: 1px solid var(--border-red);
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.service-detail-title {
  font-size: 3.2rem;
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.service-detail-tagline {
  font-size: 1.25rem;
  color: var(--red-primary);
  font-weight: 600;
  margin-bottom: 20px;
}

.service-detail-desc {
  font-size: 1.08rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 860px;
  margin-bottom: 32px;
}

.detail-layout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  margin-bottom: 80px;
}

.detail-section-title {
  font-size: 1.65rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.detail-section-title span.step-icon {
  width: 32px;
  height: 32px;
  background: var(--red-primary);
  color: #ffffff;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  font-weight: 800;
}

.deliverables-box {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  margin-bottom: 40px;
  box-shadow: var(--shadow-sm);
}

.deliverable-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 0.96rem;
  color: var(--text-primary);
  font-weight: 600;
}

.deliverable-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.deliverable-item svg {
  color: var(--red-primary);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.process-steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.process-step-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: all var(--transition-fast);
}

.process-step-card:hover {
  border-color: var(--border-red);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.process-step-num {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--red-primary);
  line-height: 1;
  margin-bottom: 10px;
}

.process-step-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.process-step-detail {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.impact-box {
  background: linear-gradient(135deg, rgba(229, 45, 37, 0.06) 0%, rgba(229, 45, 37, 0.02) 100%);
  border: 1px solid var(--border-red);
  border-radius: var(--radius-xl);
  padding: 32px;
  margin-bottom: 40px;
}

.impact-box h4 {
  font-size: 1.25rem;
  color: var(--red-primary);
  margin-bottom: 12px;
}

.impact-box p {
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

.tech-tools-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.tool-tag {
  background: #ffffff;
  border: 1px solid var(--border-light);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-secondary);
}

/* Detail Sidebar */
.detail-sidebar {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.sidebar-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  box-shadow: var(--shadow-sm);
}

.sidebar-card-title {
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.quick-fact-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  font-size: 0.88rem;
}

.quick-fact-label {
  color: var(--text-muted);
  font-weight: 500;
}

.quick-fact-value {
  color: var(--text-primary);
  font-weight: 700;
}

.related-sub-list {
  list-style: none;
}

.related-sub-list li {
  margin-bottom: 8px;
}

.related-sub-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--bg-page);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text-primary);
  font-size: 0.88rem;
  font-weight: 600;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
}

.related-sub-link:hover,
.related-sub-link.active {
  background: #ffffff;
  border-color: var(--red-primary);
  color: var(--red-primary);
  padding-left: 18px;
}

@media (max-width: 1024px) {
  .detail-layout-grid { grid-template-columns: 1fr; }
  .process-steps-grid { grid-template-columns: 1fr; }
  .service-detail-title { font-size: 2.4rem; }
}

/* ==========================================================================
   ANIMATIONS & RESPONSIVE
   ========================================================================== */

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 1024px) {
  .hero-title { font-size: 2.8rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .about-pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .pricing-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
  .pricing-card.featured { transform: scale(1); }
  .footer-top-grid { grid-template-columns: 1fr 1fr; }
  .calculator-container { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .grader-form-grid { grid-template-columns: 1fr 1fr; }
  .grader-breakdown-grid { grid-template-columns: repeat(2, 1fr); }
  .mega-dropdown-menu { width: 90vw; }
  .mega-dropdown-grid { grid-template-columns: repeat(2, 1fr); }
  .all-services-grid { grid-template-columns: 1fr; }
}

/* ==========================================================================
   APEX GROWTH ENGINE - ANIMATED SCALING PROTOCOL CHART
   ========================================================================== */
.framework-chart-wrapper {
  background: #0d121f;
  background: linear-gradient(145deg, #0b0f19 0%, #111827 50%, #0f172a 100%);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: var(--radius-2xl, 24px);
  padding: 36px;
  color: #ffffff;
  box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.4), 0 0 30px rgba(239, 68, 68, 0.08);
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}

.framework-chart-wrapper::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -120px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
}

.chart-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.chart-title-group h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.chart-title-group p {
  font-size: 0.85rem;
  color: #94a3b8;
}

.chart-legend-pills {
  display: flex;
  gap: 16px;
  align-items: center;
}

.chart-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #cbd5e1;
}

.legend-dot-revenue {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ef4444;
  box-shadow: 0 0 10px #ef4444;
}

.legend-dot-roas {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
}

/* Stage Navigation Tabs */
.chart-stage-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  background: rgba(15, 23, 42, 0.6);
  padding: 6px;
  border-radius: var(--radius-lg, 14px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.chart-stage-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.chart-stage-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.04);
}

.chart-stage-btn.active {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.4);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
}

.stage-num-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 800;
}

.chart-stage-btn.active .stage-num-badge {
  background: #ef4444;
}

/* SVG Chart Canvas */
.growth-chart-svg-container {
  width: 100%;
  height: 280px;
  position: relative;
  margin-bottom: 28px;
}

.growth-chart-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.chart-grid-line {
  stroke: rgba(255, 255, 255, 0.06);
  stroke-dasharray: 4 4;
}

.chart-axis-text {
  fill: #64748b;
  font-size: 11px;
  font-family: inherit;
  font-weight: 600;
}

.chart-curve-revenue {
  fill: none;
  stroke: url(#revenueGradient);
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 4px 12px rgba(239, 68, 68, 0.45));
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.chart-curve-roas {
  fill: none;
  stroke: #10b981;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 6 4;
  opacity: 0.85;
}

.chart-area-fill {
  fill: url(#areaGradient);
  transition: all 0.6s ease;
}

.chart-node-circle {
  cursor: pointer;
  transition: all 0.3s ease;
}

.chart-node-circle.active {
  r: 9;
  filter: drop-shadow(0 0 10px #ef4444);
}

.chart-pulse-ring {
  animation: pulseGlow 2s infinite ease-out;
}

@keyframes pulseGlow {
  0% { r: 6; opacity: 0.8; stroke-width: 2; }
  100% { r: 18; opacity: 0; stroke-width: 0.5; }
}

/* Dynamic KPI Banner */
.chart-kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.chart-kpi-card {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg, 14px);
  padding: 18px;
  transition: all 0.3s ease;
  position: relative;
}

.chart-kpi-card:hover, .chart-kpi-card.highlight {
  border-color: rgba(239, 68, 68, 0.4);
  background: rgba(30, 41, 59, 0.8);
  transform: translateY(-2px);
}

.kpi-label {
  font-size: 0.76rem;
  color: #94a3b8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.kpi-value {
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
  line-height: 1.1;
}

.kpi-subtext {
  font-size: 0.76rem;
  color: #10b981;
  font-weight: 600;
}

/* ==========================================================================
   ANIMATIONS & RESPONSIVE DESIGN SUITE
   ========================================================================== */

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Prevent horizontal viewport overflow & input zoom on mobile */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
  -webkit-text-size-adjust: 100%;
}

/* 1. TABLET BREAKPOINT (<= 1024px) */
@media (max-width: 1024px) {
  .hero-title { font-size: 2.8rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .about-pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .pricing-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
  .pricing-card.featured { transform: scale(1); }
  .footer-top-grid { grid-template-columns: 1fr 1fr; }
  .calculator-container { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .grader-form-grid { grid-template-columns: 1fr 1fr; }
  .grader-breakdown-grid { grid-template-columns: repeat(2, 1fr); }
  .mega-dropdown-menu { width: 90vw; }
  .mega-dropdown-grid { grid-template-columns: repeat(2, 1fr); }
  .all-services-grid { grid-template-columns: 1fr; }
  .chart-kpi-grid { grid-template-columns: repeat(2, 1fr); }
}

/* 2. MOBILE & PHONES BREAKPOINT (<= 768px) */
@media (max-width: 768px) {
  /* Containers & Spacing */
  .container {
    padding: 0 16px;
  }

  /* Inputs iOS auto-zoom prevention */
  input, select, textarea {
    font-size: 16px !important;
  }

  /* Navigation & Header */
  .nav-links {
    display: none;
  }
  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-cta-btn {
    display: none;
  }
  .header-actions {
    gap: 8px;
  }

  /* Hero Section */
  .hero-section {
    padding-top: 100px;
    padding-bottom: 24px;
  }
  .hero-badge {
    font-size: 0.78rem;
    padding: 6px 12px;
    margin-bottom: 16px;
  }
  .hero-title {
    font-size: clamp(1.85rem, 6.5vw, 2.35rem);
    line-height: 1.2;
    margin-bottom: 16px;
    word-break: break-word;
  }
  .hero-description {
    font-size: 0.95rem;
    line-height: 1.55;
    margin-bottom: 24px;
  }
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
    gap: 12px;
    margin-bottom: 32px;
  }
  .hero-cta-group .btn {
    width: 100%;
    justify-content: center;
    padding: 14px 18px;
    font-size: 0.95rem;
  }

  /* Hero Showcase Slider */
  .hero-slider-wrapper {
    margin-bottom: 32px;
    border-radius: 16px;
  }
  .slider-nav-tabs {
    padding: 6px 8px;
    gap: 4px;
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
  }
  .slider-tab-btn {
    padding: 6px 10px;
    font-size: 0.72rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .slide-card-inner {
    padding: 16px 14px;
  }
  .slide-header-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 12px;
  }
  .slide-badge-tag {
    font-size: 0.7rem;
  }
  .slide-status-chip {
    font-size: 0.68rem;
  }
  .slide-metrics-row {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 14px;
  }
  .slide-kpi-box {
    padding: 12px 10px;
  }
  .slide-kpi-val {
    font-size: 1.35rem;
  }
  .slide-kpi-lbl {
    font-size: 0.72rem;
  }
  .slide-kpi-sub {
    font-size: 0.68rem;
  }
  .slide-campaign-bar {
    gap: 6px;
  }
  .campaign-pill {
    font-size: 0.7rem;
    padding: 4px 8px;
  }

  /* Partners Marquee */
  .hero-partners {
    padding-top: 18px;
  }
  .partners-caption {
    font-size: 0.72rem;
    margin-bottom: 12px;
  }
  .partners-marquee {
    gap: 8px 14px;
  }
  .partner-logo-item {
    font-size: 0.78rem;
    padding: 4px 8px;
    gap: 6px;
  }
  .partner-logo-item svg {
    width: 15px;
    height: 15px;
  }

  /* Stats Bar 2x2 Grid */
  .stats-section {
    padding: 12px 0 20px 0;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .stat-card {
    padding: 14px 10px;
    border-radius: 12px;
  }
  .stat-number {
    font-size: 1.75rem;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 0.78rem;
    line-height: 1.25;
  }
  .stat-subtext {
    font-size: 0.68rem;
    line-height: 1.3;
  }

  /* Services Section & Accordion Dip-Downs */
  .services-section {
    padding: 30px 0 60px 0;
  }
  .section-title {
    font-size: clamp(1.6rem, 5.5vw, 2.1rem);
  }
  .section-subtitle {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .dipdown-controls-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .dipdown-search-box {
    max-width: 100%;
    width: 100%;
  }
  .toggle-all-btn {
    width: 100%;
    justify-content: center;
    padding: 10px;
    font-size: 0.82rem;
  }
  .service-accordion-header {
    padding: 16px 14px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .service-header-left {
    gap: 10px;
  }
  .service-header-icon {
    width: 38px;
    height: 38px;
    min-width: 38px;
  }
  .service-header-title {
    font-size: 1.05rem;
  }
  .service-header-right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .service-accordion-body {
    padding: 16px 12px;
  }
  .subpoints-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .sub-card {
    padding: 14px;
    border-radius: 10px;
  }

  /* Marketing Playbooks / Blog Cards */
  .blogs-section {
    padding: 50px 0;
  }
  .blogs-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .blog-card {
    padding: 20px 16px;
    border-radius: 14px;
  }
  .blog-card-title {
    font-size: 1.15rem;
  }
  .blog-card-summary {
    font-size: 0.88rem;
  }

  /* Apex Growth Engine Protocol & Chart */
  .framework-section {
    padding: 50px 0 !important;
  }
  .framework-chart-wrapper {
    padding: 20px 14px;
    border-radius: 18px;
    margin-bottom: 28px;
  }
  .chart-header-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 16px;
    padding-bottom: 14px;
  }
  .chart-title-group h3 {
    font-size: 1.15rem;
  }
  .chart-legend-pills {
    gap: 12px;
    font-size: 0.76rem;
  }
  .chart-stage-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    padding: 4px;
    border-radius: 12px;
    margin-bottom: 18px;
  }
  .chart-stage-btn {
    padding: 8px 6px;
    font-size: 0.74rem;
    gap: 4px;
    justify-content: center;
  }
  .stage-num-badge {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
  }
  .growth-chart-svg-container {
    height: 200px;
    margin-bottom: 18px;
  }
  .chart-axis-text {
    font-size: 9px;
  }
  .chart-kpi-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 10px;
  }
  .chart-kpi-card {
    padding: 12px 10px;
  }
  .kpi-label {
    font-size: 0.68rem;
    margin-bottom: 3px;
  }
  .kpi-value {
    font-size: 1.25rem;
  }
  .kpi-subtext {
    font-size: 0.68rem;
  }
  .framework-cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .pillar-card {
    padding: 22px 18px;
  }

  /* ROI Calculator & Grader */
  .calculator-container {
    padding: 20px 14px;
    border-radius: 16px;
  }
  .calc-big-value {
    font-size: 2rem;
  }
  .grader-form-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .grader-breakdown-grid {
    grid-template-columns: 1fr;
  }

  /* General Grids & Footer */
  .about-top-grid, .about-pillars-grid, .cases-grid, .footer-top-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  /* Modals */
  .modal-overlay {
    padding: 12px;
  }
  .modal-card {
    max-width: 95%;
    width: 95%;
    padding: 22px 16px;
    max-height: 90vh;
    border-radius: 16px;
  }

  /* Floating WhatsApp Button */
  .floating-wa-btn {
    bottom: 18px;
    right: 18px;
    width: 52px;
    height: 52px;
    font-size: 26px;
  }
}

/* 3. ULTRA-COMPACT MOBILE BREAKPOINT (<= 420px) */
@media (max-width: 420px) {
  .hero-title {
    font-size: 1.85rem;
  }
  .slide-metrics-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .stat-number {
    font-size: 1.55rem;
  }
  .chart-stage-nav {
    grid-template-columns: 1fr;
  }
  .chart-kpi-grid {
    grid-template-columns: 1fr 1fr !important;
  }
  .chart-kpi-card {
    padding: 10px 8px;
  }
  .kpi-value {
    font-size: 1.1rem;
  }
}

/* ==========================================================================
   COMPREHENSIVE DARK THEME SYSTEM
   ========================================================================== */
[data-theme="dark"] {
  --bg-page: #0b0f19;
  --bg-cream-darker: #111827;
  --bg-surface: #111827;
  --bg-surface-elevated: #1a2234;
  --bg-dark: #060910;
  --bg-dark-card: #131b2e;

  --text-primary: #f9fafb;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --text-light: #f9fafb;

  --border-light: rgba(255, 255, 255, 0.1);
  --border-red: rgba(229, 45, 37, 0.35);
  --border-red-bright: rgba(229, 45, 37, 0.65);

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 8px 24px -4px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 16px 40px -8px rgba(0, 0, 0, 0.65);

  --red-light: rgba(229, 45, 37, 0.15);
  --red-subtle: rgba(229, 45, 37, 0.12);
  --gradient-card: linear-gradient(180deg, #161f32 0%, #111827 100%);
}

[data-theme="dark"] body {
  background-color: var(--bg-page);
  color: var(--text-primary);
}

[data-theme="dark"] .grid-overlay {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

[data-theme="dark"] .site-header {
  background: rgba(11, 15, 25, 0.88);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .site-header.scrolled {
  background: rgba(11, 15, 25, 0.98);
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

[data-theme="dark"] .nav-link {
  color: #cbd5e1;
}

[data-theme="dark"] .nav-link:hover,
[data-theme="dark"] .nav-link.active {
  color: var(--red-bright);
  background: rgba(229, 45, 37, 0.12);
}

[data-theme="dark"] .mega-dropdown-menu {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
}

[data-theme="dark"] .mega-service-block {
  background: rgba(255, 255, 255, 0.03);
}

[data-theme="dark"] .mega-service-name {
  color: #f9fafb;
}

[data-theme="dark"] .mega-sublist a {
  color: #94a3b8;
}

[data-theme="dark"] .mega-sublist a:hover {
  color: var(--red-bright);
}

[data-theme="dark"] .mega-dropdown-footer {
  background: #0b0f19;
  border-top-color: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}

[data-theme="dark"] .btn-secondary {
  background: #1f2937;
  color: #f9fafb;
  border-color: rgba(255, 255, 255, 0.15);
}

[data-theme="dark"] .btn-secondary:hover {
  background: #273449;
  border-color: var(--red-primary);
  color: var(--red-bright);
}

[data-theme="dark"] .mobile-menu-btn {
  background: #1f2937;
  border-color: rgba(255, 255, 255, 0.15);
  color: #f9fafb;
}

/* Cards across all sections */
[data-theme="dark"] .stat-card,
[data-theme="dark"] .capability-card,
[data-theme="dark"] .step-card,
[data-theme="dark"] .service-accordion-card,
[data-theme="dark"] .subpoint-link-card,
[data-theme="dark"] .calc-card,
[data-theme="dark"] .calc-result-box,
[data-theme="dark"] .grader-card,
[data-theme="dark"] .grader-form-box,
[data-theme="dark"] .grader-report-box,
[data-theme="dark"] .blog-card,
[data-theme="dark"] .faq-item,
[data-theme="dark"] .faq-cta-banner,
[data-theme="dark"] .partner-card,
[data-theme="dark"] .process-step,
[data-theme="dark"] .team-card,
[data-theme="dark"] .contact-form-box,
[data-theme="dark"] .contact-info-card,
[data-theme="dark"] .detail-hero-card,
[data-theme="dark"] .detail-feature-card,
[data-theme="dark"] .modal-card,
[data-theme="dark"] .pillar-card {
  background: #111827 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: #f9fafb;
}

[data-theme="dark"] .service-accordion-header {
  background: #111827;
  color: #f9fafb;
}

[data-theme="dark"] .service-accordion-card.open .service-accordion-header {
  background: #161f32;
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .subpoint-link-card:hover {
  background: #161f32 !important;
  border-color: var(--red-primary) !important;
}

[data-theme="dark"] .subpoint-card-title {
  color: #f9fafb;
}

[data-theme="dark"] .subpoint-card-desc {
  color: #94a3b8;
}

[data-theme="dark"] .framework-chart-wrapper {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .stage-btn {
  background: #1f2937;
  color: #cbd5e1;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .stage-btn:hover {
  background: #273449;
  color: #ffffff;
}

[data-theme="dark"] .stage-btn.active {
  background: var(--red-primary);
  color: #ffffff;
  border-color: var(--red-primary);
}

[data-theme="dark"] .chart-kpi-card {
  background: #1a2234;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .partner-logo-item {
  background: #161f32;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .partner-logo-item:hover {
  background: #1f2937;
  border-color: var(--red-primary);
}

[data-theme="dark"] .faq-question-btn {
  color: #f9fafb;
}

[data-theme="dark"] .faq-answer-box {
  color: #cbd5e1;
}

[data-theme="dark"] .faq-toggle-icon {
  background: rgba(229, 45, 37, 0.2);
  color: var(--red-bright);
}

[data-theme="dark"] .faq-item.active .faq-toggle-icon {
  background: var(--red-primary);
  color: #ffffff;
}

/* Inputs in Dark Mode */
[data-theme="dark"] input,
[data-theme="dark"] select,
[data-theme="dark"] textarea {
  background: #1f2937 !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  color: #ffffff !important;
}

[data-theme="dark"] input::placeholder,
[data-theme="dark"] textarea::placeholder {
  color: #64748b;
}

[data-theme="dark"] .dipdown-search-input {
  background: #1f2937 !important;
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}

[data-theme="dark"] .toggle-all-btn {
  background: #1f2937;
  color: #cbd5e1;
  border-color: rgba(255, 255, 255, 0.15);
}

[data-theme="dark"] .toggle-all-btn:hover {
  background: #273449;
  color: var(--red-bright);
  border-color: var(--red-primary);
}

