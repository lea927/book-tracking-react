import {Book} from "./Book.jsx";

export const Shelf = ({books, header, onUpdateStatus}) => {
  return (
      <>
        <h2>{header}</h2>
        {books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </>
  )
}
