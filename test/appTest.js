const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// RESULTS
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(4, 6);

describe('App', function() {
    describe('sayHello()', function() {
        it('sayHello should return hello', function() {
            // let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function() {
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function() {
        it('addNumbers should be above 5', function() {
            // let result = app.addNumbers(4, 6);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return type number', function() {
            // let result = app.addNumbers(4, 6);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});
