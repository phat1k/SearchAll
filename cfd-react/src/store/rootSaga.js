import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import cardServices from ".././services/cardServices"
// import authService from ".././services/authServices"
// import userService from ".././services/userServices"

    // worker Saga: will be fired on USER_FETCH_REQUESTED actions
    function* count(action) {
        // try {
        //     const user = yield call(Api.fetchUser, action.payload.userId);
        //     yield put({type: "USER_FETCH_SUCCEEDED", user: user});
        // } catch (e) {
        //     yield put({type: "USER_FETCH_FAILED", message: e.message});
        // }
        yield put ({type: "IMCREMENT"})
        console.log("count")
    }
    // function* fetchLogin(action){
    //     try{
    //         const token = yield call( authService.login, action.paypload)
    //         localStorage.setItem('token', JSON.stringify(token.data))
            
    //         yield put ({type: "GETINFO"})

    //     }catch(err){

    //     }
    // }

    // function* getinfo(){
    //     try{
    //         const token = JSON.parse(localStorage.getItem('token'))
    //         if(token){
    //             const userinfo = yield call( userService.getinfo)
    //             yield put ({type: "SET_CARD", payload: userinfo.data})
    //         }
            
    //         yield put ({type: "GETINFO"})

    //     }catch(err){

    //     }
    // }

    function* getCard(){
          try{
              const token = JSON.parse(localStorage.getItem('token'))
              if(token){
                  const card = yield call( cardServices.getCard)

                  console.log(`card -saga`, card)
                  yield put ({type: "SET_CARD", payload: card.data})
              }
          }catch(err){

          }
    }

    function* updateQuantity(payload) {
        const token = JSON.parse(localStorage.getItem('token'))
       
        const quantity = 1
        console.log("payload", payload)

        console.log("token", token)
        // console.log("id", id)
        console.log("quantity", quantity)

        try {
            if (token && payload && quantity > 0) {
            
                // yield API
                yield call( cardServices.updateQuantity, {id:payload.payload, quantity, token}, )
            }
        } catch (error) {
            console.log("err khong lay dc du lieu")
        }
    }

    /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
    */
    function* rootSaga() {
        yield takeEvery("COUNT", count);
        // yield takeLatest('LOGIN', fetchLogin)
        // yield takeLatest('GETINFO', getinfo)

        yield takeLatest(['GETINFO', 'UPDATE_QUANTITY'], getCard);
        yield takeLatest('UPDATE_QUANTITY', updateQuantity)
    }

    export default rootSaga; 