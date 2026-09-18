function TodayTask({ task }) {
  return (
    <li className="today-task">
      <span className={`status-icon ${task.completed ? 'completed' : ''}`} aria-hidden="true">
        {task.completed ? '✓' : '○'}
      </span>
      <span className="today-task-copy">
        <strong>{task.title}</strong>
        <span>{task.subject}</span>
      </span>
      <span className={`task-status ${task.completed ? 'completed' : ''}`}>
        {task.completed ? 'Completed' : 'Pending'}
      </span>
    </li>
  )
}

export default TodayTask