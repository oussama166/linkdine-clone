import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./REDUCERS/registerReducer";
import loadingReducer from "./API/Loading";
import SignUp from "./REDUCERS/SiginUpReducer";

const store = configureStore({
  reducer: {
    login: counterReducer,
    loading: loadingReducer,
    Sign: SignUp,
  },
});

export default store;
