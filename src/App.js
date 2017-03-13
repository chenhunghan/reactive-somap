import React, { Component } from 'react';
import './App.css';
import { getRandomEntities } from './lib/getRandomEntities';
import { AnimatedSOMap } from './components/animatedSOMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimatedSOMap
          entities={getRandomEntities(1200, 3)}
          nOfEntityAttributes={3}
          mapWidth={120}
          mapHeight={60}
          unitSize={7.5}
          learningRadius={16}
          learningRate={0.1}
          trainingTimesPerEntity={10}
          denominator={10}
          intervalInSecond={5}
          somapOpacity={0.15}
        />
        {/* <AnimatedSOMap
          entities={getRandomEntities(100000, 3)}
          nOfEntityAttributes={3}
        /> */}
      </div>
    );
  }
}

export default App;
