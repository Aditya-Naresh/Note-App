"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axiosInstance.js";  

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", userData);
      return response.data; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);




export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, {rejectWithValue}) => {
    try {

      const response = await axiosInstance.post("/auth/token", userData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      console.log("response", response)
      return response.data
    } catch (error) {
      error.response?.data?.message || "Login Failed"
    }
  }
)

