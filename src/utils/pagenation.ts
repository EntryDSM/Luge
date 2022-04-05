export const getIndexList = (notice_length: number): number[] => {
  let arr: number[] = [];

  for (let i = 0; i < notice_length / 10; i++) {
    arr.push(i + 1);
  }
  return arr;
};

export const getCurrentPages = (currentIndex: number, value: number) => {
  let maxIndex = Math.ceil(currentIndex / 10) * 10;
  let minIndex = Math.floor((currentIndex - 1) / 10) * 10;
  if (minIndex < value && value <= maxIndex) {
    return true;
  }
  return false;
};
