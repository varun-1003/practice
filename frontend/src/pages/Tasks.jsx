import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import TaskForm from "../components/TaskForm";

const STORAGE_KEY = "studyTasks";
const defaultTasks = [
  { id: 1, title: "DBMS Assignment", subject: "DBMS", completed: true },
  { id: 2, title: "Java Practice", subject: "Java", completed: false },
  { id: 3, title: "Python Revision", subject: "Python", completed: false },
  { id: 4, title: "Mathematics", subject: "Mathematics", completed: true }
];

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskDetails) {
    const newTask = {
      id: Date.now(),
      ...taskDetails,
      completed: false
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setShowForm(false);
  }

  function toggleComplete(taskId) {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )));
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="tasks-page">
      <div className="tasks-container">
        <header className="tasks-header">
          <div>
            <p className="eyebrow">Study planner</p>
            <h1>My Tasks</h1>
            <p>Manage your study tasks.</p>
          </div>
          <button className="primary-button add-task-button" type="button" onClick={() => setShowForm((isOpen) => !isOpen)}>
            + Add Task
          </button>
        </header>

        {showForm && <TaskForm onAddTask={addTask} onCancel={() => setShowForm(false)} />}

        <div className="tasks-toolbar">
          <h2>{filter === "all" ? "All tasks" : `${filter[0].toUpperCase()}${filter.slice(1)} tasks`}</h2>
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>

        <section className="task-list" aria-live="polite">
          {visibleTasks.length > 0 ? visibleTasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggleComplete={toggleComplete} onDelete={deleteTask} />
          )) : <p className="empty-state">No tasks in this view.</p>}
        </section>
      </div>
    </main>
  );
}

export default Tasks;