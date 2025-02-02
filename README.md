# Nusantara Data Indonesia App
Aplikasi ini dibuat sebagai penugasan dari tahap rekrutmen posisi Frontend Developer di Nusantara Data Indonesia.
## Cara Penggunaan Aplikasi
1. Jalankan perintah untuk menginstall dependensi dan menjalankan versi development dari aplikasi
    - npm install
    - npm run dev
2. Jalankan backend service Python Flask dengan menjalankan perintah sebagai berikut
    - python -m flask --app ./src/services/corsBypass.py run
3. Buka Aplikasi Web di browser dengan mengakses localhost:5173
4. Login dapat dilakukan dengan kredensial sebagai berikut :
    - email : admin@gmail.com
    - password : NQlpF5Rieap7QpclD^bP
5. Selanjutnya pengguna akan diarahkan ke homepage
## Teknologi Yang Digunakan
1. React JS
    - Aplikasi dibuat dengan framework React JS dengan Typescript untuk meningkatkan readability dari kode dengan menambahkan type-safe. React JS dipilih karena fleksibel dan cepat dalam membuat SPA.
2. Chart JS
    - Untuk menampilkan grafik vertical bar dan pie chart digunakan Chart JS. Library ini sudah disupport secara langsung oleh react dengan adanya react-chartjs library.
3. Python Flask
    - Sebuah backend service tambahan digunakan untuk mengatasi permasalahan CORS dari API endpoint yang disediakan. Pada API endpoint tersebut, digunakan konfigurasi yang tidak memperbolehkan CORS oleh karena itu dibuat service Flask untuk meneruskan request login dari aplikasi menuju ke API endpoint


