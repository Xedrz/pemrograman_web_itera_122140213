# pemrograman_web_itera_122140213

Aplikasi ini adalah Dashboard Tugas dan Jadwal Harian yang dirancang untuk membantu pengguna mengelola tugas-tugas secara efisien. Aplikasi ini memungkinkan pengguna untuk menambah, mengedit, menghapus, dan melihat daftar tugas dengan detail seperti nama tugas, deadline, dan prioritas. Semua data disimpan secara lokal menggunakan localStorage, sehingga tetap tersedia meskipun halaman direfresh.

Fitur Utama Aplikasi
//Tambah Tugas : 
Pengguna dapat menambahkan tugas baru dengan mengisi form yang mencakup nama tugas, deadline, dan jenis tugas (tugas biasa, tugas praktikum, tugas besar).
//Edit Tugas :
Pengguna dapat mengubah informasi tugas yang sudah ada (opsional, dapat diimplementasikan sebagai fitur tambahan).
//Hapus Tugas :
Pengguna dapat menghapus tugas yang sudah selesai atau tidak relevan.
//Lihat Daftar Tugas :
Daftar tugas ditampilkan secara dinamis dalam bentuk tabel atau daftar dengan informasi lengkap seperti nama, deadline, dan prioritas.
//Highlight Tugas Mendekati Deadline :
Tugas dengan deadline kurang dari 3 hari akan ditandai dengan warna latar belakang khusus untuk memberikan peringatan visual.
//Simpan Data Secara Lokal :
Semua data tugas disimpan menggunakan localStorage sehingga tetap ada meskipun browser ditutup atau halaman direfresh.

ss aplikasi yang sudah jadi :
![image](https://github.com/user-attachments/assets/820b0c8d-62c7-409b-9a69-bfb58c993274)

Daftar fitur ES6+ yang diimplementasikan:
//let dan const :
Digunakan dalam javascript untuk mendeklarasikan variabel dengan cakupan blok (let) dan konstanta (const).
const taskForm = document.getElementById('taskForm');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Arrow Functions :
Digunakan untuk membuat fungsi anonim dengan sintaks yang lebih ringkas.
const addTask = (task) => {
  tasks.push(task);
  saveTasks();
  renderTasks();
};

//Template Literals :
Digunakan untuk membuat string dinamis dengan interpolasi variabel.
li.innerHTML = `
  <div>
    <strong>${task.name}</strong><br>
    Deadline: ${task.deadline} | Prioritas: ${task.priority}
  </div>
  <button onclick="deleteTask('${task.id}')">Hapus</button>
`;

//Classes :
Digunakan untuk merepresentasikan objek Task dengan properti seperti id, name, deadline, dan priority.
class Task {
  constructor(id, name, deadline, priority) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.priority = priority;
  }
}

//Async/Await :
Digunakan untuk simulasi proses asinkron seperti validasi server.
await new Promise(resolve => setTimeout(resolve, 500));

//Local Storage API :
Meskipun bukan fitur ES6+, tetap digunakan untuk menyimpan data secara lokal.
localStorage.setItem('tasks', JSON.stringify(tasks));

