"use client"
import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authThunks.js";  


const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    status: "idle",
    error: null,
  },
  reducers: {
    signOut: (state) => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload 
      localStorage.setItem("accessToken")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error=null 
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null 
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
        state.error = null 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.accessToken = action.payload.access_token
        state.error = null
        localStorage.setItem("accessToken", action.payload.access_token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload 
        
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;

