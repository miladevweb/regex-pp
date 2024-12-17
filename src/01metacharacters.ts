// . Matches any character (except newline)
const pointRegex = /c.t/
console.log(pointRegex.test('cat')) // true
console.log(pointRegex.test('cot')) // true
console.log(pointRegex.test('coot')) // false

console.log('-----')

// ^ Matches the start of a string
const startRegex = /^he..o/
console.log(startRegex.test('hello')) // true
console.log(startRegex.test('hello there')) // true
console.log(startRegex.test('hellothere')) // true
console.log(startRegex.test('there hello')) // false

console.log('-----')

// $ Matches the end of a string
const endRegex = /end$/
console.log(endRegex.test('this is the end')) // true
console.log(endRegex.test('end')) // true
console.log(endRegex.test('end is here')) // false

console.log('-----')

// * Matches 0 or more of the preceding element
const starRegex = /go*d/
console.log(starRegex.test('gd')) // true
console.log(starRegex.test('god')) // true
console.log(starRegex.test('good')) // true

console.log('-----')

// + Matches 1 or more of the preceding element
const plusRegex = /go+d/
console.log(plusRegex.test('gd')) // false
console.log(plusRegex.test('god')) // true
console.log(plusRegex.test('good')) // true

console.log('-----')

// ? Matches 0 or 1 of the preceding element
const questionRegex = /go?d/
console.log(questionRegex.test('gd')) // true
console.log(questionRegex.test('god')) // true
console.log(questionRegex.test('good')) // false

console.log('-----')

// | Matches either the expression before or after the pipe, it's like an OR
const pipeRegex = /cat|dog/
console.log(pipeRegex.test('cat')) // true
console.log(pipeRegex.test('dog')) // true
console.log(pipeRegex.test('cow')) // false
console.log(pipeRegex.test('I love cats and dogs')) // true

console.log('-----')

// \ Escapes a metacharacter
const escapeRegex = /0\.99/
console.log(escapeRegex.test('99')) // false
console.log(escapeRegex.test('099')) // false
console.log(escapeRegex.test('0.99')) // true

console.log('-----')

// {} Matches a specific number of the preceding element
const regexExact = /.{3}/
console.log(regexExact.test('ca')) // false
console.log(regexExact.test('cat')) // true
console.log(regexExact.test('cats say meow')) // true

console.log('-----')

const regexAtLeast = /a{2,}/ // Matches 3 or more "a"s
console.log(regexAtLeast.test('a')) // false
console.log(regexAtLeast.test('aa')) // true
console.log(regexAtLeast.test('aaa b')) // true

console.log('-----')

const regexRange = /a{2,4}/ // Matches between 2 and 4 "a"s
console.log(regexRange.test('a')) // false
console.log(regexRange.test('aa')) // true
console.log(regexRange.test('aaa')) // true
console.log(regexRange.test('aaaa')) // true
console.log(regexRange.test('aaaaaaaaaa')) // false

console.log('-----')

// [] Matches any character inside the brackets
const regexBrackets = /[aeiou]/
console.log(regexBrackets.test('apple')) // true
console.log(regexBrackets.test('sky')) // false
console.log(regexBrackets.test('apple 123 abc')) // true

console.log('-----')

const regexLetterRange = /[a-zA-Z]/
console.log(regexLetterRange.test('a')) // true
console.log(regexLetterRange.test('A')) // true
console.log(regexLetterRange.test('0')) // false

console.log('-----')

const regexNumberRange = /[0-9]/
console.log(regexNumberRange.test('0')) // true
console.log(regexNumberRange.test('9')) // true
console.log(regexNumberRange.test('a')) // false

console.log('-----')

// [^] Matches any character not inside the brackets
const regexNotBrackets = /[^aeiou]/
console.log(regexNotBrackets.test('bcd')) // true
console.log(regexNotBrackets.test('aei')) // false

console.log('-----')

// () Groups the expression inside the parentheses
const regexGroup = /(ab|c)+/
console.log(regexGroup.test('a')) // false
console.log(regexGroup.test('b')) // false
console.log(regexGroup.test('ab')) // true
console.log(regexGroup.test('c')) // true
console.log(regexGroup.test('baba123 xyz')) // true

console.log('-----')

const regexCaptureGroup = /(\w+)-(\w+)/ // Captures 2 words separted by "-"
const match01 = 'hello-world'.match(regexCaptureGroup)
const match02 = '123-456'.match(regexCaptureGroup)
const match03 = 'xyz'.match(regexCaptureGroup) // null

console.log(match01![1], match01![2]) // hello world
console.log(match02![1], match02![2]) // 123 456

console.log('-----')

// \d Matches any digit (0-9)
const regexDigit = /\d+/ // matches 1 or more digits
console.log(regexDigit.test('0')) // true
console.log(regexDigit.test('0.1')) // true
console.log(regexDigit.test('01 20')) // true

console.log('-----')

const regexOneDigit = /^\d$/ // matches with digits of length 1
console.log(regexOneDigit.test('0')) // true
console.log(regexOneDigit.test('10')) // false
console.log(regexOneDigit.test('0.1')) // false

console.log('-----')

// \D Matches any non-digit (0-9), it can be a character, a space, symbol, etc
const regexNonDigit = /\D/ // matches 1 or more non-digits
console.log(regexNonDigit.test('a')) // true
console.log(regexNonDigit.test('a9')) // true
console.log(regexNonDigit.test('10')) // false
console.log(regexNonDigit.test('0.1')) // true cuz has a dot
console.log(regexNonDigit.test('01 20')) // true cuz has a space

console.log('-----')

const regexDivide = /\D+/g
console.log('abc123!@#'.match(regexDivide)) // ['abc', '!@#']

console.log('-----')

// \w Matches any word character (a-z, A-Z, 0-9, _)
const regexWord = /\w+/
console.log(regexWord.test('abc')) // true
console.log(regexWord.test('123')) // true
console.log(regexWord.test(' ')) // false

console.log('-----')

// \W Matches any non-word character (space, symbols, etc)
const regexNonWord = /\W+/
console.log(regexNonWord.test(' ')) // true
console.log(regexNonWord.test('hello')) // false
console.log(regexNonWord.test('@hello')) // true

console.log('-----')

// \s Matches any whitespace character (space, tab, newline)
const regexWithSpace = /\s+/
console.log(regexWithSpace.test(' ')) // true
console.log(regexWithSpace.test('hello')) // false
console.log(regexWithSpace.test('   hello')) // true

console.log('-----')

// \S Matches any non-whitespace character
const regexWithoutSpace = /\S+/
console.log(regexWithoutSpace.test(' ')) // false
console.log(regexWithoutSpace.test('@$#')) // true
