# observe-component

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

`Observe` component to subscribe/unsubscribe rxjs Observable.

```jsx
class Sample extends Component {
  timer$ = interval(100);
  users$ = interval(500).pipe(map(i => `user${i}`));

  render() {
    return (
      <Observe source={{ timer: this.timer$, users: this.users$ }}>
        {({ timer, users }) => (
          <div>
            <p>timer: {timer}</p>
            <p>user: {users}</p>
          </div>
        )}
      </Observe>
    );
  }
}
```
