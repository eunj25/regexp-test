const str = `
  010-1235-4565
  thesecon@gmail.com
  https://www.omdbapi.com/?apikey=70sss&s=frozen
 The quick brown fox jumps over the lazy dog.
  aaaaabbbbddddd
  hbnp
  동해물과 백두산이 마르고 닳도록_
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
const h = `  the hello world  !

`

// console.log(str.match(regexp))
// console.log(str.replace(regexp,'good'))
// console.log(str.match(/\.$/gim))
// console.log(str.match(/^t/gim))
// console.log(str.match(/fox|dog/g))
// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\bf\w{1,}\b/g))

console.log(h.match(/\s/g))
console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))

