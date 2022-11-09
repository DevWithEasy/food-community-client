import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState : {
    isLoading : false,
    isAuth : false,
    user: {},
    findUser : {}
  },
  reducers : {
    isLoading : (state,action) => {
      state.isLoading = true
    },
    login : (state,action) => {
      state.isAuth = true
      state.user = action.payload
    },
    findUser : (state,action) => {
      state.findUser = action.payload
    },
    logout : (state,action) => {
      state.isAuth = false
      state.user = {}
      state.isLoading = false
    }
  }
})

export const  {isLoading,login,findUser,logout} = authSlice.actions;
export default authSlice.reducer;
