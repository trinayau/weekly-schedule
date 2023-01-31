[![Netlify Status](https://api.netlify.com/api/v1/badges/25b3154e-8ea9-416d-b047-3aace923d29a/deploy-status)](https://app.netlify.com/sites/weekly-calendar-schedule/deploys)
# Weekly Schedule Calendar Page
This is a weekly calendar built with React. It is a single page application that allows you to view a week's worth of events. You can add events to the calendar using a form component. The events are stored in ContextAPI.  
[Live Link ✨](https://weekly-calendar-schedule.netlify.app/)

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
* [React Confetti](https://www.npmjs.com/package/react-confetti) - Animated Confetti

## Features
* Add events to the calendar
* View events on the calendar
* Animation after adding event

## Challenges
* Displaying events on the calendar was a challenge, as was figuring out how to make the events at the same hour display in a row instead of on top of each other. I ended up using a style prop for each event that dictated the width of the event based on the number of events at that hour. 

## Wins
* I've always been using libraries for calendars, so it was nice to write the logic by myself

## Planning
![Exampleschedule](https://user-images.githubusercontent.com/92634994/215843536-37685432-1461-44c7-a7f1-341382c2a23a.png)
![Screenshot 2023-01-31 at 17 56 10](https://user-images.githubusercontent.com/92634994/215843635-c0b5f61e-612f-477b-935e-7c5680158704.png)

## Final Result
![screencapture-weekly-calendar-schedule-netlify-app-2023-01-31-17_57_58](https://user-images.githubusercontent.com/92634994/215844105-ceb9a516-0ec3-4d11-a183-880ea5f595a1.png)
