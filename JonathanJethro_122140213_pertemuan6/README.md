# Pyramid Matakuliah API 

## Instalasi & Menjalankan Server


# Clone repositori
```
git clone https://github.com/Xedrz/pemrograman_web_itera_122140213.git
```
```
cd pemrograman_web_itera_122140213
```
```
cd JonathanJethro_122140213_pertemuan6
```
# Buat virtual environment
```
python -m venv venv
```
```
source venv/bin/activate  # atau venv\Scripts\activate di Windows
```
# Install dependensi
```
pip install -e .
```
# Setup database PostgreSQL (ganti sesuai konfigurasi)
Pastikan PostgreSQL aktif dan database sudah dibuat, misalnya: pyramid_mahasiswa

# Edit development.ini
```
nano development.ini
```
Ubah bagian:
sqlalchemy.url = postgresql://username:password@localhost:5432/pyramid_mahasiswa
# Inisialisasi migrasi database dengan Alembic
```
alembic -c development.ini revision --autogenerate -m "create matakuliah table"
alembic -c development.ini upgrade head
```
# Jalankan server
pserve development.ini --reload
# Akses di: http://127.0.0.1:6543

# GET semua data matakuliah
```
curl http://127.0.0.1:6543/matakuliah
```
# POST - tambah data matakuliah
```
curl -X POST http://127.0.0.1:6543/matakuliah \
-H "Content-Type: application/json" \
-d '{"kode_mk": "IF123", "nama_mk": "Pemrograman Web", "sks": 3, "semester": 4}'
```
# PUT - update data matakuliah ID 1
```
curl -X PUT http://127.0.0.1:6543/matakuliah/1 \
-H "Content-Type: application/json" \
-d '{"nama_mk": "Pemrograman Web Lanjut"}'
```
# DELETE - hapus data matakuliah ID 1
```
curl -X DELETE http://127.0.0.1:6543/matakuliah/1
```
