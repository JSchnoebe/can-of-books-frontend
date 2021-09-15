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




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {username: "JSchnoebelen", email:"jarenschnoebelen@yahoo.com" },
      books: [],
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
