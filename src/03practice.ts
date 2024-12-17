// separate letters from numbers
const regexLettersAndNumbers = /([a-zA-Z]+)(\d+)/
const m01 = 'hello123'.match(regexLettersAndNumbers)!
console.log(m01[1]) // hello
console.log(m01[2]) // 123
console.log(m01[1].localeCompare('ha')) // 1
console.log(m01[1].localeCompare('he')) // 1
console.log(m01[1].localeCompare('hello')) // 0
console.log(m01[1].localeCompare('hf')) // -1
console.log(m01[1].localeCompare('i')) // -1

console.log('-----')

console.log(m01[2])
console.log(Number(m01[2]))

console.log('-----')

const m02 = 'world456xyz'.match(regexLettersAndNumbers)!
console.log(m02[1]) // world
console.log(m02[2]) // 456
