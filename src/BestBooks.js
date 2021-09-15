import axios from 'axios';
import React from 'react';
import Book from './Book';
import CreateBook from './CreateBook';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }


  async fetchBooks() {
    let apiUrl = `${SERVER}/books`;
    try {
      let results = await axios.get(apiUrl);
      this.setState({ books: results.data });
    }
    catch (err) {
      console.log(err);
    }
  }


  
  handleSave = async bookInfo => {
    console.log('this is the book info', bookInfo);
    let apiUrl = `${SERVER}/books`;
    let results = await axios.post(apiUrl, bookInfo);
    let newBook = results.data;
    console.log('this is a new book', newBook);
    this.setState({
      books: [newBook, ...this.state.books]
    })
    this.fetchBooks();
  }

  handleUpdate = async (bookId, bookInfo) => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.put(apiUrl, bookInfo);

    this.fetchBooks();
  }

  handleDelete = async bookId => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.delete(apiUrl);

    this.setState(state => ({
      books: state.books.filter(book => book._id !== bookId)
    }));
  }

  

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    const books = this.state.books;
    console.log('these are the books', books);

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <CreateBook onSave={this.handleSave} />
              {this.state.books.length > 0 &&
                <>
                <h2>Books!</h2>
                {this.state.books.map(book => (
                  <Book
                    key={book._id}
                    book={book}
                    onDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                    onSave={this.handleSave}
                  />
                ))}
                </>
              }

      </>
    )
  }
}

export default BestBooks;
