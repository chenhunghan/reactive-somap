export const randomArray = (length) => {
  return [...new Array(length)].map(() => Math.random());
}
