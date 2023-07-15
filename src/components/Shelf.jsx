import {Book} from "./Book.jsx";
import '../style.css';

export const Shelf = ({books, header, onUpdateStatus}) => {
  return (
      <>
        <h2>{header}</h2>
        <div className="books-wrapper">
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              onUpdateStatus={onUpdateStatus}
              status={book.status}
            />
          ))}
        </div>
      </>
  )
}
