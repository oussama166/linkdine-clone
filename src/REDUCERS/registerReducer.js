import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  userName: "",
  email: "",
  isOnline: false,
  typeError: {
    name: "",
    description: "",
    field: "",
  },
  additionelData : {
    linkProfile : "",
    password : ""
  }
};

export const LoginReduce = createSlice({
  name: "Log",
  initialState,
  reducers: {
    isConnect: (state, action) => {
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.isOnline = !state.isOnline;
    },
    isDisconect: (state) => {
      state.uid = "";
      state.userName = "";
      state.email = "";
      state.isOnline = false;
    },
    connectError: (state, action) => {
      state.typeError["name"] = action.payload.name;
      state.typeError["description"] = action.payload.description;
      state.typeError["field"] = action.payload.field;
    },
    createUser : (state,action) => {
        
    }
  },
});

// Action creators are generated for each case reducer function
export const { isConnect, isDisconect, connectError } = LoginReduce.actions;

export default LoginReduce.reducer;
