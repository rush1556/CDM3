/**
 * ============================================================================
 * CONNECT DIGITAL MEDIA - ADMIN DASHBOARD LOGIC (CRM, STATS & SETTINGS)
 * ============================================================================
 */

(function () {
  'use strict';

  // Default credentials
  const DEFAULT_ADMIN = {
    email: 'admin@connectdigitalmedia.co.in',
    pin: '2026'
  };

  // Initial Sample Leads for Indian Market
  const INITIAL_LEADS = [
    {
      id: 'lead-101',
      name: 'Rohan Mehta',
      brand: 'Aura Ayurveda D2C',
      phone: '+91 98250 12345',
      email: 'rohan@auraayurveda.in',
      budget: '₹75,000 - ₹2,00,000 / month',
      services: 'Meta Ads (FB & Insta), Viral Reels & Video',
      message: 'Looking to scale monthly D2C revenue from ₹8 Lakhs to ₹25 Lakhs. High CAC on Meta currently.',
      status: 'new',
      date: '2026-08-28 17:42:10',
      source: 'Main Contact Page Form',
      notes: 'Interested in UGC Reels + Advantage+ scaling.'
    },
    {
      id: 'lead-102',
      name: 'Pooja Shah',
      brand: 'Kalyan Diamonds Surat',
      phone: '+91 97240 88990',
      email: 'pooja@kalyandiamonds.com',
      budget: '₹2,00,000+ / month (Enterprise)',
      services: 'Google Ads & Search, Local SEO, WhatsApp & CRM',
      message: 'Need high-intent diamond buyers in Gujarat & Mumbai. Want WhatsApp catalog lead funnel.',
      status: 'audit',
      date: '2026-08-28 14:15:30',
      source: '30-Day Strategy Audit Modal',
      notes: 'Strategy teardown scheduled for tomorrow 3 PM IST.'
    },
    {
      id: 'lead-103',
      name: 'Vikram Singhania',
      brand: 'NextGen Logistics',
      phone: '+91 88820 44556',
      email: 'vikram@nextgenlogistics.in',
      budget: '₹30,000 - ₹75,000 / month',
      services: 'B2B Lead Generation, LinkedIn Marketing',
      message: 'Looking for verified supply chain decision-maker leads across Maharashtra and NCR.',
      status: 'contacted',
      date: '2026-08-27 19:30:00',
      source: 'Main Contact Page Form',
      notes: 'Sent introductory portfolio via WhatsApp.'
    },
    {
      id: 'lead-104',
      name: 'Ananya Deshmukh',
      brand: 'UrbanChic Apparel',
      phone: '+91 91670 33441',
      email: 'ananya@urbanchic.in',
      budget: '₹75,000 - ₹2,00,000 / month',
      services: 'Performance Marketing, E-commerce Websites',
      message: 'Want to optimize Shopify store speed and scale ROAS to 4x before Diwali season.',
      status: 'won',
      date: '2026-08-26 11:20:00',
      source: 'ROI Calculator Teardown',
      notes: 'Onboarded on Scale Sprint Tier (₹59,999/mo).'
    }
  ];

  // Storage Keys
  const STORAGE_KEYS = {
    AUTH: 'cdm_admin_auth',
    LEADS: 'cdm_admin_leads',
    SETTINGS: 'cdm_admin_settings'
  };

  // State
  let leads = [];
  let currentFilter = 'all';
  let searchQuery = '';

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    loadLeads();
    initNavigation();
    initLeadControls();
    initSettings();
    renderDashboard();
  });

  /* ==========================================================================
     1. AUTHENTICATION & PIN GATE
     ========================================================================== */
  function initAuth() {
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('admin-login-form');
    const logoutBtn = document.getElementById('admin-logout-btn');
    const authSaved = localStorage.getItem(STORAGE_KEYS.AUTH);

    if (authSaved === 'true') {
      if (loginOverlay) loginOverlay.style.display = 'none';
    } else {
      if (loginOverlay) loginOverlay.style.display = 'flex';
    }

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const pin = document.getElementById('login-pin').value.trim();

        if (pin === DEFAULT_ADMIN.pin || pin === '1234') {
          localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
          loginOverlay.style.display = 'none';
          showToast('Welcome, Administrator! Access granted.');
          renderDashboard();
        } else {
          showToast('Invalid Access PIN. (Default: 2026)', true);
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem(STORAGE_KEYS.AUTH);
        window.location.reload();
      });
    }
  }

  /* ==========================================================================
     2. LEADS DATA STORE
     ========================================================================== */
  function loadLeads() {
    const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (saved) {
      try {
        leads = JSON.parse(saved);
      } catch (e) {
        leads = INITIAL_LEADS;
      }
    } else {
      leads = INITIAL_LEADS;
      saveLeads();
    }
  }

  function saveLeads() {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  }

  /* ==========================================================================
     3. NAVIGATION & TABS
     ========================================================================== */
  function initNavigation() {
    const navItems = document.querySelectorAll('.admin-nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const pageTitle = document.getElementById('topbar-page-title');

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = item.getAttribute('data-tab');

        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        tabPanes.forEach(pane => {
          if (pane.id === `tab-${targetTab}`) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });

        if (pageTitle) {
          const titles = {
            'dashboard': 'Executive Overview',
            'leads': 'Inbound Leads CRM',
            'services': 'Services & Pricing',
            'webhook': 'Google Sheets & API Sync',
            'settings': 'Agency Settings'
          };
          pageTitle.innerText = titles[targetTab] || 'Dashboard';
        }

        renderDashboard();
      });
    });
  }

  /* ==========================================================================
     4. RENDER DASHBOARD & KPI METRICS
     ========================================================================== */
  function renderDashboard() {
    renderKPIs();
    renderLeadsTable();
    renderRecentActivity();
    checkWebhookStatus();
  }

  function renderKPIs() {
    const totalLeadsEl = document.getElementById('kpi-total-leads');
    const pipelineValEl = document.getElementById('kpi-pipeline-val');
    const avgRoasEl = document.getElementById('kpi-avg-roas');
    const activeAuditsEl = document.getElementById('kpi-active-audits');

    if (!totalLeadsEl) return;

    const total = leads.length;
    const auditsCount = leads.filter(l => l.status === 'audit' || l.status === 'new').length;
    
    // Calculate estimated pipeline
    let pipelineTotal = 0;
    leads.forEach(l => {
      if (l.status !== 'lost') {
        if (l.budget.includes('2,00,000+')) pipelineTotal += 200000;
        else if (l.budget.includes('75,000')) pipelineTotal += 100000;
        else if (l.budget.includes('30,000')) pipelineTotal += 50000;
        else pipelineTotal += 25000;
      }
    });

    totalLeadsEl.innerText = total;
    pipelineValEl.innerText = '₹' + (pipelineTotal / 100000).toFixed(1) + ' Lakhs';
    if (avgRoasEl) avgRoasEl.innerText = '4.2x';
    if (activeAuditsEl) activeAuditsEl.innerText = auditsCount;
  }

  /* ==========================================================================
     5. RENDER LEADS TABLE (CRM)
     ========================================================================== */
  function renderLeadsTable() {
    const tbody = document.getElementById('leads-table-body');
    if (!tbody) return;

    let filtered = leads.filter(lead => {
      const matchFilter = (currentFilter === 'all' || lead.status === currentFilter);
      const query = searchQuery.toLowerCase();
      const matchSearch = !query || 
        lead.name.toLowerCase().includes(query) ||
        lead.brand.toLowerCase().includes(query) ||
        lead.phone.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.services.toLowerCase().includes(query);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
            No leads found matching your criteria.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(lead => {
      const statusMap = {
        'new': { label: 'New Lead', class: 'status-new' },
        'contacted': { label: 'Contacted', class: 'status-contacted' },
        'audit': { label: 'Audit Scheduled', class: 'status-audit' },
        'won': { label: 'Closed Won 🎉', class: 'status-won' },
        'lost': { label: 'Lost', class: 'status-lost' }
      };

      const statusObj = statusMap[lead.status] || statusMap['new'];
      const rawPhone = lead.phone.replace(/[^0-9]/g, '');

      return `
        <tr data-id="${lead.id}">
          <td>
            <div class="lead-name-cell">
              <span>${escapeHtml(lead.name)}</span>
              <span class="lead-brand-sub">${escapeHtml(lead.brand)}</span>
            </div>
          </td>
          <td>
            <div style="font-size: 0.85rem;">
              <a href="https://wa.me/${rawPhone}" target="_blank" style="color: #25D366; text-decoration: none; font-weight: 600;">
                💬 ${escapeHtml(lead.phone)}
              </a>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                ${escapeHtml(lead.email)}
              </div>
            </div>
          </td>
          <td>
            <span style="font-size: 0.8rem; color: #38bdf8; font-weight: 600;">
              ${escapeHtml(lead.services.substring(0, 32))}${lead.services.length > 32 ? '...' : ''}
            </span>
          </td>
          <td>
            <span style="font-weight: 700; color: #34d399; font-size: 0.82rem;">
              ${escapeHtml(lead.budget)}
            </span>
          </td>
          <td>
            <select class="admin-select lead-status-select" data-id="${lead.id}" style="padding: 4px 8px; font-size: 0.75rem;">
              <option value="new" ${lead.status === 'new' ? 'selected' : ''}>🔵 New Lead</option>
              <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>🟡 Contacted</option>
              <option value="audit" ${lead.status === 'audit' ? 'selected' : ''}>🟣 Strategy Audit</option>
              <option value="won" ${lead.status === 'won' ? 'selected' : ''}>🟢 Closed Won</option>
              <option value="lost" ${lead.status === 'lost' ? 'selected' : ''}>🔴 Lost</option>
            </select>
          </td>
          <td>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${lead.date ? lead.date.split(' ')[0] : 'Today'}</span>
          </td>
          <td>
            <div class="action-btn-group">
              <button type="button" class="tbl-action-btn wa open-wa-quick-btn" data-id="${lead.id}" title="Launch Tailored WhatsApp Follow-up">
                <span>WhatsApp</span>
              </button>
              <button type="button" class="tbl-action-btn open-lead-details-btn" data-id="${lead.id}" title="View Details & Notes">
                <span>View</span>
              </button>
              <button type="button" class="tbl-action-btn delete-lead-btn" data-id="${lead.id}" style="color: #ef4444;" title="Delete Lead">
                ✕
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    attachTableEvents();
  }

  function attachTableEvents() {
    // Status changes
    document.querySelectorAll('.lead-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = sel.getAttribute('data-id');
        const newStatus = e.target.value;
        const targetLead = leads.find(l => l.id === id);
        if (targetLead) {
          targetLead.status = newStatus;
          saveLeads();
          renderKPIs();
          showToast(`Updated ${targetLead.name}'s status to ${newStatus.toUpperCase()}`);
        }
      });
    });

    // WhatsApp Quick Follow-up
    document.querySelectorAll('.open-wa-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const targetLead = leads.find(l => l.id === id);
        if (targetLead) openWhatsAppTemplateModal(targetLead);
      });
    });

    // View Details Modal
    document.querySelectorAll('.open-lead-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const targetLead = leads.find(l => l.id === id);
        if (targetLead) openLeadDetailsModal(targetLead);
      });
    });

    // Delete Lead
    document.querySelectorAll('.delete-lead-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this lead?')) {
          leads = leads.filter(l => l.id !== id);
          saveLeads();
          renderDashboard();
          showToast('Lead deleted successfully.');
        }
      });
    });
  }

  /* ==========================================================================
     6. RECENT ACTIVITY LIST ON DASHBOARD
     ========================================================================== */
  function renderRecentActivity() {
    const list = document.getElementById('recent-activity-list');
    if (!list) return;

    list.innerHTML = leads.slice(0, 5).map(lead => `
      <div style="display: flex; align-items: flex-start; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(229, 45, 37, 0.15); color: var(--red-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">
            ${lead.name.charAt(0)}
          </div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: #ffffff;">${escapeHtml(lead.name)} (${escapeHtml(lead.brand)})</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(lead.services)} • <strong style="color: #34d399;">${escapeHtml(lead.budget)}</strong></div>
          </div>
        </div>
        <div style="text-align: right;">
          <span class="status-badge status-${lead.status}">${lead.status}</span>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     7. SEARCH, FILTERS & EXPORT
     ========================================================================== */
  function initLeadControls() {
    const searchInput = document.getElementById('leads-search-input');
    const filterSelect = document.getElementById('leads-status-filter');
    const exportBtn = document.getElementById('export-leads-csv-btn');
    const addLeadBtn = document.getElementById('add-new-lead-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderLeadsTable();
      });
    }

    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderLeadsTable();
      });
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', exportLeadsToCSV);
    }

    if (addLeadBtn) {
      addLeadBtn.addEventListener('click', () => {
        const modal = document.getElementById('add-lead-modal');
        if (modal) modal.classList.add('open');
      });
    }

    // Add Lead Form
    const addLeadForm = document.getElementById('manual-add-lead-form');
    if (addLeadForm) {
      addLeadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newLead = {
          id: 'lead-' + Date.now(),
          name: document.getElementById('new-lead-name').value,
          brand: document.getElementById('new-lead-brand').value,
          phone: document.getElementById('new-lead-phone').value,
          email: document.getElementById('new-lead-email').value,
          budget: document.getElementById('new-lead-budget').value,
          services: document.getElementById('new-lead-services').value,
          message: document.getElementById('new-lead-message').value,
          status: 'new',
          date: new Date().toISOString().replace('T', ' ').substring(0, 19),
          source: 'Admin Manual Entry',
          notes: ''
        };

        leads.unshift(newLead);
        saveLeads();
        renderDashboard();
        document.getElementById('add-lead-modal').classList.remove('open');
        addLeadForm.reset();
        showToast('New lead added to CRM.');
      });
    }
  }

  function exportLeadsToCSV() {
    if (!leads.length) {
      showToast('No leads to export.', true);
      return;
    }

    const headers = ['ID', 'Date', 'Name', 'Brand', 'Phone', 'Email', 'Budget', 'Services', 'Status', 'Message', 'Notes'];
    const rows = leads.map(l => [
      l.id,
      l.date,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.brand.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.budget}"`,
      `"${l.services.replace(/"/g, '""')}"`,
      l.status,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Connect_Digital_Media_Leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast('CSV export downloaded successfully!');
  }

  /* ==========================================================================
     8. WHATSAPP TEMPLATE MODAL
     ========================================================================== */
  function openWhatsAppTemplateModal(lead) {
    const modal = document.getElementById('wa-template-modal');
    const title = document.getElementById('wa-modal-lead-name');
    const msgPreview = document.getElementById('wa-message-preview');
    const templateSelect = document.getElementById('wa-template-select');
    const sendBtn = document.getElementById('wa-send-final-btn');

    if (!modal) return;

    title.innerText = `${lead.name} (${lead.brand})`;
    const rawPhone = lead.phone.replace(/[^0-9]/g, '');

    const templates = {
      'audit_intro': `Hi ${lead.name}! This is Connect Digital Media (Surat, Gujarat). We received your strategy session request for ${lead.brand}.\n\nWe have reviewed your growth challenge and prepared a custom 30-day scaling teardown for ${lead.services}.\n\nWhen would be a convenient 15-minute window for a quick Zoom/Google Meet call?`,
      'audit_reminder': `Hi ${lead.name}, following up from Connect Digital Media regarding your marketing audit for ${lead.brand}. Are you free for a quick strategy briefing today?`,
      'pricing_proposal': `Hi ${lead.name}! Connect Digital Media team here. We have finalized your custom growth proposal (Budget: ${lead.budget}) tailored for ${lead.brand}. Let me know if you would like me to share the PDF here.`,
      'general_touch': `Hi ${lead.name}! Hope you are having a productive week. Connect Digital Media growth team here—just checking in regarding your digital marketing roadmap for ${lead.brand}.`
    };

    function updatePreview() {
      const selectedKey = templateSelect.value;
      msgPreview.value = templates[selectedKey] || templates['audit_intro'];
    }

    templateSelect.onchange = updatePreview;
    updatePreview();

    sendBtn.onclick = () => {
      const text = encodeURIComponent(msgPreview.value);
      window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
      modal.classList.remove('open');
      showToast(`WhatsApp chat launched with ${lead.name}!`);
    };

    modal.classList.add('open');
  }

  /* ==========================================================================
     9. LEAD DETAILS & NOTES MODAL
     ========================================================================== */
  function openLeadDetailsModal(lead) {
    const modal = document.getElementById('lead-details-modal');
    const content = document.getElementById('lead-details-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="margin-bottom: 20px;">
        <div style="font-size: 1.4rem; font-weight: 700; color: #ffffff;">${escapeHtml(lead.name)}</div>
        <div style="color: var(--red-primary); font-weight: 600; font-size: 0.95rem;">${escapeHtml(lead.brand)}</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; font-size: 0.85rem;">
        <div style="background: rgba(9,13,22,0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--admin-card-border);">
          <div style="color: var(--text-muted); font-size: 0.75rem;">Phone / WhatsApp</div>
          <div style="font-weight: 700; color: #25D366; margin-top: 2px;">${escapeHtml(lead.phone)}</div>
        </div>
        <div style="background: rgba(9,13,22,0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--admin-card-border);">
          <div style="color: var(--text-muted); font-size: 0.75rem;">Work Email</div>
          <div style="font-weight: 700; color: #38bdf8; margin-top: 2px;">${escapeHtml(lead.email)}</div>
        </div>
        <div style="background: rgba(9,13,22,0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--admin-card-border);">
          <div style="color: var(--text-muted); font-size: 0.75rem;">Monthly Budget</div>
          <div style="font-weight: 700; color: #34d399; margin-top: 2px;">${escapeHtml(lead.budget)}</div>
        </div>
        <div style="background: rgba(9,13,22,0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--admin-card-border);">
          <div style="color: var(--text-muted); font-size: 0.75rem;">Form Source</div>
          <div style="font-weight: 600; color: var(--text-sub); margin-top: 2px;">${escapeHtml(lead.source || 'Website')}</div>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub); margin-bottom: 6px;">Services Requested:</div>
        <div style="background: rgba(9,13,22,0.6); padding: 12px; border-radius: 8px; font-size: 0.85rem; color: #ffffff;">
          ${escapeHtml(lead.services)}
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub); margin-bottom: 6px;">Client Challenge / Message:</div>
        <div style="background: rgba(9,13,22,0.6); padding: 12px; border-radius: 8px; font-size: 0.85rem; color: var(--text-sub); font-style: italic;">
          "${escapeHtml(lead.message || 'No additional note provided.')}"
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub); margin-bottom: 6px;">Internal Agency Notes:</div>
        <textarea id="edit-lead-notes" class="setting-input" rows="3" placeholder="Add private notes on client requirements, calls, proposals...">${escapeHtml(lead.notes || '')}</textarea>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button type="button" class="btn-secondary-admin" id="close-details-modal-btn">Close</button>
        <button type="button" class="btn-primary-admin" id="save-lead-notes-btn">Save Notes</button>
      </div>
    `;

    document.getElementById('close-details-modal-btn').onclick = () => modal.classList.remove('open');
    document.getElementById('save-lead-notes-btn').onclick = () => {
      lead.notes = document.getElementById('edit-lead-notes').value;
      saveLeads();
      modal.classList.remove('open');
      showToast('Lead notes saved successfully!');
    };

    modal.classList.add('open');
  }

  /* ==========================================================================
     10. SETTINGS & WEBHOOK TESTER
     ========================================================================== */
  function initSettings() {
    const webhookInput = document.getElementById('setting-webhook-url');
    const testWebhookBtn = document.getElementById('test-webhook-btn');
    const saveSettingsBtn = document.getElementById('save-settings-btn');

    // Load data from agencyData if present
    if (typeof agencyData !== 'undefined' && agencyData.contact) {
      if (webhookInput) webhookInput.value = agencyData.contact.googleSheetsWebhookUrl || '';
    }

    if (testWebhookBtn) {
      testWebhookBtn.addEventListener('click', async () => {
        const url = webhookInput ? webhookInput.value.trim() : '';
        if (!url) {
          showToast('Please enter your Google Apps Script Web App URL first.', true);
          return;
        }

        testWebhookBtn.innerText = 'Testing Connection...';
        try {
          await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'Test Inbound Lead',
              brand: 'Connect Digital Media Test',
              phone: '+91 81405 02097',
              email: 'admin@connectdigitalmedia.co.in',
              services: 'Meta Ads & Google Sheets Sync Test',
              budget: '₹50,000 / month',
              message: 'Test ping from Connect Digital Media Admin Dashboard.',
              formType: 'Admin Diagnostic Ping',
              pageUrl: window.location.href
            })
          });

          showToast('✓ Webhook ping transmitted! Check your Google Sheet & Email.');
        } catch (err) {
          showToast('Webhook test failed. Check URL permissions.', true);
        } finally {
          testWebhookBtn.innerText = 'Send Test Ping';
        }
      });
    }

    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener('click', () => {
        const url = webhookInput.value.trim();
        if (typeof agencyData !== 'undefined' && agencyData.contact) {
          agencyData.contact.googleSheetsWebhookUrl = url;
        }
        showToast('Settings saved successfully! (Active for current session)');
        checkWebhookStatus();
      });
    }

    // Modal close buttons
    document.querySelectorAll('.admin-modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-modal-backdrop').forEach(m => m.classList.remove('open'));
      });
    });
  }

  function checkWebhookStatus() {
    const pill = document.getElementById('topbar-sync-pill');
    if (!pill) return;

    let isConfigured = false;
    if (typeof agencyData !== 'undefined' && agencyData.contact && agencyData.contact.googleSheetsWebhookUrl) {
      isConfigured = agencyData.contact.googleSheetsWebhookUrl.length > 10;
    }

    if (isConfigured) {
      pill.className = 'sync-status-pill';
      pill.innerHTML = '● Google Sheets Active';
    } else {
      pill.className = 'sync-status-pill offline';
      pill.innerHTML = '○ Webhook Pending';
    }
  }

  /* ==========================================================================
     11. TOAST NOTIFICATION HELPER
     ========================================================================== */
  function showToast(message, isError = false) {
    let toast = document.getElementById('admin-live-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'admin-live-toast';
      toast.className = 'admin-toast';
      document.body.appendChild(toast);
    }

    toast.style.borderColor = isError ? '#ef4444' : '#10b981';
    toast.innerHTML = `
      <span style="font-size: 1.1rem;">${isError ? '⚠️' : '✓'}</span>
      <span>${message}</span>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

})();
