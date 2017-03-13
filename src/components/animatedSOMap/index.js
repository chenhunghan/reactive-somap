import React, { Component } from 'react';
import { learn } from '../../lib/learn';
import { initMap } from '../../lib/initMap';
import { SOMap } from '../SOMap';
import { EntitiesMap } from '../entitiesMap';

export class AnimatedSOMap extends Component {
  constructor(props) {
    super(props)
    const { intervalInSecond, nOfEntityAttributes, mapWidth, mapHeight } = this.props;
    this.state = {
      count: 0,
      intervalId: undefined,
      interval: intervalInSecond * 1000,
      somap: initMap(nOfEntityAttributes, mapWidth, mapHeight),
      winner: undefined,
    }
  }
  componentDidMount() {
    const intervalId = setInterval(this.timer, this.state.interval);
    this.setState({ intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  timer = () => {
    const { entities, trainingTimesPerEntity, denominator, mapWidth, learningRadius, learningRate } = this.props;
    const { count, somap } = this.state;
    const index = Math.floor(count / trainingTimesPerEntity)
    const entity = entities[index];
    if (entity === undefined) {
      clearInterval(this.state.intervalId);
      return;
    }
    const t = count % trainingTimesPerEntity;
    const nDenominator = (1 + t / denominator);
    const nLearningRadius = (learningRadius / nDenominator);
    const nLearningRate = nDenominator * learningRate;
    const result  = learn(entity, somap, mapWidth, nLearningRadius, nLearningRate)
    const winner = result.winner
    if (winner !== this.state.winner) {
      this.setState({ winner })
    }
    this.setState({ somap: result.SOMap })
    this.setState({ count: count + 1 });
  }
  render() {
    return (
      <div className="App">
        <SOMap
          mapWidth={this.props.mapWidth}
          mapHeight={this.props.mapHeight}
          mapData={this.state.somap}
          unitSize={this.props.unitSize}
          opacity={this.props.somapOpacity}
        />
        <EntitiesMap
          mapWidth={this.props.mapWidth}
          mapHeight={this.props.mapHeight}
          SOMap={this.state.somap}
          entities={this.props.entities}
          unitSize={this.props.unitSize}
        />
      </div>
    );
  }
}

AnimatedSOMap.propTypes = {
  intervalInSecond: React.PropTypes.number,
  entities: React.PropTypes.array.isRequired,
  nOfEntityAttributes: React.PropTypes.number.isRequired,
  numberOfAttributes: React.PropTypes.number,
  denominator: React.PropTypes.number,
  mapWidth: React.PropTypes.number,
  mapHeight: React.PropTypes.number,
  trainingTimesPerEntity: React.PropTypes.number,
  learningRate: React.PropTypes.number,
  learningRadius: React.PropTypes.number,
  unitSize: React.PropTypes.number,
  somapOpacity: React.PropTypes.number,
}

AnimatedSOMap.defaultProps = {
  intervalInSecond: 0.2,
  nOfEntityAttributes: 3,
  denominator: 4,
  mapWidth: 300,
  mapHeight: 150,
  trainingTimesPerEntity: 10,
  learningRate: 0.12,
  learningRadius: 25,
  unitSize: 4,
  somapOpacity: 1,
}
