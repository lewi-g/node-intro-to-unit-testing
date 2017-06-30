'use strict';
const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

/// fizzBuzz shows fizz for every multiple of three 

// shows buzz for every multiple of 5 
// shows fizzzBuzz for every multiple of 15 as
// shows number if the above three don't hold true 
//throws error if NaN
// 

describe ('fizzBuzzer', function() {
  it('should show "fizz-buzz" for every multiple of 15', function(){
    const normalCases = [
      {num:15, expected: 'fizz-buzz'},
      {num:90, expected: 'fizz-buzz'},
      {num:180, expected: 'fizz-buzz' }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
    // another way to do the above
    // fizzBuzzer(15).should.equal('fizz-buzz');
    // fizzBuzzer(90).should.equal('fizz-buzz');
    // fizzBuzzer(180).should.equal('fizz-buzz');
  });
  it('should show "buzz" for every multiple of 5', function(){
    const normalCases = [
      {num:5, expected: 'buzz'},
      {num:20, expected: 'buzz'},
      {num:100, expected: 'buzz' }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
  it('should show "fizz" for every multiple of 3', function(){
    const normalCases = [
      {num:6, expected: 'fizz'},
      {num:3, expected: 'fizz'},
      {num:33, expected: 'fizz' }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should show "num" for every other number' , function(){
    const normalCases = [
      {num:2, expected: 2},
      {num:7, expected: 7},
      {num:11, expected: 11 }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });  
  it('should show "`num` must be a number" for every non-number', function(){
    const badInputs = [
      {num: 'a' },
      {num: true},
      {num: false}
    ];
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
  // alternate code: should.throw(function(){fizzBuzz(input);}, Error)
});