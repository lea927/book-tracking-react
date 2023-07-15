import {useState} from "react";
import {Shelf} from "./Shelf.jsx";

export const BookShelf = () => {
  const [books, setBooks] = useState([
        {
          id: 1,
          title: "The Great Gatsby",
          status: "in_progress",
          photo_url: "https://example.com/book1.jpg"
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          status: "not_started",
          photo_url: "https://example.com/book2.jpg"
        },
        {
          id: 3,
          title: "1984",
          status: "completed",
          photo_url: "https://example.com/book3.jpg"
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          status: "in_progress",
          photo_url: "https://example.com/book4.jpg"
        },
        {
          id: 5,
          title: "The Catcher in the Rye",
          status: "none",
          photo_url: "https://example.com/book5.jpg"
        }
      ]
  );

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
        <Shelf books={inProgressBooks} header={parseBookStatus('in_progress')}/>
        <Shelf books={upcomingBooks} header={parseBookStatus('not_started')}/>
        <Shelf books={completedBooks} header={parseBookStatus('completed')}/>
      </>
  )
}