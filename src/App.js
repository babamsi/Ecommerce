import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Signinup from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.util'

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path="/signin" component={Signinup} />
        </Switch>
      </div>
    );

  }
  
}

export default App;
