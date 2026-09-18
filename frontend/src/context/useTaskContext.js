import { useContext } from 'react'
import { TaskContext } from './taskContextValue.js'

export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}
