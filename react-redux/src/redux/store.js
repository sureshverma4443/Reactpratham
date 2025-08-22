
import {legacy_createStore as createStore} from "redux"

import { rootReducer } from "./reducers/rootReducer"




// const store = createStore(counterReducer);





const store = createStore(
    rootReducer,
    
    window.__REDUX_DEVTOOLS_EXTENION__ && window.__REDUX_DEVTOOLS_EXTENION__()
)




export default store