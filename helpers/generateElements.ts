export const generateElements = (length = 1) =>
  new Array(length)
    .fill(0)
    .map((_, index) => ({id: index + 1, name: `test${index}`}));
