import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./features/counter/counterSlice"
import todoSlice from "./features/todos/todoSlice"

export default configureStore({
    reducer:{
        counter:counterSlice,
        todos:todoSlice
    }
})