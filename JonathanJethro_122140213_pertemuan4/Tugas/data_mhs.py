# Data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "23001", "nilai_uts": 75, "nilai_uas": 80, "nilai_tugas": 70},
    {"nama": "Budi", "nim": "23002", "nilai_uts": 65, "nilai_uas": 60, "nilai_tugas": 70},
    {"nama": "Citra", "nim": "23003", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
    {"nama": "Dina", "nim": "23004", "nilai_uts": 55, "nilai_uas": 50, "nilai_tugas": 60},
    {"nama": "Eka", "nim": "23005", "nilai_uts": 45, "nilai_uas": 40, "nilai_tugas": 50},
]

# Hitung nilai akhir dan tentukan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Tampilkan tabel
print("\nData Mahasiswa:")
print("-" * 80)
print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<10} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Akhir", "Grade"
))
print("-" * 80)
for mhs in mahasiswa:
    print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<10.2f} {:<6}".format(
        mhs["nama"], mhs["nim"], mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"], mhs["nilai_akhir"], mhs["grade"]
    ))

# Cari mahasiswa dengan nilai tertinggi dan terendah
nilai_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
nilai_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{nilai_tertinggi['nama']} (NIM: {nilai_tertinggi['nim']}), Nilai Akhir: {nilai_tertinggi['nilai_akhir']:.2f}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{nilai_terendah['nama']} (NIM: {nilai_terendah['nim']}), Nilai Akhir: {nilai_terendah['nilai_akhir']:.2f}")
