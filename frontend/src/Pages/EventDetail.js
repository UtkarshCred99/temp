// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";

const EventDetail = ()=>{
  // const params = useParams();
  // const alldata = useSelector((state)=>{
  //   return state.EventData.AllEvents;
  // });

  // const mydata = alldata.find((event)=>{
  //   return event.id===params.eventId;
  // })

  const mydata = useRouteLoaderData("EventDetail").event;

  return (
    <EventItem event={mydata}></EventItem>
  )
};

const EventDetailLoader = async ({request,params})=>{
  const resp = await fetch("http://localhost:8080/events/"+params.eventId);
  if(!resp.ok){
    throw new Error("Something Went Wrong");
  }

  return resp;
};

const eventDeleteHandler = async ({request,params})=>{
  const eventId = params.eventId;

  const resp = await fetch("http://localhost:8080/events/"+eventId,{
    method: request.method
  });

  if(!resp.ok){
    throw new Error("Something Went Wrong");
  }

  return redirect('/events');
};

export {eventDeleteHandler};
export {EventDetailLoader};
export default EventDetail;