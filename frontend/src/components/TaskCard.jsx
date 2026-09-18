function TaskCard({ task, onToggleComplete, onDelete }) {
  return (
    <article className={`task-card ${task.completed ? "is-complete" : ""}`}>
      <div className="task-card-content">
        <h2>{task.title}</h2>
        <p>{task.subject || "No subject"}</p>
      </div>
      <span className={`task-status ${task.completed ? "completed" : "pending"}`}>
        {task.completed ? "Completed" : "Pending"}
      </span>
      <div className="task-actions">
        <button className="secondary-button" type="button" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>
        <button className="delete-button" type="button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;