import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API Endpoint to send email
app.post('/api/quote', async (req, res) => {
  try {
    const { name, institution, email, phone, productId, quantity, message } = req.body;

    // Validate fields
    if (!name || !email || !phone || !productId) {
      return res.status(400).json({ error: 'Lütfen tüm zorunlu alanları doldurun.' });
    }

    const submissionDate = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Bilinmiyor';

    console.log(`[Quote API] Received proposal request from ${name} (${email}) for product ${productId}`);

    // Build the email body
    const emailSubject = `Yeni Teklif Talebi - ${name}`;
    const emailBody = `
Yeni bir teklif talebi alındı. Detaylar aşağıdadır:

--------------------------------------------------
Zorunlu İletişim Bilgileri:
--------------------------------------------------
Ad Soyad: ${name}
Kurum / Okul: ${institution || 'Belirtilmedi'}
Telefon Numarası: ${phone}
E-posta Adresi: ${email}

--------------------------------------------------
Talebe Dair Detaylar:
--------------------------------------------------
İlgilenilen Ürün ID'si: ${productId}
Tahmini Adet: ${quantity || 'Belirtilmedi'}
Ek Mesaj / Özel İstek: 
${message || 'Boş bırakıldı.'}

--------------------------------------------------
Sistem Bilgileri:
--------------------------------------------------
Gönderim Tarihi & Saati: ${submissionDate} (TR saatiyle)
Kullanıcı IP Adresi: ${userIp}
`;

    // Configure Mail Transporter
    // SMTP credentials from env
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn('[Quote API] SMTP_USER or SMTP_PASS environment variables are not set. Logging email content instead:');
      console.log('--- EMAIL CONTENT START ---');
      console.log(`Subject: ${emailSubject}`);
      console.log(emailBody);
      console.log('--- EMAIL CONTENT END ---');
      
      // Simulate success for local testing/dev
      return res.status(200).json({ success: true, message: 'Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"NCT Robotik" <${smtpUser}>`,
      to: 'info@nctrobotic.com',
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    console.log('[Quote API] Quote email sent successfully.');
    res.status(200).json({ success: true, message: 'Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.' });

  } catch (error) {
    console.error('[Quote API] Error sending quote email:', error);
    res.status(500).json({ error: 'Teklif talebi gönderilirken bir sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.' });
  }
});

// Proxy all other /api/ requests to https://api.nctrobotic.com/api
app.use('/api', async (req, res, next) => {
  // Allow quote endpoint to be handled locally
  if (req.path === '/quote') {
    return next();
  }

  const targetUrl = `https://api.nctrobotic.com/api${req.originalUrl.substring(4)}`;
  
  try {
    const headers = { ...req.headers };
    delete headers.host;

    const options = {
      method: req.method,
      headers: headers,
      duplex: 'half',
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      options.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, options);
    
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });

    res.status(response.status);
    const bodyText = await response.text();
    res.send(bodyText);
  } catch (error) {
    console.error(`[Proxy Error] Failed to proxy to ${targetUrl}:`, error);
    res.status(500).json({ error: 'Proxy request failed.' });
  }
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
