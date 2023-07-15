export const Book = ({title, author}) => {
  // will have book prop
  //  book has properties id, title, status, photo url (can come in later)

  // have dropdown element/component - will trigger state change onSelect
  return (
      <>
        <p>{title}</p>
        <p>{author}</p>
        <select name="status" id="status-select">
          <option value="">Move to...</option>
          <option value="in_progress">Currently Reading</option>
          <option value="not_started">Want to Read</option>
          <option value="compeleted">Read</option>
          <option value="none">None</option>
        </select>
      </>
  )
}
