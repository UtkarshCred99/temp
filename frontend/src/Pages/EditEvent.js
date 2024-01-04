import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const Editevent = ()=>{
  const mydata = useRouteLoaderData("EventDetail").event;

  return (
  <EventForm event={mydata} />
  )
};

export default Editevent;