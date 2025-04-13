class Task {
  constructor(id, name, deadline, type, completed = false) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.type = type; // Jenis tugas: biasa, praktikum, besar
    this.completed = completed;
  }
}

class TaskManager {
  constructor() {
    // Ambil data dari localStorage dan validasi
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Validasi setiap task dan pastikan memiliki semua properti yang diperlukan
    this.tasks = storedTasks.filter(task => 
      task.id && task.name && task.deadline && task.type
    ).map(task => {
      // Pastikan setiap task memiliki properti 'type'
      if (!task.type) {
        task.type = 'biasa'; // Default ke 'biasa' jika tidak ada
      }
      return task;
    });
  }

  addTask(task) {
    // Pastikan tidak ada duplikat sebelum menambahkan
    if (!this.tasks.some(t => t.id === task.id)) {
      this.tasks.push(task);
      this.saveTasks();
    }
  }

  deleteTask(id) {
    console.log('Menghapus tugas dengan ID:', id); // Debugging
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  toggleComplete(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.completed = !task.completed;
    this.saveTasks();
  }

  editTask(id, newName, newDeadline, newType) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.name = newName;
      task.deadline = newDeadline;
      task.type = newType;
    }
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

const taskManager = new TaskManager();

document.addEventListener('DOMContentLoaded', () => {
  // Pastikan event listener hanya ditambahkan setelah DOM sepenuhnya dimuat
  document.getElementById('taskForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
  });

  // Event listener untuk tombol reset data
  document.getElementById('resetData').addEventListener('click', () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua data tugas?')) {
      localStorage.removeItem('tasks'); // Hapus data dari localStorage
      taskManager.tasks = []; // Kosongkan daftar tugas
      renderTasks(); // Render ulang daftar tugas
      alert('Data tugas berhasil direset!');
    }
  });

  // Render tasks saat halaman dimuat
  renderTasks();
});

const addTask = () => {
  const name = document.getElementById('taskName').value.trim();
  const deadline = document.getElementById('taskDeadline').value;
  const type = document.getElementById('taskType').value;

  if (!name || !deadline || !type) {
    alert('Semua field harus diisi!');
    return;
  }

  const newTask = new Task(Date.now(), name, deadline, type);
  taskManager.addTask(newTask);
  renderTasks();
  document.getElementById('taskForm').reset();
};

const deleteTask = (id) => {
  taskManager.deleteTask(id);
  renderTasks();
};

const toggleComplete = (id) => {
  taskManager.toggleComplete(id);
  renderTasks();
};

const editTask = (id) => {
  const task = taskManager.tasks.find(task => task.id === id);
  if (!task) return;

  const newName = prompt('Edit Nama Tugas:', task.name);
  const newDeadline = prompt('Edit Deadline:', task.deadline);
  const newType = prompt('Edit Jenis Tugas (biasa/praktikum/besar):', task.type);

  if (newName && newDeadline && ['biasa', 'praktikum', 'besar'].includes(newType)) {
    taskManager.editTask(id, newName, newDeadline, newType);
    renderTasks();
  } else {
    alert('Input tidak valid!');
  }
};

const renderTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  console.log('Data tugas saat ini:', taskManager.tasks); // Debugging

  const today = new Date();

  taskManager.tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.type;

    // Cek apakah deadline mendekati hari ini (kurang dari 1 hari)
    const deadlineDate = new Date(task.deadline);
    if (deadlineDate <= today) {
      li.classList.add('near-deadline');
    }

    li.innerHTML = `
      <div>
        <strong>${task.name}</strong>
        <p><em>Deadline:</em> ${task.deadline}</p>
        <p><em>Jenis Tugas:</em> ${task.type.charAt(0).toUpperCase() + task.type.slice(1)}</p>
      </div>
      <div>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Hapus</button>
        <button onclick="toggleComplete(${task.id})">${task.completed ? 'Belum Selesai' : 'Selesai'}</button>
      </div>
    `;
    taskList.appendChild(li);
  });
};