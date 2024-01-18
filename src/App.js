import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Login from './app/components/Login';
import SignUp from './app/components/SignUp';
import coursePage from './app/components/coursePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <div>
        <Link to="/login">Login</Link><br/>
        <Link to="/signup">SignUp</Link>
      
        </div>
       <Switch>
        <Route path="/" render={()=><div></div>} exact/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/coursePage" component={coursePage}/>
     



        </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
