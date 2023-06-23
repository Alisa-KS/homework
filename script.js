const a = [3, 2, 1, 2];
const b = [3, 4, 2, 5, 1];

const intersect = (arr1, arr2) => arr1.filter(x => arr2.includes(x));

console.log(intersect(a, b));
