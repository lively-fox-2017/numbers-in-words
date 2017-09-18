const assert = require('assert')
const MyModule = require('./number_in_words.js')

describe('Number In Words', () => {
  it('shout satu juta if 1000000 entered', () => {
    assert.equal(MyModule.numberToWords(1000000).trim(), 'satu juta')
  })
})
