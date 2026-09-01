/* ==========================================================================
   CONNECT DIGITAL MEDIA - PROFESSIONAL ADMIN DASHBOARD STYLES
   Theme: Slate Executive Glassmorphism & Crimson Accent (#E52D25)
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap');

:root {
  --admin-bg: #090d16;
  --admin-sidebar-bg: #0d1322;
  --admin-card-bg: #131b2e;
  --admin-card-border: rgba(255, 255, 255, 0.08);
  --admin-card-hover: #19233c;
  --admin-header-bg: rgba(13, 19, 34, 0.85);

  --red-primary: #E52D25;
  --red-glow: rgba(229, 45, 37, 0.35);
  --emerald-primary: #10b981;
  --emerald-glow: rgba(16, 185, 129, 0.25);
  --blue-primary: #3b82f6;
  --amber-primary: #f59e0b;
  --purple-primary: #8b5cf6;

  --text-main: #f8fafc;
  --text-sub: #94a3b8;
  --text-muted: #64748b;

  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background-color: var(--admin-bg);
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
}

/* ==========================================================================
   LOGIN OVERLAY SCREEN
   ========================================================================== */
.admin-login-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, #1e1528 0%, #090d16 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: rgba(19, 27, 46, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(229, 45, 37, 0.15);
  text-align: center;
}

.login-logo {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  margin: 0 auto 20px auto;
  border: 2px solid rgba(229, 45, 37, 0.4);
  box-shadow: 0 8px 20px var(--red-glow);
  object-fit: cover;
}

.login-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.login-subtitle {
  color: var(--text-sub);
  font-size: 0.88rem;
  margin-bottom: 28px;
}

.login-input-group {
  margin-bottom: 20px;
  text-align: left;
}

.login-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-sub);
  margin-bottom: 6px;
}

.login-input {
  width: 100%;
  padding: 13px 16px;
  background: rgba(9, 13, 22, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-sm);
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
}

.login-input:focus {
  border-color: var(--red-primary);
  box-shadow: 0 0 0 3px rgba(229, 45, 37, 0.2);
}

.login-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #E52D25 0%, #ff4138 100%);
  color: #ffffff;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-heading);
  cursor: pointer;
  box-shadow: 0 8px 20px var(--red-glow);
  transition: transform 0.2s, box-shadow 0.2s;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px var(--red-glow);
}

/* ==========================================================================
   ADMIN LAYOUT (SIDEBAR + MAIN)
   ========================================================================== */
.admin-sidebar {
  width: 260px;
  background: var(--admin-sidebar-bg);
  border-right: 1px solid var(--admin-card-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-header {
  padding: 24px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--admin-card-border);
}

.sidebar-logo-img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: cover;
}

.sidebar-brand-text {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  color: #ffffff;
}

.sidebar-badge {
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(229, 45, 37, 0.15);
  color: var(--red-primary);
  font-weight: 700;
  letter-spacing: 0.5px;
}

.sidebar-nav {
  padding: 20px 12px;
  flex: 1;
  overflow-y: auto;
}

.nav-section-title {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  font-weight: 700;
  padding: 0 12px;
  margin: 16px 0 8px 0;
}

.admin-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-radius: var(--radius-sm);
  color: var(--text-sub);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.88rem;
  margin-bottom: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.admin-nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.admin-nav-item.active {
  background: var(--red-primary);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--red-glow);
}

.sidebar-footer {
  padding: 18px 16px;
  border-top: 1px solid var(--admin-card-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.admin-user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.admin-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--red-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
}

.admin-user-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
}

.admin-user-role {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.logout-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: all 0.2s;
}

.logout-btn:hover {
  color: var(--red-primary);
  background: rgba(229, 45, 37, 0.1);
}

/* ==========================================================================
   MAIN CONTENT AREA
   ========================================================================== */
.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--admin-bg);
}

.admin-topbar {
  height: 70px;
  background: var(--admin-header-bg);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--admin-card-border);
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 90;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.page-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.sync-status-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--emerald-primary);
}

.sync-status-pill.offline {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.25);
  color: var(--amber-primary);
}

.btn-primary-admin {
  background: var(--red-primary);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  border: none;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px var(--red-glow);
  transition: all 0.2s ease;
}

