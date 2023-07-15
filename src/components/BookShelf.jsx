import {useState} from "react";
import {Shelf} from "./Shelf.jsx";
import '../style.css';

export const BookShelf = () => {
  const [books, setBooks] = useState([
        {
          "id": 1,
          "title": "The Great Gatsby",
          "status": "in_progress",
          "photo_url": "https://example.com/book1.jpg",
          "author": "F. Scott Fitzgerald"
        },
        {
          "id": 2,
          "title": "To Kill a Mockingbird",
          "status": "not_started",
          "photo_url": "https://example.com/book2.jpg",
          "author": "Harper Lee"
        },
        {
          "id": 3,
          "title": "1984",
          "status": "completed",
          "photo_url": "https://example.com/book3.jpg",
          "author": "George Orwell"
        },
        {
          "id": 4,
          "title": "Pride and Prejudice",
          "status": "in_progress",
          "photo_url": "https://example.com/book4.jpg",
          "author": "Jane Austen"
        },
        {
          "id": 5,
          "title": "The Catcher in the Rye",
          "status": "none",
          "photo_url": "https://example.com/book5.jpg",
          "author": "J.D. Salinger"
        }
      ]
  );

  const updateBookStatus = (id, newStatus) => {
    const updateBooks = prevBooks => {
      const updatedBooks = prevBooks.map(book => {
        if (book.id.toString().toLowerCase() === id.toString().toLowerCase()) {
          return {...book, status: newStatus};
        }
        return book;
      })
      return updatedBooks;
    }
    setBooks(updateBooks);
  };

  const filterBooks = (status) => {
    return books.filter(book => book.status.toLowerCase() === status.toLowerCase());
  }

  const inProgressBooks = filterBooks('in_progress');
  const upcomingBooks = filterBooks('not_started');
  const completedBooks = filterBooks('completed');

  const parseBookStatus = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'Read';
      case 'in_progress':
        return 'Currently Reading';
      default:
        return 'Want to Read';
    }
  };

  return(
      <>
        <div className="bookshelf-wrapper">
          <header>
            <div className="header">
              <h1>My Reads</h1>
            </div>
          </header>
          <Shelf
            books={inProgressBooks}
            header={parseBookStatus('in_progress')}
            onUpdateStatus={updateBookStatus}
          />
          <Shelf
            books={upcomingBooks}
            header={parseBookStatus('not_started')}
            onUpdateStatus={updateBookStatus}/>
          <Shelf
            books={completedBooks}
            header={parseBookStatus('completed')}
            onUpdateStatus={updateBookStatus}
          />
        </div>
      </>
  )
}
