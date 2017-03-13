import { randomArray } from './randomArray';

export const defaultMapWidth = 8;
export const defaultMapHeight = 12;
export const defaultNOfAttributes = 8;

export const initMap = (
  numberOfAttributes = defaultNOfAttributes,
  mapWidth = defaultMapWidth,
  mapHeight = defaultMapHeight,
) => {
  const SOMap = []
  for (let i =0; i < (mapWidth * mapHeight); i++) {
    SOMap.push(randomArray(numberOfAttributes))
  }
  return SOMap
}
