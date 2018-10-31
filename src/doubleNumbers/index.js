/* eslint-disable-next-line */
export const doubleNum = num => {
  const stringified = num.toString();
  const halfLength = stringified.length / 2;
  const firstHalf = stringified.slice(0, halfLength);
  const secondHalf = stringified.slice(halfLength);

  return firstHalf === secondHalf ? num : num * 2;
};
