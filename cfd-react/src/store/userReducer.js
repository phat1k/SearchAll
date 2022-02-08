const initialState = {
    userinfo: {},
    category: [],
};

const userReducer = (state = initialState, action) => {
        switch(action.type){
            case "GETINFO":
            return{
                ...state,
                userinfo: action.payload
            }
            case "GETCATEGORY":
            return{
                ...state,
                category: action.payload
            }
        }
        return state
}
export default userReducer