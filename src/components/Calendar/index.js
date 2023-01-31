import { Table, Container, Row, Col } from "react-bootstrap";
import CalendarForm from "../CalendarForm";
import "./styles.css";

const Calendar = () => {
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

  return (
    <div className="calendar">
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
                  <tr key={hour}>
                    <td>{hour}</td>
                    {daysOfWeek.map((day) => (
                      <td key={`${day}-${hour}`}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <CalendarForm daysOfWeek={daysOfWeek} hoursOfDay={hoursOfDay}/>
      </Container>
       
    </div>
  );
};

export default Calendar;
