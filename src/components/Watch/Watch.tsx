import React from 'react';
import IWatchState from '../../model/Watch/watch';

class Watch extends React.Component<{}, IWatchState> {
  private timerID?: number;

  constructor(props: {}) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Watch;
