class Task {
    constructor(id, description, completed = false) {
      this.id = id;
      this.description = description;
      this.completed = completed;
    }
  
    toggleCompletion() {
      this.completed = !this.completed;
    }
  }
  
  class Tasks {
    constructor() {
      this.taskList = [];
    }
  
    addTask(description) {
      const newTask = new Task(this.taskList.length + 1, description);
      this.taskList.push(newTask);
      return newTask;
    }
  
    removeTask(taskId) {
      const index = this.taskList.findIndex(task => task.id === taskId);
      if (index !== -1) {
        this.taskList.splice(index, 1);
        console.log(`Task ${taskId} removed.`);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  
    displayTasks() {
      console.log('Tasks:');
      this.taskList.forEach(task => {
        console.log(`[${task.completed ? 'X' : ' '}] ${task.id}. ${task.description}`);
      });
    }
  }
  
  // Example usage
  const taskManager = new Tasks();
  
  const task1 = taskManager.addTask('Complete homework');
  const task2 = taskManager.addTask('Read a book');
  const task3 = taskManager.addTask('Go for a run');
  
  taskManager.displayTasks();
  
  task2.toggleCompletion();
  taskManager.displayTasks();
  
  taskManager.removeTask(1);
  taskManager.displayTasks();
  