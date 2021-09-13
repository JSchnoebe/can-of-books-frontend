import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';

class App extends React.Component {
  state = { books: [] };

  async fetchBooks() {
    let apiUrl = '${process.env.SERVER}/books';
    try {
      let results = await axios.get(apiUrl);
      this.setState({ books: results.data });
    }
    catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Books</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
              {this.state.books.length > 0 &&
                <>
                  <h2>Books!</h2>
                  {this.state.books.map(book => (
                    <p key={book._id}>book.title</p>
                    ))}
                </>
                }
            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
              <p>I am Jaren</p>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }


  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
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
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
