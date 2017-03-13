export const getCoordiOnMap = (array, widthOfSOMap) => {
  if (!Number.isInteger(widthOfSOMap)) {
    throw new Error('coordination scaler: typeof widthOfSOMap should be integer');
  }
  const arrayWithScaledDimension = array.map((value, index) => {
    const coordination = [
      index % widthOfSOMap,
      Math.floor(index / widthOfSOMap),
    ];
    return {
      value,
      coordination,
    };
  });
  return arrayWithScaledDimension
}
