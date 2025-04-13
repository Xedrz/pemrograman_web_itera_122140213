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
//Reset Data :
Menghapus semua data yang berada di daftar tugas.
//Simpan Data Secara Lokal :
Semua data tugas disimpan menggunakan localStorage sehingga tetap ada meskipun browser ditutup atau halaman direfresh.

ss aplikasi yang sudah jadi :
![image](https://github.com/user-attachments/assets/5ad82521-e7fd-41f2-a41e-f519bdc7f547)



Daftar fitur ES6+ yang diimplementasikan:
//let dan const :
Digunakan dalam javascript untuk mendeklarasikan variabel dengan cakupan blok (let) dan konstanta (const).
const taskManager = new TaskManager();
let today = new Date();

//Arrow Functions :
Digunakan untuk membuat fungsi anonim dengan sintaks yang lebih ringkas.
const addTask = () => {
  // Logika untuk menambahkan tugas
  };
const deleteTask = (id) => {
  taskManager.deleteTask(id);
  renderTasks();
};

//Template Literals :
Digunakan untuk membuat string dinamis dengan interpolasi variabel.
li.innerHTML = `
  <div>
    <strong>${task.name}</strong>
    <p><em>Deadline:</em> ${task.deadline}</p>
  </div>
`;

//Classes :
Digunakan untuk merepresentasikan objek Task dengan properti seperti id, name, deadline, dan priority.
class Task {
  constructor(id, name, deadline, type, completed = false) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.type = type;
    this.completed = completed;
  }
}
class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
    this.saveTasks();
  }
}

//Destructuring Assignment
Digunakan untuk mengekstrak nilai dari array atau objek ke dalam variabel terpisah.
const { id, name, deadline } = task;
console.log(`ID: ${id}, Nama: ${name}, Deadline: ${deadline}`);

Default Parameters
Digunakan untuk memberikan nilai default pada parameter fungsi jika tidak ada nilai yang diberikan.
constructor(id, name, deadline, type, completed = false) {
  this.completed = completed; // Nilai default: false
}

//Async/Await :
Digunakan untuk simulasi proses asinkron seperti validasi server.
const checkDeadlines = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Pengecekan deadline selesai.');
};

//Local Storage API :
localStorage.setItem('tasks', JSON.stringify(this.tasks));
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

