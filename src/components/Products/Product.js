import React,{Component} from 'react';
import {connect} from 'react-redux';
class Products extends Component{

    render(){
        return(
          <div>
              <h3>Products</h3>
              <div className="product-wrap">
                {this.props.products.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price.currency} {item.price.total}</p>
                            <button onClick={()=>this.props.onAddToCart(item)} className={(item.added ? 'added' : 'notAdded')}>Add to Cart</button>
                        </div>
                    </div>
                ))}
              </div>
          </div>
        )
    }
  }
  
  function isItemAdded(id){
    return this.props.cart.includes(id) === false
  };

  const mapStateToProps = state =>{
    return {
      products:state.products,
      cart:state.cart
    };
  }
  
  const mapDispatchToProps = dispatch =>{
     return{
       onAddToCart:(item)=> dispatch({type:'ADDTOCART',value:item})       
     }
  }
  
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Products);