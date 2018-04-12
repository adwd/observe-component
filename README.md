# @adwd/observe-component

`Observe` component to subscribe/unsubscribe rxjs Observable.

```
import React from 'react';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';

import Observe from '@adwd/observe-component';

class Example extends Component {
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