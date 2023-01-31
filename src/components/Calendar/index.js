import { Table, Container, Row, Col } from "react-bootstrap";
import CalendarForm from "../CalendarForm";
import { useEvents } from '../../context/EventsContext';
import { useState } from 'react';
import Event from "../Event";
import "./styles.css";
import Confetti from 'react-confetti';


const Calendar = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hoursOfDay = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const { events } = useEvents();
  console.log(events)

  return (
    <div className="calendar">
         {showConfetti ? <Confetti /> : null}
      <Container>
        <Row>
          <Col>
            <Table borderless>
              <thead>
                <tr>
                  <th></th>
                  {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hoursOfDay.map((hour) => (
                  <tr  key={hour}>
                    <td>{hour}</td>
                    {daysOfWeek.map((day) => {
                      const eventsForHour = events.filter(event => event.day === day && event.startTime === hour);
                      const numEvents = eventsForHour.length;
                      return (
                        <td  key={`${day}-${hour}`}>
                          <div className="calendar-event">
                          {eventsForHour.map(event => (
                            <Event key={event.id} event={event} style={{ width: `${100 / numEvents}%` }}  />
                          ))}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <CalendarForm daysOfWeek={daysOfWeek} hoursOfDay={hoursOfDay} setShowConfetti={setShowConfetti}/>
      </Container>
       
    </div>
  );
};

export default Calendar;
