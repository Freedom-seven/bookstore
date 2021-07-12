import React, { useState } from 'react';

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
        setBoostoreForm({
            title: "",
            author: "",
            description: ""
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">TITLE:</label>
                <input type="text" name="title" value={bookstoreForm.title} onChange={handleChacge} placeholder="Enter the Title of the book" />
            </div>
            <div>
                <label htmlFor="author">AUTHOR:</label>
                <input type="text" name="author" value={bookstoreForm.author} onChange={handleChacge} placeholder="Enter Author" />
            </div>
            <div>
                <label htmlFor="description">DESCRIPTION:</label>
                <input type="text" name="description" value={bookstoreForm.description} onChange={handleChacge} placeholder="Write Description" />
            </div>
        </form>
    );
}

export default BookStoreForm;
