// module.exports = function() {
//     return 'hello';
// }

module.exports = {
    sayHello: function() {
        return 'hello';
    },
    addNumbers: function(val1, val2) {
        return val1 + val2;
    },
    checkObj: function() {
        return {
            prop1: 'field1',
            prop2: 2,
            prop3: true
        }
    }
}