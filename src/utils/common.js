export const range = (start, end, step) => {
  const res = [];
  for (let i = start; i <= end; i += step) {
    res.push(i);
  }

  return res;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

export const insertOrdered = (arr, elem, gt = (a, b) => a > b) => {
  arr.push(elem);

  for (let i = arr.length - 2; i >= 0 && gt(elem, arr[i]); i--) {
    swap(arr, i, i + 1);
  }

  return arr;
};