function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = ["all", "pending", "completed"];

  return (
    <div className="task-filter" aria-label="Filter tasks">
      {filters.map((filter) => (
        <button
          className={currentFilter === filter ? "filter-button active" : "filter-button"}
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
        >
          {filter[0].toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;