require('mocha-sinon');
const expect = require('chai').expect;
const printOccurrences = require('./answer');
const parseInput = require('./util');
const input = parseInput(require('./input'));
const output = [2, 1, 0];

describe('printOccurences()', function(){
  beforeEach(function(){
    this.sinon.stub(console, 'log');
  });

  it(`should print ${output} on each new line`, function(){
    printOccurrences(input);
    output.forEach(function(each) {
      expect(console.log.calledWith(each)).to.be.true;
    });
  });
});