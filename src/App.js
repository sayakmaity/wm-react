import "./App.css";
import ScheduleSelector from "react-schedule-selector";
import React from "react";

class App extends React.Component {
  /* Creating an array of dates to show other people's simulated availability */
  scheduleOne = [
    new Date("10/6/22 15:00"),
    new Date("10/6/22 16:00"),
    new Date("10/6/22 17:00"),
    new Date("10/6/22 18:00"),
  ];
  scheduleTwo = [
    new Date("10/5/22 15:00"),
    new Date("10/5/22 16:00"),
    new Date("10/5/22 17:00"),
    new Date("10/6/22 17:00"),
    new Date("10/6/22 18:00"),
    new Date("10/6/22 19:00"),
    new Date("10/6/22 20:00"),
  ];
  scheduleThree = [
    new Date("10/4/22 19:00"),
    new Date("10/4/22 20:00"),
    new Date("10/4/22 21:00"),
  ];

  /* updates the state of the schedule to reflect the new selection. */
  state = { schedule: [] };

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };

  /* used to prevent the user from changing the schedule of other people. */
  readOnly = () => {};

  render() {
    return (
      <div className="container">
        {/* Importing a font from google fonts. */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap');
        </style>
        {/* title that says "When2Meet" and gives instructions */}
        <div className="container">
          <h1 className="text-center">
            When2Meet : Hold and drag to add your availability
          </h1>
        </div>

        <div className="relative">
          {/* UI Element to allow user to enter their own availability */}
          <div className="layer">
            {/* Use Schedule Selector package */}
            <ScheduleSelector
              selection={this.state.schedule}
              selectionScheme="linear"
              numDays={4}
              minTime={13}
              maxTime={22}
              onChange={this.handleChange}
              unselectedColor="rgba(195,61,158,0.05)"
              selectedColor="rgba(195,61,158,1.0)"
              hoveredColor="rgba(195,61,158,0.3)"
              startDate="10/3/22"
            />
          </div>
        </div>
        {/*  UI elements layered to display the group's availability */}
        <div className="relative">
          <div className="layer">
            <ScheduleSelector
              selection={this.scheduleOne}
              selectionScheme="linear"
              numDays={4}
              minTime={13}
              maxTime={22}
              onChange={this.readOnly}
              unselectedColor="rgba(113,197,209,0.001)"
              selectedColor="rgba(113,197,209,0.4)"
              hoveredColor="rgba(113,197,209,0.0)"
              startDate="10/3/22"
            />
          </div>
          <div className="layer">
            <ScheduleSelector
              selection={this.scheduleTwo}
              selectionScheme="linear"
              numDays={4}
              minTime={13}
              maxTime={22}
              onChange={this.readOnly}
              unselectedColor="rgba(113,197,209,0.01)"
              selectedColor="rgba(113,197,209,0.4)"
              hoveredColor="rgba(113,197,209,0.0)"
              startDate="10/3/22"
            />
          </div>
          <div className="layer">
            <ScheduleSelector
              selection={this.scheduleThree}
              selectionScheme="linear"
              numDays={4}
              minTime={13}
              maxTime={22}
              onChange={this.readOnly}
              unselectedColor="rgba(113,197,209,0.01)"
              selectedColor="rgba(113,197,209,0.4)"
              hoveredColor="rgba(113,197,209,0.0)"
              startDate="10/3/22"
            />
          </div>
          <div className="layer">
            <ScheduleSelector
              selection={this.state.schedule}
              selectionScheme="linear"
              numDays={4}
              minTime={13}
              maxTime={22}
              onChange={this.readOnly}
              unselectedColor="rgba(113,197,209,0.01)"
              selectedColor="rgba(113,197,209,0.6)"
              hoveredColor="rgba(113,197,209,0.0)"
              startDate="10/3/22"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
