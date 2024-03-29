const superHeroDiv = document.getElementById('superhero');
const newHeroBtn = document.getElementById('getNewHero');
const userInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const displayStats = document.getElementById('displayStats')

const superHeroToken = '6947350388695986';
const BASE_URL = `https://superheroapi.com/api.php/${superHeroToken}`;

const getSuperHero = (id, name) => {
  // name 👉 base_url/search/batman
  // json.results[0].image.url
  // id: 👉 base_url/id
  // json.image.url
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      const superHero = json
      showHeroInfo(superHero) 
    })
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" height=200 width=200/>`

  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')

  superHeroDiv.innerHTML = `${name}${img}${stats}`
}

const getSearchSuperHero = (name) => {
  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showHeroInfo(hero) 
    })
}

const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroBtn.onclick = () => getSuperHero(randomHero())

searchBtn.onclick = () => getSearchSuperHero(searchInput.value)
