# main.py

# Cara 1: Import seluruh modul
import math_operations

# Cara 2: Import fungsi tertentu saja
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Gunakan fungsi geometri
print("=== Perhitungan Geometri ===")
print(f"Luas Persegi (sisi 5)             : {math_operations.luas_persegi(5)}")
print(f"Keliling Persegi (sisi 5)         : {math_operations.keliling_persegi(5)}")
print(f"Luas Persegi Panjang (5x3)        : {math_operations.luas_persegi_panjang(5, 3)}")
print(f"Keliling Persegi Panjang (5x3)    : {math_operations.keliling_persegi_panjang(5, 3)}")
print(f"Luas Lingkaran (r=7)              : {math_operations.luas_lingkaran(7):.2f}")
print(f"Keliling Lingkaran (r=7)          : {math_operations.keliling_lingkaran(7):.2f}")

# Gunakan fungsi suhu
print("\n=== Konversi Suhu ===")
c = 25
print(f"{c}°C ke Fahrenheit: {celsius_ke_fahrenheit(c):.2f}°F")
print(f"{c}°C ke Kelvin    : {celsius_ke_kelvin(c):.2f}K")
