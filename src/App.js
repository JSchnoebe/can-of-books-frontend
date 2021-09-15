import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Book from './Book';
import axios from 'axios';
import CreateBook from './CreateBook';

const SERVER = 'http://localhost:3000';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {username: "JSchnoebelen", email:"jarenschnoebelen@yahoo.com" },
      books: [],
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
    let apiUrl = `${SERVER}/books`;
    let results = await axios.post(apiUrl, bookInfo);
    let newBook = results.data;
    console.log(newBook);
    this.setState({
      books: [newBook, ...this.state.books]
    })
    this.fetchBooks();
  }

  handleDelete = async bookId => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.delete(apiUrl);

    this.setState(state => ({
      books: state.books.filter(book => book._id !== bookId)
    }));
  }



  

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    console.log(this.state.books);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <h1>World of Books</h1>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
              <CreateBook onSave={this.handleSave} />
              {this.state.books.length > 0 &&
                <>
                <h2>Books!</h2>
                {this.state.books.map(book => (
                  <Book
                    key={book._id}
                    book={book}
                    onDelete={this.handleDelete}
                  />
                ))}
                </>
              }
              <BestBooks/>
            </Route>
            <Route path="/profile">
            <Profile/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
