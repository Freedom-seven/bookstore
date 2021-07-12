import React from 'react';

const BookStore = ({bookstore, index}) => {
    return (
        <div className="bookstore" key={index}>
        <h3>Title: {bookstore.title}</h3>
        <p>Author:<i> {bookstore.author}</i></p>
        <p>Description: {bookstore.description}</p>
      </div>
    )
}

export default BookStore;
