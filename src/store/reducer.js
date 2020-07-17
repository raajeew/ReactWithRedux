const initialState={
    count:0,
    cart:[],
    products:[
        { 
          "id": 101,
          "count":1,
          "name":"iPhone 6S",
          "price": {
            "total": 32000,
            "tax": 6,
            "currency": "INR"
          }
        },
        {
          "id":102,
          "count":1,
          "name": "iPhone 6",
          "price": {
            "total": 24000,
            "tax": 3,
            "currency": "INR"
          }
        },
        {
          "id":103,
          "count":1,
          "name": "Samsung M30S",
          "price": {
            "total": 14000,
            "tax": 3,
            "currency": "INR"
          }
        }
        ,
        {
          "id":104,
          "count":1,
          "name": "Samsung M30S",
          "price": {
            "total": 11300,
            "tax": 3,
            "currency": "INR"
          }
        },
        {
          "id":105,
          "count":1,
          "name": "Samsung M30S",
          "price": {
            "total": 9990,
            "tax": 3,
            "currency": "INR"
          }
        },
        {
          "id":106,
          "count":1,
          "name": "Samsung M30S",
          "price": {
            "total": 12000,
            "tax": 3,
            "currency": "INR"
          }
        },
        {
          "id":107,
          "count":1,
          "name": "Samsung M30S",
          "price": {
            "total": 13000,
            "tax": 3,
            "currency": "INR"
          }
        },
        {
          "id":108,
          "count":1,
          "name": "Samsung M30S",
          "price": {
            "total": 8000,
            "tax": 3,
            "currency": "INR"
          }
        }
      ]
}

const reducer=(state = initialState, action)=>{
    const newState = {...state};
    //localStorage.setItem("cartItems", JSON.stringify());
    if(localStorage.getItem("cartItems"))
    newState.cart=JSON.parse(localStorage.getItem("cartItems"));
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
            //action.value.count=1;
            let isAdded=false;
            newState.cart.forEach((item,index)=>{
              if(item.id===action.value.id){
                console.log(item.id, action.value.id,index);
                newState.cart[index].count++;
                isAdded =  true;

              }
            });
            console.log(newState.cart);
            if (!isAdded) {
              newState.cart=[...newState.cart, action.value];
              localStorage.setItem("cartItems", JSON.stringify(newState.cart));
            }
            break; 
        case 'DELCARTITEM':    
            let cartItems={
              ...state,
              cart:state.cart.filter(el=>el.id != action.key)
            } 
            localStorage.setItem("cartItems", JSON.stringify(cartItems.cart));
            return cartItems;
            break;         
    }
    return newState;
};

export default reducer;