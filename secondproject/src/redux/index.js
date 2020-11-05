import {createStore, combineReducers} from 'redux';
import {reducerSignIn, reducerSignUp} from './reducers'

const rootReducer = combineReducers({
     signIn: reducerSignIn,
     signUp: reducerSignUp
})

export default function configureStore(){
    return createStore(rootReducer);
}
 
 