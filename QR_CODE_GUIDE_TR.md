# QR Kod Oluşturma Rehberi

## 🎯 QR Kod Nedir?

QR kod (Quick Response), müşterilerinizin kamerası ile tarayabileceği bir görüntüdür. Tarandığında menüye doğrudan yönlendirir.

---

## 📱 Adım 1: Menü URL'sini Hazırlama

Menünüzü çevrimiçi hale getirmeniz gerekir. İşte seçenekler:

### Seçenek A: GitHub Pages (Ücretsiz, Permanent)
1. GitHub hesabı oluşturun (https://github.com)
2. Yeni bir repository oluşturun: "qr-menu"
3. Tüm dosyaları yükleyin
4. Settings → Pages → Main branch seçin
5. URL alırsınız: `https://username.github.io/qr-menu`

### Seçenek B: Netlify (Ücretsiz, Kolay)
1. https://www.netlify.com/ sitesine gidin
2. Dosyaları sürükle-bırak yapın
3. Hemen URL alırsınız

### Seçenek C: Kendi Domain'iniz
1. Hosting satın alın
2. Dosyaları FTP ile yükleyin
3. Domain'i yönlendirin

### Seçenek D: Yerel (Sadece aynı ağda)
```
http://192.168.1.5:8000
```

---

## 🔗 Adım 2: QR Kod Oluşturma

### Yöntem 1: Hızlı Online Generator (Tavsiye)

1. https://www.qr-code-generator.com/ sitesine gidin
2. "URL" seçeneğini işaretleyin
3. Menü URL'sini yapıştırın
4. "Generate" tıklayın
5. "Download" ile indir

**Ayarlar:**
- Size: 300x300 pixel (minimum)
- Format: PNG (tavsiye)
- Error correction: High
- Logo: Pastane logonuz(opsiyonel)

### Yöntem 2: Google Charts API

Bu linki tarayıcıda açın:
```
https://chart.googleapis.com/chart?chs=300x300&chld=L|0&cht=qr&chl=YOUR_URL_HERE
```

YOUR_URL_HERE yerine menü adresini yazın. Örnek:
```
https://chart.googleapis.com/chart?chs=300x300&chld=L|0&cht=qr&chl=https%3A%2F%2Fusername.github.io%2Fqr-menu%2F
```

Sağ tıkla → "Resmi farklı kaydet" ile indirin

### Yöntem 3: QR Server API

Hemen görüntüleyebilir veya indirebilirsiniz:
```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://yoururl.com/menu
```

---

## 🖨️ Adım 3: Yazdırma ve Yerleştirme

### Yazdırma Önerileri

1. **Boyut**: Minimum 5x5 cm (kare)
2. **Kalite**: En yüksek kalitede yazdırın
3. **Renk**: Siy-beyaz en güvenilir (renkli de olabilir)
4. **Kağıt**: Mat kağıt (parlak haricinde)
5. **Kopya**: En az 5 kopya (hasar/aşınma için)
i
### Yerleştirme Yerleri

- 🍽️ **Masa**: Menü kartı olarak
- 🚪 **Giriş**: QR kodu resepsiyonda
- 🪟 **Vitrin**: Camda görünen yere
- 📋 **Menü Panosu**: Fiziksel menüyle beraber
- 📲 **Sosyal Medya**: Instagram, Facebook'ta paylaş
- 📧 **Emailing**: Müşteri e-postalarında

---

## ✅ Test Etme

### Telefonunuzda Test Edin

1. Akıllı telefonunuzu alın
2. Kamerayı QR koda yöneltin
3. Bildirim çıkacak
4. Linke dokunun
5. Menü açılmalı

**Tarayıcı Algılamazsa:**
- Android: Google Lens kullanın
- iOS: Kamera uygulamasını kullanın

---

## 🎨 Profesyonel QR Kod Tasarımı

### Logo Ekleme
1. Pastane logonuzu hazırlayın
2. Genellikle QR'ın ortasına yerleştirilir
3. Logo boyutu: QR'ın %20'sinden az

### Renk Seçimi

**Tavsiye Edilen:**
- ⬛ Siyah arka plan + beyaz QR
- 🟤 Açık bej arka plan + koyu renk QR

**Kaçınılması Gerekenler:**
- ❌ QR ile arka planın kontrastı az ise
- ❌ Çok açık veya çok koyu renkler

---

## 📊 QR Kod İstatistikleri

QR kod oluşturduktan sonra, tıklanma sayısını takip etmek için:

### Başka bir link kullanın
1. [Bitly](https://bitly.com) - URL kısaltıcı
2. [Google Analytics](https://analytics.google.com) - İstatistik
3. [QR Code Tracking](https://www.qr-code-generator.com/) - Takip

---

## 🔒 QR Kod Güvenliği

### Sahte QR Kod Koruması
- Kendi altyapınızı kullanın
- Bağlantıları kontrol edin
- HTTPS kullanın

### Çalınan QR Kodu Değiştirme
1. Menü URL'sini değiştirin
2. Yeni QR kod oluşturun
3. Yazıcıları güncelleyin

---

## 📝 Örnek Adımlar (Baştan Sona)

1. **Menü dosyalarını hazırla**: ✓ Yapıldı
2. **GitHub'a yükle**: https://github.com
3. **GitHub Pages'i etkinleştir**: Settings → Pages
4. **URL'i kopyala**: https://yourusername.github.io/qr-menu
5. **QR kod oluştur**: https://www.qr-code-generator.com/
6. **URL'i yapıştır ve oluştur**
7. **İndir ve yazdır**
8. **Mobilden test et**
9. **Restorana asıl**
10. **Müşterilerle paylaş**

---

## 💡 Hızlı İpuçları

- QR kodları test etmeden yazdırmayın
- Birden fazla kopya yapın (hasar için)
- Düzenli olarak menüyü güncelleyin
- Müşterilerinize QR kod hakkında bilgi verin
- WiFi ağınızın adı ve şifresi yaşlı müşteriler için

---

## 🆘 Sorun Giderme

**QR kod açılmıyor?**
- URL'i kontrol edin
- İnternet bağlantısı var mı?
- Tarayıcı güncel mi?

**QR kod taranmıyor?**
- 5x5 cm'den küçük mü?
- Kontrast yeterli mi?
- Kamera temiz mi?

**Yanlış URL gösteriyor?**
- QR kodu yeniden oluşturun
- Yeni URL'i doğru yapıştırdığından emin olun

---

## 📚 Faydalı Kaynaklar

- https://www.qr-code-generator.com/
- https://api.qrserver.com/
- https://chart.googleapis.com/
- https://bitly.com/
- https://github.com/

---

**Menünüz için iyi şanşlar! 🧁📱**
