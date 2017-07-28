const expect = require('chai').expect;
const input = require('./input');
const answer = require('./answer');
const result = [10, 14].join(' ');

describe('answer()', function() {
  it(`should return ${result} given ${input.join(' ')}`, function() {
    expect(answer(input).join(' ')).to.equals(result);
  })
});