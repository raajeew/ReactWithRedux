import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import './Home.css'
import {connect} from 'react-redux';

class Home extends Component{

  render(){
      return(
        <div>
            <h3>Home</h3>
            <h5>
              <Link to="/products">Shop Now</Link>
            </h5>
            
        </div>
      )
  }
}




export default connect()(Home);