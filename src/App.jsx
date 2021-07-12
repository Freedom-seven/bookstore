import React, { useState } from 'react';
import BookStore from './Components/BookStore';
import BookStoreForm from './Components/BookStoreForm';

const App = (props) => {
  const [bookstore, setBookstore] = useState({
    bookStore: [
      {
        title: "Programmer",
        author: "Freedom",
        description: "Discover your hidden Talent"
      },
      {
        title: "Coding",
        author: "Randy",
        description: "Lrean to CODE the right way"
      },
      {
        title: "LIFE",
        author: "Orlando",
        description: "LIFE as a DEVELOPER"
      }
    ]
  });


  const bookStore = bookstore.bookStore.map((bookstore, index) => {
    return (
      <BookStore bookstore={bookstore} key={index} />
    )
  });
  return (
    <div>
      <BookStoreForm />
      {bookStore}
    </div>
  );
}

export default App;
