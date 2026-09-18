import { useTasks } from '../context/useTaskContext.js'

function SummaryCard({ label, value, detail, tone }) {
  return (
    <article className={`summary-card ${tone}`}>
      <p className="summary-label">{label}</p>
      <p className="summary-value">{value}</p>
      <p className="summary-detail">{detail}</p>
    </article>
  )
}

export function SummaryCards() {
  const { tasks } = useTasks()
  const completed = tasks.filter((task) => task.completed).length
  const total = tasks.length
  const pending = total - completed
  const completion = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="summary-grid">
      <SummaryCard label="Total Tasks" value={total} detail="Across all subjects" tone="blue" />
      <SummaryCard label="Completed" value={completed} detail="Nice work so far" tone="green" />
      <SummaryCard label="Pending" value={pending} detail="Ready for your focus" tone="orange" />
      <SummaryCard label="Completion" value={`${completion}%`} detail="Of your study plan" tone="violet" />
    </div>
  )
}

export default SummaryCard