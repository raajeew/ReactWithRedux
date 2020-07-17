import React,{Component} from 'react';
import {connect} from 'react-redux';
class Products extends Component{

    render(){
        return(
          <div>
              <h3>Products</h3>
              <div className="product-wrap">
                {this.props.products.map((item) => (
                  <div className="card-wrap" key={item.id}>
                    <div className="card">
                        <div className="card-body">
                            <div className="image">
                              <svg width="200" height="180">
                                <rect x="0" y="0" rx="5" y="5" width="150" height="150"
                                style={{'fill':'grey','stroke':'black','strokeWidth':1,'opacity':'0.5'}} />
                                <text fill="#ffffff" fontSize="30px" fontFamily="Verdana" x="15" y="90">Product</text>
                                 SVG not supported
                              </svg>
                            </div>
                            <div>
                              <h5 className="card-title">{item.name}</h5>
                              <p className="card-text">{item.price.currency} {item.price.total}</p>
                              <button onClick={()=>this.props.onAddToCart(item)} className={(item.added ? 'added' : 'notAdded')}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                   </div> 
                ))}
              </div>
          </div>
        )
    }
  }
  
 

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