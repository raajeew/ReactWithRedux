import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component{
    
    render(){
        return(
            <header className="app-header">
                <div className="app-logo">
                    <a>React width Redux</a>
                </div>

                <div className="nav-wrap">
                    <ul className="nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">Products</Link>
                    </li>
                    </ul>
                </div> 

                <div className="app-snapshot">
                    <span>
                    <Link to="/cart">Cart: {this.props.cart.length} items</Link>
                    </span>
                </div> 
                </header>
        );
    }
}

const mapStateToProps = state =>{
    return {
      count : state.count,
      cart: state.cart
    };
  }

export default connect(mapStateToProps)(Header);