export const arrayMinIndex = (arr) => {
  let lowest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[lowest]) {
      lowest = i;
    }
  }
  return lowest;
}
