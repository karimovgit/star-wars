// const getResource = async(url) => {
//   const res = await fetch(url)

//   if(!res.ok) {
//     throw new Error(`Could not fetch ${url}, receivec ${res.status}`)
//   }

//   const body = await res.json()
//   return body
// }

// getResource('https://swapi.co/api/people/1333333')
//   .then(body => console.log(body))
//   .catch(err => console.error(err))


export default class SwapiService {

  _apiBase = 'https://swapi.co/api'

  async getResource(url) {
    const res = await fetch(this._apiBase + url)
    
    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase + url}, receivec ${res.status}`)
    }

    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getResource('/people/')
    return res.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }

  getAllPlanets() {
    return this.getResource('/planets/')
  }

}

const swapi = new SwapiService()
// swapi.getAllPeople().then(body => body.forEach(el => console.log(el.name)))
// swapi.getPerson(3).then(el => console.log(el))