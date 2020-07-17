import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Cart extends Component{

    total(items){
      let total=0;
      items.map((item,index)=>{
         total += item.price.total * item.count;
      })
      return total;
    }
    render(){
        return(
            <div>
              <h3>Total items in cart: {this.props.cart.length}</h3>
              <div className="card-wrap">
              {this.props.cart.map((item,index)=>(
                
                <div className="card" key={index}>
                  <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.price.currency} {item.price.total}</p>
                      <p>
                        <button onClick={()=>this.props.onDelCartItem(item.id)}>Remove this item</button>
                      </p>
                   </div>
                </div>
              
              ))}
              </div>
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
const mapDispatchToProps = dispatch =>{
  return{
    onDelCartItem:(id)=> dispatch({type:'DELCARTITEM',key:id})       
  }
}
export default connect(mapStateToProp,mapDispatchToProps)(Cart);