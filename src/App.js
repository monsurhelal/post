import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NOMatch from './components/notMatch/NOMatch';
import PostDetail from './components/postDetail/PostDetail';


function App() {


  return (
    <Router>
        <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/post/:postDetaials">
              <PostDetail></PostDetail>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NOMatch></NOMatch>
            </Route>



        </Switch>
    </Router>
  );
}

export default App;
