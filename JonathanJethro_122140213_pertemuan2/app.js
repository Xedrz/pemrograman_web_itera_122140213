// Class untuk merepresentasikan objek Task
class Task {
    constructor(id, name, deadline, priority) {
      this.id = id;
      this.name = name;
      this.deadline = deadline;
      this.priority = priority;
    }
  }
  
  // Variabel global
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  // Fungsi untuk menyimpan data ke localStorage
  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Fungsi untuk merender daftar tugas
  const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div>${task.name} | Deadline: ${task.deadline} | Jenis Tugas: ${task.priority}</div>
        <button onclick="deleteTask('${task.id}')">Hapus</button>
      `;
      taskList.appendChild(li);
    });
  };
  
  // Fungsi untuk menambah tugas (Arrow Function)
  const addTask = (task) => {
    tasks.push(task);
    saveTasks();
    renderTasks();
  };
  
  // Fungsi untuk menghapus tugas (Arrow Function)
  const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  };
  
  // Event listener untuk form
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('taskName').value;
    const deadline = document.getElementById('taskDeadline').value;
    const priority = document.getElementById('taskPriority').value;
  
    // Simulasi proses asinkron (misalnya validasi server)
    await new Promise(resolve => setTimeout(resolve, 500));
  
    const newTask = new Task(Date.now().toString(), name, deadline, priority);
    addTask(newTask);
  
    // Reset form
    taskForm.reset();
  });
  
  // Render tugas saat halaman dimuat
  renderTasks();