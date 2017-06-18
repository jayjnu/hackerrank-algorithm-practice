function parseInput(input) {
  const arr = input.split('\n');
  const rotations = arr[0].split(' ')[1];
  const initialState = arr[1].split(' ');
  return { rotations, initialState };
}

module.exports = parseInput;