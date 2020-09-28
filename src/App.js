import React, { Component } from 'react';
import Accueil from './Component/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Resultat from './Component/Resultat';
import Carte from './Component/MyMap';





class App extends Component {
  render() {
  return (
    <Router>
    <Route exact path="/" component={Accueil}/>
    <Route exact path="/resultat/:id" component={Resultat}/>
    <Route exact path="/Map/:id" component={Carte}/>
    </Router>
  );
}
}
export default App;
