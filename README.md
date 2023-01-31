# Weekly Schedule Calendar Page
This is a weekly calendar built with React. It is a single page application that allows you to view a week's worth of events. You can add events to the calendar using a form component. The events are stored in ContextAPI.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`
4. Visit `http://localhost:3000`

## Built With
* [React](https://reactjs.org/) - The web framework used
* [ContextAPI](https://reactjs.org/docs/context.html) - State Management
* [React Bootstrap](https://react-bootstrap.github.io/) - Styling

## Features
* Add events to the calendar
* View events on the calendar
* Animation after adding event

## Challenges
* Displaying events on the calendar was a challenge, as was figuring out how to make the events at the same hour display in a row instead of on top of each other. I ended up using a style prop for each event that dictated the width of the event based on the number of events at that hour. 

## Screenshots

