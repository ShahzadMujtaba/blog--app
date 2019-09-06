import React from 'react';
import './App.css';
import Nav from './Nav';
import Addpost from './Addpost';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Blog from './Blog';

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
        <Route  path="/post" component={Addpost} />
        <Route path="/blog" component={Blog} />
      </Switch>
      </div>
    </Router>
  );
}

const Home= () =>(
   <h3>This is home page</h3>
)
export default App;
