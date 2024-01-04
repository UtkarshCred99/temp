import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./Slices/EventData";

const store = configureStore({
  reducer: {
    EventData: EventSlice.reducer,
  }
});

export default store;