## 💻 CodeLearn - Gelişmiş Yazılım Eğitim ve Hız Testi Platformu
CodeLearn, kullanıcıların hem klavye hızlarını artırmayı hem de yazılım terminolojisini (Linux, Siber Güvenlik, Kodlama vb.) öğrenmelerini amaçlayan interaktif ve modüler bir web uygulamasıdır. Standart hız testi araçlarının aksine, kullanıcıya yazdığı her teknik komutun işlevini anlık olarak öğretmeyi hedefler.

<hr style="border: 50px solid #4CAF50; margin: 20px 0;">

🌐 Canlı Demo: rencberakman.com/hiztesti

## 🚀 Proje Mimarisi ve Teknik Detaylar Bu proje, modern web geliştirme standartlarına uygun olarak "Separation of Concerns" (İlgi Alanlarının Ayrımı) prensibiyle inşa edilmiştir.

Mimari: Modüler Javascript (ES6 Modules) yapısı ile controller ve data katmanları birbirinden ayrılmıştır.

Tasarım: CSS3 Değişkenleri (Variables), Flexbox ve Grid sistemleri kullanılarak Glassmorphism UI estetiği uygulanmıştır.

Veri Yapısı: JSON tabanlı, 10 farklı kategoride binlerce teknik terimi içeren genişletilebilir veri seti.

Teknolojiler: Vanilla Javascript (Frameworksüz Saf JS), HTML5, CSS3.

⚠️ Önemli: Neden Sunucu Gerektirir? Proje, kod okunabilirliği ve yönetilebilirliği açısından import/export yapılarını kullanan modüler bir sisteme sahiptir. Modern tarayıcıların CORS (Cross-Origin Resource Sharing) güvenlik politikaları gereği, ES6 modülleri yerel dosya sistemi (file://) üzerinden doğrudan çalıştırılamaz. Projeyi yerel bilgisayarınızda denemek için bir yerel sunucu ortamına (XAMPP, VS Code Live Server vb.) ihtiyaç vardır.

<hr style="border: 50px solid #4CAF50; margin: 20px 0;">

## 📁 Dosya Yapısı
```bash

CodeLearnPro/
│
├── index.html          # Ana giriş sayfası ve UI iskeleti
├── css/
│   └── style.css       # Görsel tasarım, cam efekti ve animasyonlar
├── js/
│   ├── data.js         # Teknik kategorilere ait geniş veri seti
│   ├── GameEngine.js   # Çekirdek mantık, WPM ve istatistik motoru
│   └── main.js         # DOM yönetimi ve olay dinleyicileri (Controller)
└── docs/               # Sistem analizi, sınıf diyagramları ve dökümantasyonlar
🛠️ Kurulum ve Çalıştırma Talimatları Projeyi yerel ortamınızda çalıştırmak için aşağıdaki yöntemlerden birini kullanabilirsiniz:

Yöntem 1: XAMPP / WAMP / Apache (Önerilen)

Proje klasörünü kopyalayın.

XAMPP kurulu ise C:\xampp\htdocs\ dizininin içine yapıştırın.

XAMPP Kontrol Panelinden Apache sunucusunu başlatın.

Tarayıcıya şu adresi yazın: http://localhost/CodeLearnPro/

Yöntem 2: VS Code Live Server

Projeyi VS Code ile açın.

Sağ alt köşedeki "Go Live" butonuna tıklayın veya index.html üzerindeyken sağ tıklayıp "Open with Live Server" seçeneğini seçin.

<hr style="border: 50px solid #4CAF50; margin: 20px 0;">

## ✨ Öne Çıkan Özellikler
Bağlamsal Öğrenme: Yazılan her komutun ne işe yaradığı ekranın altında anlık olarak açıklanır.

Geniş Müfredat: Linux Terminalinden DevOps araçlarına, SQL'den Siber Güvenliğe kadar geniş kategori seçeneği.

Performans Analizi: Yazım sonunda doğruluk oranı ve WPM bazlı detaylı başarı raporu.

Eğitim Dokümanları: docs/ klasörü içerisinde projenin tüm analiz ve tasarım süreçlerine ait akademik dökümanlar yer almaktadır.

<hr style="border: 50px solid #4CAF50; margin: 20px 0;">

## ✍️ Geliştirici Notu
CodeLearn, bir yazılımcının klavye hızının, düşünce hızıyla eşgüdümlü olması gerektiği vizyonuyla geliştirilmiştir. Bu uygulama sadece hızınızı değil, teknik vizyonunuzu da geliştirir.
