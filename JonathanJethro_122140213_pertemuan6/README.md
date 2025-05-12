# Pyramid Matakuliah API 🐍

## 🧪 Instalasi & Menjalankan Server

```bash
# Clone repositori
git clone https://github.com/username/pyramid-matakuliah-api.git
cd pyramid-matakuliah-api

# Buat virtual environment
python -m venv env
source env/bin/activate  # atau env\Scripts\activate di Windows

# Install dependensi
pip install -e .

# Setup database PostgreSQL (ganti sesuai konfigurasi)
# Pastikan PostgreSQL aktif dan database sudah dibuat, misalnya: db_matakuliah

# Edit development.ini
nano development.ini
# Ubah bagian:
# sqlalchemy.url = postgresql://username:password@localhost:5432/db_matakuliah

# Inisialisasi migrasi database dengan Alembic
alembic -c development.ini revision --autogenerate -m "create matakuliah table"
alembic -c development.ini upgrade head

# Jalankan server
pserve development.ini --reload
# Akses di: http://127.0.0.1:6543
```
