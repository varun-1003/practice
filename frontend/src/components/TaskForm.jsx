import { useState } from "react";

function TaskForm({ onAddTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    onAddTask({ title: title.trim(), subject: subject.trim() });
    setTitle("");
    setSubject("");
    setError("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2>Add a task</h2>
        {onCancel && (
          <button className="text-button" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
      <label htmlFor="task-title">Task title</label>
      <input
        id="task-title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          setError("");
        }}
        placeholder="e.g. DBMS Assignment"
      />
      <label htmlFor="task-subject">Subject</label>
      <input
        id="task-subject"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        placeholder="e.g. DBMS"
      />
      {error && <p className="form-error">{error}</p>}
      <button className="primary-button" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;