function printOccurrences(input) {
  const str = input.S;
  const queries = input.Q;

  queries.forEach((query) => {
    let total = 0;
    str.forEach(string => {
      total += string === query ? 1 : 0;
    });
    console.log(total);
  });
}

module.exports = printOccurrences;