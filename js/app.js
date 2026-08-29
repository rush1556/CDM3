// Connect Digital Media - Main Application Controller
(function() {
  function getAgencyData() {
    return window.agencyData || {};
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHeroSlider();
    initStats();
    initServices();
    initAboutPillars();
    initRoiCalculator();
    initCaseStudies();
    initGrader();
    initPricing();
    initBlogs();
    initTestimonials();
    initFramework();
    initFaqs();
    initOfficeClocks();
    initBookingModal();
    initContactForm();
    initCaseStudyModal();
    initBlogModal();
  });

  /* ==========================================================================
     1. HEADER SCROLL & MOBILE MENU
     ========================================================================== */
  function initHeader() {
    const header = document.getElementById('site-header');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        const isExpanded = navLinks.style.display === 'flex';
        if (isExpanded) {
          navLinks.style.display = 'none';
        } else {
          navLinks.style.display = 'flex';
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.width = '100%';
          navLinks.style.background = '#ffffff';
          navLinks.style.padding = '24px';
          navLinks.style.borderBottom = '1px solid var(--border-light)';
          navLinks.style.boxShadow = 'var(--shadow-md)';
        }
      });

      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
          }
        });
      });
    }
  }

  /* ==========================================================================
     2. STATS BAR ANIMATION (₹ INR)
     ========================================================================== */
  function initStats() {
    const data = getAgencyData();
    const container = document.getElementById('stats-container');
    if (!container || !data.stats) return;

    container.innerHTML = data.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-number" data-target="${stat.value}" data-prefix="${stat.prefix}" data-suffix="${stat.suffix}">
          ${stat.prefix}0${stat.suffix}
        </div>
        <div class="stat-label">${stat.label}</div>
        <div class="stat-subtext">${stat.subtext}</div>
      </div>
    `).join('');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.stat-number');
          counters.forEach(counter => animateCounter(counter));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(container);
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const isDecimal = target % 1 !== 0;
    const duration = 1600;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      el.innerText = `${prefix}${isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerText = `${prefix}${isDecimal ? target.toFixed(1) : target}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  /* ==========================================================================
     3. SERVICES RENDERER (12 Full Disciplines with Subpoints)
     ========================================================================== */
  function initServices() {
    const data = getAgencyData();
    const container = document.getElementById('home-services-accordion-list') || document.getElementById('services-container');
    if (!container || !data.allServices) return;

    const getServiceSvg = (icon) => {
      switch (icon) {
        case 'instagram':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
        case 'zap':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
        case 'edit':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
        case 'search':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
        case 'layout':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
        case 'video':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`;
        case 'globe':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
        case 'target':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
        case 'shield':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
        case 'users':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
        case 'message':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;
        case 'mail':
        default:
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
      }
    };

    function renderCards(searchQuery = '') {
      const filtered = data.allServices.filter(s => {
        if (!searchQuery) return true;
        const titleMatch = s.title.toLowerCase().includes(searchQuery);
        const descMatch = s.desc.toLowerCase().includes(searchQuery);
        const subMatch = s.subServices.some(sub => sub.name.toLowerCase().includes(searchQuery) || sub.desc.toLowerCase().includes(searchQuery));
        return titleMatch || descMatch || subMatch;
      });

      container.innerHTML = filtered.map((s, index) => {
        const isOpenByDefault = searchQuery.length > 0 || index < 2;
        return `
          <div class="service-accordion-card ${isOpenByDefault ? 'open' : ''}" id="home-svc-${s.id}">
            <div class="service-accordion-header" onclick="this.parentElement.classList.toggle('open')">
              <div class="service-header-left">
                <div class="service-icon-box" style="margin: 0;">
                  ${getServiceSvg(s.icon)}
                </div>
                <div class="service-header-titles">
                  <h3>${s.num}. ${s.title}</h3>
                  <p>${s.tagline}</p>
                </div>
              </div>
              <div class="service-header-right">
                <span class="sub-count-badge">${s.subServices.length} Sub-Points</span>
                <div class="accordion-chevron-btn">▼</div>
              </div>
            </div>

            <div class="service-accordion-body">
              <p class="svc-card-desc">${s.desc}</p>
              <div class="sub-services-header">👉 Click any subpoint to open its separate full page:</div>
              <div class="subpoints-grid">
                ${s.subServices.map(sub => `
                  <a href="service-detail.html?sub=${sub.slug}" class="subpoint-link-card" style="text-decoration: none; color: inherit;">
                    <div>
                      <div class="subpoint-card-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>${sub.name}</span>
                      </div>
                      <div class="subpoint-card-desc">${sub.desc}</div>
                    </div>
                    <div class="subpoint-footer-bar">
                      <span class="subpoint-cta-text">Open Page →</span>
                      <span class="subpoint-wa-icon">💬 WhatsApp</span>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    renderCards();

    // Home search listener
    const searchInput = document.getElementById('home-service-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderCards(e.target.value.toLowerCase().trim());
      });
    }

    // Home expand/collapse all
    const toggleAllBtn = document.getElementById('home-toggle-all-btn');
    if (toggleAllBtn) {
      let expanded = false;
      toggleAllBtn.addEventListener('click', () => {
        expanded = !expanded;
        toggleAllBtn.innerHTML = expanded ? '<span>Collapse All Subpoints ↑</span>' : '<span>Expand All Subpoints ↓</span>';
        const cards = container.querySelectorAll('.service-accordion-card');
        cards.forEach(c => {
          if (expanded) c.classList.add('open');
          else c.classList.remove('open');
        });
      });
    }
  }

  /* ==========================================================================
     4. ABOUT PILLARS RENDERER
     ========================================================================== */
  function initAboutPillars() {
    const data = getAgencyData();
    const container = document.getElementById('about-pillars-container');
    if (!container || !data.about || !data.about.pillars) return;

    const getPillarSvg = (icon) => {
      switch (icon) {
        case 'target':
          return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
        case 'zap':
          return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
        case 'india':
          return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`;
        case 'users':
        default:
          return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
      }
    };

    container.innerHTML = data.about.pillars.map(p => `
      <div class="pillar-card">
        <div class="pillar-icon-box">
          ${getPillarSvg(p.icon)}
        </div>
        <h3 class="pillar-title">${p.title}</h3>
        <p class="pillar-desc">${p.desc}</p>
      </div>
    `).join('');
  }

  /* ==========================================================================
     5. INDIAN ROI & REVENUE CALCULATOR (₹ INR)
     ========================================================================== */
  function initRoiCalculator() {
    const spendSlider = document.getElementById('spend-slider');
    const roasSlider = document.getElementById('roas-slider');
    const aovSlider = document.getElementById('aov-slider');

    const spendDisplay = document.getElementById('spend-val-display');
    const roasDisplay = document.getElementById('roas-val-display');
    const aovDisplay = document.getElementById('aov-val-display');

    const revUpliftEl = document.getElementById('calc-rev-uplift');
    const optRoasEl = document.getElementById('calc-opt-roas');
    const annualLiftEl = document.getElementById('calc-annual-lift');

    if (!spendSlider || !roasSlider || !aovSlider) return;

    function formatInr(amount) {
      if (amount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(2)} Cr`;
      } else if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(2)} Lakhs`;
      } else {
        return `₹${amount.toLocaleString('en-IN')}`;
      }
    }

    function calculate() {
      const spend = parseFloat(spendSlider.value);
      const currentRoas = parseFloat(roasSlider.value);
      const aov = parseFloat(aovSlider.value);

      spendDisplay.innerText = `₹${spend.toLocaleString('en-IN')}`;
      roasDisplay.innerText = `${currentRoas.toFixed(1)}x`;
      aovDisplay.innerText = `₹${aov.toLocaleString('en-IN')}`;

      const roasMultiplier = currentRoas < 2.5 ? 1.75 : 1.45;
      const optimizedRoas = Math.min(6.5, currentRoas * roasMultiplier);

      const currentMonthlyRevenue = spend * currentRoas;
      const projectedMonthlyRevenue = spend * optimizedRoas;
      const monthlyIncrementalLift = projectedMonthlyRevenue - currentMonthlyRevenue;
      const annualLift = monthlyIncrementalLift * 12;

      revUpliftEl.innerText = `+${formatInr(Math.round(monthlyIncrementalLift))} / mo`;
      optRoasEl.innerText = `${optimizedRoas.toFixed(1)}x`;
      annualLiftEl.innerText = `+${formatInr(Math.round(annualLift))}`;
    }

    spendSlider.addEventListener('input', calculate);
    roasSlider.addEventListener('input', calculate);
    aovSlider.addEventListener('input', calculate);

    calculate();
  }

  /* ==========================================================================
     6. CASE STUDIES & CATEGORY FILTER
     ========================================================================== */
  function initCaseStudies() {
    const data = getAgencyData();
    const container = document.getElementById('cases-grid-container');
    const filterBtns = document.querySelectorAll('#case-filter-container .filter-tab');
    if (!container || !data.caseStudies) return;

    function renderCases(category = 'all') {
      const filtered = category === 'all'
        ? data.caseStudies
        : data.caseStudies.filter(c => c.category === category);

      container.innerHTML = filtered.map(c => `
        <div class="case-card" data-id="${c.id}">
          <div class="case-header">
            <div class="case-client-badge">${c.client}</div>
            <div class="case-location">${c.location}</div>
          </div>

          <h3 class="case-title">${c.title}</h3>
          <p class="case-desc">${c.description.substring(0, 140)}...</p>

          <div class="case-metrics-grid">
            ${c.metrics.map(m => `
              <div class="metric-cell">
                <div class="metric-cell-label">${m.label}</div>
                <div class="metric-cell-val">${m.after}</div>
                <div class="metric-cell-change">${m.change}</div>
              </div>
            `).join('')}
          </div>

          <div class="case-footer">
            <div class="case-tags">
              ${c.tags.slice(0, 3).map(tag => `<span class="case-tag-item">${tag}</span>`).join('')}
            </div>
            <span class="case-view-link">
              <span>Read Strategy</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </div>
        </div>
      `).join('');

      const cards = container.querySelectorAll('.case-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          openCaseStudyModal(id);
        });
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderCases(filter);
      });
    });

    renderCases('all');
  }

  function openCaseStudyModal(id) {
    const data = getAgencyData();
    const caseItem = (data.caseStudies || []).find(c => c.id === id);
    if (!caseItem) return;

    const modal = document.getElementById('case-study-modal');
    const content = document.getElementById('case-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="margin-bottom: 20px;">
        <div class="badge-pill" style="margin-bottom: 10px;">${caseItem.categoryLabel}</div>
        <h3 style="font-size: 1.8rem; line-height: 1.3; margin-bottom: 8px;">${caseItem.title}</h3>
        <div style="font-size: 0.9rem; color: var(--text-muted);">Client: <strong>${caseItem.client}</strong> (${caseItem.location})</div>
      </div>

      <div class="case-metrics-grid" style="margin-bottom: 24px; padding: 20px;">
        ${caseItem.metrics.map(m => `
          <div class="metric-cell">
            <div class="metric-cell-label">${m.label}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); text-decoration: line-through;">${m.before}</div>
            <div class="metric-cell-val" style="color: var(--red-primary); font-size: 1.3rem;">${m.after}</div>
            <div class="metric-cell-change">${m.change}</div>
          </div>
        `).join('')}
      </div>

      <h4 style="font-size: 1.2rem; margin-bottom: 10px;">The Challenge & Execution Strategy</h4>
      <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">
        ${caseItem.description}
      </p>

      <div class="blog-callout" style="margin-bottom: 28px;">
        <p style="font-style: italic; font-size: 1rem; margin-bottom: 8px;">${caseItem.quote}</p>
        <div style="font-weight: 700; font-size: 0.9rem;">— ${caseItem.author}, ${caseItem.authorTitle}</div>
      </div>

      <div style="display: flex; gap: 14px; justify-content: flex-end;">
        <a href="https://wa.me/918140502097?text=Hi%20Connect%20Digital%20Media!%20I%20saw%20the%20${encodeURIComponent(caseItem.client)}%20case%20study%20and%20want%20similar%20growth." target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          <span>Discuss Similar Growth on WhatsApp</span>
        </a>
      </div>
    `;

    modal.classList.add('open');
  }

  function initCaseStudyModal() {
    const modal = document.getElementById('case-study-modal');
    const closeBtn = document.getElementById('close-case-modal');

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
  }

  /* ==========================================================================
     7. INSTANT AI GROWTH GRADER
     ========================================================================== */
  function initGrader() {
    const form = document.getElementById('grader-form');
    const resultBox = document.getElementById('grader-result-box');
    const submitBtn = document.getElementById('grader-submit-btn');

    if (!form || !resultBox) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const url = document.getElementById('grader-url').value;
      const model = document.getElementById('grader-model').value;

      submitBtn.innerHTML = `<span>Analyzing Website...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<span>Analyze Website</span>`;
        submitBtn.disabled = false;
        renderGraderResults(url, model);
      }, 900);
    });
  }

  function renderGraderResults(url, model) {
    const resultBox = document.getElementById('grader-result-box');
    const breakdownContainer = document.getElementById('grader-breakdown-container');
    if (!resultBox || !breakdownContainer) return;

    const categories = [
      { title: 'Meta & Google Ad Readiness', score: 78, feedback: 'Pixel tracking active; lacks Server-Side CAPI and UGC video hook angles.' },
      { title: 'Conversion Rate & UX (Mobile)', score: 68, feedback: 'High mobile checkout friction; add 1-click UPI and WhatsApp quick recovery.' },
      { title: 'SEO & Google Maps Local Rank', score: 74, feedback: 'Solid foundational keywords; missing local city landing pages & GMB reviews.' },
      { title: 'WhatsApp & Retention Engine', score: 58, feedback: 'No automated abandoned cart flow; 20-30% revenue left on table.' }
    ];

    breakdownContainer.innerHTML = categories.map(c => `
      <div class="breakdown-card">
        <div class="breakdown-top">
          <span class="breakdown-title">${c.title}</span>
          <span class="breakdown-score">${c.score}/100</span>
        </div>
        <div class="breakdown-bar">
          <div class="breakdown-fill" style="width: ${c.score}%;"></div>
        </div>
        <div class="breakdown-feedback">${c.feedback}</div>
      </div>
    `).join('');

    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ==========================================================================
     8. PRICING PLANS IN INDIAN RUPEES (₹ INR)
     ========================================================================== */
  function initPricing() {
    const data = getAgencyData();
    const container = document.getElementById('pricing-container');
    const monthlyBtn = document.getElementById('plan-toggle-monthly');
    const quarterlyBtn = document.getElementById('plan-toggle-quarterly');
    if (!container || !data.pricingPlans) return;

    let billingCycle = 'monthly';

    function renderPlans() {
      container.innerHTML = data.pricingPlans.map(plan => {
        const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;
        const formattedPrice = `₹${price.toLocaleString('en-IN')}`;

        return `
          <div class="pricing-card ${plan.featured ? 'featured' : ''}">
            <div class="pricing-badge">${plan.badge}</div>
            <h3 class="pricing-name">${plan.name}</h3>
            <div class="pricing-ad-target">${plan.adSpendTarget}</div>

            <div class="pricing-price-box">
              <span class="pricing-amount">${formattedPrice}</span>
              <span class="pricing-period">${plan.period}</span>
            </div>

            <p class="pricing-desc">${plan.description}</p>

            <ul class="pricing-features">
              ${plan.features.map(f => `
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>

            <button type="button" class="btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} open-booking-btn" style="width: 100%; margin-top: auto;">
              <span>${plan.ctaText}</span>
            </button>
          </div>
        `;
      }).join('');

      const bookingBtns = container.querySelectorAll('.open-booking-btn');
      bookingBtns.forEach(btn => btn.addEventListener('click', openBookingModal));
    }

    if (monthlyBtn && quarterlyBtn) {
      monthlyBtn.addEventListener('click', () => {
        monthlyBtn.classList.add('active');
        quarterlyBtn.classList.remove('active');
        billingCycle = 'monthly';
        renderPlans();
      });

      quarterlyBtn.addEventListener('click', () => {
        quarterlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        billingCycle = 'quarterly';
        renderPlans();
      });
    }

    renderPlans();
  }

  /* ==========================================================================
     9. BLOGS & ARTICLE READER MODAL
     ========================================================================== */
  function initBlogs() {
    const data = getAgencyData();
    const container = document.getElementById('blogs-container');
    if (!container || !data.blogs) return;

    container.innerHTML = data.blogs.map(blog => `
      <div class="blog-card" data-id="${blog.id}">
        <div class="blog-meta-top">
          <span class="blog-category-tag">${blog.category}</span>
          <span class="blog-read-time">⏱️ ${blog.readTime}</span>
        </div>

        <h3 class="blog-card-title">${blog.title}</h3>
        <p class="blog-card-summary">${blog.summary}</p>

        <div class="blog-card-footer">
          <span class="blog-author">By ${blog.author}</span>
          <span class="blog-read-btn">
            <span>Read Full Guide</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      </div>
    `).join('');

    const blogCards = container.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openBlogModal(id);
      });
    });
  }

  function openBlogModal(id) {
    const data = getAgencyData();
    const blog = (data.blogs || []).find(b => b.id === id);
    if (!blog) return;

    const modal = document.getElementById('blog-modal');
    const content = document.getElementById('blog-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="margin-bottom: 20px; border-bottom: 1px solid var(--border-light); padding-bottom: 16px;">
        <div class="blog-category-tag" style="display: inline-block; margin-bottom: 10px;">${blog.category}</div>
        <h2 style="font-size: 2rem; line-height: 1.25; margin-bottom: 12px;">${blog.title}</h2>
        <div style="display: flex; gap: 16px; font-size: 0.85rem; color: var(--text-muted);">
          <span>By <strong>${blog.author}</strong></span>
          <span>•</span>
          <span>${blog.date}</span>
          <span>•</span>
          <span>${blog.readTime}</span>
        </div>
      </div>

      <div class="blog-modal-article">
        ${blog.content}
      </div>

      <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <div style="font-weight: 700; font-size: 1rem;">Want us to execute this for your brand?</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Book a free strategy teardown with our agency team.</div>
        </div>
        <a href="https://wa.me/918140502097?text=Hi%20Connect%20Digital%20Media!%20I%20read%20your%20article%20on%20${encodeURIComponent(blog.title)}%20and%20want%20to%20apply%20it%20to%20my%20business." target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    `;

    modal.classList.add('open');
  }

  function initBlogModal() {
    const modal = document.getElementById('blog-modal');
    const closeBtn = document.getElementById('close-blog-modal');

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
  }

  /* ==========================================================================
     10. TESTIMONIALS SLIDER
     ========================================================================= */
  function initTestimonials() {
    const data = getAgencyData();
    const card = document.getElementById('testimonial-card-active');
    const prevBtn = document.getElementById('test-prev-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const indicator = document.getElementById('slider-page-indicator');

    if (!card || !data.testimonials || !data.testimonials.length) return;

    let currentIndex = 0;

    function renderTestimonial(index) {
      const t = data.testimonials[index];
      card.innerHTML = `
        <div class="test-stars">${'★'.repeat(t.stars)}</div>
        <div class="test-highlight">"${t.highlight}"</div>
        <div class="test-content">"${t.content}"</div>
        <div class="test-author-info">
          <div class="test-avatar">${t.avatar}</div>
          <div class="test-meta">
            <div class="test-name">${t.client}</div>
            <div class="test-role">${t.role}, ${t.company}</div>
          </div>
        </div>
      `;

      if (indicator) {
        indicator.innerText = `${index + 1} / ${data.testimonials.length}`;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + data.testimonials.length) % data.testimonials.length;
        renderTestimonial(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % data.testimonials.length;
        renderTestimonial(currentIndex);
      });
    }

    renderTestimonial(0);
  }

  /* ==========================================================================
     11. FRAMEWORK 4-STEP PROTOCOL
     ========================================================================== */
  function initFramework() {
    const data = getAgencyData();
    const container = document.getElementById('framework-container');
    if (!container || !data.frameworkSteps) return;

    container.innerHTML = data.frameworkSteps.map(step => `
      <div class="pillar-card" style="background: #ffffff;">
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--red-primary); margin-bottom: 8px;">
          ${step.step}
        </div>
        <div class="service-tag" style="margin-bottom: 12px; display: inline-block;">${step.badge}</div>
        <h3 style="font-size: 1.15rem; margin-bottom: 10px;">${step.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 16px;">${step.summary}</p>
        
        <ul style="list-style: none; font-size: 0.82rem; color: var(--text-primary);">
          ${step.deliverables.map(d => `
            <li style="margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <span style="color: var(--red-primary);">✓</span>
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  /* ==========================================================================
     12. FAQS ACCORDION
     ========================================================================== */
  function initFaqs() {
    const data = getAgencyData();
    const container = document.getElementById('faqs-container');
    if (!container || !data.faqs) return;

    container.innerHTML = data.faqs.map((faq, idx) => `
      <div class="faq-item" style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden;">
        <button type="button" class="faq-question-btn" style="width: 100%; text-align: left; padding: 18px 24px; background: none; border: none; font-size: 1.05rem; font-weight: 700; font-family: var(--font-heading); color: var(--text-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
          <span>${faq.question}</span>
          <span class="faq-toggle-icon" style="font-size: 1.2rem; color: var(--red-primary); transition: transform 0.2s;">+</span>
        </button>
        <div class="faq-answer-box" style="display: none; padding: 0 24px 20px 24px; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          ${faq.answer}
        </div>
      </div>
    `).join('');

    const faqItems = container.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const answer = item.querySelector('.faq-answer-box');
      const icon = item.querySelector('.faq-toggle-icon');

      btn.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        faqItems.forEach(i => {
          i.querySelector('.faq-answer-box').style.display = 'none';
          i.querySelector('.faq-toggle-icon').innerText = '+';
        });

        if (!isOpen) {
          answer.style.display = 'block';
          icon.innerText = '−';
        }
      });
    });
  }

  /* ==========================================================================
     13. OFFICE HUBS & LIVE IST TIME
     ========================================================================== */
  function initOfficeClocks() {
    const data = getAgencyData();
    const container = document.getElementById('office-clocks-container');
    if (!container || !data.offices) return;

    function updateClocks() {
      const now = new Date();
      const istTimeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      container.innerHTML = data.offices.map(o => `
        <div class="clock-item">
          <span class="clock-city">📍 ${o.city}</span>
          <span class="clock-time">${istTimeStr} IST</span>
        </div>
      `).join('');
    }

    updateClocks();
    setInterval(updateClocks, 1000);
  }

  /* ==========================================================================
     14. CONSULTATION BOOKING MODAL
     ========================================================================== */
  function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.add('open');
  }

  function initBookingModal() {
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-booking-modal');
    const doneBtn = document.getElementById('booking-done-btn');
    const triggerBtns = document.querySelectorAll('.open-booking-btn');

    const step1 = document.getElementById('booking-step-1');
    const step2 = document.getElementById('booking-step-2');
    const step3 = document.getElementById('booking-step-3');
    const successState = document.getElementById('booking-success-state');

    const dot1 = document.getElementById('dot-step-1');
    const dot2 = document.getElementById('dot-step-2');
    const dot3 = document.getElementById('dot-step-3');

    const btnToStep2 = document.getElementById('btn-to-step-2');
    const btnBackToStep1 = document.getElementById('btn-back-to-step-1');
    const btnToStep3 = document.getElementById('btn-to-step-3');
    const btnBackToStep2 = document.getElementById('btn-back-to-step-2');
    const finalForm = document.getElementById('booking-final-form');

    triggerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (modal) modal.classList.add('open');
      });
    });

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }

    if (doneBtn && modal) {
      doneBtn.addEventListener('click', () => modal.classList.remove('open'));
    }

    if (btnToStep2) {
      btnToStep2.addEventListener('click', () => {
        step1.style.display = 'none';
        step2.style.display = 'block';
        dot1.classList.remove('active');
        dot2.classList.add('active');
      });
    }

    if (btnBackToStep1) {
      btnBackToStep1.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
        dot2.classList.remove('active');
        dot1.classList.add('active');
      });
    }

    if (btnToStep3) {
      btnToStep3.addEventListener('click', () => {
        step2.style.display = 'none';
        step3.style.display = 'block';
        dot2.classList.remove('active');
        dot3.classList.add('active');
      });
    }

    if (btnBackToStep2) {
      btnBackToStep2.addEventListener('click', () => {
        step3.style.display = 'none';
        step2.style.display = 'block';
        dot3.classList.remove('active');
        dot2.classList.add('active');
      });
    }

    /* Backend Lead Submission Helper */
    async function submitLeadToBackend(payload) {
      const data = getAgencyData();
      const webhookUrl = (data.contact && data.contact.googleSheetsWebhookUrl) ? data.contact.googleSheetsWebhookUrl.trim() : '';

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } catch (err) {
          console.warn('Webhook transmission notice:', err);
        }
      }
    }

    if (finalForm) {
      finalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (document.getElementById('book-name') ? document.getElementById('book-name').value : '');
        const email = (document.getElementById('book-email') ? document.getElementById('book-email').value : '');
        const phone = (document.getElementById('book-phone') ? document.getElementById('book-phone').value : '');
        const budget = (document.getElementById('booking-budget') ? document.getElementById('booking-budget').value : '₹30,000 - ₹75,000 / month');
        const url = (document.getElementById('booking-url') ? document.getElementById('booking-url').value : '');
        const goalRadio = document.querySelector('input[name="goal"]:checked');
        const goal = goalRadio ? goalRadio.value : 'Scale Paid Ads';

        // Submit to Google Sheets Backend
        submitLeadToBackend({
          name: name,
          brand: url || 'Website Booking',
          phone: phone,
          email: email,
          budget: budget,
          services: goal,
          message: 'Primary Goal: ' + goal + (url ? ' | Asset: ' + url : ''),
          formType: '30-Day Strategy Audit Modal',
          pageUrl: window.location.href
        });

        step3.style.display = 'none';
        successState.style.display = 'block';
      });
    }
  }

  /* ==========================================================================
     14B. AUTO-SLIDING HERO SHOWCASE CAROUSEL
     ========================================================================== */
  function initHeroSlider() {
    const wrapper = document.getElementById('hero-slider-wrapper');
    if (!wrapper) return;

    const slides = wrapper.querySelectorAll('.hero-slide-item');
    const tabs = wrapper.querySelectorAll('.slider-tab-btn');
    const dots = wrapper.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('hero-slider-prev');
    const nextBtn = document.getElementById('hero-slider-next');

    if (!slides.length) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideDuration = 3600;
    let autoSlideTimer = null;
    let isPaused = false;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      // Update slides
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      // Update tabs
      tabs.forEach((tab, idx) => {
        if (idx === currentIndex) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      // Update dots & reset progress animation
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
          const prog = dot.querySelector('.dot-progress');
          if (prog) {
            prog.style.animation = 'none';
            dot.offsetHeight; /* trigger reflow */
            prog.style.animation = `fillProgress ${slideDuration}ms linear forwards`;
          }
        } else {
          dot.classList.remove('active');
          const prog = dot.querySelector('.dot-progress');
          if (prog) {
            prog.style.animation = 'none';
          }
        }
      });
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideTimer = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, slideDuration);
    }

    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    // Tab buttons click
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        goToSlide(idx);
        startAutoSlide();
      });
    });

    // Dot indicators click
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoSlide();
      });
    });

    // Next / Prev button clicks
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
      });
    }

    // Pause auto-sliding on hover
    wrapper.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    wrapper.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startAutoSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        startAutoSlide();
      }
    }, { passive: true });

    // Initialize first slide and start auto-slide
    goToSlide(0);
    startAutoSlide();
  }

  /* ==========================================================================
     15. MAIN CONTACT FORM (Direct Lead Capture & Google Sheets Sync)
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contact-main-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const origBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Processing Strategy Request...</span>';
        submitBtn.disabled = true;
      }

      const name = document.getElementById('contact-name') ? document.getElementById('contact-name').value : '';
      const brand = document.getElementById('contact-brand') ? document.getElementById('contact-brand').value : '';
      const email = document.getElementById('contact-email') ? document.getElementById('contact-email').value : '';
      const phone = document.getElementById('contact-phone') ? document.getElementById('contact-phone').value : '';
      const budget = document.getElementById('contact-budget') ? document.getElementById('contact-budget').value : '';
      const message = document.getElementById('contact-message') ? document.getElementById('contact-message').value : '';

      const checkedBoxes = document.querySelectorAll('input[name="services"]:checked');
      const selectedServices = Array.from(checkedBoxes).map(cb => cb.value).join(', ');

      const data = getAgencyData();
      const webhookUrl = (data.contact && data.contact.googleSheetsWebhookUrl) ? data.contact.googleSheetsWebhookUrl.trim() : '';

      // Send to Google Sheets Webhook if configured
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: name,
              brand: brand,
              phone: phone,
              email: email,
              services: selectedServices || 'All-Round Growth',
              budget: budget,
              message: message,
              formType: 'Main Contact Page Form',
              pageUrl: window.location.href
            })
          });
        } catch (err) {
          console.warn('Webhook transmission notice:', err);
        }
      }

      if (submitBtn) {
        submitBtn.innerHTML = '<span>✓ Request Received! Opening WhatsApp...</span>';
      }

      const waText = encodeURIComponent(
        `Hi Connect Digital Media! My name is ${name} from ${brand}.\nServices needed: ${selectedServices || 'Growth Strategy'}\nMonthly Budget: ${budget}\nEmail: ${email}\nPhone: ${phone}\nNote: ${message}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918140502097?text=${waText}`, '_blank');
        form.reset();
        if (submitBtn) {
          submitBtn.innerHTML = origBtnText;
          submitBtn.disabled = false;
        }
      }, 700);
    });
  }
})();
