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

const mapStateToProps = state =>{
  return {
    count : state.count
  };
}

const mapDispatchToProps = dispatch =>{
   return{
     onAddItem:()=> dispatch({type:'ADD',value:1}),
     onRemoveItem:()=> dispatch({type:'REMOVE',value:1})
   }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);