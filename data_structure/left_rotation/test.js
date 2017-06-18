const expect = require('chai').expect;
const rotate = require('./answer');
const parseInput = require('./util');
const input = parseInput(require('./input'));
const output = '5 1 2 3 4';

describe('rotate()', function(){
  it(`should return ${output}`, function(){
    expect(rotate(input)).to.equal(output);
  });
});