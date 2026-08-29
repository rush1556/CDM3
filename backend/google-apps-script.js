/**
 * ============================================================================
 * CONNECT DIGITAL MEDIA - GOOGLE SHEETS & EMAIL BACKEND
 * ============================================================================
 * 
 * Instructions:
 * 1. Open Google Sheets (https://sheets.new) and name it: "Connect Digital Media - Live Leads"
 * 2. In the top menu, click: Extensions > Apps Script
 * 3. Delete any existing code in the editor and PASTE this entire script.
 * 4. In the top right, click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 * 6. Set Description: "Connect Digital Media Lead Webhook"
 * 7. Set "Execute as": "Me"
 * 8. Set "Who has access": "Anyone"  <-- (CRITICAL for website form submission)
 * 9. Click "Deploy", authorize permissions, and COPY your Web App URL.
 * 10. Paste that Web App URL into `js/data.js` -> `googleSheetsWebhookUrl`.
 */

// Official agency notification email
var ADMIN_EMAIL = "admin@connectdigitalmedia.co.in";
var AGENCY_NAME = "Connect Digital Media";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-setup column headers if Sheet is newly created
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Full Name",
        "Brand / Company Name",
        "Phone / WhatsApp",
        "Work Email",
        "Selected Services",
        "Monthly Budget (₹ INR)",
        "Growth Challenge / Note",
        "Form Type",
        "Page Source URL"
      ]);

      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setBackground("#E52D25");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Parse incoming JSON data
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    var name = data.name || "N/A";
    var brand = data.brand || "N/A";
    var phone = data.phone || "N/A";
    var email = data.email || "N/A";
    var services = data.services || "N/A";
    var budget = data.budget || "N/A";
    var message = data.message || "N/A";
    var formType = data.formType || "Website Lead Form";
    var pageUrl = data.pageUrl || "Direct Website";

    // Append lead to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      brand,
      phone,
      email,
      services,
      budget,
      message,
      formType,
      pageUrl
    ]);

    // Send Instant Email Notification to Agency Admin
    sendAdminEmailAlert({
      timestamp: timestamp,
      name: name,
      brand: brand,
      phone: phone,
      email: email,
      services: services,
      budget: budget,
      message: message,
      formType: formType
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Lead saved and email sent successfully!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Allow GET test requests
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Connect Digital Media Backend Webhook is Active!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Helper function to send email notification to admin
function sendAdminEmailAlert(lead) {
  var subject = "🔥 New Lead Alert: " + lead.name + " (" + lead.brand + ") - " + lead.budget;
  
  var htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
      <div style="background: #E52D25; padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">Connect Digital Media</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">🔥 New Inbound Growth Strategy Lead</p>
      </div>

      <div style="padding: 28px; color: #1e293b; line-height: 1.6;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 140px;">Client Name:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #0f172a; font-size: 16px;">${lead.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Brand / Company:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #E52D25; font-size: 15px;">${lead.brand}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">WhatsApp / Phone:</td>
            <td style="padding: 10px 0;"><a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" style="color: #25D366; font-weight: bold; text-decoration: none;">💬 ${lead.phone} (Open WhatsApp)</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Work Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${lead.email}" style="color: #0284c7; text-decoration: none;">${lead.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Monthly Ad Budget:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #16a34a;">${lead.budget}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Services Needed:</td>
            <td style="padding: 10px 0;">${lead.services}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Growth Challenge:</td>
            <td style="padding: 10px 0; font-style: italic; background: #f8fafc; padding: 10px; border-radius: 6px;">"${lead.message}"</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Form Source:</td>
            <td style="padding: 10px 0; color: #64748b; font-size: 12px;">${lead.formType} (${lead.timestamp})</td>
          </tr>
        </table>

        <div style="margin-top: 28px; text-align: center;">
          <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name)}!%20This%20is%20Connect%20Digital%20Media.%20We%20received%20your%20strategy%20session%20request%20for%20${encodeURIComponent(lead.brand)}." style="background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; display: inline-block;">
            💬 Reply on WhatsApp Directly
          </a>
        </div>
      </div>

      <div style="background: #f8fafc; padding: 14px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        Connect Digital Media Lead Engine • Surat, Gujarat • GST Compliant
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}
