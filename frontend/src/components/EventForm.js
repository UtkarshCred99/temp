import {  useNavigate } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import classes from './EventForm.module.css';
import { useActionData } from 'react-router-dom';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const errorData = useActionData();

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method='post' className={classes.form}>
      {errorData && errorData.errors && Object.values(errorData.errors).map((error)=>{
        return <p>error</p>
      })}

      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event.title}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event.date}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={navigation.state==='submitting' ? true : false} type='submit'>{navigation.state==='submitting' ? "Submitting..." : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

const formSubmissionAction = async ({request,params})=>{
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const resp = await fetch("http://localhost:8080/events",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData)
  });

  if(resp.status===422){
    return resp;
  }

  if(!resp.ok){
    throw new Error("Something Went wrong");
  }

  return redirect("/events");
}

export {formSubmissionAction};
