import React, { ReactNode, SyntheticEvent } from 'react';
import apiCalendar from 'react-google-calendar-api/src/ApiCalendar';

export default class DoubleButton extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  public handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick();
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  }

  render(): ReactNode {
    return (
      <>
        <button onClick={(e) => this.handleItemClick(e, 'sign-in')}>sign-in</button>
        <button onClick={(e) => this.handleItemClick(e, 'sign-out')}>sign-out</button>
      </>
    );
  }
}
