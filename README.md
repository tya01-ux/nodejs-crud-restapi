# CRUD REST API menggunakan Node.js & MySQL

**Nama:** Fitria Ramaadhani
**NIM:** 24090088 
**Kelas:** 3C  

---

## Deskripsi Project
Project ini merupakan aplikasi REST API sederhana yang menerapkan operasi **CRUD (Create, Read, Update, Delete)** menggunakan **Node.js** dan **MySQL**.  

Aplikasi mengelola dua data utama, yaitu **kategori** dan **produk**, di mana setiap produk memiliki relasi dengan satu kategori.  
Struktur project dibuat terpisah antara routing, controller, dan konfigurasi database agar mudah dipahami dan dikembangkan.

---

## Teknologi yang Digunakan
- Node.js (JavaScript)
- Express.js
- MySQL
- dotenv
- nodemon

---

## Struktur Project
- `config/db.js` → Konfigurasi dan koneksi ke database MySQL  
- `controllers/` → Berisi logika CRUD untuk category, product, dan user  
- `routes/` → Menentukan endpoint API dan menghubungkannya ke controller  
- `node_modules/` → Folder dependensi Node.js  
- `.env` → Menyimpan konfigurasi environment dan data sensitif  
- `package.json` → Informasi project, dependensi, dan script  
- `package-lock.json` → Mengunci versi dependensi  
- `server.js` → File utama untuk menjalankan server Express  

---

## Konfigurasi Environment
Buat file `.env` di root project, lalu isi dengan:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=project_crud
