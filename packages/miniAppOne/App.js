import React from 'react';
import {Text, View} from 'react-native';

import {msg, logFxn} from '@myapp/shared';

const App = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Text>{msg}</Text>
      <Text onPress={() => logFxn()}>Press me to log</Text>
    </View>
  );
};

export default App;
