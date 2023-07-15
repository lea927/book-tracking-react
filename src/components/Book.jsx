import '../style.css';

export const Book = ({title, author, id, onUpdateStatus }) => {
  // will have book prop
  //  book has properties id, title, status, photo url (can come in later)

  const handleChange = (e) => {
    const { value } = e.target;
    onUpdateStatus(id, value);
  }

  return (
      <>
        <div className="book">
          <p>{title}</p>
          <p>{author}</p>
          <select onChange={handleChange} name="status" id="status-select">
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
