import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './authenReducer';
import userReducer from './userReducer';
import pageReducer from './pageReducer'
import cardReducer from './cardReducer'
import {countReducer} from './countReducer'
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga' ;

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    count: countReducer,
    page: pageReducer,
    card: cardReducer,
})


const sagaMiddleware = createSagaMiddleware()

// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }
//////////////////DEV TOOLLLLLL ////////////
// const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
// window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store