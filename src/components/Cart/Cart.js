import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Cart extends Component{

    total(items){
      let total=0;
      items.map((item,index)=>{
         total += item.price.total;
      })
      return total;
    }
    render(){
        return(
            <div>
              <h3>Total items in cart: {this.props.cart.length}</h3>
              {this.props.cart.map((item,index)=>(
                <div className="card" key={index}>
                  <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.price.currency} {item.price.total}</p>
                   </div>
              </div>
              ))}
              <div>Total cart value: Rs. {this.total(this.props.cart)}</div>
            </div>
        )
    }
}

const mapStateToProp=state=>{
    return {
      cart : state.cart
    };
}

export default connect(mapStateToProp)(Cart);