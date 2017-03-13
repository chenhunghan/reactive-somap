import { randomArray } from './randomArray';

export const getRandomEntities = (numberOfEntities = 12, numberOfAttributes = 8) => {
  const randomEntities = []
  for (let i =0; i < numberOfEntities; i++) {
    randomEntities.push(randomArray(numberOfAttributes))
  }
  return randomEntities
}
