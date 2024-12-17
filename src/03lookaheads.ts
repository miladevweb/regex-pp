// Lookaheads are zero-width assertions that do not consume characters.

// (?=pattern)  positive lookahead: Matches only if the pattern exists IMMEDIATELY after the current position
const regexPositiveLookahead = /foo(?=bar)/
console.log(regexPositiveLookahead.test('bar')) // false
console.log(regexPositiveLookahead.test('foobar')) // true
console.log(regexPositiveLookahead.test('foo123bar')) // false

const p01 = 'foobar foobaz roobar'.match(regexPositiveLookahead) // ['foo']

console.log('-----')

// (?!pattern)  negative lookahead: Matches only if the pattern doesn't exist IMMEDIATELY after the current position
const regexNegativeLookahead = /foo(?!bar)/
console.log(regexNegativeLookahead.test('foo')) // true
console.log(regexNegativeLookahead.test('bar')) // false
console.log(regexNegativeLookahead.test('foobar')) // false
console.log(regexNegativeLookahead.test('foo123bar')) // true

const regexDolar = /\d+(?!USD)/g
const p02 = '$10 USD, 20USD, 40EUR'.match(regexDolar) // ['10', '2', '40']

console.log('-----')

// (?<=pattern) positive lookbehind: Matches only if the pattern exists IMMEDIATELY before the current position
const regexPositiveLookBehind = /(?<=foo)bar/
console.log(regexPositiveLookBehind.test('bar')) // false
console.log(regexPositiveLookBehind.test('foobar')) // true

const regexDolarSign = /(?<=\$)\d+/g
const p03 = 'Price: $10, Discout: $50, 100'.match(regexDolarSign) // ['10', '50']

console.log('-----')

// (?<!pattern) negative lookbehind: Matches only if the pattern doesn't exist IMMEDIATELY before the current position
const regexNegativeLookBehind = /(?<!foo)bar/
console.log(regexNegativeLookBehind.test('bar')) // true
console.log(regexNegativeLookBehind.test('foobar')) // false

const regexWordsBeforeAtSign = /(?<!@)\w+/g
const p04 = 'hello @world'.match(regexWordsBeforeAtSign) // ['hello']
const p05 = '@xyz'.match(regexWordsBeforeAtSign)! // ['yz']
console.log(p04, p05)
