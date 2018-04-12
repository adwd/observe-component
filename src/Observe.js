import React from 'react';
import { Subscription } from 'rxjs/Subscription';

export default class Observe extends React.Component {
  subscription = new Subscription();

  constructor(props) {
    super(props);

    this.state = Object.keys(props.source).reduce((acc, current) => {
      acc[current] = null;
      return acc;
    }, {});

    Object.entries(props.source)
      .map(([key, obs]) =>
        obs.subscribe(v => {
          this.setState({ [key]: v });
        }),
      )
      .forEach(sub => this.subscription.add(sub));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return this.props.children(this.state);
  }
}
