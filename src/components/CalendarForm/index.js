import {Button, Form} from 'react-bootstrap';

const CalendarForm = ({daysOfWeek, hoursOfDay}) => {
    console.log(daysOfWeek)
    console.log(hoursOfDay)

    return (
        <div className="calendar-form">
        <Form>
            
            <h2>Add event</h2>
            <Form.Group controlId="eventName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter event name" />
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


            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
}

export default CalendarForm;
