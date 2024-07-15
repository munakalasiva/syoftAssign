import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './index.css';

const App=()=>{

 return(
    <Router>
        <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            
        </Switch>
     </Router>
     )

}
export default App
  
  


