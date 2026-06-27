import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import FilterBar from './components/FilterBar';
import './App.css';

const API = 'https://task-tracker-backend-97ck.onrender.com/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [filters, setFilters] = useState({ status: '', priority: '', sort: '' });

  const fetchTasks = useCallback(async () => {
    try {
      const params = {};
      if (filters.status) params.status = filters.status;
      if (filters.priority) params.priority = filters.priority;
      if (filters.sort) params.sort = filters.sort;
      const res = await axios.get(API, { params });
      setTasks(res.data);
    } catch {
      toast.error('Failed to fetch tasks');
    }
  }, [filters]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleSubmit = async (form) => {
    try {
      if (editTask) {
        await axios.put(`${API}/${editTask._id}`, form);
        toast.success('Task updated!');
        setEditTask(null);
      } else {
        await axios.post(API, form);
        toast.success('Task added!');
      }
      fetchTasks();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await axios.delete(`${API}/${id}`);
      toast.success('Task deleted!');
      fetchTasks();
    } catch {
      toast.error('Delete failed');
    }
  };

  const handleMarkComplete = async (id) => {
    try {
      await axios.put(`${API}/${id}`, { status: 'Completed' });
      toast.success('Task completed! 🎉');
      fetchTasks();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <header>
        <h1>Task Tracker</h1>
        <p>Manage your tasks efficiently</p>
      </header>
      <div className="container">
        <TaskForm
          onSubmit={handleSubmit}
          editTask={editTask}
          onCancel={() => setEditTask(null)}
        />
        <div className="tasks-section">
          <div className="summary-cards">
            <div className="summary-card pending">
              <span>📌</span>
              <div>
                <h3>{tasks.filter(t => t.status === 'Pending').length}</h3>
                <p>Pending</p>
              </div>
            </div>
            <div className="summary-card inprogress">
              <span>🔄</span>
              <div>
                <h3>{tasks.filter(t => t.status === 'In Progress').length}</h3>
                <p>In Progress</p>
              </div>
            </div>
            <div className="summary-card completed">
              <span>✅</span>
              <div>
                <h3>{tasks.filter(t => t.status === 'Completed').length}</h3>
                <p>Completed</p>
              </div>
            </div>
          </div>
          <FilterBar filters={filters} onChange={handleFilterChange} />
          <p className="task-count">{tasks.length} task(s) found</p>
          <div className="tasks-grid">
            {tasks.length === 0
              ? <p className="no-tasks">No tasks yet. Add one!</p>
              : tasks.map(task => (
                  <TaskCard
                    key={task._id}
                    task={task}
                    onEdit={setEditTask}
                    onDelete={handleDelete}
                    onMarkComplete={handleMarkComplete}
                  />
                ))
            }
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;