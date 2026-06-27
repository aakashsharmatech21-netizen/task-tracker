const priorityColors = {
  High: 'rgba(239,68,68,0.15)',
  Medium: 'rgba(251,146,60,0.15)',
  Low: 'rgba(74,222,128,0.15)'
};

const priorityText = {
  High: '#f87171',
  Medium: '#fb923c',
  Low: '#4ade80'
};

const statusColors = {
  Pending: 'rgba(255,255,255,0.08)',
  'In Progress': 'rgba(96,165,250,0.15)',
  Completed: 'rgba(74,222,128,0.15)'
};

const statusText = {
  Pending: 'rgba(255,255,255,0.5)',
  'In Progress': '#60a5fa',
  Completed: '#4ade80'
};

const TaskCard = ({ task, onEdit, onDelete, onMarkComplete }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3 style={{
          textDecoration: task.status === 'Completed' ? 'line-through' : 'none',
          opacity: task.status === 'Completed' ? 0.5 : 1
        }}>
          {task.title}
        </h3>
        <span
          className="priority-badge"
          style={{
            backgroundColor: priorityColors[task.priority],
            color: priorityText[task.priority]
          }}
        >
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="task-desc">{task.description}</p>
      )}

      <div className="task-meta">
        <span
          className="status-badge"
          style={{
            backgroundColor: statusColors[task.status],
            color: statusText[task.status]
          }}
        >
          {task.status}
        </span>
        {task.dueDate && (
          <span className="due-date">
            📅 {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>

      <div className="task-actions">
        {task.status !== 'Completed' && (
         <button onClick={() => onMarkComplete(task._id)} className="complete-btn">
                Done
                </button>
        )}
       <button onClick={() => onEdit(task)} className="edit-btn">
                Edit
                </button>
        <button onClick={() => onDelete(task._id)} className="delete-btn">
                Delete
                </button>
      </div>
    </div>
  );
};

export default TaskCard;