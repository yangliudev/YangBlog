---
title: React functional components vs class components
date: 2021-07-15
tags:
  - React
  - React Native
  - JavaScript
categories:
  - React
  - React Native
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

Arrow function (introduced in ES6)

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

## Lifecycle Methods

With the introduction of React 16.8 and the addition of hooks, lifecycle methods between the two are substantially different.

<b>componentDidMount / componentWillUnmount</b>

```js
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yang';
    }
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    console.log("component unmounted");
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

<b>useEffect</b>

```js
import React from 'react';

const App = () => {
  React.useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    }
  }, []);

  return {
    <View>
      <Text>Hello World</Text>
    </View>
  }
}

export default App;
```

## Concluding Thoughts

Functional components and class components both have their own advantages and disadvantages. Functional components are much shorter and simpler to write improving readibility and speeding up development. It is still relatively new at the moment however, but React is taking great strides promoting it and encouraging users to adopt.

Class components won't be going away anytime soon and most legacy code bases are written with class components. If you are interested in React/React Native development I believe it is vital to learn both.
