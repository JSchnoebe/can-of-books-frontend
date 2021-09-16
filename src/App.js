import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginButton from './Login';
import LogoutButton from './LogoutButton';




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

    const { auth0 } = this.props;
    console.log(auth0);

    console.log(this.state.books);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <h1>World of Books</h1>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {auth0.isAuthenticated
            ? (
              <>
                Welcome Back, {auth0.user.nickname}
                <LogoutButton />
              </>
            )
            : <LoginButton />
          }
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

export default withAuth0(App);
