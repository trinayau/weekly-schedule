import {Button, Form} from 'react-bootstrap';
import { useEvents } from '../../context/EventsContext';
import { useState } from 'react';
import './styles.css';

const CalendarForm = ({daysOfWeek, hoursOfDay}) => {

    const { addEvent } = useEvents();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.eventName.value;
        const day = event.target.eventDay.value;
        const time = event.target.eventTime.value;
        addEvent({ name, day, time });

        console.log(name, day, time);
    }
    return (
        <div className="calendar-form">
        <Form onSubmit={handleSubmit}>
            <h5>Add event</h5>
            <Form.Group controlId="eventName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter event name" required/>
            </Form.Group>
    
            <Form.Group controlId="eventDay">
            <Form.Label>Day</Form.Label>
            <Form.Control as="select" required>
                {daysOfWeek.map(day => (
                  <option key={day}>{day}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="eventTime">
            <Form.Label>Time</Form.Label>
            <Form.Control as="select" required>
                {hoursOfDay.map(hour => (
                  <option key={hour}>{hour}</option>
                ))}
              </Form.Control>
            </Form.Group>


            <Button variant="blue" type="submit">
            Add
            </Button>
        </Form>
        </div>
    );
}

export default CalendarForm;
