import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import indexReducers from "./components/reducers/index.reducer";

let persistConfig = ({
    key: "root",
    storage
})

let middleware = [thunk] //we can pass multiple middleware if needed

let persistRed = persistReducer(persistConfig, indexReducers); // persistReducer is creating reducer from 
// index.reducer.js and persistconfig 


//compose is used as enhancer like using middleware and devtools in store.

//createStor accepts reducer,state and enhancer(here we are using composeto develop enhancer)
let store = createStore(persistRed,
     compose(applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;