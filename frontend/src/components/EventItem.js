import classes from './EventItem.module.css';
// import { EventAction } from '../Redux/Slices/EventData';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';

function EventItem(props) {
  // const dispatch = useDispatch();
  const event = props.event;
  // const navigate = useNavigate();
  const submit = useSubmit();

  function startDeleteHandler() {
    // dispatch(EventAction.removeEvent({
    //   ElementId: event.id,
    // }));

    const proceed = window.confirm("Are you Sure?");
    if(proceed){
      submit(null,{method: 'delete'});
    }
    // navigate("/events");
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <NavLink to="edit">Edit</NavLink>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
