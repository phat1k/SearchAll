const initialValue = {
    count: 0
}


export const countReducer = (state = initialValue, action  ) => {
    switch(action.type){
        case 'IMCREMENT':
            return{
                count: state.count +1
            }
    }
    return state 
}


