import React,{Component} from 'react';
import {connect} from 'react-redux';
class Products extends Component{

    render(){
        return(
          <div>
              <h3>Products</h3>
              <div className="product-wrap">
                {this.props.products.map((item,index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price.currency} {item.price.total}</p>
                            <a onClick={this.props.onAddToCart.bind(null,item)} className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                ))}
              </div>
              {/* <button onClick={this.props.onRemoveItem}>-</button>
              <span>{this.props.count}</span>
              <button onClick={this.props.onAddItem}>+</button> */}
          </div>
        )
    }
  }
  
  const mapStateToProps = state =>{
    return {
      count : state.count,
      products:state.products,
      cart:state.cart
    };
  }
  
  const mapDispatchToProps = dispatch =>{
     return{
       onAddItem:()=> dispatch({type:'ADD',value:1}),
       onRemoveItem:()=> dispatch({type:'REMOVE',value:1}),
       onAddToCart:(item)=> dispatch({type:'ADDTOCART',value:item})       
     }
  }
  
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Products);