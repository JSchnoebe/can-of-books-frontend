import axios from 'axios';
import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    const SERVER = process.env.SERVER;
    let results = await axios.get(`http://localhost:3001/books`);
    let books = results.data;
    console.log(results.data);
    this.setState({ books });
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    const books = this.state.books;

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h1>Books!</h1>
        {books ? <ul>{books.map((book, idx) => (
          <p key={idx}>{book.title}</p>
        ))}</ul>: <p>Loading Books..</p>}
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      </>
    )
  }
}

export default BestBooks;
