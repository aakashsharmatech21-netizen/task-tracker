const FilterBar = ({ filters, onChange }) => {
  return (
    <div className="filter-bar">
      <select name="status" value={filters.status} onChange={onChange}>
        <option value="">All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select name="priority" value={filters.priority} onChange={onChange}>
        <option value="">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select name="sort" value={filters.sort} onChange={onChange}>
        <option value="">Sort: Latest</option>
        <option value="dueDate">Sort: Due Date</option>
        <option value="priority">Sort: Priority</option>
      </select>
    </div>
  );
};

export default FilterBar;