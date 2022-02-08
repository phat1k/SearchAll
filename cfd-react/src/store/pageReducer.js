const initialValue = {
    isOpenCard: false
}
 function pageReducer ( state = initialValue, action){
    switch(action.type){
        case 'OPEN_CARD':
            return{
                ...state,
                isOpenCard: true
            }
            case 'CLOSE_CARD':
            return{
                ...state,
                isOpenCard: false
            }
    }
    return state
}
export default pageReducer