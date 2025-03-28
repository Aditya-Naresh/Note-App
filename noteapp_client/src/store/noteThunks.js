"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axiosInstance.js";  

export const addNote = createAsyncThunk(
  "note/addNote",
  async(noteData, {rejectWithValue}) => {
    try {
      const formData = JSON.stringify(noteData)
      const response = await axiosInstance.post("/notes", formData)
      return response.data
    } catch (error) {
     return rejectWithValue(error.response.data) 
    }
  }
) 


export const fetchNotes = createAsyncThunk(
  "note/fetchNotes",
  async(_, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.get("/notes") 
      return response.data 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)


export const editNote = createAsyncThunk(
  "note/editNote",
  async ({id, data}, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.put(`api/notes/${id}`, data)
      return response.data 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)



export const deleteNote = createAsyncThunk(
  "note/deleteNode",
  async (id, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.delete(`/notes/${id}`)
      return response.data 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
