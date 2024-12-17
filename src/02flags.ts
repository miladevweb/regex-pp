// IMPORTANT: When we use a regex with the match method, we can pass flags to it

// g - Global search
const regexGlobal = /cat/g
console.log(regexGlobal.test('cat')) // true
console.log(regexGlobal.test('dog')) // false
console.log(regexGlobal.test("there're a lot of cats here")) // true

console.log('-----')

// i - Case insensitive
const regexCaseInsensitive = /cat/i
console.log(regexCaseInsensitive.test('CAT')) // true
console.log(regexCaseInsensitive.test('cat')) // true
console.log(regexCaseInsensitive.test('Cat')) // true
console.log(regexCaseInsensitive.test('CATS')) // false

console.log('-----')

// m - Multiline
const regexMultiline = /cat/m
console.log(regexMultiline.test('cat')) // true
console.log(regexMultiline.test('dog\ncat\ndog')) // true
