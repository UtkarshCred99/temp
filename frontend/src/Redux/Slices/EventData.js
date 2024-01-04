import { createSlice } from "@reduxjs/toolkit";

const EventSlice = createSlice({
  name: "EventsData",
  initialState: {
    AllEvents: [],
  },
  reducers: {
    addEvent(state,action){
      state.AllEvents.push(action.payload);
    },
    removeEvent(state,action){
      state.AllEvents = state.AllEvents.filter((event)=>{
        return event.id!==action.payload.ElementId;
      })
    },
  }
});

export const EventAction = EventSlice.actions;
export default EventSlice;
