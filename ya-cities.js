const cities = [
  'Геленджик',
  'Домодедово',
  'Казань',
  'Люберцы',
  'Нижний Новгород',
  'Орёл',
  'Санкт-Петербург',
];

let result = [];
let nextCity = 0;

const getlastLetter = (item) => {
  if (item.slice(item.length - 1) === 'ы' || item.slice(item.length - 1) === 'ь') {
    return item.slice(item.length - 2, item.length - 1)
  } else {
    return item.slice(item.length - 1)
  }
}

cities.reverse().forEach((i, index) => {
  nextCity = cities.find(item => {
    if (index === 0) {
      return i
    } else {
      return item[0].toLowerCase() === getlastLetter(nextCity)
    }
  })
  nextCity ? result.push(nextCity) : ""
  console.log(result)
})


