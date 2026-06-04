# QR Menü Sistemi - Pastane

Pastane shop'unuz için modern, mobil cihaza uygun QR kod menü sistemi.

## 📋 Özellikler

✅ Mobil-first responsive tasarım
✅ Kategorilere göre filtreleme (Pasta, Kek, Kurabiye, İçecek)
✅ Her ürün için detaylı görünüm
✅ Modern, kullanıcı dostu arayüz
✅ Hızlı sipariş sistemi
✅ Türkçe tam destek

## 🚀 Kurulum

### Seçenek 1: Yerel Olarak (Hızlı Test)

1. Klasörü açın
2. `index.html` dosyasına çift tıklayın veya tarayıcıda açın
3. Menü anında görünecektir

### Seçenek 2: Web Sunucusu ile

1. **Python 3**: 
```bash
python -m http.server 8000
```

2. **Node.js - http-server**:
```bash
npx http-server
```

3. **Node.js - Express**:
```bash
node server.js
```

4. Tarayıcıda `http://localhost:8000` adresine gidin

## 🔗 QR Kod Oluşturma

Menünüzü QR kod ile paylaşmak için:

### Seçenek 1: Çevrimiçi Hizmet
1. [QR Code Generator](https://www.qr-code-generator.com/) sitesine gidin
2. URL kısmına menü adresini yapıştırın (örn: `https://www.example.com/menü`)
3. QR kodu indirin ve yazdırın

### Seçenek 2: Hızlı QR Kod
Bu bağlantıyı kullanarak hemen QR kod oluşturabilirsiniz:
```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=YOUR_URL_HERE
```

## 📱 Menü İçeriği Yönetimi

`script.js` dosyasında `menuData` dizisini düzenleyerek menü öğeleri ekleyebilirsiniz:

```javascript
{
    id: 1,
    name: "Ürün Adı",
    category: "pasta", // pasta, kek, kurabiye, içecek
    price: "50 TL",
    description: "Ürün açıklaması",
    image: "resim_url_veya_svg"
}
```

## 🎨 Kustomizasyon

### Renkler Değiştirme
`style.css`'de ana renkler:
- `#8B4513` - Koyu Kahverengi
- `#D2691E` - Orta Kahverengi
- `#D2B48C` - Açık Kahverengi
- `#FFE4B5` - Krem Rengi

### Başlık Değiştirme
`index.html`'de başlığı ve logosunu değiştirin:
```html
<h1>Pastane Menüsü</h1>
<div class="logo">🧁</div>
```

## 📦 Dosya Yapısı

```
qrmenü/
├── index.html      # Ana sayfa
├── style.css       # Stiller
├── script.js       # İşlevler ve menü verileri
└── README.md       # Bu dosya
```

## 💻 Sistem Gereksinimleri

- Modern web tarayıcı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (yalnızca sunucuya yüklendiğinde)
- Mobil cihaz (QR kod okutmak için)

## 🌐 Çevrimiçi Yayınlama

### Ücretsiz Seçenekler:
1. **GitHub Pages** - Ücretsiz barındırma
2. **Netlify** - Basit dağıtım
3. **Vercel** - Python/Node.js desteği
4. **Heroku** - Dinamik barındırma

## 📸 QR Kod Hazırlama

Menüyü herkese açık bir URL'ye yükledikten sonra:

1. QR kod oluşturun (ölçü: 300x300 piksel minimum)
2. Printerly, yazdırın (dış duvar, masa, restoran giriş)
3. Plastif ile koruyun (rutubet ve aşınma karşısında)

## 🛍️ Menü Güncelleme

Menüyü güncellemek için:
1. `script.js` dosyasını açın
2. `menuData` dizisini düzenleyin
3. Dosyayı kaydedin
4. Tarayıcıyı yenileyin (F5)

## 💡 İpuçları

- Ürün resimlerini yüksek kalitede seçin
- Açıklamaları kısa ve çekici tutun
- Fiyatları güncel tutun
- Kategorileri organize tutun
- Mobil cihazlarda önceden test edin

## 📞 Destek

Sorularınız varsa veya sorun yaşıyorsanız:
1. Tarayıcı konsolunu açın (F12)
2. Hata mesajlarını kontrol edin
3. JavaScript dosyalarının doğru yüklendiğini kontrol edin

## ⚖️ Lisans

Bu proje açık kaynaklıdır ve serbestçe kullanılabilir.

---

**Happy pastry selling! 🧁**
