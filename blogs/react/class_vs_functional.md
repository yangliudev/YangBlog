---
title: React functional components vs class components
date: 2021-07-15
tags:
  - React
  - React Native
  - JavaScript
categories:
  - React
---

## Functional Components

Most common JavaScript function

```js
import React from 'react';

function App() {
  return {
    <View>
      <Text>Hello World</Text>
    </View>
  }
}

export default App;
```

Arrow function

```js
import React from 'react';

const App = () => {
  return {
    <View>
      <Text>Hello World</Text>
    </View>
  }
}

export default App;
```

## Class Components

```js
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yang';
    }
  }
  render() {
    return (
      <View>
        <Text>Hello {this.state.name}</Text>
      </View>
    );
  }
}

export default App;
```
