import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos=createAsyncThunk("todos/getTodos",async()=>{
    try {
        const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
        return res.data
    } catch (error) {
        return isRejectedWithValue(error.message)
    }
})