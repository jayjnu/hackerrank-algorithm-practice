function rotate(input) {
  const arr = input.initialState;
  let rotations = input.rotations;
  const temp = [];
  const remains = arr.slice(rotations);

  /**
   * tried arr.push(arr.shift()) first
   * turns out it was bottleneck and couldn't pass test case #8
   * made a temp array which is a lot smaller than the original array which result in less loop counts
   */
  for (let i = 0 ; i < rotations ; i++) {
    temp.push(arr[i]);
  }

  return remains.concat(temp).join(' ');
}

module.exports = rotate;