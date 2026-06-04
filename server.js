// Basit Express Sunucusu
// Kurulum: npm install express
// Çalıştırma: node server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const MOBILE_IP = process.env.MOBILE_IP || '172.20.10.2';

// Statik dosyaları sunma
app.use(express.static(__dirname));

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Menü uygulaması çalışıyor: http://localhost:${PORT}`);
    console.log(`Mobil cihazdan erişmek için: http://${MOBILE_IP}:${PORT}`);
});
