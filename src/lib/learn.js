import { findWinnerUnit } from './findWinnerUnit';
import { getCoordiOnMap } from './getCoordiOnMap';
import { euclideanDistance } from './euclideanDistance';

export const learn = (
  entity,
  SOMap,
  widthOfSOMap,
  learningRadius,
  learningRate,
) => {
  const winner = findWinnerUnit(SOMap, widthOfSOMap, entity);
  const updateFunction = (winnerUnitValue, entityValue, learningRate) => {
    const newValue = (winnerUnitValue + learningRate * (entityValue - winnerUnitValue));
    return newValue;
  }
  const winnerUpdatedMap = SOMap.map((mapUnit, index) => {
    if (index === winner.index) {
      return mapUnit.map((value, index) => updateFunction(value, entity[index], learningRate));
    }
    return mapUnit;
  });
  const mapWithCoordi = getCoordiOnMap(winnerUpdatedMap, widthOfSOMap)
  const winnerWithCoordi = mapWithCoordi[winner.index];
  const neighborUpdatedMap = mapWithCoordi.map((mapUnit, index) => {
    if (index === winner.index) {
      return mapUnit;
    }
    if (euclideanDistance(mapUnit.coordination, winnerWithCoordi.coordination) < learningRadius) {
      const learnedMapUnit = {
        coordination: mapUnit.coordination,
        value: mapUnit.value.map((value, index) => updateFunction(value, entity[index], learningRate)),
      };
      return learnedMapUnit;
    }
    return mapUnit;
  });
  const final = neighborUpdatedMap.map(unit => unit.value);
  return {
    winner,
    SOMap: final,
  }
}
