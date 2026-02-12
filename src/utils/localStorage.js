export const loadTasks = () => {
  try {
    const saved = localStorage.getItem('kanban-tasks');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

export const saveTasks = (tasks) => {
  localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
};