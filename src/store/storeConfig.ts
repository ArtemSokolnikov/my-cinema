import {userReducer} from "../reducers/userReducer";
import {configureStore} from '@reduxjs/toolkit';
// import { legacy_createStore as createStore} from 'redux';
// export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));

export const store = configureStore({
    reducer: userReducer
});

