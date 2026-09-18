import { useEffect, useState } from 'react'
import defaultTasks from '../data/tasks.js'
import { TaskContext } from './taskContextValue.js'

const STORAGE_KEY = 'study-planner-tasks'
function getInitialTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY)
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks
  } catch {
    return defaultTasks
  }
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(getInitialTasks)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => setTasks((currentTasks) => [...currentTasks, task])
  const deleteTask = (taskId) => setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  const toggleTask = (taskId) => setTasks((currentTasks) => currentTasks.map((task) => (
    task.id === taskId ? { ...task, completed: !task.completed } : task
  )))
  const updateTask = (updatedTask) => setTasks((currentTasks) => currentTasks.map((task) => (
    task.id === updatedTask.id ? updatedTask : task
  )))

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}

