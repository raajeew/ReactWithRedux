const initialState={
    count:0,
    cart:[],
    products:[
        {
          "id": 101,
          "name":"iPhone 6S",
          "price": {
            "total": 32000,
            "tax": 6,
            "currency": "INR"
          }
        },
        {
          "id":102,
          "name": "iPhone 6",
          "price": {
            "total": 24000,
            "tax": 3,
            "currency": "INR"
          }
        },
        {
          "id":103,
          "name": "Samsung M30S",
          "price": {
            "total": 14000,
            "tax": 3,
            "currency": "INR"
          }
        }
      ]
}

const reducer=(state = initialState, action)=>{
    const newState = {...state};

    switch(action.type){
        case 'ADD':
            newState.count += action.value;
            break;
        case 'REMOVE':
            if(newState.count>0){
                newState.count -= action.value;
            }   
            break; 
        case 'ADDTOCART':
            if (newState.cart.includes(action.value) === false) {
              newState.cart=[...newState.cart,action.value];
            }
            break; 
        case 'DELCARTITEM':
            return{
              ...state,
              cart:state.cart.filter(el=>el.id != action.key)
            } 
            break;         
    }
    return newState;
};

export default reducer;