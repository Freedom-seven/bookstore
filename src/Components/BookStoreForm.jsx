import React, { useState } from 'react';
import './BookStoreForm.css'

const BookStoreForm = (props) => {
    const [bookstoreForm, setBoostoreForm] = useState({
        title: "",
        author: "",
        description: ""
    });
    const handleChacge = (e) => {
       const target = e.target;
       const name = target.name;
       const value = target.value;

       setBoostoreForm({[name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBook(bookstoreForm);
        setBoostoreForm({
            title: "",
            author: "",
            description: ""
        })
    }
    return (
        <form onSubmit={handleSubmit} className="contactForm">
            <h1>LIBRARY</h1>
            <div>
                <label htmlFor="title">TITLE:</label> <br />
                <input className="inputField" type="text" name="title" value={bookstoreForm.title} onChange={handleChacge} placeholder="Enter the Title of the book" />
            </div>
            <div>
                <label htmlFor="author">AUTHOR:</label> <br />
                <input className="inputField" type="name" name="author" value={bookstoreForm.author} onChange={handleChacge} placeholder="Enter Author's name" />
            </div>
            <div>
                <label htmlFor="description">DESCRIPTION:</label> <br />
                <input className="inputField" type="text" name="description" value={bookstoreForm.description} onChange={handleChacge} placeholder="What is the book about" />
            </div>
            <div className="sub"><button className="submit">Add Book</button></div>
        </form>
    );
}

export default BookStoreForm;
