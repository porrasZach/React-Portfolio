import React from 'react';
import ReactDOM from 'react-dom';
import  { Home, Projects, Navbar, Contact, Background, About_Card_Left, About_Card_Right } from './Components'
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Background />
        <Navbar />
        <Home />
        <Route exact path='/Projects'>
          <Projects />
        </Route>
        <Route exact path='/About'>
          <About_Card_Left />
          <About_Card_Right />
        </Route>
        <Route exact path='/Contact'>
          <Contact />
        </Route>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
