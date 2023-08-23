import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@redux/userSlice'

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
})

export default store;
