const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "writetoakashtripathi@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;border:1px solid #e5e7eb;border-radius:12px">
          <h2 style="margin:0 0 24px;font-size:22px;color:#1a1a1a">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr><td style="padding:10px 0;color:#6b6358;width:110px">Name</td><td style="padding:10px 0;color:#1a1a1a;font-weight:500">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#6b6358">Email</td><td style="padding:10px 0"><a href="mailto:${email}" style="color:#e04e2a">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#6b6358">Company</td><td style="padding:10px 0;color:#1a1a1a">${company || "—"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#faf7f2;border-radius:8px">
            <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#6b6358">Message</p>
            <p style="margin:0;color:#1a1a1a;line-height:1.65;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin:24px 0 0;font-size:12px;color:#9ca3af">Sent via akashtripathi.vercel.app</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err.message);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
};
