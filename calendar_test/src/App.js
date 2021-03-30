import React, { Component } from 'react';
import { DayPilot, DayPilotMonth } from 'daypilot-pro-react';

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: DayPilot.Date.today(),
      eventEndSpec: 'Date',
    };
  }

  render() {
    var { ...config } = this.state;
    return (
      <div>
        <DayPilotMonth
          {...config}
          ref={(component) => {
            this.calendar = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Month;
