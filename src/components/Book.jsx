import '../style.css';

export const Book = ({title, author, id, onUpdateStatus, status }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onUpdateStatus(id, value);
  }

  return (
      <>
        <div className="book">
          <p>{title}</p>
          <p>{author}</p>
          <select onChange={handleChange} name="status" id="status-select" value={status}>
            <option value="">Move to...</option>
            <option value="in_progress">Currently Reading</option>
            <option value="not_started">Want to Read</option>
            <option value="completed">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </>
  )
}
