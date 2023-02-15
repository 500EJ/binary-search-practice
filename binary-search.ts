export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

export function binarySearch(arr: number[], target: number): number {
  let [low, high] = [0, arr.length - 1];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midEl = arr[mid];
    if (arr[mid] === target) {
      return mid;
    } else if (midEl != null && midEl < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
