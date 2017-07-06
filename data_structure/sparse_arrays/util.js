function parseInput(input) {
  const inputArr = input.split('\n');
  const N = Number(inputArr[0]);
  const Q = inputArr.slice(N + 2);
  const strings = inputArr.slice(1, N + 1);

  return {
    S: strings,
    Q: Q
  };
}

module.exports = parseInput;