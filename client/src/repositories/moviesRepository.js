import repository from './repository'

const API_URL = 'http://localhost:8080'

export default {
  list () {
    return repository.get(API_URL + '/upcoming/')
  },
  get (movieId) {
    return repository.get(API_URL + '/movie/' + movieId)
  },
  search (text) {
    return repository.get(API_URL + '/search' + text)
  }
}
