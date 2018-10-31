/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const newArray = [];
  arr
    .map((item, index) => ({
      item: item.split('').reduce((acc, next) => acc + parseFloat(next), 0),
      index
    }))
    .sort((a, b) => a.item - b.item)
    .forEach(item => newArray.push(arr[item.index]));
  return newArray;
};
