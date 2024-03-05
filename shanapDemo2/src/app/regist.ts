import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../features/register/registerSlice';
import loadingReducer from '../components/loadingSlice';
import messageReducer from '../components/MessageSlice';

const regist = configureStore({
  reducer: {
    register: registerReducer,
    loading: loadingReducer,
    message:messageReducer
  },
});

export default regist;

export type RootState = ReturnType<typeof regist.getState>;
export type AppDispatch = typeof regist.dispatch;
