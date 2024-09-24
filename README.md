# Script Service Frontend
React tabanlı Script Service projesinin frontend uygulaması, kullanıcıların kayıt olmasını, giriş yapmasını, container oluşturmasını ve JavaScript kodlarını dinamik olarak yönetmesini sağlar. Uygulama, Tailwind CSS kullanılarak koyu mavi bir temayla tasarlanmıştır ve kullanıcı dostu bir arayüz sunar.

Canlı Demo: [Link](https://script-service-frontend.vercel.app/)

- İçindekiler
- Özellikler
- Kullanılan Teknolojiler
- Ekran Görüntüleri
- Başlarken
  - Ön Koşullar
  - Kurulum
  - Uygulamayı Çalıştırma
- Yapılandırma
- Kullanım
- Katkıda Bulunma
- Lisans
- İletişim

## Özellikler
- **Kullanıcı Doğrulama:** Güvenli kayıt ve giriş işlemleri.
- **Container Yönetimi:** Farklı script'ler için container oluşturma, düzenleme ve silme.
- **Script Düzenleme:** Her container için JavaScript kodlarını yazma ve güncelleme.
- **Dinamik Script Yükleme:** Kullanıcılara özel <script> etiketi ile script'leri sitelerine ekleme.
- **Duyarlı Tasarım:** Mobil uyumlu ve koyu mavi temalı arayüz.
- **Bildirimler:** Kullanıcı eylemleri için anlık geri bildirimler.

## Kullanılan Teknolojiler
- **React:** Kullanıcı arayüzleri oluşturmak için.
- **Tailwind CSS:** Stil vermek için utility-first CSS framework.
- **React Router:** Sayfalar arası yönlendirme.
- **Axios:** API istekleri için HTTP istemcisi.
- **React Hot Toast:** Bildirimler için.
- **JWT:** Kimlik doğrulama için JSON Web Token.
- **Vercel:** Frontend uygulamasını barındırmak için.

## Ekran Görüntüleri
Ana Sayfa (Giriş)
![image](https://github.com/user-attachments/assets/b5d9820f-b34f-4867-9ff3-bad890f308f1)

Dashboard
![image](https://github.com/user-attachments/assets/9d9f0c5a-54c2-42ab-b9b5-a60a93863bf6)

Script Düzenleyici
![image](https://github.com/user-attachments/assets/aba80a39-8350-4344-8ce9-8e3d62d76e84)

## Başlarken
### Ön Koşullar
- Node.js (v12 veya üzeri)
- npm veya yarn
## Kurulum
1. Depoyu klonlayın:

bash
```
git clone https://github.com/kullaniciadi/script-service-frontend.git
```
2. Proje dizinine gidin:

bash
```
cd script-service-frontend
```
## Bağımlılıkları yükleyin:

bash
```
npm install

# veya

yarn install
```
## Uygulamayı Çalıştırma
1. Geliştirme sunucusunu başlatın:

bash
```
npm start
# veya
yarn start
```
## Tarayıcınızda aşağıdaki adresi açın:

arduino
```
http://localhost:3000
```
## Yapılandırma
Frontend uygulaması, API istekleri için backend uygulamasının URL'sini ayarlamanızı gerektirir. Varsayılan olarak, deploy edilmiş backend URL'sini kullanacak şekilde yapılandırılmıştır. Backend'i yerel olarak veya farklı bir sunucuda çalıştırıyorsanız, API URL'sini güncellemeniz gerekir.

## 1. ```src/services/api.js``` dosyasında API URL'sini güncelleyin:

javascript
```
// src/services/api.js

const API_URL = 'https://sizin-backend-url.com/api'; // Backend URL'nizi güncelleyin

// Kalan kod...
```
## 2. Ortam Değişkenleri (Opsiyonel):

 Ortam değişkenlerini kullanarak API URL'sini yönetebilirsiniz.

- Proje dizininde bir .env dosyası oluşturun.

arduino
```

REACT_APP_API_URL=https://sizin-backend-url.com/api
```
- api.js dosyasını ortam değişkenini kullanacak şekilde güncelleyin:

javascript
```

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```
## Kullanım
1. Yeni Bir Hesap Oluşturun:

- Kayıt sayfasına gidin.
- Kayıt formunu doldurun ve gönderin.
2. Giriş Yapın:

- Kayıt olduğunuz e-posta ve şifre ile giriş yapın.
3. Yeni Container Oluşturun:

- Dashboard'da "Yeni Container Oluştur" butonuna tıklayın.
- Container için bir isim girin.
4. Script İçeriğini Düzenleyin:

- Container düzenleyicisinde JavaScript kodunuzu yazın veya yapıştırın.
- Değişikliklerinizi kaydedin.
5. Script'i Sitenize Ekleyin:

- Düzenleyiciden verilen <script> etiketini kopyalayın.
- Kendi sitenizin <head> etiketinin içine yapıştırın.
6. Dinamik Güncellemeler:

- Düzenleyicide yaptığınız her değişiklik sitenize gerçek zamanlı olarak yansır.
## Katkıda Bulunma
Katkılarınızı bekliyoruz! Lütfen aşağıdaki adımları izleyin:

1. Depoyu forklayın.

2. Yeni bir dal oluşturun:

bash
```
git checkout -b ozellik/SizinOzelliginiz
```
3. Değişikliklerinizi yapın ve commit edin:

bash
```
git commit -m "Mesajınızı ekleyin"
```
4. Dala gönderin:

bash
```
git push origin ozellik/SizinOzelliginiz
```
5. Bir pull isteği gönderin.

Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için LICENSE dosyasına bakabilirsiniz.

İletişim
E-posta: selmansahbudak1@gmail.com
GitHub: selman-s
Web Sitesi: https://selmansahbudak.com.tr
