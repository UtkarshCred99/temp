import React, { useEffect } from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import EventDetail from "./Pages/EventDetail";
import Editevent from "./Pages/EditEvent";
import {useDispatch} from "react-redux";
import { EventAction } from "./Redux/Slices/EventData";
import EventsList from "./components/EventsList";
import EventForm from "./components/EventForm";
import { loaderFunc as eventLoader} from "./components/EventsList";
import ErrorPage from "./Pages/ErrorPage";
import { EventDetailLoader } from "./Pages/EventDetail";
import { formSubmissionAction } from "./components/EventForm";
import { eventDeleteHandler } from "./Pages/EventDetail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", 
        element: <HomePage />
      },
      {
        path: "events",
        element: <EventPage />,
        children: [
          {
            path: "",
            loader: eventLoader,
            element: <EventsList />,
          },
          {
            path: "new",
            action: formSubmissionAction,
            element: <EventForm event= {{title: "", description: "",date: "",image: ""}} />,
          },
          {
            path: ":eventId",
            id: "EventDetail",
            loader: EventDetailLoader,
            action: eventDeleteHandler,
            children: [
              {
                path: "",
                element: <EventDetail />
              },
              {
                path: "edit",
                element: <Editevent />
              }
            ]
          },
        ]
      },
    ]
  },
]);

const allevents = [
  {
    id: "Event1",
    image: "",
    title: "Event-1",
    date: "09-09-2001",
  },
  {
    id: "Event2",
    image: "",
    title: "Event-2",
    date: "09-09-2001",
  },
  {
    id: "Event3",
    image: "",
    title: "Event-3",
    date: "09-09-2001",
  },
];

// Add a loader function to fetch the details of any specific event.

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    allevents.forEach((event)=>{
      dispatch(EventAction.addEvent(event));
    });
  },[dispatch]);

  return <RouterProvider router={Router} />;
}

export default App;
