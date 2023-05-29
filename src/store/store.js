import { configureStore } from '@reduxjs/toolkit'
import homeslice from "./homeSlice"

export default configureStore({
  reducer: {
    home:homeslice
  }
})