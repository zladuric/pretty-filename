/**
 * Simplest possible test, we don't want deps, just using assert.
 */
var prettyFilename = require('./index')
    , assert = require('assert')
    , val
    , badInput
    , i
    ;
// What we'll test:
// Missing or bad input
var badInput = [null, undefined, 126, new Object()];
console.log('Running 10 tests.');
for (var i = 0; i < badInput.length; i++) {
    val = assert.equal(prettyFilename(badInput[i]), null, 'Invalid input should return null.');
}
// Now test some good input.
assert.equal(prettyFilename(''), '', 'Empty string should return empty.');
assert.equal(prettyFilename('string'), 'string', 'Regular string should return itself');
assert.equal(prettyFilename('some string'), 'some string', 'A space should be kept.');
assert.equal(prettyFilename('dash - and an underscore'), 'dash - and an underscore', 'Dash and underscore should be kept.');
assert.equal(prettyFilename('some.string'), 'some.string', 'A dot should be kept.');
assert.equal(prettyFilename('-3sdc*&^ Random string- 2\'1.'), '-3sdc Random string- 21', 'We should remove weird characters.');
console.log('Tests passed.')