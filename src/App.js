import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <Router basename={'/reactwithredux'}>
      <div className="App">
        <Header />

        <div className="content-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
        </div>

        <footer className="app-footer">
          <div>
            &copy; Rajeev Ranjan
          </div>
        </footer>
    </div>
    </Router>
  );
}

export default App;
