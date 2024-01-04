import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventPage = ()=>{
  return (
  <>
    <EventsNavigation />
    <Outlet />
  </>
  )
};

export default EventPage;