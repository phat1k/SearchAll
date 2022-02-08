const initialValue = {
    card:{},
    product: []
}
 function cardReducer(state =  initialValue, action){
    switch(action.type){
        case 'SET_CARD':     
        return{
            ...state,
            card: action.payload 
        }
        case 'UPDATE_QUANTITY':     
        return{
            ...state,
            // card: action.payload 
        }
        case 'GET_PRODUCT':     
        return{
            ...state,
            product: action.payload ,
        }
    }
    return state
} 
export default cardReducer