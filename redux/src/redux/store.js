import {legacy_createStore as createStore} from "redux"

import { rootReducer } from "./reducers/rootReducer"
import { loadstate, savestate } from "./localStorage"



// const store = createStore(counterReducer);


const persistedState = loadstate();


const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENION__ && window.__REDUX_DEVTOOLS_EXTENION__()
)
store.subscribe(()=>{
    savestate(store.getState())
})


export default store