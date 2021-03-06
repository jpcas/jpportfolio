import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import NavBar from './components/NavBar';
import Contact from './Pages/Contact';

const App = () => (
  <BrowserRouter>
  <NavBar />
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/technologies" component={Technologies} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
  </BrowserRouter>
  );

export default App;
