import classes from './EventsList.module.css';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function EventsList() {
  // const events = useSelector((state)=>{
  //   return state.EventData.AllEvents;
  // });

  const events = useLoaderData().events;


  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
              <NavLink to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}


const loaderFunc = async ()=>{
  const resp = await fetch('http://localhost:8080/events');
  if(!resp.ok){
    throw new Error("Something went Wrong");
  }
  return resp;
};

export {loaderFunc};

export default EventsList;
