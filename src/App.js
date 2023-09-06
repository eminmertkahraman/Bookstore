import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Main from './pages/main';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Books from './pages/books';
import React from 'react';
import Authors from './pages/authors';
import About from './pages/about';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/books" component={Books}></Route>
          <Route path="/authors" component={Authors}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
