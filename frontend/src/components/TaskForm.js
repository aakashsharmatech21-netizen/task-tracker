import { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask, onCancel }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'Pending',
    priority: 'Medium',
    dueDate: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editTask) {
      setForm({
        title: editTask.title || '',
        description: editTask.description || '',
        status: editTask.status || 'Pending',
        priority: editTask.priority || 'Medium',
        dueDate: editTask.dueDate ? editTask.dueDate.split('T')[0] : ''
      });
    }
  }, [editTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError('Title is required');
      return;
    }
    onSubmit(form);
    setForm({ title: '', description: '', status: 'Pending', priority: 'Medium', dueDate: '' });
  };

  return (
    <div className="form-container">
      <h2>{editTask ? 'Edit Task' : 'Add New Task'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title *"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description (optional)"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />
        <div className="form-buttons">
          <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
          {editTask && <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;