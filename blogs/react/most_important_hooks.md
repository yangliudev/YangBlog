---
title: Most important hooks to know for React
date: 2021-07-19
tags:
  - React
  - React Native
categories:
  - React
  - React Native
---

## useState

useState is one of the most important hooks and is used to handle state changes in an application.

```js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    counter += 1;
    setCounter(counter);
  }

  return {
    <View>
      <Text>Counter Number: {counter}</Text>
      <TouchableOpacity onPress={() => incrementCounter()}>add one</TouchableOpacity>
    </View>
  }
}

export default App;
```

The variable counter is initialized to a state of 0 (line 5). We have a button called "add one" that when clicked, calls the incrementCounter() function and adds one to the counter variable whilst at the same time updating the state. Because the View is dynamically rendering the counter variable, the number will change in real time with each click of "add one".

## useEffect

In functional components, we need to use useEffect for all our lifecycle methods.

```js
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  // Without a dependency array, this useEffect hook runs on mount and anytime stateful data changes
  useEffect(() => {
    console.log("Run for an infinite amount of times");
  });

  // With an empty dependency array, this useEffect hook runs once on mount
  useEffect(() => {
    console.log("Run on mount");
  }, []);

  // Everytime the count variable changes, the useEffect hook is run
  // Keep in mind even without count changing, this useEffect ALWAYS runs the first time
  // Only after count changes would this be run again
  let count = 0;
  useEffect(() => {
    console.log("Run when count changes");
  }, [count]);

  // This useEffect will run when component unmounts
  useEffect(() => {
    return () => {
    console.log("Run on unmount");
    }
  });

  return {
    <View>
      <Text>Hello World</Text>
    </View>
  }
}

export default App;
```
