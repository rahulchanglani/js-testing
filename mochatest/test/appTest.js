const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// RESULTS
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(4, 6);
checkObjResult = app.checkObj();

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

        it('addNumbers should be equal to 10', function() {
            // let result = app.addNumbers(4, 6);
            assert.strictEqual(addNumbersResult, 10);
        });
    
        it('addNumbers should return type number', function() {
            // let result = app.addNumbers(4, 6);
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('checkObj()', function() {
        it('checkObj should be exactly equal', function() {
            let dummyObj = {
                prop1: 'field1',
                prop2: 2,
                prop3: true
            }
            assert.deepEqual(checkObjResult, dummyObj);
        });
    });
});
