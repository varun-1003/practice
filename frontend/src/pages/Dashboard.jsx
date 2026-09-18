import { useNavigate } from 'react-router-dom'
import { SummaryCards } from '../components/SummaryCard.jsx'
import TodayTask from '../components/TodayTask.jsx'
import { useTasks } from '../context/useTaskContext.js'

function Dashboard() {
  const navigate = useNavigate()
  const { tasks } = useTasks()
  const todayTasks = tasks.slice(0, 3)

  return (
    <main className="dashboard">
      <section className="dashboard-hero" aria-labelledby="dashboard-title">
        <div>
          <p className="eyebrow">Your learning workspace</p>
          <h1 id="dashboard-title">Study Planner</h1>
          <p className="hero-copy">Stay organized and keep your study progress on track.</p>
        </div>
        <button className="primary-button" type="button" onClick={() => navigate('/tasks')}>
          View Tasks <span aria-hidden="true">→</span>
        </button>
      </section>

      <section aria-labelledby="summary-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">At a glance</p>
            <h2 id="summary-title">Your progress</h2>
          </div>
        </div>
        <SummaryCards />
      </section>

      <section className="today-section" aria-labelledby="today-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Keep moving</p>
            <h2 id="today-title">Today&apos;s Study</h2>
          </div>
          <span className="task-count">{todayTasks.length} focus items</span>
        </div>
        <ul className="today-list">
          {todayTasks.length > 0 ? todayTasks.map((task) => <TodayTask key={task.id} task={task} />) : <li className="empty-state">No study tasks yet. Add one from the Tasks page.</li>}
        </ul>
      </section>
    </main>
  )
}

export default Dashboard