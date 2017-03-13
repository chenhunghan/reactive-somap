import { arrayMinIndex } from './arrayMin';
import { euclideanDistance } from './euclideanDistance';

export const findWinnerUnit = (SOMap, widthOfSOMap, inputEntity) => {
  const distanceCollection = SOMap.map(mapUnit => euclideanDistance(mapUnit, inputEntity));
  const index = arrayMinIndex(distanceCollection); // Winner unit's index, should be an intergar.
  const coordi = [
    index % widthOfSOMap,
    Math.floor(index / widthOfSOMap),
  ]
  return {
    index,
    coordi,
    value: SOMap[index],
  };
}

export const simpleFindWinner = (SOMap, widthOfSOMap, inputEntity) => {
  const distanceCollection = SOMap.map(mapUnit => euclideanDistance(mapUnit, inputEntity));
  const index = arrayMinIndex(distanceCollection); // Winner unit's index, should be an intergar.
  return [
    index % widthOfSOMap,
    Math.floor(index / widthOfSOMap),
  ]
}
