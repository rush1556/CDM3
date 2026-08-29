// Connect Digital Media - Comprehensive Agency Data Store (India & Global)

const agencyData = {
  stats: [
    { id: 'stat-rev', value: 4.8, prefix: '₹', suffix: ' Cr+', label: 'Client Revenue Generated', subtext: 'Verified across 120+ Indian & Global brands' },
    { id: 'stat-roas', value: 4.2, prefix: '', suffix: 'x', label: 'Average ROAS Uplift', subtext: 'Within the first 30 days of onboarding' },
    { id: 'stat-cac', value: 38, prefix: '-', suffix: '%', label: 'Customer Acquisition Cost', subtext: 'Through CRO & high-converting ad angles' },
    { id: 'stat-retention', value: 98.2, prefix: '', suffix: '%', label: 'Client Retention Rate', subtext: 'Long-term trusted growth partners' }
  ],

  contact: {
    address: 'Surat - Gujarat, India',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    phone: '+91 81405 02097',
    phoneRaw: '918140502097',
    email: 'admin@connectdigitalmedia.co.in',
    website: 'https://connectdigitalmedia.co.in',
    instagram: 'https://www.instagram.com/connect.digitalmedia',
    instagramHandle: '@connect.digitalmedia',
    facebook: 'https://www.facebook.com/share/1HX4BHFcEs/',
    googleSheetsWebhookUrl: '' // Paste your Google Apps Script Web App URL here
  },

  about: {
    badge: 'Our Mission & Story',
    title: 'We Build & Scale Indian Brands into Category Leaders',
    subtitle: 'Connect Digital Media was founded on a simple premise: Indian businesses deserve data-backed, high-ROI marketing without vanity metrics, confusing jargon, or agency fluff.',
    story: 'Starting as an agile, founder-first growth squad, Connect Digital Media bridges the gap between creative storytelling and algorithmic ad performance. We understand the unique nuances of the Indian consumer landscape—from Tier-1 metro high-ticket buyers to Tier-2/3 regional markets that convert via vernacular content and WhatsApp commerce.',
    pillars: [
      {
        icon: 'target',
        title: '100% Data-Driven & Transparent',
        desc: 'No hidden agency markups or vanity likes. Every rupee spent is tracked to real business outcomes, verified conversions, and positive unit economics.'
      },
      {
        icon: 'zap',
        title: 'High-Velocity Creative Testing',
        desc: 'In today\'s ad environment, creative is the new targeting. We produce and test 20+ fresh hooks, Reels, and ad creatives every single month.'
      },
      {
        icon: 'india',
        title: 'Deep Indian Market Expertise',
        desc: 'We know how Indian consumers think, browse, and buy—integrating COD conversion strategies, WhatsApp checkout flows, and regional language angles.'
      },
      {
        icon: 'users',
        title: 'Direct Founder & Senior Lead Access',
        desc: 'You work directly with dedicated growth strategists who treat your business like their own, not passed off to inexperienced junior interns.'
      }
    ]
  },

  // 12 Comprehensive Services with Sub-points and Slugs
  allServices: [
    {
      id: 'social-media-marketing',
      slug: 'social-media-marketing',
      num: '01',
      categoryGroup: 'social',
      title: 'Social Media Marketing',
      tagline: 'Build authority, spark conversations & cultivate hyper-engaged communities.',
      icon: 'instagram',
      color: '#E52D25',
      desc: 'Comprehensive organic and strategic social media growth engineered for Instagram, Facebook, and LinkedIn. We build brand equity while turning casual followers into loyal paying customers.',
      subServices: [
        {
          slug: 'instagram-marketing',
          name: 'Instagram Marketing',
          tagline: 'Scale followers, viral reach & direct sales via aesthetic Instagram funnels.',
          desc: 'End-to-end Instagram growth architecture including Reels production, profile aesthetic overhaul, story conversion funnels, and DM sales automations tailored for the Indian demographic.',
          deliverables: [
            '12-16 Custom High-Definition Feed Posts & Carousels / Month',
            'Viral 9:16 Instagram Reels with Trending Audio & Hooks',
            'Interactive Story Sequences with Direct Link & Poll Stickers',
            'Profile Bio Optimization & Highlight Cover Redesign',
            'Automated DM Keyword Funnels to capture warm leads'
          ],
          process: [
            { step: '01', title: 'Aesthetic & Audience Audit', detail: 'Analyze current engagement, demographics, top-performing formats, and competitor benchmarks.' },
            { step: '02', title: 'Content Pillar Blueprint', detail: 'Develop monthly themes covering education, entertainment, social proof, and direct sales.' },
            { step: '03', title: 'Production & Scheduling', detail: 'Produce high-converting graphic creatives and short-form video hooks with optimized captions.' },
            { step: '04', title: 'Community & DM Conversion', detail: 'Actively engage with commenters and route high-intent inquiries straight to WhatsApp.' }
          ],
          impact: 'Instagram is the #1 discovery platform for Indian consumers. Our tailored approach increases profile visits by 300%+ and converts followers into repeat buyers.',
          tools: ['Meta Business Suite', 'Canva Pro / Figma', 'CapCut & Premiere Pro', 'ManyChat / WhatsApp API'],
          metricBenchmark: '3.8x - 6.2x Engagement Uplift'
        },
        {
          slug: 'facebook-marketing',
          name: 'Facebook Marketing',
          tagline: 'Tap into massive Indian communities and drive high-volume conversions.',
          desc: 'Strategic Facebook page growth, community group management, high-engagement viral video distribution, and organic re-targeting ecosystems.',
          deliverables: [
            'Daily Page Management & High-Converting Content Publishing',
            'Niche Facebook Group Community Building & Moderation',
            'Vernacular Video Seeding & Regional Language Posts',
            'Facebook Live & Interactive Poll Event Strategy',
            'Seamless Meta Shop Integration'
          ],
          process: [
            { step: '01', title: 'Page Health Check', detail: 'Clean up outdated info, optimize CTA buttons, and configure Meta Shop integration.' },
            { step: '02', title: 'Community Strategy', detail: 'Identify high-affinity Indian groups and build an owned branded Facebook community.' },
            { step: '03', title: 'Viral Video Distribution', detail: 'Optimize long-form and short video clips for maximum Facebook algorithmic distribution.' },
            { step: '04', title: 'Lead & Inbound Routing', detail: 'Direct Messenger chats and comments to automated lead capture workflows.' }
          ],
          impact: 'Facebook remains the largest user-base platform in Tier-2 and Tier-3 Indian cities, making it prime for mass-market D2C and local service scaling.',
          tools: ['Meta Business Manager', 'Creator Studio', 'Buffer / Hootsuite', 'Facebook Pixel'],
          metricBenchmark: '4.5x Community Reach'
        },
        {
          slug: 'linkedin-marketing',
          name: 'LinkedIn Marketing',
          tagline: 'Establish B2B thought leadership and generate high-ticket executive leads.',
          desc: 'Personal branding for founders and CEOs, corporate LinkedIn company page authority building, and data-backed organic B2B outreach.',
          deliverables: [
            'Founder / C-Suite Personal Profile Optimization & Ghostwriting',
            'Corporate Page Authority Content & Case Study Slides',
            'High-Engagement Carousel PDFs & Industry Infographics',
            'Strategic Inbound Lead Generation Architecture',
            'Employee Advocacy Program Design'
          ],
          process: [
            { step: '01', title: 'Voice & Positioning Teardown', detail: 'Extract founder insights and define key industry thought-leadership pillars.' },
            { step: '02', title: 'PDF Carousel & Longform Copy', detail: 'Design swipeable PDFs and contrarian text breakdowns that spur debate.' },
            { step: '03', title: 'Networking & Engagement Pods', detail: 'Engage with top industry leaders, decision-makers, and prospective clients in comments.' },
            { step: '04', title: 'Inbound Lead Conversion', detail: 'Convert profile viewers and commenters into scheduled discovery calls.' }
          ],
          impact: 'Ideal for Indian B2B SaaS, IT services, real estate developers, and agency founders looking to sign high-ticket clients without cold calling.',
          tools: ['LinkedIn Creator Mode', 'Shield Analytics', 'Figma PDF Slides', 'Calendly / WhatsApp'],
          metricBenchmark: '5x Inbound High-Ticket Inquiries'
        },
        {
          slug: 'social-media-management',
          name: 'Social Media Management',
          tagline: 'Hands-off, full-service social channel operations and growth governance.',
          desc: 'End-to-end execution covering multi-platform scheduling, hashtag clustering, profile hygiene, trend monitoring, and monthly analytics reporting.',
          deliverables: [
            'Cross-Platform Content Calendar Scheduling (Instagram, FB, LinkedIn, Twitter/X)',
            'Dynamic Hashtag & Search Keyword Research',
            'Daily Story Updates & Real-Time Trend Hijacking',
            'Bi-Weekly Strategy Calibration Calls',
            'Comprehensive Monthly Executive Performance Dashboard'
          ],
          process: [
            { step: '01', title: 'Monthly Calendar Alignment', detail: 'Map out 30 days of content 1 week in advance for client review and approval.' },
            { step: '02', title: 'Asset Scheduling & QA', detail: 'Schedule posts across peak IST engagement hours with verified tracking links.' },
            { step: '03', title: 'Trend Hijacking', detail: 'Create immediate reactive memes and reels when trending moments occur.' },
            { step: '04', title: 'Performance Review', detail: 'Deliver transparent analytics covering reach, engagement, and click-throughs.' }
          ],
          impact: 'Frees up 40+ hours per month for business owners while keeping brand presence consistently active and professional.',
          tools: ['Metricool', 'Sprout Social', 'Notion Workspaces', 'Google Looker Studio'],
          metricBenchmark: '100% On-Time Execution'
        },
        {
          slug: 'content-strategy',
          name: 'Content Strategy',
          tagline: 'Data-driven content blueprints that align brand story with revenue goals.',
          desc: 'Strategic audience persona mapping, competitor content gap analysis, topic cluster planning, and sales-aligned narrative frameworks.',
          deliverables: [
            'Target Customer Persona Profiles & Pain Point Matrix',
            'Competitor Content Benchmark & Gap Analysis',
            'Quarterly Master Content Architecture & Pillars',
            'Viral Hook Library tailored for Indian audiences',
            'Distribution & Repurposing Matrix'
          ],
          process: [
            { step: '01', title: 'Audience Research', detail: 'Analyze customer interviews, Google search patterns, and competitor comments.' },
            { step: '02', title: 'Pillar Architecture', detail: 'Establish 4 primary content pillars balancing trust, authority, virality, and conversion.' },
            { step: '03', title: 'Format Mapping', detail: 'Determine the best content formats (Reels vs Carousels vs Longform) per channel.' },
            { step: '04', title: 'Quarterly Roadmap', detail: 'Deliver an actionable roadmap tied directly to quarterly revenue targets.' }
          ],
          impact: 'Eliminates guesswork and ensures every single piece of content produced has a clear business purpose and monetization path.',
          tools: ['AnswerThePublic', 'Semrush', 'Miro Boards', 'Notion Strategic Planners'],
          metricBenchmark: '2.5x Content Conversion Rate'
        },
        {
          slug: 'community-management',
          name: 'Community Management',
          tagline: 'Turn casual commenters into devoted brand advocates and paying clients.',
          desc: 'Active 24/7 comment moderation, thoughtful replies, direct message triage, spam suppression, and proactive customer relationship cultivation.',
          deliverables: [
            'Fast-Response Comment Moderation & Customer Care (within 15 mins)',
            'Direct Message (DM) Lead Qualification & WhatsApp Routing',
            'Brand Voice Tone Guidelines & FAQ Response Scripts',
            'Reputation Management & Crisis De-escalation',
            'UGC Customer Tag Reposting & Appreciation Protocols'
          ],
          process: [
            { step: '01', title: 'FAQ Scripting', detail: 'Create a comprehensive response playbook for pricing, delivery, COD, and inquiries.' },
            { step: '02', title: 'Daily Monitoring', detail: 'Monitor brand mentions, comments, and DMs continuously during business hours.' },
            { step: '03', title: 'Lead Handoff', detail: 'Instantly pass hot buyer inquiries to the sales team on WhatsApp.' },
            { step: '04', title: 'Sentiment Tracking', detail: 'Track customer sentiment and report recurring product or service feedback.' }
          ],
          impact: 'Builds immense brand trust and prevents lost sales from unanswered pricing questions in comment sections.',
          tools: ['Zendesk Social', 'Meta Inbox', 'Slack Alerts', 'WhatsApp Business'],
          metricBenchmark: '< 15 Minute Response Time'
        },
        {
          slug: 'social-media-growth',
          name: 'Social Media Growth',
          tagline: 'High-velocity organic expansion protocols engineered for massive reach.',
          desc: 'Algorithmic optimization techniques, cross-platform audience growth hacking, viral collaborations, and profile conversion optimization.',
          deliverables: [
            'Algorithmic Watch-Time & DM Share Optimization',
            'Cross-Collab Post Strategy with Industry Peers',
            'Contest, Giveaway & Viral Challenge Blueprints',
            'Bio Conversion Rate Optimization (CRO)',
            'Organic Funnel Tracking to Website & WhatsApp'
          ],
          process: [
            { step: '01', title: 'Bio & Offer Funnel Audit', detail: 'Optimize profile link trees, highlight banners, and value proposition copy.' },
            { step: '02', title: 'Viral Loop Engineering', detail: 'Design share-worthy content formats that prompt saves and WhatsApp DM forwards.' },
            { step: '03', title: 'Strategic Collabs', detail: 'Partner with aligned non-competing Indian brands for joint giveaways and co-posts.' },
            { step: '04', title: 'Follower-to-Customer Pipeline', detail: 'Convert newly gained followers into email and WhatsApp CRM subscribers.' }
          ],
          impact: 'Accelerates follower acquisition without buying fake bots, ensuring high organic reach and legitimate buying audience.',
          tools: ['Meta Insights', 'Instagram Graph API', 'Bitly Pro', 'Google Analytics 4'],
          metricBenchmark: '+15,000+ Real Followers / Quarter'
        }
      ]
    },
    {
      id: 'performance-marketing',
      slug: 'performance-marketing',
      num: '02',
      categoryGroup: 'ads',
      title: 'Performance Marketing',
      tagline: 'Algorithmic paid ad scaling engineered for maximum ROAS and lowest CAC.',
      icon: 'zap',
      color: '#E52D25',
      desc: 'Precision paid advertising across Meta, Google Search, Performance Max, and YouTube. Every rupee deployed is optimized for profitable customer acquisition and instant ROI.',
      subServices: [
        {
          slug: 'google-ads',
          name: 'Google Ads',
          tagline: 'Capture high-intent buyers at the exact moment they search on Google.',
          desc: 'High-ROI Google Search campaigns, Shopping / Performance Max (PMax) setups, Display banners, and negative keyword filtering to eliminate wasted ad spend.',
          deliverables: [
            'Comprehensive High-Intent Keyword Research & Bid Optimization',
            'Performance Max (PMax) Feed Optimization & Asset Creation',
            'High-CTR Ad Copywriting with Sitelinks & Structured Snippets',
            'Conversion Tracking Setup via Google Tag Manager (GTM)',
            'Negative Keyword Lists to prevent budget wastage'
          ],
          process: [
            { step: '01', title: 'Intent Keyword Mining', detail: 'Identify exact high-converting commercial keywords in your city and nationwide.' },
            { step: '02', title: 'Campaign Structuring', detail: 'Build Single-Theme Ad Groups (STAG) with responsive search ads and callout extensions.' },
            { step: '03', title: 'Bid & Target CPA Tuning', detail: 'Use smart bidding algorithms (Target ROAS / Target CPA) to maximize efficiency.' },
            { step: '04', title: 'Continuous Search Term Audit', detail: 'Add negative keywords weekly to ensure every rupee goes toward qualified clicks.' }
          ],
          impact: 'Google Search users have the highest purchase intent. We regularly achieve 4.5x - 7x ROAS for e-commerce and ₹250 - ₹500 CPL for services.',
          tools: ['Google Ads Editor', 'Google Tag Manager', 'Semrush / SpyFu', 'Looker Studio'],
          metricBenchmark: '4.5x - 7.0x Google ROAS'
        },
        {
          slug: 'meta-ads',
          name: 'Meta Ads (FB & Instagram)',
          tagline: 'Scale profitable ad budgets with high-converting creative angles in India.',
          desc: 'Full-funnel Meta advertising including broad targeting, Advantage+ shopping campaigns, custom video creative hooks, server-side Conversions API (CAPI), and retargeting.',
          deliverables: [
            'Advantage+ Campaign Budget Optimization (CBO) & Scaling',
            'High-Velocity Creative Testing Matrix (Static, Carousel, UGC Reels)',
            'Server-Side Meta Conversions API (CAPI) via Cloudflare / Stape',
            'Custom & Lookalike (LAL) Audience Modeling (1% - 5%)',
            'Direct-Response Copywriting with Local Vernacular Hooks'
          ],
          process: [
            { step: '01', title: 'Account Architecture', detail: 'Restructure account into 3-tier testing, scaling, and dynamic retargeting funnels.' },
            { step: '02', title: 'Creative Velocity Sprints', detail: 'Produce and test 10+ new video hooks and static angle variations weekly.' },
            { step: '03', title: 'Algorithmic Scaling', detail: 'Scale winning ad sets horizontally and vertically by 20% increments without breaking ROAS.' },
            { step: '04', title: 'Attribution & Optimization', detail: 'Utilize 1st-party tracking to measure blended MER and true customer profitability.' }
          ],
          impact: 'The primary growth engine for Indian D2C and consumer brands. We scale ad accounts from ₹50,000/mo to ₹10,00,000+/mo profitably.',
          tools: ['Meta Ads Manager', 'Conversions API (CAPI)', 'Motion App Analytics', 'Triple Whale / Hyros'],
          metricBenchmark: '3.8x - 5.5x Blended ROAS'
        },
        {
          slug: 'youtube-ads',
          name: 'YouTube Ads',
          tagline: 'High-impact video storytelling that converts viewers into buyers.',
          desc: 'Skippable in-stream ads, non-skippable bumpers, and in-feed YouTube video campaigns targeting relevant channel placements and search topics.',
          deliverables: [
            '5-Second Skip-Proof Video Scripting & Hook Architecture',
            'Custom Intent Audience Creation based on Google Search queries',
            'Competitor Channel Placement Targeting',
            'Video Action Campaigns (VAC) with Direct Product Feeds',
            'Full Conversion Attribution Setup'
          ],
          process: [
            { step: '01', title: 'The 5-Second Hook Script', detail: 'Hook viewers before the "Skip" button appears with instant value and problem agitation.' },
            { step: '02', title: 'Custom Intent Audience Build', detail: 'Target users who recently searched for your competitors or industry keywords on Google.' },
            { step: '03', title: 'Video Action Campaign Launch', detail: 'Deploy video ads with clickable product extension tiles and site links.' },
            { step: '04', title: 'View-Through Attribution', detail: 'Analyze assisted conversions and scale winning video variations.' }
          ],
          impact: 'Delivers massive brand prestige and builds high trust for high-ticket services, EdTech, Real Estate, and D2C brands.',
          tools: ['Google Ads', 'YouTube Studio', 'VidIQ Pro', 'DaVinci Resolve'],
          metricBenchmark: '65%+ Average 30s View Rate'
        },
        {
          slug: 'lead-generation-campaigns',
          name: 'Lead Generation Campaigns',
          tagline: 'Fill your sales pipeline with verified, high-intent buyer inquiries.',
          desc: 'High-converting instant lead forms, WhatsApp click-to-chat ad funnels, and landing page cost-estimator quizzes that filter out tire-kickers.',
          deliverables: [
            'Meta & LinkedIn Native Lead Forms with Custom Qualifier Questions',
            'Click-to-WhatsApp Ads with Pre-filled Lead Information',
            'Automated Lead Instant Verification (OTP / Phone validation)',
            'Real-Time CRM Sync (Google Sheets, Zoho, HubSpot, WhatsApp)',
            'Automated Instant WhatsApp Notification to Sales Reps'
          ],
          process: [
            { step: '01', title: 'Offer & Lead Magnet Design', detail: 'Create high-value downloadable audits, rate cards, or interactive cost estimators.' },
            { step: '02', title: 'Multi-Step Qualifier Form', detail: 'Add qualification questions (e.g. Budget, Timeline) to filter out fake inquiries.' },
            { step: '03', title: 'Instant Sales Alert Trigger', detail: 'Send new lead info directly to your team WhatsApp within 3 seconds of submission.' },
            { step: '04', title: 'Cost-Per-Lead (CPL) Optimization', detail: 'Continuously adjust targeting and creative angles to lower CPL while improving lead quality.' }
          ],
          impact: 'Replaces cold calling with a steady stream of pre-qualified Indian customers eager to discuss quotes and services.',
          tools: ['Meta Instant Forms', 'Zapier / Make.com', 'Zoho CRM', 'WhatsApp Cloud API'],
          metricBenchmark: '70%+ Contactable Lead Rate'
        },
        {
          slug: 'ecommerce-ads',
          name: 'E-commerce Ads',
          tagline: 'Scale product sales, average order value (AOV) and repeat purchases.',
          desc: 'Dynamic Product Ads (DPA), catalog sales campaigns, multi-product bundles, festival sale promotions (Diwali, Independence Day), and seasonal discount pushes.',
          deliverables: [
            'Shopify / WooCommerce Product Feed Synchronization',
            'Dynamic Catalog Ads (DPA) with Automated Price & Stock Updates',
            'Collection Page & Best-Seller Carousel Ads',
            'Festival & Flash Sale Scaling Strategy (Diwali, New Year, End of Season)',
            'Free Shipping & Bundle Offer Testing (Buy 2 Get 1, Tiered Discounts)'
          ],
          process: [
            { step: '01', title: 'Catalog Feed Audit', detail: 'Fix missing GTINs, product images, titles, and variant descriptions for seamless sync.' },
            { step: '02', title: 'Hero Product Testing', detail: 'Identify top 20% best-sellers that generate 80% of revenue and scale ads around them.' },
            { step: '03', title: 'Bundle & AOV Scaling', detail: 'Push multi-pack bundles to increase cart value and absorb rising ad costs.' },
            { step: '04', title: 'Dynamic Retargeting', detail: 'Show exact viewed products to shoppers who abandoned cart within the last 7 days.' }
          ],
          impact: 'Transforms e-commerce stores into profitable scaling machines with lower customer acquisition costs and higher basket sizes.',
          tools: ['Shopify Meta App', 'Google Merchant Center', 'Klaviyo', 'Razorpay Checkout'],
          metricBenchmark: '+40% Average Order Value (AOV)'
        },
        {
          slug: 'remarketing-retargeting',
          name: 'Remarketing / Retargeting',
          tagline: 'Recover abandoned carts and re-engage warm visitors across the internet.',
          desc: 'Cross-channel retargeting across Meta, Google Display Network, YouTube, and WhatsApp to recapture 95% of visitors who leave without purchasing.',
          deliverables: [
            'Multi-Window Retargeting Sequences (Day 1-3, Day 4-7, Day 8-30)',
            'Dynamic Abandoned Cart Recovery Ads with Special Discount Codes',
            'Google Display Network & YouTube Remarketing Banners',
            'Past Customer Win-Back & Cross-Sell Campaigns',
            'Audience Frequency Capping to prevent ad fatigue'
          ],
          process: [
            { step: '01', title: 'Pixel & Segment Setup', detail: 'Segment audiences by intent (Product Viewers, Add to Cart, Initiated Checkout).' },
            { step: '02', title: 'Objection-Busting Creatives', detail: 'Address top objections: shipping speed, COD availability, warranty, and reviews.' },
            { step: '03', title: 'Urgency & Discount Triggers', detail: 'Offer limited-time coupons (e.g. EXTRA10) to close lingering checkout abandoners.' },
            { step: '04', title: 'Cross-Channel Synchronization', detail: 'Coordinate retargeting ads with automated WhatsApp and email reminders.' }
          ],
          impact: 'Typically delivers the highest ROAS (6x - 12x) of any campaign by converting users who already know and trust your brand.',
          tools: ['Meta Pixel', 'Google Display Network', 'AdRoll', 'WhatsApp Cloud API'],
          metricBenchmark: '6.5x - 12.0x Retargeting ROAS'
        },
        {
          slug: 'conversion-optimization',
          name: 'Conversion Optimization (CRO)',
          tagline: 'Double your website conversions without spending an extra rupee on ads.',
          desc: 'A/B landing page testing, heatmap analysis, frictionless Indian checkout optimization (1-click UPI, COD verification), and load-speed acceleration.',
          deliverables: [
            'Hotjar / Microsoft Clarity Heatmap & Session Recording Analysis',
            'A/B Split Testing for Headlines, CTAs, Hero Images & Pricing Tables',
            '1-Click UPI & Fast Checkout Integration (GoKwik, Razorpay, Simpl)',
            'Mobile Speed & Core Web Vitals Optimization (< 2s load time)',
            'Trust Badge, Social Proof & COD Confirmation Enhancements'
          ],
          process: [
            { step: '01', title: 'Friction Teardown', detail: 'Identify exact drop-off points in the checkout journey using session recordings.' },
            { step: '02', title: 'Hypothesis & Wireframe', detail: 'Design high-converting challenger page layouts with simplified form fields.' },
            { step: '03', title: 'A/B Traffic Split', detail: 'Direct 50% of ad traffic to the new challenger page to measure conversion lift.' },
            { step: '04', title: 'Rollout & Iterate', detail: 'Adopt the winning variation and launch the next optimization experiment.' }
          ],
          impact: 'Increasing website conversion rate from 1.5% to 3.0% literally cuts your customer acquisition cost in half.',
          tools: ['Microsoft Clarity', 'Google Optimize / VWO', 'PageSpeed Insights', 'Razorpay'],
          metricBenchmark: '+45% Conversion Rate Uplift'
        }
      ]
    },
    {
      id: 'content-marketing',
      slug: 'content-marketing',
      num: '03',
      categoryGroup: 'creative',
      title: 'Content Marketing',
      tagline: 'Persuasive storytelling and authority content that commands market attention.',
      icon: 'edit',
      color: '#E52D25',
      desc: 'High-impact direct-response copy, SEO-optimized articles, educational authority guides, and compelling narratives that establish your brand as the undisputed leader in your industry.',
      subServices: [
        {
          slug: 'content-strategy-planning',
          name: 'Content Strategy',
          tagline: 'Targeted topic mapping that connects audience curiosity to purchasing intent.',
          desc: 'Holistic content architecture identifying search demand, competitive white-spaces, buyer pain points, and cross-channel publishing rhythms.',
          deliverables: ['Editorial Guidelines', 'Topic Cluster Map', 'Tone of Voice Guide', 'Monthly Publishing Roadmap', 'Repurposing Framework'],
          process: [{ step: '01', title: 'Audience Discovery', detail: 'Map out questions your customers ask before buying.' }, { step: '02', title: 'Topic Clustering', detail: 'Group subjects into core pillars and supporting subtopics.' }, { step: '03', title: 'Channel Optimization', detail: 'Adapt messages for blogs, LinkedIn, and social media.' }, { step: '04', title: 'KPI Review', detail: 'Measure organic traffic, backlinks, and lead conversions.' }],
          impact: 'Transforms uncoordinated posting into an organic growth flywheel that builds sustained domain authority.',
          tools: ['Ahrefs', 'Notion', 'BuzzSumo', 'Grammarly'],
          metricBenchmark: '3x Organic Keyword Reach'
        },
        {
          slug: 'social-media-content',
          name: 'Social Media Content',
          tagline: 'High-retention visual and written copy crafted for social feeds.',
          desc: 'Punchy captions, carousel slide storytelling, meme formats, infographic breakdowns, and interactive community questions.',
          deliverables: ['Custom Graphic Slides', 'Engaging Captions', 'Hashtag Clusters', 'Story Post Prompts', 'Meme Concepts'],
          process: [{ step: '01', title: 'Hook Creation', detail: 'Draft 3 opening hook variations per post.' }, { step: '02', title: 'Visual Pairing', detail: 'Match copy with custom brand visuals.' }, { step: '03', title: 'Call-to-Action Testing', detail: 'Test comment triggers and DM prompts.' }, { step: '04', title: 'Engagement Analysis', detail: 'Refine future copy based on share and save counts.' }],
          impact: 'Drives consistent comments, shares, and brand recall across Instagram, LinkedIn, and Facebook.',
          tools: ['Figma', 'Canva', 'Copy.ai', 'Buffer'],
          metricBenchmark: '4.2x Social Shares'
        },
        {
          slug: 'blog-writing',
          name: 'Blog Writing',
          tagline: 'SEO-rich, thoroughly researched articles that rank #1 and convert readers.',
          desc: 'Long-form thought leadership articles, comprehensive guides, comparison reviews, and actionable listicles optimized for search engines and human readers.',
          deliverables: ['2,000+ Word SEO Pillar Posts', 'Keyword Research & Meta Data', 'Custom Graphic Headers', 'Internal Link Architecture', 'Lead Magnet CTA Callouts'],
          process: [{ step: '01', title: 'Keyword Intent Analysis', detail: 'Identify exact queries with high commercial intent.' }, { step: '02', title: 'Detailed Outline', detail: 'Structure headers (H1, H2, H3) covering all search intent facets.' }, { step: '03', title: 'Drafting & Fact-Checking', detail: 'Write engaging copy with original examples and data.' }, { step: '04', title: 'On-Page Optimization', detail: 'Optimize schema, meta tags, and internal links before publishing.' }],
          impact: 'Builds permanent organic traffic assets that continue generating leads for years with zero ongoing ad cost.',
          tools: ['Surfer SEO', 'WordPress', 'Yoast SEO', 'Grammarly Premium'],
          metricBenchmark: '#1 Google Rankings for Target Keywords'
        },
        {
          slug: 'website-content',
          name: 'Website Content',
          tagline: 'High-converting sales copy that turns website visitors into buyers.',
          desc: 'Value proposition development, homepage messaging, service page breakdowns, founder bio storytelling, and persuasive landing page copy.',
          deliverables: ['Homepage Hero Copy & Value Props', 'Service Page Deep Dives', 'About Us Storytelling', 'Case Study Narratives', 'Frictionless FAQ Sections'],
          process: [{ step: '01', title: 'Customer Interview Extraction', detail: 'Extract real phrases and pain points from customer feedback.' }, { step: '02', title: 'Wireframe Copy Architecture', detail: 'Structure section headlines, sub-bullets, and CTA anchors.' }, { step: '03', title: 'Direct-Response Polish', detail: 'Sharpen benefits and eliminate corporate fluff.' }, { step: '04', title: 'Conversion Testing', detail: 'Monitor bounce rate and form completion metrics.' }],
          impact: 'Transforms passive website browsers into qualified inbound leads and paying clients.',
          tools: ['Figma Copy Layouts', 'Hemingway Editor', 'Google Analytics', 'Hotjar'],
          metricBenchmark: '+35% Inbound Form Inquiries'
        },
        {
          slug: 'educational-content',
          name: 'Educational Content',
          tagline: 'Position your brand as the trusted industry authority with guides & lead magnets.',
          desc: 'Downloadable PDF playbooks, step-by-step masterclasses, checklist resources, and whitepapers that capture high-intent email/WhatsApp leads.',
          deliverables: ['Comprehensive PDF Lead Magnets', 'Step-by-Step Industry Checklists', 'Resource Worksheets & Templates', 'Email Gating Funnel Setup', 'Slide Decks'],
          process: [{ step: '01', title: 'Topic Validation', detail: 'Pick a high-friction topic that target clients struggle to solve.' }, { step: '02', title: 'Resource Creation', detail: 'Write actionable frameworks and design sleek PDF assets.' }, { step: '03', title: 'Landing Page Gate', detail: 'Build a high-converting download page capturing phone and email.' }, { step: '04', title: 'Nurture Handoff', detail: 'Deliver the asset instantly via automated WhatsApp/email.' }],
          impact: 'Captures hundreds of verified business contact details every week at a fraction of standard lead costs.',
          tools: ['InDesign / Figma', 'Typeform', 'ConvertKit', 'WhatsApp API'],
          metricBenchmark: '55%+ Landing Page Opt-in Rate'
        },
        {
          slug: 'brand-storytelling',
          name: 'Brand Storytelling',
          tagline: 'Emotional connection frameworks that turn customers into brand evangelists.',
          desc: 'Founder origin story crafting, behind-the-scenes narratives, mission-driven social campaigns, and transformation case study spotlights.',
          deliverables: ['Founder Journey Narrative', 'Brand Manifesto Video Script', 'Customer Transformation Story Series', 'Company Core Values Document', 'Press Release Copy'],
          process: [{ step: '01', title: 'Founder Deep-Dive Interview', detail: 'Uncover the emotional "Why" and struggles behind founding the company.' }, { step: '02', title: 'Narrative Arc Construction', detail: 'Structure the story using the classic Hero\'s Journey framework.' }, { step: '03', title: 'Multi-Media Deployment', detail: 'Produce video scripts, website copy, and social post versions.' }, { step: '04', title: 'Community Feedback', detail: 'Amplify positive community reactions and testimonials.' }],
          impact: 'Creates enduring emotional moat that prevents your business from being commoditized or copied on price alone.',
          tools: ['Scriptwriting Suites', 'Descript', 'Notion', 'Vimeo'],
          metricBenchmark: 'High Brand Loyalty & Retention'
        },
        {
          slug: 'content-calendars',
          name: 'Content Calendars',
          tagline: 'Structured 30-day posting roadmaps aligned with festivals & sales cycles.',
          desc: 'Proactive scheduling matrices mapping every post, reel, newsletter, and promotional announcement ahead of time.',
          deliverables: ['Monthly Master Content Calendar', 'Indian Festive Campaign Timelines', 'Asset Production Deadlines', 'Approval Workflow Setup', 'Hashtag & Keyword Repositories'],
          process: [{ step: '01', title: 'Holiday & Seasonal Mapping', detail: 'Identify relevant Indian festivals and shopping seasons.' }, { step: '02', title: 'Frequency Alignment', detail: 'Determine optimal weekly posting cadence per platform.' }, { step: '03', title: 'Collaborative Review', detail: 'Client reviews and approves graphics and copy in one central portal.' }, { step: '04', title: 'Live Scheduling', detail: 'Automate post distribution at optimal peak engagement windows.' }],
          impact: 'Guarantees zero missed deadlines, seamless consistency, and timely festive marketing execution.',
          tools: ['Airtable', 'Google Sheets', 'Notion', 'Asana'],
          metricBenchmark: '100% On-Schedule Consistency'
        }
      ]
    },
    {
      id: 'creative-design',
      slug: 'creative-design',
      num: '04',
      categoryGroup: 'creative',
      title: 'Creative & Design',
      tagline: 'Thumb-stopping aesthetics, high-CTR visual assets & premium brand design.',
      icon: 'layout',
      color: '#E52D25',
      desc: 'Modern visual identities, high-converting ad creatives, brand guidelines, and marketing collaterals that captivate audiences and elevate brand prestige across all touchpoints.',
      subServices: [
        {
          slug: 'social-media-creatives',
          name: 'Social Media Creatives',
          tagline: 'Scroll-stopping graphics, multi-slide carousels & aesthetic feed layouts.',
          desc: 'Custom-designed graphics built in Figma and Photoshop optimized for high CTR, contrast, and readability on mobile screens.',
          deliverables: ['Custom Feed Graphics', 'Carousel Slide Decks', 'Story Templates', 'Highlight Icon Badges', 'Animated Micro-Graphics'],
          process: [{ step: '01', title: 'Design Brief & Brand Rules', detail: 'Establish font hierarchy, color codes, and visual mood boards.' }, { step: '02', title: 'Concept Creation', detail: 'Design 3 distinct visual styles for testing.' }, { step: '03', title: 'Batch Production', detail: 'Produce monthly creative batches with rapid turnaround.' }, { step: '04', title: 'Export & Delivery', detail: 'Deliver pixel-perfect assets formatted for 1:1, 4:5, and 9:16 aspect ratios.' }],
          impact: 'Stops the endless scroll and commands instant attention in crowded Indian social media feeds.',
          tools: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Canva Pro'],
          metricBenchmark: '2.8% Average Post CTR'
        },
        {
          slug: 'ad-creatives',
          name: 'Ad Creatives (Static & Motion)',
          tagline: 'Direct-response visual assets engineered to beat benchmark ad CTRs.',
          desc: 'High-contrast ad banners, before/after comparisons, product benefit callouts, social proof badges, and motion graphic GIFs built for Meta and Google Ads.',
          deliverables: ['Static Ad Variations', 'Motion Graphic Ad Creatives', 'Comparison Grid Ads', 'Review / Testimonial Overlays', 'Urgency & Discount Banners'],
          process: [{ step: '01', title: 'Creative Hook Strategy', detail: 'Identify top 5 customer pain points and objections to highlight visually.' }, { step: '02', title: 'Design Execution', detail: 'Create high-contrast assets with bold typography and clear product focus.' }, { step: '03', title: 'Ad Manager Testing', detail: 'Deploy into live Meta ad campaigns to measure Click-Through Rate.' }, { step: '04', title: 'Winner Iteration', detail: 'Iterate on top-performing visuals by testing new headlines and background colors.' }],
          impact: 'Reduces ad cost-per-click by 40% through higher organic relevance and thumb-stopping power.',
          tools: ['Adobe After Effects', 'Photoshop', 'Figma', 'Motion App'],
          metricBenchmark: '3.5%+ Ad Click-Through Rate (CTR)'
        },
        {
          slug: 'brand-identity',
          name: 'Brand Identity',
          tagline: 'Complete visual ecosystems that give your business an iconic, premium look.',
          desc: 'Color palette definition, typography selection, logo usage rules, iconography libraries, and brand pattern assets.',
          deliverables: ['Primary & Secondary Color Palettes', 'Typography & Font System', 'Iconography Library', 'Brand Pattern & Texture Assets', 'Digital & Print Asset Kit'],
          process: [{ step: '01', title: 'Brand Personality Mapping', detail: 'Define brand attributes (e.g. bold, trustworthy, modern, luxurious).' }, { step: '02', title: 'Moodboarding & Exploration', detail: 'Present 2 distinct aesthetic directions for client feedback.' }, { step: '03', title: 'System Development', detail: 'Build the comprehensive design tokens and asset guidelines.' }, { step: '04', title: 'Master File Export', detail: 'Deliver all vector files, web fonts, and ready-to-use digital templates.' }],
          impact: 'Elevates perceived brand value, allowing you to charge higher prices with greater customer confidence.',
          tools: ['Figma Design Systems', 'Adobe Illustrator', 'Coolors', 'Typewolf'],
          metricBenchmark: '100% Brand Consistency'
        },
        {
          slug: 'logo-design',
          name: 'Logo Design',
          tagline: 'Memorable, modern vector logos that make your business instantly recognizable.',
          desc: 'Custom logo concepts, wordmarks, emblems, favicons, and app icon marks delivered in all scalable vector formats.',
          deliverables: ['Primary Brand Logo', 'Secondary Horizontal & Vertical Lockups', 'Favicon & Social Profile Avatar', 'Monochrome & Reverse Color Versions', 'Full Vector Files (AI, SVG, EPS, PNG)'],
          process: [{ step: '01', title: 'Discovery & Sketching', detail: 'Explore 20+ rough sketches based on your brand essence and market positioning.' }, { step: '02', title: 'Vector Digitization', detail: 'Develop top 3 concepts into clean geometric vector designs.' }, { step: '03', title: 'Client Feedback & Revisions', detail: 'Refine chosen concept with tailored adjustments to typography and kerning.' }, { step: '04', title: 'Final Handover', detail: 'Deliver full scalable package with copyright transfer.' }],
          impact: 'Gives your brand a timeless symbol that looks stunning on digital screens, product packaging, and office signage.',
          tools: ['Adobe Illustrator', 'Figma Vector Tools', 'FontLab'],
          metricBenchmark: '100% Vector Scalability'
        },
        {
          slug: 'marketing-collaterals',
          name: 'Marketing Collaterals',
          tagline: 'High-impact physical and digital promotional materials.',
          desc: 'Brochures, product catalogs, roll-up standees, visiting cards, digital pitch decks, and promotional flyers.',
          deliverables: ['Product Brochures & Catalogues', 'Business Cards & Letterheads', 'Roll-up Banners & Standees', 'Digital PDF Pitch Decks', 'Packaging & Sticker Labels'],
          process: [{ step: '01', title: 'Content & Layout Mapping', detail: 'Organize messaging and imagery for maximum visual flow.' }, { step: '02', title: 'Print-Ready Setup', detail: 'Configure CMYK color profiles, bleed lines, and crop marks for printers.' }, { step: '03', title: 'Client Proofing', detail: 'Review digital mockups and make final text edits.' }, { step: '04', title: 'Print & Digital Delivery', detail: 'Supply high-res print files and compressed digital PDF versions.' }],
          impact: 'Ensures your offline sales reps and event exhibitions reflect the exact same premium polish as your online marketing.',
          tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
          metricBenchmark: 'Print & Digital Precision'
        },
        {
          slug: 'infographics',
          name: 'Infographics',
          tagline: 'Transform complex data and statistics into viral, easily digestible graphics.',
          desc: 'Step-by-step process diagrams, comparison charts, industry statistics teardowns, and visual timeline graphics.',
          deliverables: ['Longform Vertical Infographics', 'Carousel-Friendly Graphic Slices', 'Custom Vector Icons & Data Charts', 'Interactive SVG Assets', 'Social Share Snippets'],
          process: [{ step: '01', title: 'Data Simplification', detail: 'Extract core takeaways from complex industry reports or internal data.' }, { step: '02', title: 'Visual Flow Wireframing', detail: 'Design intuitive reader path from top headline to final takeaway.' }, { step: '03', title: 'Illustration & Typography', detail: 'Add custom charts, callout numbers, and bold visual markers.' }, { step: '04', title: 'Distribution Optimization', detail: 'Slice for Pinterest, LinkedIn slides, and blog embedding.' }],
          impact: 'Generates organic backlinks from other websites and boosts social shares by up to 300%.',
          tools: ['Adobe Illustrator', 'Figma', 'Tableau / Datawrapper'],
          metricBenchmark: '3x More Backlinks & Shares'
        },
        {
          slug: 'presentation-design',
          name: 'Presentation Design',
          tagline: 'Persuasive investor pitch decks and client sales presentations.',
          desc: 'Custom PowerPoint, Keynote, and Google Slides presentations designed to close funding rounds and win enterprise contracts.',
          deliverables: ['Investor Pitch Decks', 'Client Sales Proposals', 'Conference Keynote Slides', 'Custom Master Slide Templates', 'Editable Google Slides / PPTX Files'],
          process: [{ step: '01', title: 'Story Arc & Slide Outline', detail: 'Refine the problem-solution narrative and financial slide clarity.' }, { step: '02', title: 'Custom Master Layouts', detail: 'Design bespoke slide layouts eliminating boring bullet points.' }, { step: '03', title: 'Data Chart Modernization', detail: 'Turn dry revenue and growth numbers into sleek visual charts.' }, { step: '04', title: 'Editable Delivery', detail: 'Deliver full editable template for future internal updates.' }],
          impact: 'Helps startups raise capital and helps agencies/B2B companies close high-ticket clients with executive polish.',
          tools: ['Google Slides', 'Apple Keynote', 'PowerPoint', 'Figma'],
          metricBenchmark: 'High Closing & Pitch Success'
        }
      ]
    },
    {
      id: 'video-reels-marketing',
      slug: 'video-reels-marketing',
      num: '05',
      categoryGroup: 'creative',
      title: 'Video & Reels Marketing',
      tagline: 'Viral short-form hooks, product storytelling & direct-response video ads.',
      icon: 'video',
      color: '#E52D25',
      desc: 'From high-retention Instagram Reels and YouTube Shorts to cinematic product explainers and high-converting video ads engineered to capture attention within the first 1.5 seconds.',
      subServices: [
        {
          slug: 'instagram-reels',
          name: 'Instagram Reels',
          tagline: 'Viral 9:16 short-form video concepts with high retention and DM shares.',
          desc: 'Trending audio curation, fast-paced editing, hook generation, subtitles with sound effects, and seamless loop engineering.',
          deliverables: ['Viral Hook Scriptwriting', 'High-Pacing Video Editing', 'Dynamic Animated Subtitles & B-Roll', 'Trending Audio Mapping', 'Caption & Hashtag Strategy'],
          process: [{ step: '01', title: 'Trend Discovery', detail: 'Identify viral audio and formats taking off in Indian Instagram culture.' }, { step: '02', title: 'Scripting with 1.5s Hook', detail: 'Write opening lines that stop thumbs immediately.' }, { step: '03', title: 'Editing & Sound Design', detail: 'Add dynamic SFX, zoom cuts, popups, and animated captions.' }, { step: '04', title: 'Loop & Retention Tuning', detail: 'Ensure seamless loop transitions to maximize 100%+ watch time.' }],
          impact: 'The #1 driver of organic reach in 2026. Consistently achieves 50,000 to 500,000+ views for client accounts.',
          tools: ['CapCut Pro', 'Premiere Pro', 'After Effects', 'Instagram Creator Studio'],
          metricBenchmark: '50k - 500k+ Views Per Reel'
        },
        {
          slug: 'youtube-videos',
          name: 'YouTube Videos & Shorts',
          tagline: 'Longform channel authority combined with fast-growth YouTube Shorts.',
          desc: 'High-CTR thumbnail design, search-optimized titles, video pacing, end-screen setups, and subscriber conversion funnels.',
          deliverables: ['Click-Worthy Thumbnail Design (High CTR)', 'SEO Title & Description Architecture', 'Longform Video Pacing & Chapter Cuts', 'YouTube Shorts Repurposing', 'End-Screen & Card Links'],
          process: [{ step: '01', title: 'Search Keyword Optimization', detail: 'Target high-volume queries with low competitor video saturation.' }, { step: '02', title: 'A/B Thumbnail Design', detail: 'Design 3 distinct thumbnails with high contrast and emotion.' }, { step: '03', title: 'Audio & Visual Polishing', detail: 'Apply professional color grading, noise reduction, and B-roll.' }, { step: '04', title: 'Audience Retention Analysis', detail: 'Analyze drop-off points in YouTube Studio to improve next video.' }],
          impact: 'Builds permanent video search presence that attracts qualified inbound leads continuously.',
          tools: ['Photoshop Thumbnails', 'DaVinci Resolve', 'VidIQ', 'TubeBuddy'],
          metricBenchmark: '12%+ Thumbnail Click-Through Rate'
        },
        {
          slug: 'short-form-videos',
          name: 'Short-Form Videos',
          tagline: 'Omnichannel micro-content for Instagram, YouTube Shorts & Facebook.',
          desc: 'Single-source video production distributed across multiple platforms to maximize reach with minimal recording effort.',
          deliverables: ['15-60 Second Micro-Videos', 'Multi-Platform Aspect Ratio Formatting', 'Platform-Specific Caption Optimizations', 'Dynamic Text Overlays', 'Audio Cleared for Commercial Use'],
          process: [{ step: '01', title: 'Batch Recording Guide', detail: 'Provide client with simple teleprompter scripts to record 10 videos in 1 hour.' }, { step: '02', title: 'Fast-Cut Post Production', detail: 'Cut pauses, insert relevant meme clips and sound effects.' }, { step: '03', title: 'Cross-Platform Formatting', detail: 'Optimize metadata for Reels, Shorts, and Facebook Video.' }, { step: '04', title: 'Scheduled Launch', detail: 'Deploy on daily staggered schedule for consistent reach.' }],
          impact: 'Allows busy founders to produce a month\'s worth of high-impact video content in just 90 minutes of filming.',
          tools: ['Descript', 'CapCut', 'Teleprompter Apps', 'Canva'],
          metricBenchmark: '30 Videos in 1 Recording Session'
        },
        {
          slug: 'product-videos',
          name: 'Product Videos',
          tagline: 'Showcase product features, textures, and unboxing in high fidelity.',
          desc: 'Crisp macro product shots, 3D visual walkthroughs, benefits callouts, and real-world usage demos that boost purchase confidence.',
          deliverables: ['High-Definition 4K Product Showcases', 'Texture & Feature Macro Shots', 'Unboxing Experience Videos', 'Direct Benefit Overlay Graphics', 'E-Commerce Gallery Ready Clips'],
          process: [{ step: '01', title: 'Product Storyboarding', detail: 'Plan shot list highlighting materials, packaging, and key features.' }, { step: '02', title: 'Cinematic Filming / 3D Render', detail: 'Capture smooth gimbal movements, turntable rotations, and natural lighting.' }, { step: '03', title: 'Graphic Callouts', detail: 'Overlay key specifications, certifications, and customer benefits.' }, { step: '04', title: 'Format Delivery', detail: 'Deliver square clips for Shopify galleries and vertical clips for ads.' }],
          impact: 'Reduces product return rates (RTO) and increases add-to-cart conversion rates by over 40%.',
          tools: ['4K Camera Equipment', 'Gimbals & Sliders', 'DaVinci Resolve', 'Blender 3D'],
          metricBenchmark: '+42% E-Commerce Product Page CVR'
        },
        {
          slug: 'explainer-videos',
          name: 'Explainer Videos',
          tagline: 'Demystify complex software, services & workflows in 60 seconds.',
          desc: 'Engaging 2D animations, motion graphics, and live screencast walkthroughs with professional voiceover narration.',
          deliverables: ['Professional Scriptwriting', 'Studio-Grade Voiceover (Hindi / English)', 'Custom 2D Vector Animations', 'UI/UX Screencast Motion Graphics', 'Background Music & Sound Effects'],
          process: [{ step: '01', title: 'Problem-Solution Script', detail: 'Condense complex value propositions into clear, engaging language.' }, { step: '02', title: 'Voiceover Recording', detail: 'Record professional native voiceover with warm tone.' }, { step: '03', title: 'Animation & Motion', detail: 'Animate custom vector scenes in sync with the audio track.' }, { step: '04', title: 'Sound Design & Final Polish', detail: 'Add musical score and interface audio clicks.' }],
          impact: 'Ideal for tech startups, B2B SaaS, fintech, and professional services looking to simplify their offering.',
          tools: ['Adobe After Effects', 'Illustrator', 'Adobe Audition', 'ElevenLabs Pro'],
          metricBenchmark: '85%+ Video Completion Rate'
        },
        {
          slug: 'video-ads',
          name: 'Video Ads',
          tagline: 'Direct-response video commercials engineered for high-converting ad funnels.',
          desc: 'High-converting video creative hooks, UGC testimonials, comparison ads, and urgency offers built for Meta, Google & YouTube paid campaigns.',
          deliverables: ['3-Hook Video Ad Variations', 'UGC Testimonial Compilations', 'Offer & Price Agitation Ads', 'Direct CTA End-Cards', 'Aspect Ratios: 9:16 (Stories/Reels) & 1:1 (Feed)'],
          process: [{ step: '01', title: 'Competitive Ad Teardown', detail: 'Analyze top-performing video ads in your niche.' }, { step: '02', title: 'Hook Testing Grid', detail: 'Film 3 different opening hooks for the same core video body.' }, { step: '03', title: 'Direct-Response Editing', detail: 'Keep pacing snappy with constant visual changes every 2 seconds.' }, { step: '04', title: 'Ad Manager Optimization', detail: 'Scale winning video variations to maximize ROAS.' }],
          impact: 'Generates lower cost-per-click and higher return on ad spend than generic static images.',
          tools: ['Premiere Pro', 'After Effects', 'Meta Ads Manager', 'CapCut'],
          metricBenchmark: '4.8x Return on Ad Spend (ROAS)'
        },
        {
          slug: 'video-editing',
          name: 'Video Editing',
          tagline: 'Professional post-production that turns raw footage into cinematic gold.',
          desc: 'Color grading, audio cleanup, dynamic text overlays, pacing adjustments, audio track licensing, and multi-format exports.',
          deliverables: ['Rough Cut to Final Polish Workflow', 'Audio Noise Reduction & Leveling', 'Cinematic Color Grading (LUTs)', 'Motion Graphic Title Cards', 'Royalty-Free Music Licensing'],
          process: [{ step: '01', title: 'Footage Ingestion & Selection', detail: 'Organize raw clips, eliminate filler words, and pick best takes.' }, { step: '02', title: 'Pacing & Narrative Assembly', detail: 'Cut for rhythm, emotional impact, and audience retention.' }, { step: '03', title: 'Color & Sound Engineering', detail: 'Color correct skin tones and mix audio levels cleanly.' }, { step: '04', title: 'Revisions & Final Master', detail: 'Deliver uncompressed master files ready for broadcast or web.' }],
          impact: 'Saves creators and business teams dozens of hours while ensuring studio-grade visual quality.',
          tools: ['Adobe Premiere Pro', 'DaVinci Resolve Studio', 'Epidemic Sound', 'Boris FX'],
          metricBenchmark: '48-Hour Turnaround Time'
        }
      ]
    },
    {
      id: 'seo-search',
      slug: 'seo-search',
      num: '06',
      categoryGroup: 'organic',
      title: 'SEO (Search Engine Optimization)',
      tagline: 'Dominate Google search results and capture high-intent organic traffic.',
      icon: 'search',
      color: '#E52D25',
      desc: 'Full-funnel SEO strategy covering technical architecture, on-page optimization, Google Maps Local SEO dominance for Indian cities, and Generative Engine Optimization (GEO).',
      subServices: [
        {
          slug: 'seo-strategy',
          name: 'SEO Strategy',
          tagline: 'Comprehensive roadmap to outrank competitors and capture search market share.',
          desc: 'Competitor gap analysis, keyword opportunity mapping, content architecture, and authority backlink building roadmaps.',
          deliverables: ['Competitor Organic Teardown', 'Topical Authority Keyword Map', 'Technical SEO Health Roadmap', 'Quarterly Growth Projections', 'ROI & Revenue Attribution Setup'],
          process: [{ step: '01', title: 'Market Search Audit', detail: 'Map every query target customers use throughout their buying journey.' }, { step: '02', title: 'Competitive Gap Analysis', detail: 'Identify high-value keywords where competitors rank but you do not.' }, { step: '03', title: 'Execution Priority Matrix', detail: 'Focus on low-difficulty, high-revenue keywords first.' }, { step: '04', title: 'Measurement Setup', detail: 'Track keyword position changes weekly via Google Search Console.' }],
          impact: 'Establishes a predictable organic growth engine that reduces dependency on paid ads over time.',
          tools: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog'],
          metricBenchmark: '+300% Organic Search Impressions'
        },
        {
          slug: 'on-page-seo',
          name: 'On-Page SEO',
          tagline: 'Optimize every page element for maximum search crawler understanding and clicks.',
          desc: 'Title tag and meta description writing, header hierarchy (H1, H2, H3), URL structure, image ALT text, and internal link optimization.',
          deliverables: ['High-CTR Title Tags & Meta Descriptions', 'Header Hierarchy Restructuring (H1-H4)', 'Internal Linking Silo Architecture', 'Image ALT Optimization & Compression', 'Keyword Density & TF-IDF Fine-Tuning'],
          process: [{ step: '01', title: 'Page Intent Mapping', detail: 'Ensure primary keyword matches the search intent of the page.' }, { step: '02', title: 'Meta Data Crafting', detail: 'Write compelling titles with high click-through power in SERPs.' }, { step: '03', title: 'Content Structuring', detail: 'Add clear subheadings, bullet points, and answering FAQs.' }, { step: '04', title: 'Internal Silo Linking', detail: 'Pass link equity from high-authority pages to key sales landing pages.' }],
          impact: 'Instantly improves search rankings for existing pages without needing new external backlinks.',
          tools: ['Surfer SEO', 'Yoast SEO / RankMath', 'Google Rich Results Test'],
          metricBenchmark: '+65% Organic Click-Through Rate'
        },
        {
          slug: 'technical-seo',
          name: 'Technical SEO',
          tagline: 'Eliminate crawl errors, accelerate page speed & optimize Core Web Vitals.',
          desc: 'XML sitemap fixes, robots.txt optimization, canonical tag cleanup, schema markup implementation, and mobile speed acceleration.',
          deliverables: ['Core Web Vitals Pass Guarantee (LCP, INP, CLS)', 'Schema.org JSON-LD Structured Data Implementation', 'Crawl Error & 404 Redirect Resolution', 'XML Sitemap & Robots.txt Reconfiguration', 'HTTPS Security & Mobile Usability Fixes'],
          process: [{ step: '01', title: 'Deep Site Crawl', detail: 'Scan entire domain with Screaming Frog to identify broken links and duplicate content.' }, { step: '02', title: 'Speed & Vitals Tuning', detail: 'Compress scripts, defer unused CSS, and optimize server response time.' }, { step: '03', title: 'Schema Injection', detail: 'Embed Organization, LocalBusiness, FAQ, and Product schema.' }, { step: '04', title: 'Indexation Verification', detail: 'Verify fast indexation in Google Search Console.' }],
          impact: 'Ensures Google bots can crawl and index 100% of your website pages with zero friction.',
          tools: ['Screaming Frog', 'Google PageSpeed Insights', 'Cloudflare', 'Schema Validator'],
          metricBenchmark: '90+ Core Web Vitals Score'
        },
        {
          slug: 'local-seo',
          name: 'Local SEO (Google Maps & GMB)',
          tagline: 'Rank #1 in Google Maps 3-Pack across Mumbai, Pune, Delhi NCR & Bangalore.',
          desc: 'Google Business Profile (GMB) optimization, local citation building, review velocity acceleration, and geo-targeted service landing pages.',
          deliverables: ['Google Business Profile (GBP) Verification & Complete Setup', 'Local 3-Pack Map Ranking Strategy', '50+ Consistent Indian Business Citations (Justdial, Sulekha, Indiamart)', 'Review Velocity Generation Playbook', 'Geo-Targeted City Landing Pages (e.g. /pune, /mumbai)'],
          process: [{ step: '01', title: 'GBP Audit & Category Precision', detail: 'Select exact primary and secondary business categories.' }, { step: '02', title: 'Geo-Tagged Photo & Update Protocol', detail: 'Upload weekly updates and geo-tagged work photos.' }, { step: '03', title: 'NAP Citation Consistency', detail: 'Ensure Name, Address, Phone number are 100% identical across the web.' }, { step: '04', title: 'Review Velocity Push', detail: 'Generate 5-star client reviews with targeted location keywords.' }],
          impact: 'Dominates local customer searches, driving high-intent phone calls, directions, and walk-in leads.',
          tools: ['Google Business Profile', 'BrightLocal', 'Whitespark', 'WhatsApp Review Automation'],
          metricBenchmark: '#1 - #3 Rank in Google Maps 3-Pack'
        },
        {
          slug: 'keyword-research',
          name: 'Keyword Research',
          tagline: 'Discover high-intent buyer keywords with low competitive resistance.',
          desc: 'Search volume analysis, commercial intent classification, long-tail query discovery, and competitor paid/organic keyword mining.',
          deliverables: ['Master Keyword Master Sheet (500+ Qualified Keywords)', 'Search Intent Categorization (Informational vs Transactional)', 'Keyword Difficulty & Opportunity Scoring', 'Local City-Specific Query Variations', 'Content Mapping Guide'],
          process: [{ step: '01', title: 'Seed Keyword Expansion', detail: 'Brainstorm core services and expand using search algorithm databases.' }, { step: '02', title: 'Competitor Reverse-Engineering', detail: 'Identify exact keywords generating traffic for market leaders.' }, { step: '03', title: 'Intent Classification', detail: 'Tag keywords by purchase readiness (Ready-to-Buy vs Researching).' }, { step: '04', title: 'Strategic Roadmap Mapping', detail: 'Assign target keywords to specific pages and blog topics.' }],
          impact: 'Prevents wasted effort by focusing content strictly on keywords that generate real revenue.',
          tools: ['Semrush', 'Ahrefs Keyword Explorer', 'Google Keyword Planner'],
          metricBenchmark: '500+ Qualified Keyword Targets'
        },
        {
          slug: 'content-seo',
          name: 'Content SEO',
          tagline: 'Programmatic keyword clusters and topical authority architectures.',
          desc: 'Writing and optimizing content hubs that satisfy Google’s Helpful Content system and Generative Engine Optimization (GEO) standards.',
          deliverables: ['Topic Cluster Architecture', 'AI Search (GEO) Optimization for Google AI Overviews', 'Featured Snippet Answer Boxes', 'FAQ Schema Expansion', 'Topical Depth & Coverage Scoring'],
          process: [{ step: '01', title: 'Cluster Identification', detail: 'Group related sub-topics around core pillar topics.' }, { step: '02', title: 'Comprehensive Answering', detail: 'Answer all common user questions directly in clear format.' }, { step: '03', title: 'Snippet Optimization', detail: 'Format definitions and lists to capture Google Position #0 snippets.' }, { step: '04', title: 'Topical Authority Review', detail: 'Check search coverage against top encyclopedic competitors.' }],
          impact: 'Positions your website as the ultimate authoritative source in your vertical for Google algorithms.',
          tools: ['Clearscope', 'MarketMuse', 'Surfer SEO'],
          metricBenchmark: 'Topical Authority Dominance'
        },
        {
          slug: 'seo-audits',
          name: 'SEO Audits',
          tagline: '50+ point technical diagnostics report identifying indexing and ranking leaks.',
          desc: 'Comprehensive evaluation of site architecture, backlink profile toxicity, mobile responsiveness, and page-by-page indexation status.',
          deliverables: ['Comprehensive 50+ Point Technical SEO Audit PDF', 'Backlink Profile & Toxic Link Audit', 'Site Speed & Core Web Vitals Breakdown', 'Competitor Benchmark Comparison', 'Prioritized Action Item Checklist with Fixes'],
          process: [{ step: '01', title: 'Full Domain Diagnostics', detail: 'Run automated and manual crawls across all indexed pages.' }, { step: '02', title: 'Penalty & Index Check', detail: 'Verify zero algorithmic penalties or canonical issues.' }, { step: '03', title: 'Backlink Analysis', detail: 'Evaluate domain rating and disavow harmful spam backlinks.' }, { step: '04', title: 'Executive Presentation', detail: 'Walk through clear step-by-step roadmap to fix all issues.' }],
          impact: 'Uncovers hidden technical roadblocks that are secretly preventing your site from ranking on Google page 1.',
          tools: ['Screaming Frog', 'Ahrefs Site Audit', 'Google Search Console'],
          metricBenchmark: '100% Roadmap Clarity'
        }
      ]
    },
    {
      id: 'website-development',
      slug: 'website-development',
      num: '07',
      categoryGroup: 'tech',
      title: 'Website Development',
      tagline: 'Lightning-fast, mobile-first, high-converting digital storefronts.',
      icon: 'globe',
      color: '#E52D25',
      desc: 'Custom business websites, Shopify e-commerce stores, and high-converting landing pages built with responsive UI/UX and frictionless Indian payment gateways (Razorpay, UPI).',
      subServices: [
        {
          slug: 'business-websites',
          name: 'Business Websites',
          tagline: 'Modern, high-speed corporate and agency websites built for lead generation.',
          desc: 'Custom designed on WordPress, Webflow, or Next.js with bespoke UI/UX, responsive mobile layouts, SEO fundamentals, and WhatsApp inquiry integration.',
          deliverables: ['Custom Mobile-First Responsive Website Design', 'Fast CMS (WordPress / Webflow / Custom)', 'SEO-Optimized Code Architecture', 'Contact Forms & WhatsApp Direct Chat Integrations', 'SSL Security & Automated Cloud Backups'],
          process: [{ step: '01', title: 'Wireframing & UI/UX', detail: 'Design interactive Figma wireframes for client review and approval.' }, { step: '02', title: 'Frontend Coding', detail: 'Code clean, semantic HTML5/CSS3/JavaScript ensuring high performance.' }, { step: '03', title: 'Integration & Testing', detail: 'Integrate forms, WhatsApp links, Google Analytics, and payment gateways.' }, { step: '04', title: 'Launch & DNS Setup', detail: 'Deploy to live custom domain with zero downtime.' }],
          impact: 'Gives your business a world-class digital flagship that builds immense credibility and converts visitors 24/7.',
          tools: ['WordPress / Webflow', 'Figma', 'HTML5 / Modern CSS', 'Cloudflare'],
          metricBenchmark: '< 1.8s Page Load Time'
        },
        {
          slug: 'landing-pages',
          name: 'Landing Pages',
          tagline: 'Single-page conversion funnels engineered for paid advertising campaigns.',
          desc: 'Distraction-free layouts, high-converting headline placement, social proof blocks, and 1-click forms designed to convert ad clicks into customers.',
          deliverables: ['Distraction-Free High-Converting Landing Page', 'Mobile Speed Optimization (< 2 seconds)', 'Sticky Call-to-Action Bar for Mobile Users', 'A/B Split Test Setup', 'Conversion Pixel & Form Tracking Integration'],
          process: [{ step: '01', title: 'Offer Funnel Architecture', detail: 'Align page structure directly with ad creative messaging.' }, { step: '02', title: 'Hero Section Focus', detail: 'Craft clear value propositions and friction-free lead capture forms.' }, { step: '03', title: 'Proof Stack Integration', detail: 'Place client reviews, trust seals, and guarantees near CTAs.' }, { step: '04', title: 'Ad Campaign Launch', detail: 'Connect directly with Meta and Google Ads for immediate conversion tracking.' }],
          impact: 'Dramatically improves ad campaign ROI by doubling the percentage of visitors who complete the form.',
          tools: ['Unbounce / Webflow', 'Figma', 'Google Tag Manager', 'Hotjar'],
          metricBenchmark: '8% - 18% Landing Page Conversion Rate'
        },
        {
          slug: 'ecommerce-websites',
          name: 'E-commerce Websites',
          tagline: 'Shopify & WooCommerce online stores built for frictionless checkout.',
          desc: 'Custom storefront development, product catalog architecture, 1-click UPI checkout, COD confirmation workflows, and automated inventory management.',
          deliverables: ['Custom Shopify / WooCommerce Store Setup', '1-Click UPI & Razorpay / PayU Gateway Integration', 'COD (Cash on Delivery) Verification Automation', 'Abandoned Cart Recovery Configuration', 'Mobile-First Product Page & Collection Architecture'],
          process: [{ step: '01', title: 'Store Architecture', detail: 'Structure categories, filters, and product variants for effortless browsing.' }, { step: '02', title: 'Theme Customization', detail: 'Design bespoke storefront matching your brand aesthetic.' }, { step: '03', title: 'Payment & Logistics Integration', detail: 'Connect Indian payment gateways and shipping aggregators (Shiprocket).' }, { step: '04', title: 'Checkout Testing', detail: 'Perform end-to-end test orders on UPI, Cards, and Net Banking.' }],
          impact: 'Transforms digital shopping into a smooth, instantaneous experience that lowers cart abandonment.',
          tools: ['Shopify Plus', 'WooCommerce', 'Razorpay', 'Shiprocket API'],
          metricBenchmark: '2.5% - 4.5% E-Commerce Conversion Rate'
        },
        {
          slug: 'ui-ux-design',
          name: 'UI/UX Design',
          tagline: 'Intuitive, beautiful user experiences that delight visitors and drive action.',
          desc: 'User journey mapping, wireframing, high-fidelity prototypes in Figma, design systems, and usability testing.',
          deliverables: ['User Flow & Information Architecture Maps', 'Low-Fidelity & High-Fidelity Wireframes', 'Interactive Clickable Figma Prototypes', 'Complete UI Component Design System', 'Usability Testing & Feedback Reports'],
          process: [{ step: '01', title: 'User Research', detail: 'Analyze how target users interact with similar apps and sites.' }, { step: '02', title: 'Wireframing', detail: 'Create clean structural layouts focusing on ease of navigation.' }, { step: '03', title: 'Visual Polish', detail: 'Apply modern typography, glassmorphism accents, and brand colors.' }, { step: '04', title: 'Developer Handoff', detail: 'Deliver pixel-perfect CSS specifications and component assets.' }],
          impact: 'Eliminates user confusion, boosts session duration, and reduces bounce rates.',
          tools: ['Figma', 'Adobe XD', 'Miro', 'Lottie Animations'],
          metricBenchmark: '100% Modern Aesthetic Standard'
        },
        {
          slug: 'website-redesign',
          name: 'Website Redesign',
          tagline: 'Modernize outdated, slow websites into high-speed revenue engines.',
          desc: 'Complete visual overhaul, code modernization, content restructuring, and SEO preservation during domain migrations.',
          deliverables: ['Complete Visual & Modern Aesthetic Overhaul', 'SEO Ranking Preservation with 301 Redirect Mapping', 'Mobile Usability & Speed Enhancement', 'Conversion Funnel Restructuring', 'Content Refresh & Modern Photography Integration'],
          process: [{ step: '01', title: 'Current Site Audit', detail: 'Audit existing traffic, top-ranking URLs, and user friction points.' }, { step: '02', title: 'Modern Redesign Concepts', detail: 'Present fresh, modern design concepts matching current industry leaders.' }, { step: '03', title: '301 Redirect Strategy', detail: 'Map old URLs to new structure so search rankings remain unaffected.' }, { step: '04', title: 'Seamless Transition', detail: 'Switch DNS records with zero downtime.' }],
          impact: 'Revitalizes brand perception and typically increases inquiry volume by 50% to 150%.',
          tools: ['WordPress / Next.js', 'Figma', 'Screaming Frog Redirect Mapper'],
          metricBenchmark: '+80% Increase in Inbound Inquiries'
        },
        {
          slug: 'conversion-landing-pages',
          name: 'Conversion-focused Landing Pages',
          tagline: 'Specialized landing pages built strictly for direct-response sales.',
          desc: 'High-speed single-focus pages optimized for fast decision-making with countdown timers, customer video reviews, and streamlined forms.',
          deliverables: ['Single-Goal Conversion Page Architecture', 'Customer Video Review Carousel Integration', 'Trust Badges & Money-Back Guarantee Blocks', 'Frictionless Multi-Step Lead Capture', 'Real-Time WhatsApp Chat Button'],
          process: [{ step: '01', title: 'Target Market Profiling', detail: 'Identify exact customer fears, desires, and conversion triggers.' }, { step: '02', title: 'Direct-Response Wireframe', detail: 'Structure page to systematically answer every potential objection.' }, { step: '03', title: 'Speed & Code Optimization', detail: 'Ensure instantaneous page loading on 4G/5G mobile connections.' }, { step: '04', title: 'Split Testing Setup', detail: 'Set up variant testing for headline and pricing options.' }],
          impact: 'Maximizes lead capture rates from paid ad campaigns, ensuring maximum return per marketing rupee.',
          tools: ['Webflow', 'Tailwind / Vanilla CSS', 'Razorpay Fast Checkout'],
          metricBenchmark: '12%+ Conversion Benchmark'
        },
        {
          slug: 'website-maintenance',
          name: 'Website Maintenance',
          tagline: '24/7 security monitoring, backups, speed checks & continuous updates.',
          desc: 'Regular plugin and core updates, daily cloud backups, malware scanning, uptime monitoring, and priority technical support.',
          deliverables: ['24/7 Uptime & Server Response Monitoring', 'Daily Automated Cloud Backups', 'Security Firewall & Malware Scanning', 'Monthly Speed Optimization & Plugin Updates', 'Priority WhatsApp Technical Support Desk'],
          process: [{ step: '01', title: 'Security Hardening', detail: 'Implement Web Application Firewall (WAF) and brute-force protection.' }, { step: '02', title: 'Daily Backup Schedule', detail: 'Store encrypted backups across secure cloud locations.' }, { step: '03', title: 'Staging Environment Testing', detail: 'Test all updates on staging before pushing to live website.' }, { step: '04', title: 'Monthly Health Reports', detail: 'Deliver transparency report on uptime and security scans.' }],
          impact: 'Gives business owners complete peace of mind knowing their website will never go down or get hacked.',
          tools: ['Cloudflare Enterprise WAF', 'ManageWP', 'UptimeRobot', 'AWS S3'],
          metricBenchmark: '99.98% Guaranteed Uptime'
        }
      ]
    },
    {
      id: 'lead-generation',
      slug: 'lead-generation',
      num: '08',
      categoryGroup: 'ads',
      title: 'Lead Generation',
      tagline: 'High-intent B2B and B2C qualified buyer pipelines with zero wasted leads.',
      icon: 'target',
      color: '#E52D25',
      desc: 'Systematic lead acquisition funnels utilizing interactive lead magnets, WhatsApp conversational capture, Google Search, and CRM automated nurturing to fill your sales pipeline.',
      subServices: [
        {
          slug: 'b2b-lead-generation',
          name: 'B2B Lead Generation',
          tagline: 'Acquire high-ticket corporate clients, founders & decision-makers.',
          desc: 'Multi-touch B2B acquisition funnels using LinkedIn Ads, Google Search, executive whitepapers, and automated email/WhatsApp discovery call booking.',
          deliverables: ['LinkedIn InMail & Sponsored Content Campaigns', 'Google Search High-Intent Commercial Bidding', 'Gated Case Study & Industry Teardown Funnels', 'Automated Calendar Discovery Booking Integration', 'Lead Qualification Scoring Framework'],
          process: [{ step: '01', title: 'Ideal Customer Profile (ICP)', detail: 'Define target industries, company revenues, and executive job titles.' }, { step: '02', title: 'High-Value Magnet Asset', detail: 'Create exclusive research reports that executives actively want to read.' }, { step: '03', title: 'Multi-Channel Bidding', detail: 'Target key decision-makers across LinkedIn and Google Search.' }, { step: '04', title: 'Sales Call Calendar Booking', detail: 'Direct qualified leads directly into your sales team\'s calendar.' }],
          impact: 'Generates predictable pipeline of enterprise deals with high average contract values (ACV).',
          tools: ['LinkedIn Campaign Manager', 'Google Ads', 'Calendly', 'HubSpot CRM'],
          metricBenchmark: '35+ High-Ticket B2B Leads / Month'
        },
        {
          slug: 'b2c-lead-generation',
          name: 'B2C Lead Generation',
          tagline: 'High-volume consumer inquiries for real estate, education & healthcare.',
          desc: 'High-converting Instagram and Facebook lead campaigns with automated OTP phone verification and instant WhatsApp qualification.',
          deliverables: ['Meta Native Lead Forms with Custom Qualifiers', 'Automated Phone Number OTP Verification', 'Geo-Targeted Local Ad Campaigns', 'Instant WhatsApp Auto-Response Workflows', 'Daily Lead Delivery to Sales CRM'],
          process: [{ step: '01', title: 'Offer & Pricing Hooks', detail: 'Craft attractive localized offers with transparent starting pricing.' }, { step: '02', title: 'Frictionless Form Experience', detail: 'Capture verified name, email, and WhatsApp numbers.' }, { step: '03', title: 'Instant Sales Notification', detail: 'Send new leads directly to your sales reps within 5 seconds.' }, { step: '04', title: 'CPL Reduction Cycles', detail: 'A/B test creative hooks to reduce cost per qualified lead.' }],
          impact: 'Keeps your sales team constantly busy with verified, contactable Indian consumers.',
          tools: ['Meta Ads', 'WhatsApp Cloud API', 'Zoho CRM', 'Zapier'],
          metricBenchmark: '200+ Verified Inquiries / Month'
        },
        {
          slug: 'landing-page-funnels',
          name: 'Landing Page Funnels',
          tagline: 'Multi-step interactive quiz and estimator funnels that convert visitors.',
          desc: 'Interactive cost estimators, qualification quizzes, and custom quote calculators that engage users and capture pre-qualified leads.',
          deliverables: ['Interactive Cost Estimator / Quiz Funnel Design', 'Multi-Step Form Logic & Branching', 'Real-Time Quote Generation Engine', 'Frictionless Mobile-First UI/UX', 'Full Conversion Attribution Tracking'],
          process: [{ step: '01', title: 'Interactive Concept Planning', detail: 'Design questions that educate the buyer while gathering qualifying info.' }, { step: '02', title: 'Conditional Branching Logic', detail: 'Show custom recommendations based on user selections.' }, { step: '03', title: 'Contact Information Gate', detail: 'Provide the customized result after entering email and WhatsApp number.' }, { step: '04', title: 'Immediate Result Delivery', detail: 'Send customized PDF estimate via WhatsApp automatically.' }],
          impact: 'Triples lead conversion rates compared to static, boring contact forms.',
          tools: ['Typeform', 'Webflow', 'Custom JavaScript Engines', 'Make.com'],
          metricBenchmark: '14% - 22% Funnel Opt-in Rate'
        },
        {
          slug: 'whatsapp-lead-generation',
          name: 'WhatsApp Lead Generation',
          tagline: 'Click-to-WhatsApp ads with instant automated conversational qualification.',
          desc: 'Meta Click-to-WhatsApp ads paired with intelligent bot chat flows that greet, qualify, and route prospects into sales reps’ inboxes within seconds.',
          deliverables: ['Meta Click-to-WhatsApp Ad Campaign Architecture', 'Automated WhatsApp Chatbot Qualification Flow', 'Interactive Button & List Menus on WhatsApp', 'Direct CRM & Sales Rep Assignment', 'Lead Source Attribution Tracking'],
          process: [{ step: '01', title: 'Ad Creative Hook', detail: 'Deploy ads inviting users to "Chat on WhatsApp for Instant Quote".' }, { step: '02', title: 'Automated Greeting & Menu', detail: 'Bot asks 2-3 qualifying multiple choice questions.' }, { step: '03', title: 'Agent Handoff', detail: 'Alert human sales representative when a high-intent buyer is ready.' }, { step: '04', title: 'Follow-Up Broadcasts', detail: 'Schedule automated check-ins for leads who don\'t convert on day 1.' }],
          impact: 'Takes advantage of India\'s favourite messaging app for unmatched open rates and instant responses.',
          tools: ['Meta Ads', 'WhatsApp Business API', 'Wati / Interakt', 'Zoho CRM'],
          metricBenchmark: '85%+ Interaction Rate'
        },
        {
          slug: 'lead-ads',
          name: 'Meta & LinkedIn Lead Ads',
          tagline: 'Native in-app lead forms capturing pre-filled verified user details.',
          desc: 'In-app lead generation removing the friction of external webpage loading, resulting in higher submission volume and lower cost-per-lead.',
          deliverables: ['In-App Lead Form Design with Custom Disclaimers', 'Custom Qualifier Questions (Location, Budget, Need)', 'Automated Instant CRM Sync via Webhooks', 'Dynamic Thank-You Screen with Direct Call/Chat Button', 'Cost-Per-Lead (CPL) Optimization Sprints'],
          process: [{ step: '01', title: 'Form Question Optimization', detail: 'Balance low friction with necessary qualification fields.' }, { step: '02', title: 'Ad Creative Pairing', detail: 'Design scroll-stopping visuals that explain the offer clearly.' }, { step: '03', title: 'Instant Lead Routing', detail: 'Push submitted leads instantly into Google Sheets, CRM, or WhatsApp.' }, { step: '04', title: 'Audience Refinement', detail: 'Exclude poor-performing demographics to boost lead quality.' }],
          impact: 'The fastest, lowest-friction way to generate high-volume qualified leads on mobile devices.',
          tools: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'Zapier Webhooks'],
          metricBenchmark: '-45% Lower Cost Per Lead'
        },
        {
          slug: 'crm-lead-tracking',
          name: 'CRM & Lead Tracking',
          tagline: 'Centralized lead pipeline management with zero lost opportunities.',
          desc: 'Setting up and configuring Zoho, HubSpot, or custom CRM pipelines to track every lead from first click to closed sale.',
          deliverables: ['CRM Pipeline Setup (Zoho / HubSpot / LeadSquared)', 'Automated Lead Source Attribution (Google, Meta, Organic)', 'Sales Rep Assignment Rules & Notification Triggers', 'Deal Stage Tracking & Revenue Dashboards', 'Stale Lead Follow-Up Automation'],
          process: [{ step: '01', title: 'Pipeline Mapping', detail: 'Define clear stages: New Lead, Contacted, Qualified, Proposal Sent, Closed.' }, { step: '02', title: 'Integration & Webhooks', detail: 'Connect website forms, ads, and WhatsApp directly into the CRM.' }, { step: '03', title: 'Automated Reminders', detail: 'Set alerts for sales reps if a new lead is not contacted within 15 minutes.' }, { step: '04', title: 'Executive Reporting', detail: 'Track lead conversion rates and sales velocity in real-time.' }],
          impact: 'Prevents expensive ad leads from falling through the cracks and being forgotten by sales reps.',
          tools: ['Zoho CRM', 'HubSpot', 'Google Sheets Automation', 'Looker Studio'],
          metricBenchmark: '100% Lead Visibility'
        },
        {
          slug: 'lead-nurturing',
          name: 'Lead Nurturing Sequences',
          tagline: 'Automated WhatsApp & email workflows that convert cold leads over time.',
          desc: 'Drip campaigns delivering educational case studies, testimonial videos, festival promotions, and limited-time consultation offers.',
          deliverables: ['Multi-Touch WhatsApp & Email Nurturing Sequences', 'Customer Case Study & Proof Drip Campaigns', 'Objection-Busting Audio & Video Messages', 'Special Discount & Limited-Time Incentive Triggers', 'Re-Engagement Broadcasts for Cold Contacts'],
          process: [{ step: '01', title: 'Customer Journey Mapping', detail: 'Map out the 14-day decision-making timeline for typical buyers.' }, { step: '02', title: 'Message Copywriting', detail: 'Write engaging, non-pushy messages providing genuine value and proof.' }, { step: '03', title: 'Automated Triggers', detail: 'Schedule automated messages based on user action or time delay.' }, { step: '04', title: 'Conversion Tracking', detail: 'Track how many nurtured leads convert into booked appointments.' }],
          impact: 'Recovers an additional 20% to 35% in closed deals from prospects who weren\'t ready to buy on day one.',
          tools: ['Wati / Interakt', 'Klaviyo / Mailchimp', 'Zapier', 'Zoho CRM'],
          metricBenchmark: '+28% Nurture-to-Sale Conversion'
        }
      ]
    },
    {
      id: 'branding',
      slug: 'branding',
      num: '09',
      categoryGroup: 'creative',
      title: 'Branding & Identity',
      tagline: 'Crafting unforgettable brand personalities that stand out in crowded markets.',
      icon: 'shield',
      color: '#E52D25',
      desc: 'Strategic brand positioning, tone of voice, visual identity guidelines, and overarching campaign concepts that transform ordinary businesses into iconic category leaders.',
      subServices: [
        {
          slug: 'brand-strategy',
          name: 'Brand Strategy',
          tagline: 'Define your market purpose, vision, and long-term category advantage.',
          desc: 'Target audience psychographics, competitor white-space identification, core value definition, and long-term brand equity roadmaps.',
          deliverables: ['Brand Purpose & Mission Blueprint', 'Target Audience Psychographic Personas', 'Competitive Landscape Matrix', 'Brand Archetype & Voice Definition', '3-Year Brand Growth Roadmap'],
          process: [{ step: '01', title: 'Stakeholder Workshop', detail: 'Deep dive into company vision, product advantages, and founder ambition.' }, { step: '02', title: 'Market White-Space Analysis', detail: 'Identify gaps that existing market competitors are ignoring.' }, { step: '03', title: 'Brand Matrix Formulation', detail: 'Articulate mission, values, and brand positioning statements.' }, { step: '04', title: 'Execution Guide', detail: 'Deliver practical playbook for marketing and sales teams.' }],
          impact: 'Gives the entire organization clarity on who you are, what you stand for, and why customers should choose you.',
          tools: ['Miro', 'Notion Strategy Hubs', 'Google Surveys'],
          metricBenchmark: 'Clear Brand Differentiation'
        },
        {
          slug: 'brand-positioning',
          name: 'Brand Positioning',
          tagline: 'Own a distinct, defensible space in the minds of your target consumers.',
          desc: 'Unique Selling Proposition (USP) formulation, value proposition hierarchy, category creation frameworks, and price-to-value positioning.',
          deliverables: ['Core Value Proposition Hierarchy', 'Unique Selling Proposition (USP) Statement', 'Brand Taglines & Slogan Options', 'Pricing & Market Tier Positioning', 'Competitive Moat Strategy'],
          process: [{ step: '01', title: 'Customer Benefit Mining', detail: 'Identify the single most compelling reason customers buy.' }, { step: '02', title: 'Competitor Positioning Grid', detail: 'Map competitors on price vs quality vs speed axes.' }, { step: '03', title: 'Tagline & Slogan Testing', detail: 'Test messaging angles with focus groups and ad copy experiments.' }, { step: '04', title: 'Positioning Deployment', detail: 'Integrate positioning into website hero and sales presentations.' }],
          impact: 'Stops customers from comparing you on price alone, allowing you to win on distinct value and prestige.',
          tools: ['Positioning Frameworks', 'Semrush', 'Figma'],
          metricBenchmark: 'High Perceived Market Value'
        },
        {
          slug: 'visual-identity-branding',
          name: 'Visual Identity',
          tagline: 'Comprehensive visual aesthetics that give your brand a distinctive look.',
          desc: 'Color systems, typography, photographic style, graphic layout patterns, and iconography that make your brand recognizable at a glance.',
          deliverables: ['Bespoke Color Palette & Contrast Tokens', 'Primary & Secondary Typography Systems', 'Brand Pattern & Background Elements', 'Photography & Art Direction Guidelines', 'Digital & Social Template Toolkit'],
          process: [{ step: '01', title: 'Visual Direction Exploration', detail: 'Explore 3 distinct moodboards balancing modern aesthetics and brand values.' }, { step: '02', title: 'Asset Creation', detail: 'Design custom geometric patterns, color tokens, and layout systems.' }, { step: '03', title: 'Application Testing', detail: 'Test visual identity across mobile screens, billboards, and packaging.' }, { step: '04', title: 'Master Design Kit', detail: 'Deliver all vector assets and Figma UI kits.' }],
          impact: 'Creates instant brand recognition across all physical and digital consumer touchpoints.',
          tools: ['Figma', 'Adobe Illustrator', 'Photoshop'],
          metricBenchmark: '100% Brand Recognition'
        },
        {
          slug: 'brand-guidelines',
          name: 'Brand Guidelines',
          tagline: 'The definitive brand bible ensuring complete visual and tonal consistency.',
          desc: 'Comprehensive brand manual covering logo clear space, color codes (HEX, RGB, CMYK), font rules, do’s and don’ts, and copywriting guidelines.',
          deliverables: ['Comprehensive Brand Guidelines PDF (40+ Pages)', 'Logo Clear Space & Minimum Sizing Rules', 'Official Color Palette Specifications (HEX, RGB, CMYK, Pantone)', 'Typography Hierarchy & Kerning Standards', 'Do\'s and Don\'ts Visual Rulebook'],
          process: [{ step: '01', title: 'Rule Formulation', detail: 'Document all technical specifications for logos, fonts, and colors.' }, { step: '02', title: 'Visual Examples', detail: 'Provide real-world mockups showing correct vs incorrect usage.' }, { step: '03', title: 'Digital Asset Packaging', detail: 'Organize vector files into categorized folders for internal teams.' }, { step: '04', title: 'Brand Manual Handover', detail: 'Deliver sleek, presentation-ready PDF manual.' }],
          impact: 'Ensures external freelancers, internal employees, and partners never dilute or mishandle your brand identity.',
          tools: ['Adobe InDesign', 'Figma', 'Brandfolder'],
          metricBenchmark: '100% Brand Integrity'
        },
        {
          slug: 'brand-communication',
          name: 'Brand Communication',
          tagline: 'Define your brand\'s tone of voice, terminology, and messaging scripts.',
          desc: 'Vocabulary guides, elevator pitches, customer service response tone, social media personality rules, and email communication templates.',
          deliverables: ['Brand Tone of Voice Spectrum Guide', 'Elevator Pitch & Boilerplate Descriptions', 'Customer Support Communication Scripts', 'Words to Use vs Words to Avoid Matrix', 'PR & Media Communication Guidelines'],
          process: [{ step: '01', title: 'Personality Attributes', detail: 'Define whether the brand sounds playful, authoritative, empathetic, or witty.' }, { step: '02', title: 'Scenario Scripting', detail: 'Write sample replies for sales objections, reviews, and congratulations.' }, { step: '03', title: 'Vocabulary Matrix', detail: 'Establish banned cliches and preferred industry terminology.' }, { step: '04', title: 'Team Training', detail: 'Brief customer support and sales teams on consistent tone execution.' }],
          impact: 'Ensures every email, social reply, and customer phone call sounds cohesive and professional.',
          tools: ['Notion Playbooks', 'Grammarly Business', 'Google Docs'],
          metricBenchmark: 'Unified Voice Across Touchpoints'
        },
        {
          slug: 'campaign-concepts',
          name: 'Campaign Concepts',
          tagline: 'Big creative ideas and campaign themes that dominate market mindshare.',
          desc: 'Festive campaign umbrellas (Diwali, Independence Day), seasonal product launches, viral contest concepts, and omnichannel brand activations.',
          deliverables: ['Big Creative Idea (Master Campaign Concept)', 'Multi-Channel Rollout Storyboard', 'Key Visuals (KV) Design for Digital & Print', 'Launch Teaser & Reveal Phase Calendar', 'Hashtag & Influencer Campaign Hooks'],
          process: [{ step: '01', title: 'Cultural Insight Mining', detail: 'Uncover cultural truths that resonate deeply with Indian audiences.' }, { step: '02', title: 'Concept Ideation', detail: 'Develop 3 bold creative campaign themes with catchy taglines.' }, { step: '03', title: 'Master Key Visual Design', detail: 'Design hero promotional banners and video scripts.' }, { step: '04', title: 'Omnichannel Activation', detail: 'Deploy across paid ads, influencer seeding, and social channels.' }],
          impact: 'Generates massive public conversation and drives exponential sales during key festival windows.',
          tools: ['Figma', 'Miro Creative Canvas', 'Adobe Photoshop'],
          metricBenchmark: '5x Campaign Recall & Reach'
        },
        {
          slug: 'brand-storytelling-narratives',
          name: 'Brand Storytelling',
          tagline: 'Emotional brand narratives that turn ordinary products into beloved icons.',
          desc: 'Founder journey profiling, customer transformation documentaries, origin film scripts, and authentic heritage messaging.',
          deliverables: ['Brand Origin Film Script & Visual Storyboard', 'Customer Transformation Case Studies', 'Founder Profile Article & Video Pitch', 'Heritage & Craftsmanship Narratives', 'Social Media Story Arc Episodes'],
          process: [{ step: '01', title: 'Emotion Extraction', detail: 'Uncover real struggles and breakthroughs in building the company.' }, { step: '02', title: 'Narrative Arc Construction', detail: 'Structure engaging story holding audience attention till the end.' }, { step: '03', title: 'Media Production', detail: 'Produce video documentaries and illustrated slide decks.' }, { step: '04', title: 'Strategic Seeding', detail: 'Distribute across YouTube, LinkedIn, and media publications.' }],
          impact: 'Builds enduring emotional loyalty that competitors cannot replicate by simply slashing prices.',
          tools: ['Premiere Pro', 'Descript', 'Notion'],
          metricBenchmark: 'Deep Customer Emotional Connection'
        }
      ]
    },
    {
      id: 'influencer-marketing',
      slug: 'influencer-marketing',
      num: '10',
      categoryGroup: 'social',
      title: 'Influencer Marketing',
      tagline: 'Leverage trusted creator networks and regional vernacular voices in India.',
      icon: 'users',
      color: '#E52D25',
      desc: 'End-to-end influencer marketing campaigns connecting your brand with vetted creators, micro-influencers, and regional voices for authentic product seeding and viral reviews.',
      subServices: [
        {
          slug: 'influencer-identification',
          name: 'Influencer Identification',
          tagline: 'Data-driven creator discovery filtering out fake followers and low engagement.',
          desc: 'Audience demographic vetting, engagement rate auditing, fraud detection, and niche affinity mapping across 500+ Indian creators.',
          deliverables: ['Custom Influencer Shortlist with Verified Engagement Rates', 'Audience Demographics & Geo-Distribution Breakdown (Indian Metros vs Tier-2/3)', 'Fake Follower & Engagement Authenticity Audit', 'Commercial Rate Negotiation & Budget Allocation', 'Creator Outreach & Contact Roster'],
          process: [{ step: '01', title: 'Niche & Demographic Profiling', detail: 'Identify creators whose follower base matches your exact buyer persona.' }, { step: '02', title: 'Fraud & Engagement Audit', detail: 'Filter out creators with fake bot followers or artificial engagement pods.' }, { step: '03', title: 'Commercial Rate Negotiation', detail: 'Negotiate best package deals for combined Reels, Stories, and usage rights.' }, { step: '04', title: 'Final Selection', detail: 'Deliver approved roster with clear commercial deliverables.' }],
          impact: 'Ensures every rupee spent on influencer fees reaches real, engaged Indian shoppers.',
          tools: ['HypeAuditor', 'Modash', 'Instagram Graph API', 'Airtable'],
          metricBenchmark: '100% Verified Real Audiences'
        },
        {
          slug: 'influencer-campaigns',
          name: 'Influencer Campaigns',
          tagline: 'End-to-end campaign execution from briefing to viral product reviews.',
          desc: 'Comprehensive creative briefing, sample product shipping, contract management, content approvals, and scheduled coordinated launches.',
          deliverables: ['Creative Briefing Documents & Do\'s/Don\'ts Guidelines', 'Product Gifting & Logistics Coordination', 'Legal Service Contracts & Image Usage Rights', 'Pre-Publish Content Review & Approval', 'Live Campaign Launch Coordination'],
          process: [{ step: '01', title: 'Brief Formulation', detail: 'Give creators clear guidelines while letting their natural voice shine.' }, { step: '02', title: 'Product Seeding', detail: 'Ship sample kits and ensure prompt receipt and unboxing.' }, { step: '03', title: 'Draft Review', detail: 'Review video drafts to ensure key selling points and discount codes are included.' }, { step: '04', title: 'Coordinated Blast', detail: 'Publish multiple creator videos within 48 hours for viral algorithmic momentum.' }],
          impact: 'Creates massive social proof and drives floods of high-intent traffic to your website or store.',
          tools: ['Airtable CRM', 'Shiprocket', 'Google Drive', 'WhatsApp Groups'],
          metricBenchmark: 'Coordinated Viral Launch Impact'
        },
        {
          slug: 'creator-collaborations-ugc',
          name: 'Creator Collaborations (UGC)',
          tagline: 'Authentic User-Generated Content (UGC) built specifically for paid ad scaling.',
          desc: 'Sourcing relatable Indian creators to produce organic unboxing videos, problem-solving demonstrations, and genuine reviews for Meta Ads.',
          deliverables: ['10-20 High-Converting UGC Video Creatives / Month', 'Multiple Opening Hook & Headline Variations', 'Raw Footage & B-Roll Asset Delivery', 'Perpetual Commercial Ad Usage Rights', 'Paid Meta Whitelisting / Spark Ads Setup'],
          process: [{ step: '01', title: 'Direct-Response UGC Scripting', detail: 'Write scripts following the Hook-Problem-Solution-Proof-CTA framework.' }, { step: '02', title: 'Creator Matching', detail: 'Pair scripts with relatable creators matching your customer profile.' }, { step: '03', title: 'Video Production & Editing', detail: 'Add native text overlays, captions, and upbeat background music.' }, { step: '04', title: 'Ad Manager Scaling', detail: 'Deploy into Meta and TikTok/YouTube ad campaigns for immediate testing.' }],
          impact: 'UGC ads regularly outperform polished agency studio commercials by 2x - 3x on Meta Ads.',
          tools: ['CapCut', 'Meta Ads Manager', 'Dropbox / Frame.io', 'Collabstr'],
          metricBenchmark: '3.8x Higher ROAS than Static Ads'
        },
        {
          slug: 'campaign-management',
          name: 'Campaign Management',
          tagline: 'Hands-off campaign oversight and strict timeline governance.',
          desc: 'Daily creator communication, timeline tracking, link checking, coupon code monitoring, and live comment management on creator posts.',
          deliverables: ['Dedicated Influencer Campaign Manager', 'Real-Time Deliverable Status Tracking Sheet', 'Discount Code & UTM Link Generation', 'Comment Moderation on Influencer Posts', 'Post-Campaign Relationship Maintenance'],
          process: [{ step: '01', title: 'Milestone Tracking', detail: 'Track script submission, draft delivery, and publish dates daily.' }, { step: '02', title: 'Link & Code Testing', detail: 'Verify custom affiliate links and discount codes function smoothly.' }, { step: '03', title: 'Live Monitoring', detail: 'Ensure creators tag brand accounts properly and use correct disclosure tags.' }, { step: '04', title: 'Relationship Nurturing', detail: 'Maintain long-term relationships with top-converting creators.' }],
          impact: 'Eliminates the headache of chasing dozens of creators, ensuring 100% on-time execution.',
          tools: ['Asana', 'Airtable', 'Slack', 'WhatsApp Groups'],
          metricBenchmark: '100% Deliverable Compliance'
        },
        {
          slug: 'influencer-performance-tracking',
          name: 'Influencer Performance Tracking',
          tagline: 'Track real sales, conversions, and ROI generated by every creator.',
          desc: 'Custom UTM link tracking, unique coupon code attribution, blended ROAS calculation, and creator efficiency scorecards.',
          deliverables: ['Custom Attribution Dashboard (Clicks, Orders, Revenue)', 'Coupon Code Sales Tracking by Creator', 'Cost-Per-Acquisition (CPA) & ROAS per Influencer', 'Top-Performing Creator Recommendation Report', 'Executive Campaign ROI Briefing'],
          process: [{ step: '01', title: 'Tracking Architecture', detail: 'Assign distinct UTM parameters and coupon codes to each creator.' }, { step: '02', title: 'Real-Time Revenue Monitoring', detail: 'Track sales and traffic generated within Shopify / Google Analytics.' }, { step: '03', title: 'Creator ROI Scoring', detail: 'Calculate exact Return on Investment (Revenue divided by Creator Fee).' }, { step: '04', title: 'Strategy Optimization', detail: 'Re-hire the top 20% highest-performing creators on long-term monthly retainers.' }],
          impact: 'Turns influencer marketing from an ambiguous guessing game into a predictable, measurable sales channel.',
          tools: ['Google Analytics 4', 'Shopify Analytics', 'Looker Studio', 'Bitly'],
          metricBenchmark: 'Precise Rupee-for-Rupee ROI'
        }
      ]
    },
    {
      id: 'whatsapp-crm-marketing',
      slug: 'whatsapp-crm-marketing',
      num: '11',
      categoryGroup: 'retention',
      title: 'WhatsApp & CRM Marketing',
      tagline: 'Harness India\'s #1 communication channel for 45%+ open rates & instant conversions.',
      icon: 'message',
      color: '#E52D25',
      desc: 'Official WhatsApp Business API automations, promotional broadcasts, automated abandoned cart recovery, COD confirmations, and customer retention workflows.',
      subServices: [
        {
          slug: 'whatsapp-marketing',
          name: 'WhatsApp Marketing',
          tagline: 'Official Meta WhatsApp Business API with green tick verification & broadcast scaling.',
          desc: 'Setting up enterprise WhatsApp Business API, green tick verification, broadcast messaging, and conversational commerce funnels.',
          deliverables: ['Official WhatsApp Business API Setup (Meta Cloud API)', 'Green Tick Verification Assistance', 'Interactive Message Templates with Quick-Reply Buttons', 'Segmented Broadcast Message Architecture', 'Full Opt-in Compliance & Anti-Ban Protections'],
          process: [{ step: '01', title: 'API Onboarding', detail: 'Verify Meta Business Manager and configure official WhatsApp Cloud API.' }, { step: '02', title: 'Template Submission', detail: 'Submit interactive notification and marketing templates for Meta approval.' }, { step: '03', title: 'Database Integration', detail: 'Sync customer database from Shopify, WooCommerce, or CRM.' }, { step: '04', title: 'Broadcast Campaigns', detail: 'Launch segmented broadcast messages with high deliverability.' }],
          impact: 'Achieves 90%+ message open rates and 45%+ click rates compared to traditional email.',
          tools: ['Meta WhatsApp Cloud API', 'Wati / Interakt / Gallabox', 'Shopify'],
          metricBenchmark: '90%+ Message Open Rates'
        },
        {
          slug: 'whatsapp-campaigns',
          name: 'WhatsApp Campaigns',
          tagline: 'Promotional festival broadcasts, flash sales, and new product launches.',
          desc: 'High-converting broadcast campaigns with rich media (videos, product catalogs, images) and direct 1-click buy buttons.',
          deliverables: ['Festive & Flash Sale Broadcast Campaigns', 'Rich Media Video & Image Catalog Messages', 'Dynamic 1-Click Buy / Discount CTA Buttons', 'Audience Segmentation by Purchase History', 'Broadcast Delivery & Conversion Analytics'],
          process: [{ step: '01', title: 'Audience Segmentation', detail: 'Segment users by VIP buyers, inactive contacts, and high-spenders.' }, { step: '02', title: 'Creative & Copy Crafting', detail: 'Draft punchy copy with emojis, exclusive coupons, and media.' }, { step: '03', title: 'Scheduled Dispatch', detail: 'Send broadcasts at peak response times (e.g. 11 AM or 7 PM IST).' }, { step: '04', title: 'Real-Time Conversions', detail: 'Track instant revenue and handle incoming customer inquiries.' }],
          impact: 'Generates immediate spikes in revenue within 15 minutes of broadcast dispatch.',
          tools: ['Interakt', 'Wati', 'Shopify Fast Checkout'],
          metricBenchmark: '45%+ Click-Through Rate'
        },
        {
          slug: 'automated-customer-communication',
          name: 'Automated Customer Communication',
          tagline: '24/7 intelligent automated chatbots handling orders, FAQs & support.',
          desc: 'Interactive button menus answering common questions, order tracking lookups, return requests, and instant lead capture.',
          deliverables: ['24/7 Automated Interactive WhatsApp Chatbot', 'Live Order Tracking & Shipment Status Lookup', 'Automated Welcome Sequences for New Subscribers', 'FAQ Bot Answering Pricing, Delivery & COD Questions', 'Seamless Human Agent Live Chat Handoff'],
          process: [{ step: '01', title: 'Conversation Flow Mapping', detail: 'Map out the top 10 most common customer questions and flows.' }, { step: '02', title: 'Bot Logic Configuration', detail: 'Build interactive menu trees with quick-reply buttons.' }, { step: '03', title: 'API Webhook Connection', detail: 'Connect with Shiprocket and Shopify for automated tracking updates.' }, { step: '04', title: 'Human Fallback Rules', detail: 'Route complex questions to human support agents instantly.' }],
          impact: 'Resolves 70% of customer support queries automatically with zero human effort.',
          tools: ['Gallabox / Wati', 'Shiprocket API', 'Shopify API'],
          metricBenchmark: '70% Support Automation'
        },
        {
          slug: 'customer-retention-campaigns',
          name: 'Customer Retention Campaigns',
          tagline: 'Turn 1-time buyers into loyal repeat brand champions on WhatsApp.',
          desc: 'Post-purchase check-ins, replenishment reminders (e.g. re-ordering skincare every 45 days), birthday offers, and VIP loyalty clubs.',
          deliverables: ['Automated Post-Purchase Feedback & Review Requests', 'Replenishment & Re-Order Reminder Workflows', 'Birthday & Anniversary Exclusive Gift Triggers', 'VIP Loyalty Tier Access & Early-Bird Drop Alerts', 'Win-Back Funnels for Inactive Shoppers (60+ Days)'],
          process: [{ step: '01', title: 'Product Consumption Cycle Mapping', detail: 'Determine average time it takes a customer to consume your product.' }, { step: '02', title: 'Automated Trigger Setup', detail: 'Configure automatic WhatsApp re-order reminder 5 days before stock runs out.' }, { step: '03', title: 'Review Collection', detail: 'Request Google/Shopify reviews 5 days after product delivery.' }, { step: '04', title: 'Win-Back Sequences', detail: 'Offer special incentives to customers who haven\'t bought in 90 days.' }],
          impact: 'Increases Customer Lifetime Value (LTV) by 40% and drastically lowers ongoing advertising dependency.',
          tools: ['Klaviyo WhatsApp', 'Interakt', 'Shopify CRM'],
          metricBenchmark: '+40% Repeat Customer Revenue'
        },
        {
          slug: 'crm-marketing',
          name: 'CRM Marketing',
          tagline: 'Centralized customer segmentation, behavior tracking & automated triggers.',
          desc: 'Integrating customer databases with automated messaging based on RFM (Recency, Frequency, Monetary) segmentation.',
          deliverables: ['RFM Customer Segmentation Setup', 'Automated Behavioral Trigger Architecture', 'Customer Lifetime Value (LTV) Cohort Analysis', 'Multi-Channel Synchronization (WhatsApp + SMS + Email)', 'Consolidated Revenue Attribution Dashboard'],
          process: [{ step: '01', title: 'Database Hygiene & Tagging', detail: 'Clean and categorize past customer records by spend and frequency.' }, { step: '02', title: 'Cohort Segmentation', detail: 'Create distinct groups: High Rollers, Casual Buyers, Discount Hunters.' }, { step: '03', title: 'Behavioral Triggers', detail: 'Automate messages when a user views a product category 3 times.' }, { step: '04', title: 'LTV Optimization', detail: 'Monitor customer retention curves and compound repeat revenue.' }],
          impact: 'Unlocks hidden profit from your existing customer database without spending money on new ad clicks.',
          tools: ['HubSpot', 'Zoho CRM', 'Segment', 'MoEngage / WebEngage'],
          metricBenchmark: '3.5x Customer LTV Compound'
        },
        {
          slug: 'promotional-campaigns',
          name: 'Promotional Campaigns',
          tagline: 'Exclusive festive offers, flash sales & limited-edition product drops.',
          desc: 'High-urgency promotional messaging with countdown offers, coupon codes, and bundle deals delivered directly to verified phone numbers.',
          deliverables: ['High-Urgency Flash Sale Copy & Visual Banners', 'Exclusive VIP Early-Access Broadcasts', 'Festival Celebration Offers (Diwali, Holi, New Year)', 'Dynamic Coupon Code Integration', 'Real-Time Revenue & Conversion Tracking'],
          process: [{ step: '01', title: 'Promo Strategy & Offer Structure', detail: 'Design irresistible limited-time offers and bundle discounts.' }, { step: '02', title: 'Urgency & Scarcity Copy', detail: 'Highlight limited stock and expiring discount deadlines.' }, { step: '03', title: 'VIP Early Bird Drop', detail: 'Send early access to top 10% customers 24 hours before public launch.' }, { step: '04', title: 'Last Chance Reminder', detail: 'Send final reminder 3 hours before sale ends for maximum conversion.' }],
          impact: 'Drives record-breaking single-day sales volume during major festive and commercial events.',
          tools: ['Wati / Interakt', 'Shopify Discounts', 'Razorpay'],
          metricBenchmark: 'Record Single-Day Sales Spikes'
        }
      ]
    },
    {
      id: 'email-marketing',
      slug: 'email-marketing',
      num: '12',
      categoryGroup: 'retention',
      title: 'Email Marketing',
      tagline: 'Predictive customer lifetime value mapping & automated revenue sequences.',
      icon: 'mail',
      color: '#E52D25',
      desc: 'Automated email flows, high-converting newsletters, win-back sequences, and VIP loyalty triggers that maximize customer retention and compound repeat revenue.',
      subServices: [
        {
          slug: 'email-campaigns',
          name: 'Email Campaigns',
          tagline: 'High-converting promotional newsletters and product launch emails.',
          desc: 'Bespoke HTML email template design, compelling subject line copywriting, deliverability optimization, and list cleaning.',
          deliverables: ['Custom Responsive HTML Email Design', 'High-Open Subject Line & Preview Text Crafting', 'Weekly / Bi-Weekly Promotional Newsletters', 'Spam Score Audit & Deliverability Optimization', 'List Cleaning & Inactive Contact Scrubbing'],
          process: [{ step: '01', title: 'Email Calendar Planning', detail: 'Map weekly promotional emails around new arrivals and value stories.' }, { step: '02', title: 'Responsive Design & Copy', detail: 'Design mobile-optimized layouts with high-contrast CTA buttons.' }, { step: '03', title: 'Deliverability & Spam Testing', detail: 'Ensure emails land in the primary inbox, never the spam or promotions tab.' }, { step: '04', title: 'A/B Subject Line Testing', detail: 'Test emoji vs curiosity subject lines on 20% sample list before full blast.' }],
          impact: 'Generates predictable, high-margin revenue from your email subscriber list on demand.',
          tools: ['Klaviyo', 'Mailchimp', 'Mailgun', 'Litmus'],
          metricBenchmark: '28%+ Email Open Rate'
        },
        {
          slug: 'promotional-emails',
          name: 'Promotional Emails',
          tagline: 'Direct-response sales emails with persuasive copywriting and clear CTAs.',
          desc: 'Special discount announcements, product launch teasers, end-of-season sales, and holiday gift guides tailored for high click-through rates.',
          deliverables: ['Direct-Response Sales Copywriting', 'High-Impact Product Grid Layouts', 'Dynamic Countdown Timers for Expiring Offers', 'Segmented Promotional Blasts by Interest Category', 'Click-Map Heatmap Tracking'],
          process: [{ step: '01', title: 'Offer Angle Ideation', detail: 'Frame promotions around scarcity, exclusive rewards, or seasonal themes.' }, { step: '02', title: 'Visual & Copy Assembly', detail: 'Place compelling visuals and clear discount buttons above the fold.' }, { step: '03', title: 'Targeted Dispatch', detail: 'Send tailored variations based on past buying preferences.' }, { step: '04', title: 'Revenue Tracking', detail: 'Measure exact sales generated per email campaign.' }],
          impact: 'Turns sales announcements into massive revenue spikes without requiring ad spend.',
          tools: ['Klaviyo', 'Figma Email Slices', 'Shopify Integrations'],
          metricBenchmark: '5.2% Email Click-Through Rate'
        },
        {
          slug: 'newsletter-marketing',
          name: 'Newsletter Marketing',
          tagline: 'Weekly value-packed industry insights that keep your brand top-of-mind.',
          desc: 'Curated industry trends, educational how-to tips, founder reflections, and customer success stories that build deep audience trust.',
          deliverables: ['Weekly Value-Packed Industry Newsletter', 'Engaging Storytelling & Curated Resource Highlights', 'Consistent Branded Header & Footer Design', 'Reader Polls & Feedback Integration', 'Subscriber Growth & Open Rate Tracking'],
          process: [{ step: '01', title: 'Editorial Theme Planning', detail: 'Curate the most interesting news and tips relevant to your niche.' }, { step: '02', title: 'Storytelling Draft', detail: 'Write in an authentic, conversational founder voice.' }, { step: '03', title: 'Subtle Product Callouts', detail: 'Integrate native product recommendations naturally within the value content.' }, { step: '04', title: 'Engagement Metrics Analysis', detail: 'Monitor replies, forwards, and unsubscribe rates.' }],
          impact: 'Builds massive authority and long-term brand goodwill with subscribers.',
          tools: ['Beehiiv', 'Substack', 'Klaviyo', 'Grammarly'],
          metricBenchmark: '35%+ Open Rate for Newsletters'
        },
        {
          slug: 'automated-email-sequences',
          name: 'Automated Email Sequences',
          tagline: 'Set-and-forget 24/7 revenue flows (Welcome, Abandoned Cart, Post-Purchase).',
          desc: 'Core e-commerce and B2B email automations that trigger automatically based on subscriber actions to generate sales on autopilot.',
          deliverables: ['3-Part Welcome Series (Brand Story & First-Order Discount)', 'Abandoned Checkout & Cart Recovery Flow (1hr, 12hr, 24hr)', 'Post-Purchase Thank You & Cross-Sell Sequence', 'Customer Win-Back Flow for Inactive Shoppers (60-90 Days)', 'Browse Abandonment Flow'],
          process: [{ step: '01', title: 'Flow Logic & Trigger Mapping', detail: 'Configure exact trigger conditions (e.g. Added to Cart but didn\'t buy).' }, { step: '02', title: 'Copy & Design Execution', detail: 'Write empathetic recovery copy and include dynamic product cart previews.' }, { step: '03', title: 'Discount & Urgency Timing', detail: 'Offer small discount in email #2 and urgency deadline in email #3.' }, { step: '04', title: 'Continuous A/B Testing', detail: 'Optimize send times and subject lines to maximize recovery percentage.' }],
          impact: 'Generates 20% to 30% of total e-commerce store revenue completely on autopilot.',
          tools: ['Klaviyo Flows', 'ActiveCampaign', 'Shopify Webhooks'],
          metricBenchmark: '22% Abandoned Cart Recovery Rate'
        },
        {
          slug: 'customer-retention-email',
          name: 'Customer Retention',
          tagline: 'VIP loyalty tier rewards and repeat-purchase incentive campaigns.',
          desc: 'Automated post-purchase check-ins, replenishment reminders, referral reward prompts, and VIP tier unlocks.',
          deliverables: ['VIP Customer Loyalty Tier Sequences', 'Automated Replenishment & Re-Order Reminders', 'Referral Program Invitation Emails', 'Customer Survey & Review Request Workflows', 'Milestone & Anniversary Celebration Messages'],
          process: [{ step: '01', title: 'Customer Lifetime Curve Mapping', detail: 'Identify the exact day most buyers consider making their second purchase.' }, { step: '02', title: 'Cross-Sell Recommendation Engine', detail: 'Recommend complementary products that match previous purchases.' }, { step: '03', title: 'Exclusive VIP Perks', detail: 'Offer early access to new collections and bonus loyalty points.' }, { step: '04', title: 'LTV Growth Tracking', detail: 'Track cohort repeat purchase rate month over month.' }],
          impact: 'Doubles repeat customer rates and maximizes profit margins.',
          tools: ['Klaviyo', 'Yotpo / Stamped.io', 'Shopify Plus'],
          metricBenchmark: '+38% Repeat Order Rate'
        },
        {
          slug: 'email-performance-analytics',
          name: 'Email Performance Analytics',
          tagline: 'Granular tracking of open rates, click rates & attributed revenue.',
          desc: 'Monthly executive deliverability reports, revenue per recipient analysis, list growth velocity metrics, and unsub/spam rate monitoring.',
          deliverables: ['Executive Email Revenue Attribution Dashboard', 'Deliverability & Inbox Placement Health Report', 'Revenue Per Recipient (RPR) Metric Tracking', 'List Churn & Growth Velocity Analysis', 'A/B Test Statistical Significance Reports'],
          process: [{ step: '01', title: 'Attribution Model Setup', detail: 'Configure 5-day view and click attribution windows.' }, { step: '02', title: 'Deliverability Health Monitoring', detail: 'Track bounce rates, spam complaint rates (< 0.05%), and domain reputation.' }, { step: '03', title: 'Monthly Revenue Review', detail: 'Present exact rupee revenue generated by campaigns vs automated flows.' }, { step: '04', title: 'Strategic Action Items', detail: 'Plan next month\'s creative tests based on data insights.' }],
          impact: 'Ensures email marketing remains a transparent, high-ROI profit center.',
          tools: ['Klaviyo Analytics', 'Google Looker Studio', 'Postmaster Tools'],
          metricBenchmark: '100% Attributed Revenue Clarity'
        }
      ]
    }
  ],

  caseStudies: [
    {
      id: 'zeya-fashion',
      category: 'ecommerce',
      categoryLabel: 'D2C Apparel & Ethnic Wear',
      client: 'Zeya Couture India',
      location: 'Jaipur & Delhi NCR',
      logoText: 'ZEYA',
      title: 'Scaling an Indian D2C Fashion Brand from ₹3.5 Lakhs to ₹32 Lakhs/Month in 6 Months',
      description: 'Zeya Couture was struggling with rising Meta ad costs and high cart abandonment. We implemented dynamic UGC Reels ads, restructured their Meta pixel tracking with Conversions API, and launched an automated WhatsApp checkout recovery funnel that saved 22% of abandoned carts.',
      metrics: [
        { label: 'Monthly Revenue', before: '₹3,50,000', after: '₹32,40,000', change: '+825%' },
        { label: 'Blended ROAS', before: '1.7x', after: '4.4x', change: '+158%' },
        { label: 'Cost Per Purchase', before: '₹890', after: '₹340', change: '-61%' }
      ],
      tags: ['Meta Ads', 'WhatsApp Automation', 'UGC Reels', 'Shopify CRO'],
      quote: '"Connect Digital Media brought clarity to our marketing. Their WhatsApp recovery alone added ₹4 Lakhs in pure profit every month. Best agency decision we made."',
      author: 'Pooja Sharma',
      authorTitle: 'Founder & Creative Director, Zeya Couture'
    },
    {
      id: 'apex-realty',
      category: 'services',
      categoryLabel: 'Real Estate & Interior Design',
      client: 'Apex Living Spaces',
      location: 'Mumbai & Pune',
      logoText: 'APEX',
      title: 'Generating 380+ Qualified Homebuyer & Interior Leads at ₹310 CPL in Mumbai & Pune',
      description: 'Replaced generic lead forms with an interactive 60-second home renovation cost estimator. Combined high-intent Google Search campaigns with geo-targeted Instagram carousel ads showcasing 3D walkthroughs.',
      metrics: [
        { label: 'Monthly Inquiries', before: '42 leads', after: '385 leads', change: '+816%' },
        { label: 'Cost Per Lead (CPL)', before: '₹1,250', after: '₹310', change: '-75%' },
        { label: 'Site Visit Conversion', before: '8%', after: '24%', change: '+200%' }
      ],
      tags: ['Google Search Ads', 'Lead Magnet Funnel', 'Local SEO', 'WhatsApp CRM'],
      quote: '"The lead quality was exceptional. Unlike past agencies sending bogus numbers, 80% of leads from Connect Digital Media were verified and eager for site visits."',
      author: 'Rohit Kulkarni',
      authorTitle: 'Managing Partner, Apex Living Spaces'
    },
    {
      id: 'vedic-glow',
      category: 'ecommerce',
      categoryLabel: 'Ayurvedic Wellness & Skincare',
      client: 'VedicGlow Naturals',
      location: 'Kerala & Bengaluru',
      logoText: 'VEDICGLOW',
      title: 'Scaling an Ayurvedic D2C Brand with Regional UGC Ads & 5.1x Blended ROAS',
      description: 'Engineered a vernacular video ad strategy with 30+ regional micro-influencers across South and North India. Built a lightning-fast mobile landing page featuring customer video reviews and 1-click UPI checkout.',
      metrics: [
        { label: 'Monthly Revenue', before: '₹5,00,000', after: '₹48,00,000', change: '+860%' },
        { label: 'Blended ROAS', before: '2.1x', after: '5.1x', change: '+142%' },
        { label: 'Repeat Customer Rate', before: '14%', after: '38%', change: '+171%' }
      ],
      tags: ['Vernacular UGC Ads', 'Mobile Landing Pages', 'Razorpay Fast Checkout', 'Meta Scaling'],
      quote: '"Their understanding of Indian consumer psychology and quick execution helped us compete directly with established market giants."',
      author: 'Aditya Nambiar',
      authorTitle: 'Co-Founder, VedicGlow Naturals'
    },
    {
      id: 'skillup-edtech',
      category: 'services',
      categoryLabel: 'EdTech & Professional Upskilling',
      client: 'SkillUp Academy India',
      location: 'Hyderabad & Delhi',
      logoText: 'SKILLUP',
      title: 'Enrolling 12,000+ Students with Performance Marketing & Automated Webinar Funnels',
      description: 'Architected high-converting YouTube and Instagram ad campaigns driving registrations to a live Sunday masterclass. Integrated automated SMS & WhatsApp reminders that boosted live webinar attendance from 28% to 64%.',
      metrics: [
        { label: 'Paid Student Enrollments', before: '210 / mo', after: '2,450 / mo', change: '+1,066%' },
        { label: 'Customer CAC', before: '₹2,400', after: '₹950', change: '-60%' },
        { label: 'Live Webinar Attendance', before: '28%', after: '64%', change: '+128%' }
      ],
      tags: ['YouTube Ads', 'Webinar CRO', 'WhatsApp Reminder API', 'Meta Retargeting'],
      quote: '"Connect Digital Media is the growth engine behind our rapid scaling. They manage our entire acquisition funnel with complete ownership."',
      author: 'Sanjay Malhotra',
      authorTitle: 'Head of Growth, SkillUp Academy'
    }
  ],

  pricingPlans: [
    {
      id: 'starter-growth',
      name: 'Starter Growth',
      badge: 'Ideal for Startups & Local Brands',
      monthlyPrice: 14999,
      quarterlyPrice: 12749,
      period: '/ month',
      adSpendTarget: 'Recommended for ad budgets up to ₹50,000/mo',
      description: 'Essential digital marketing engine designed to establish strong social presence, launch profitable ads, and generate consistent leads.',
      features: [
        'Dedicated Performance Marketer & Account Lead',
        'Meta Ads Management (Facebook & Instagram)',
        '8 High-Converting Social Media Posts / Reels per month',
        'Ad Copywriting & Target Audience Research',
        'Basic Local SEO & Google Business Profile Setup',
        'WhatsApp Lead Notification Integration',
        'Monthly Growth & ROI Report with Strategy Review'
      ],
      ctaText: 'Start Starter Plan',
      featured: false
    },
    {
      id: 'scale-up-pro',
      name: 'Scale-Up Pro',
      badge: '🔥 Most Popular for Scaling Brands',
      monthlyPrice: 29999,
      quarterlyPrice: 25499,
      period: '/ month',
      adSpendTarget: 'Recommended for ad budgets ₹50,000 - ₹2,50,000/mo',
      description: 'Comprehensive omnichannel growth solution built to scale profitable ad spend, drive high-volume revenue, and dominate search rankings.',
      features: [
        'Dedicated Senior Growth Pod (Media Buyer + Designer)',
        'Full Meta Ads + Google Ads (Search & PMax) Management',
        '16 Custom High-Impact Social Posts & Viral Reels / Mo',
        'High-Converting Landing Page Design & CRO Audit',
        'Complete Technical & Local SEO Optimization',
        'WhatsApp Business API Automated Follow-up Setup',
        'Bi-Weekly Strategy Calls & 24/7 Priority WhatsApp Support',
        'Real-time Live Analytics & Blended ROAS Dashboard'
      ],
      ctaText: 'Get Scale-Up Pro',
      featured: true
    },
    {
      id: 'enterprise-dominance',
      name: 'Enterprise Dominance',
      badge: 'Full Omnichannel Dominance',
      monthlyPrice: 59999,
      quarterlyPrice: 50999,
      period: '/ month',
      adSpendTarget: 'For high-growth D2C, B2B & ad spends ₹2,50,000+/mo',
      description: 'Aggressive full-funnel market takeover with dedicated creative production, influencer seeding, custom landing pages, and advanced tracking.',
      features: [
        'Dedicated 4-Person Growth Pod (Strategist, Buyer, Copywriter, Video Editor)',
        'Omnichannel Scaling (Meta, Google, YouTube, LinkedIn)',
        'Unlimited Ad Creative Variations & UGC Sourcing',
        'Custom Web & High-Speed CRO Landing Page Development',
        'Advanced Server-Side CAPI & Offline Conversion Tracking',
        'Influencer Seeding & Vernacular Creator Management',
        'Enterprise WhatsApp & Klaviyo Retention Sequences',
        'Weekly Executive Growth Briefings & Dedicated Slack/WhatsApp Group'
      ],
      ctaText: 'Dominate Your Category',
      featured: false
    }
  ],

  blogs: [
    {
      id: 'd2c-scale-india-guide',
      slug: 'd2c-scale-india-guide',
      category: 'Performance Marketing',
      title: 'How Indian D2C Brands Scale from ₹0 to ₹50 Lakhs/Month with Meta Ads & WhatsApp',
      date: 'Aug 2026',
      readTime: '6 min read',
      author: 'Connect Digital Strategy Team',
      summary: 'A step-by-step playbook on mastering Meta ad creative testing, reducing RTO/COD returns, and using automated WhatsApp flows to turn cold Indian shoppers into repeat buyers.',
      content: `
        <h3>The New Rules of D2C Scaling in India</h3>
        <p>In 2026, scaling an Indian e-commerce brand is no longer just about bidding on interest targets in Meta Ads Manager. With rising ad costs and fierce competition, high-growth brands win on three core pillars: <strong>Creative Velocity</strong>, <strong>Instant WhatsApp Engagement</strong>, and <strong>RTO (Return to Origin) Mitigation</strong>.</p>
        
        <h4>1. Creative Testing Protocol (The 3-Hook Framework)</h4>
        <p>Instead of testing 10 different target audiences, test 5 different video creative hooks to a broad audience. In India, top converting angles include:</p>
        <ul>
          <li><strong>The Problem-Agitation Hook</strong>: Highlight a specific daily frustration within the first 2 seconds.</li>
          <li><strong>Vernacular Social Proof Hook</strong>: Direct customer reaction in regional languages (Hindi, Hinglish, Marathi, etc.).</li>
          <li><strong>Price-to-Value Comparison</strong>: Show why your product beats overpriced legacy brands.</li>
        </ul>

        <h4>2. Winning with WhatsApp Commerce & Abandoned Cart Recovery</h4>
        <p>Email open rates in India hover around 12-18%, whereas <strong>WhatsApp messages boast a 90%+ open rate</strong>. By integrating an official WhatsApp Business API with automated triggers within 15 minutes of an abandoned checkout, Indian D2C brands routinely recover 20% to 30% of lost sales.</p>

        <h4>3. Reducing COD Losses (Cash on Delivery Optimization)</h4>
        <p>Cash on Delivery represents over 60% of online shopping in India, but unconfirmed orders lead to crippling RTO expenses. Connect Digital Media implements automated WhatsApp OTP confirmation and offers instant ₹50/5% discounts on UPI prepayments to increase prepaid order ratios up to 70%.</p>

        <div class="blog-callout">
          <strong>Key Takeaway:</strong> Stop treating paid ads in isolation. Build an integrated funnel that blends Meta acquisition with WhatsApp retention and fast UPI checkout.
        </div>
      `
    },
    {
      id: 'instagram-reels-algorithm-2026',
      slug: 'instagram-reels-algorithm-2026',
      category: 'Social Media Marketing',
      title: 'Instagram Reels Algorithm 2026: The Complete Viral Playbook for Indian Startups',
      date: 'Aug 2026',
      readTime: '5 min read',
      author: 'Social Media Strategy Lead',
      summary: 'Discover how the latest Instagram algorithm ranks Reels, why watch time and DM shares matter more than likes, and how to create engaging short-form content that converts.',
      content: `
        <h3>Cracking the 2026 Instagram Reels Algorithm</h3>
        <p>The Instagram algorithm has shifted dramatically. Likes and comments are now secondary ranking signals. The two most important metrics determining whether your Reel reaches 1,000 views or 500,000 views are <strong>Retention Rate (Watch Time)</strong> and <strong>Send/DM Shares</strong>.</p>

        <h4>The 3 Critical Growth Triggers:</h4>
        <ol>
          <li><strong>The 1.5-Second Visual Hook:</strong> If your viewer does not see dynamic movement, text on screen, or a bold statement in the first 1.5 seconds, they will swipe away.</li>
          <li><strong>The "Shareable Value" Formula:</strong> People share Reels with friends via DMs for three reasons: it made them laugh, it taught them a hidden hack, or it validated their opinion. Build content specifically designed to be shared.</li>
          <li><strong>Seamless Loop Engineering:</strong> Crafting the last second of your audio and video to flow seamlessly into the first second tricks the algorithm with 120%+ average watch duration.</li>
        </ol>

        <h4>Best Posting Times in India</h4>
        <p>Based on our analysis of over 500,000 Reel views across client accounts in India, the highest engagement windows are:</p>
        <ul>
          <li><strong>Morning Commute:</strong> 8:30 AM – 10:00 AM IST</li>
          <li><strong>Post-Lunch Break:</strong> 1:30 PM – 3:00 PM IST</li>
          <li><strong>Prime Evening Window:</strong> 7:30 PM – 10:00 PM IST</li>
        </ul>
      `
    },
    {
      id: 'local-seo-india-cities',
      slug: 'local-seo-india-cities',
      category: 'Search Engine Optimization',
      title: 'Local SEO Blueprint: How to Rank #1 on Google Maps in Mumbai, Pune, Delhi & Bangalore',
      date: 'Aug 2026',
      readTime: '7 min read',
      author: 'SEO Director',
      summary: 'Learn the exact step-by-step Local SEO and Google My Business (GMB) blueprint to capture high-intent local customers looking for your services in your city.',
      content: `
        <h3>Dominating Local Search in High-Competition Indian Metros</h3>
        <p>When someone in Mumbai or Bangalore searches for <em>"Best digital marketing agency near me"</em> or <em>"Top interior designer in Pune"</em>, Google shows the 3-Pack Map listing before any organic search results. Ranking in this top 3 is like having a digital billboard on the busiest street.</p>

        <h4>The 4-Step Google Map Dominance Strategy:</h4>
        <ol>
          <li><strong>Primary & Secondary GMB Category Precision:</strong> Choose the exact primary category matching user search intent. Add 4-5 relevant secondary categories.</li>
          <li><strong>Geo-Tagged Photos & Weekly Updates:</strong> Upload authentic office and work photos weekly with location metadata enabled. Businesses that post weekly updates see a 34% boost in direction requests.</li>
          <li><strong>Review Velocity & Keyword-Rich Replies:</strong> Ask happy clients to mention specific services and cities in their Google reviews (e.g. "Connect Digital Media helped our Pune business grow revenue"). Always reply within 24 hours incorporating target keywords naturally.</li>
          <li><strong>Local City Landing Pages & Schema Markup:</strong> Create dedicated service pages for specific localities (e.g., /services/digital-marketing-agency-mumbai) embedded with LocalBusiness JSON-LD schema.</li>
        </ol>
      `
    },
    {
      id: 'ad-budget-allocation-india',
      slug: 'ad-budget-allocation-india',
      category: 'Performance Marketing',
      title: 'Performance Marketing vs Branding: Where Should Indian Startups Spend Their First ₹50,000?',
      date: 'Aug 2026',
      readTime: '5 min read',
      author: 'Head of Media Buying',
      summary: 'A tactical breakdown for early-stage founders on allocating an initial marketing budget between paid acquisition, content creation, and search visibility for fast ROI.',
      content: `
        <h3>Maximizing Your First ₹50,000 Marketing Budget</h3>
        <p>One of the most frequent questions early-stage Indian founders ask us is: <em>"We have a budget of ₹50,000 per month—should we invest in influencer branding or Meta performance ads?"</em></p>

        <h4>Recommended 70-20-10 Budget Split:</h4>
        <ul>
          <li><strong>70% (₹35,000) on Direct-Response Performance Ads:</strong> Allocate to Meta (Instagram/Facebook) and Google Search targeting high-intent buyers to generate immediate cash flow and validate product-market fit.</li>
          <li><strong>20% (₹10,000) on High-Impact Creative Assets & UGC:</strong> Invest in authentic micro-creator videos and high-speed mobile landing pages. Ads fail without good creative.</li>
          <li><strong>10% (₹5,000) on Retargeting & WhatsApp Automation:</strong> Retarget warm website visitors and set up automated WhatsApp follow-ups so you never lose an interested inquiry.</li>
        </ul>
      `
    }
  ],

  testimonials: [
    {
      id: 't1',
      client: 'Pooja Sharma',
      role: 'Founder & CEO',
      company: 'Zeya Couture (Jaipur / Delhi)',
      avatar: '👩‍💼',
      stars: 5,
      highlight: 'Scaled to ₹32L/month with 4.4x ROAS',
      content: 'Connect Digital Media completely transformed our D2C unit economics. Unlike past agencies that promised vanity likes, they focused purely on ROAS, WhatsApp checkout recovery, and high-converting UGC reels. We grew 8x in 6 months!',
      resultBadge: '+825% Revenue'
    },
    {
      id: 't2',
      client: 'Rohit Kulkarni',
      role: 'Managing Partner',
      company: 'Apex Living Spaces (Mumbai & Pune)',
      avatar: '👨‍💼',
      stars: 5,
      highlight: '380+ Verified Inquiries at ₹310 CPL',
      content: 'The quality of real estate and interior leads generated by Connect Digital Media is world-class. Their interactive cost estimator funnel and Google Ads setup cut our lead cost by 75% while tripling site visit walk-ins.',
      resultBadge: '₹310 Cost Per Lead'
    },
    {
      id: 't3',
      client: 'Aditya Nambiar',
      role: 'Co-Founder',
      company: 'VedicGlow Naturals (Bengaluru)',
      avatar: '👨‍💻',
      stars: 5,
      highlight: '5.1x Blended ROAS & 1-Click Checkout',
      content: 'The UGC creative studio and regional vernacular ads created by Connect Digital Media helped our brand scale rapidly across South and North India. Transparent weekly calls and direct founder support make them the best partner.',
      resultBadge: '5.1x ROAS'
    },
    {
      id: 't4',
      client: 'Sanjay Malhotra',
      role: 'Head of Growth',
      company: 'SkillUp Academy (Delhi NCR)',
      avatar: '👨‍🏫',
      stars: 5,
      highlight: '12,000+ Students Enrolled',
      content: 'Their automated WhatsApp webinar reminder funnels boosted our live masterclass attendance from 28% to 64%. They have mastered the science of digital conversion in the Indian education sector.',
      resultBadge: '12,000+ Students'
    }
  ],

  frameworkSteps: [
    {
      step: '01',
      title: 'Full-Stack Growth & Market Audit',
      badge: 'Diagnostics',
      summary: 'We audit your ad accounts, dissect your website funnel, profile competitor ads, and install server-side CAPI tracking to identify instant revenue leaks.',
      deliverables: ['Custom tracking & attribution setup', 'Conversion funnel drop-off analysis', 'Competitor ad angles teardown', '30-Day customized growth sprint plan']
    },
    {
      step: '02',
      title: 'Creative Engine & High-Converting Funnel',
      badge: 'Architecture',
      summary: 'We produce thumb-stopping UGC video scripts, direct-response copy, mobile-optimized landing pages, and automated WhatsApp abandoned checkout flows.',
      deliverables: ['Dedicated creative strategist & designers', '15+ Custom creative hooks & scripts / month', 'Lightning-fast mobile landing pages', 'Automated WhatsApp recovery workflows']
    },
    {
      step: '03',
      title: 'Omnichannel Paid Scaling & Optimization',
      badge: 'Acceleration',
      summary: 'We deploy ad budgets with surgical precision across Meta, Google Search, and YouTube, using algorithmic bidding to scale profitable ad spend.',
      deliverables: ['Daily bid & placement optimization', 'Budget efficiency modeling in ₹ INR', 'Automated ad fatigue alerts', 'Weekly executive performance briefing']
    },
    {
      step: '04',
      title: 'Retention, WhatsApp LTV & Compound Growth',
      badge: 'Monetization',
      summary: 'We turn 1st-time buyers into loyal repeat brand evangelists with automated WhatsApp broadcasts, VIP loyalty perks, and review generation engines.',
      deliverables: ['Predictive customer lifetime value mapping', 'Segmented WhatsApp & SMS broadcast flows', 'Zero-party review feedback loops', 'Blended MER & profitability dashboards']
    }
  ],

  offices: [
    { city: 'Surat (HQ)', timezone: 'Asia/Kolkata', address: 'Surat - Gujarat, India', label: 'Main Headquarters' },
    { city: 'Ahmedabad', timezone: 'Asia/Kolkata', address: 'Gujarat, India', label: 'Regional Hub' },
    { city: 'Mumbai', timezone: 'Asia/Kolkata', address: 'Bandra Kurla Complex (BKC), Mumbai, Maharashtra', label: 'Commercial Hub' },
    { city: 'Delhi NCR', timezone: 'Asia/Kolkata', address: 'DLF Cyber City, Gurugram, Haryana', label: 'North Hub' },
    { city: 'Bengaluru', timezone: 'Asia/Kolkata', address: 'Indiranagar, Bengaluru, Karnataka', label: 'Tech Hub' }
  ],

  faqs: [
    {
      question: 'How quickly can we see results after partnering with Connect Digital Media?',
      answer: 'For Paid Ads (Meta & Google), campaigns go live within 5 to 7 business days following our thorough audit and creative production phase. Initial performance signals and lead/sales uplifts are typically visible within the first 14 to 21 days as machine learning algorithms optimize. For SEO, ranking gains compound steadily over 60 to 90 days.'
    },
    {
      question: 'What ad budget do I need to get started in India?',
      answer: 'We recommend a minimum monthly ad spend of ₹15,000 to ₹30,000 for local businesses and early startups to gather sufficient algorithmic data. For scaling D2C brands, we recommend ₹50,000+ per month. We optimize every rupee to ensure your blended Return on Ad Spend (ROAS) remains profitable.'
    },
    {
      question: 'Why should I choose Connect Digital Media over a traditional big agency?',
      answer: 'Traditional agencies charge hefty retainers, outsource your work to junior interns, and send confusing reports full of vanity likes. At Connect Digital Media, you work directly with dedicated growth leads who prioritize real revenue, tested ad creatives, transparent dashboards, and direct WhatsApp communication.'
    },
    {
      question: 'Do you provide GST invoices and official service agreements?',
      answer: 'Yes! We are a legally registered Indian digital agency. All our plans include standard GST invoices, transparent service level agreements (SLAs), and non-disclosure agreements (NDAs) to protect your brand data.'
    },
    {
      question: 'Can I chat directly with the team on WhatsApp for quick updates?',
      answer: 'Absolutely! Every client is assigned a dedicated WhatsApp group with our media buyers, creative designers, and account director for real-time campaign updates and instant support.'
    }
  ]
};

// Helper function to find sub-service across all categories
agencyData.getSubService = function(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  for (const cat of agencyData.allServices) {
    const found = cat.subServices.find(s => s.slug === cleanSlug);
    if (found) {
      return {
        ...found,
        parentCategory: cat.title,
        parentCategoryId: cat.id,
        parentCategoryIcon: cat.icon,
        parentCategoryNum: cat.num
      };
    }
  }
  return null;
};

// Expose globally for direct file:// or standard browser script usage
if (typeof window !== 'undefined') {
  window.agencyData = agencyData;
}

// Also support ES module export
export { agencyData };
