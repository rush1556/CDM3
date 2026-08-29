# Connect Digital Media - Google Sheets & Email Backend Setup

This backend lets your website automatically:
1. **Save every client lead in real-time to your Google Sheet**.
2. **Send an instant styled Email Notification to `admin@connectdigitalmedia.co.in`**.
3. **Open direct WhatsApp conversation with the client**.

---

## 🚀 3-Minute Setup Guide

### Step 1: Create a Google Sheet
1. Open [Google Sheets (sheets.new)](https://sheets.new).
2. Name the sheet: **`Connect Digital Media - Live Leads`**.

---

### Step 2: Open Google Apps Script
1. In the top Google Sheets menu, click: **`Extensions` > `Apps Script`**.
2. A new tab will open with a code editor.

---

### Step 3: Paste the Backend Code
1. Delete any sample code inside `Code.gs`.
2. Open [`backend/google-apps-script.js`](./google-apps-script.js) from this project folder.
3. Copy all the code and paste it into `Code.gs`.
4. Click the **Save icon (💾)** at the top.

---

### Step 4: Deploy as Web App
1. In the top right corner, click the blue **`Deploy`** button > **`New deployment`**.
2. Click the **Gear icon (⚙️)** next to "Select type" and choose **`Web app`**.
3. Fill in these settings:
   - **Description**: `Connect Digital Media Webhook`
   - **Execute as**: `Me (your Google email)`
   - **Who has access**: **`Anyone`** ⚠️ *(Important: Make sure to select "Anyone" so visitors on your website can submit without logging in)*
4. Click **`Deploy`**.
5. Click **`Authorize Access`** and grant permissions with your Google account.
6. Copy the generated **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 5: Connect URL to Your Website
1. Open [`js/data.js`](../js/data.js).
2. Paste your URL into `googleSheetsWebhookUrl`:
   ```javascript
   googleSheetsWebhookUrl: "https://script.google.com/macros/s/YOUR_GENERATED_ID/exec",
   ```
3. Save the file! That's it!

---

## 📊 Live Lead Columns Captured in Google Sheet
| # | Column Name | Description |
|---|---|---|
| 1 | **Timestamp (IST)** | Exact date & time of lead submission |
| 2 | **Full Name** | Client name |
| 3 | **Brand / Company** | Client business name |
| 4 | **Phone / WhatsApp** | Verified contact number |
| 5 | **Work Email** | Client email address |
| 6 | **Selected Services** | e.g. Meta Ads, Social Media, SEO, Website |
| 7 | **Monthly Budget** | e.g. ₹30,000 - ₹75,000 / month |
| 8 | **Growth Challenge** | Current bottleneck or target ROAS goals |
| 9 | **Form Type** | Main Contact Form / 30-Day Audit Modal |
| 10 | **Page Source URL** | Webpage where lead originated |
