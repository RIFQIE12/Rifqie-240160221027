### 1. Cek semua pengguna
GET http://localhost:3009/pengguna

### 2. Tambah pengguna
POST http://localhost:3009/pengguna
Content-Type: application/json

{
  "nim": "2021001",
  "nama": "Andi",
  "email": "andi@mail.com",
  "role": "mahasiswa"
}

### 3. Cek detail
GET http://localhost:3009/pengguna/2021001

### 4. Update nama
PATCH http://localhost:3009/pengguna/2021001
Content-Type: application/json

{
  "nama": "Andi Wijaya"
}

### 5. Hapus
DELETE http://localhost:3009/pengguna/2021001