.btn-primary-admin:hover {
  background: #ff4138;
  transform: translateY(-1px);
}

.btn-secondary-admin {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--admin-card-border);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-secondary-admin:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* ==========================================================================
   CONTENT PANELS
   ========================================================================== */
.admin-content {
  padding: 28px;
  flex: 1;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

/* Metrics KPI Cards Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

.metric-card {
  background: var(--admin-card-bg);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-md);
  padding: 22px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}

.metric-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.15);
}

.metric-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.metric-label {
  font-size: 0.82rem;
  color: var(--text-sub);
  font-weight: 600;
}

.metric-icon-box {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-primary);
}

.metric-val {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 6px;
}

.metric-sub {
  font-size: 0.78rem;
  color: var(--emerald-primary);
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Dashboard Sections Grid */
.dash-two-col {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 28px;
}

.dash-panel {
  background: var(--admin-card-bg);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-md);
  padding: 24px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.panel-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
}

/* ==========================================================================
   LEADS CRM TABLE
   ========================================================================== */
.table-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.search-input-box {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-input-box input {
  width: 100%;
  padding: 10px 14px 10px 38px;
  background: rgba(9, 13, 22, 0.6);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-sm);
  color: #ffffff;
  font-size: 0.88rem;
  outline: none;
}

.search-input-box input:focus {
  border-color: var(--red-primary);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.admin-select {
  padding: 9px 14px;
  background: rgba(9, 13, 22, 0.6);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-sm);
  color: var(--text-sub);
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
}

.admin-table-container {
  overflow-x: auto;
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-md);
  background: var(--admin-card-bg);
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.88rem;
}

.admin-table th {
  background: rgba(9, 13, 22, 0.7);
  padding: 14px 18px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-muted);
  font-weight: 700;
  border-bottom: 1px solid var(--admin-card-border);
}

.admin-table td {
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: var(--text-sub);
  vertical-align: middle;
}

.admin-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.lead-name-cell {
  font-weight: 700;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.lead-brand-sub {
  font-size: 0.75rem;
  color: var(--red-primary);
  font-weight: 600;
  margin-top: 2px;
}

/* Status Badges */
.status-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-new { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
.status-contacted { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
.status-audit { background: rgba(139, 92, 246, 0.15); color: #a78bfa; border: 1px solid rgba(139, 92, 246, 0.3); }
.status-won { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
.status-lost { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }

/* Quick Action Buttons in Table */
.action-btn-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tbl-action-btn {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid var(--admin-card-border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-sub);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.tbl-action-btn.wa {
  background: rgba(37, 211, 102, 0.12);
  border-color: rgba(37, 211, 102, 0.3);
  color: #25D366;
}

.tbl-action-btn.wa:hover {
  background: #25D366;
  color: #000000;
}

.tbl-action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* ==========================================================================
   SETTINGS & WEBHOOK TAB
   ========================================================================== */
.settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-setting-group {
  margin-bottom: 20px;
}

.setting-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-sub);
  margin-bottom: 8px;
}

.setting-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(9, 13, 22, 0.6);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-sm);
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
}

.setting-input:focus {
  border-color: var(--red-primary);
}

.code-box {
  background: #090d16;
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-sm);
  padding: 16px;
  font-family: monospace;
  font-size: 0.82rem;
  color: #38bdf8;
  overflow-x: auto;
  line-height: 1.5;
}

/* ==========================================================================
   MODALS
   ========================================================================== */
.admin-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.admin-modal-backdrop.open {
  display: flex;
}

.admin-modal-card {
  width: 100%;
  max-width: 580px;
  background: var(--admin-card-bg);
  border: 1px solid var(--admin-card-border);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  position: relative;
}

.admin-modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.3rem;
  cursor: pointer;
}

/* Toast Notifications */
.admin-toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: var(--admin-card-bg);
  border: 1px solid var(--emerald-primary);
  color: #ffffff;
  padding: 14px 20px;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 99999;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.admin-toast.show {
  transform: translateY(0);
  opacity: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .dash-two-col, .settings-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  body {
    flex-direction: column;
  }
  .admin-sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
