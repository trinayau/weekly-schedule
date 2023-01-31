import {screen, render, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { cleanup } from '@testing-library/react';

import Calendar from '.';
import { EventsProvider } from '../../context/EventsContext';

afterEach(cleanup);

describe('Calendar', () => {
    test('renders without crashing', () => {
        render(<EventsProvider><Calendar /></EventsProvider>);
    } );

    test('should display days of the week', () => {
        render(<EventsProvider><Calendar /></EventsProvider>);
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        daysOfWeek.forEach(day => {
            const dayElement = screen.getAllByText(day);
            expect(dayElement[0]).toBeInTheDocument();
        }
        );
    });

    test('should display hours of the day', () => {

        render(<EventsProvider><Calendar /></EventsProvider>);
        const hoursOfDay = [
            '9:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
        ];
        hoursOfDay.forEach(hour => {
            const hourElement = screen.getAllByText(hour);
            expect(hourElement[0]).toBeInTheDocument();
        }
        );
    }
    );

    test('should display events', () => {
        const events = [
            { id: "1", day: "Monday", startTime: "9:00", title: "Event 1" },
            { id: "2", day: "Monday", startTime: "10:00", title: "Event 2" },
            { id: "3", day: "Tuesday", startTime: "9:00", title: "Event 3" }
          ];
      
          const mockedUseEvents = () => ({
            events
          });
      
          jest.spyOn(React, "useContext").mockImplementation(() => mockedUseEvents());
      
          const { container } = render(<Calendar />);
          const eventsComponents = container.getElementsByClassName("event");
      
          expect(eventsComponents.length).toBe(3);
    });



})
