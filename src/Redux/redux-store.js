import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import taskReduser from "./taskReduser";
import newTaskFormReduser from "./newTaskFormReduser";
import selectedDateReduser from "./selectedDateReduser";
import authReduser from "./authReduser";
import userDataReduser from "./userDataReduser";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    taskReduser,
    newTaskFormReduser,
    selectedDateReduser,
    authReduser,
    userDataReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;