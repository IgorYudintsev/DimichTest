import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "../reducers/countReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers(
    {
        count:countReducer
    }
)
export type rootReducerType=ReturnType<typeof rootReducer>

export let store = createStore(rootReducer,applyMiddleware(thunk))
