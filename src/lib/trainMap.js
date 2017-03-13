import { learn } from './learn';
import { defaultMapWidth, initMap } from './initMap';

export const trainMap = (
  entities,
  SOMap = initMap(),
  widthOfSOMap = defaultMapWidth,
  timesPerEntity = 100,
  baseDenominator = 300,
  baseLearningRadius = 3,
  baseLearningRate = 0.3,
) => {
  let map = SOMap
  for (let entity of entities) {
    for (let t of Array(timesPerEntity).keys()) {
      let denominator = (1 + t / baseDenominator);
      let learningRadius = (baseLearningRadius / denominator);
      let learningRate = (baseLearningRate / denominator);
      map = learn(entity, map, widthOfSOMap, learningRadius, learningRate)
    }
  }
  return map;
}
