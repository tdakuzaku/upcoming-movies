import repository from './repository'

const API_URL = 'api/movies'

export default {
  list (page) {
    return repository.get(API_URL + '/upcoming', { params: { page: page } })
  },
  get (movieId) {
    return repository.get(API_URL + '/' + movieId)
  },
  search (text) {
    return repository.get(API_URL + '/search', { params: { query: text } })
  }
}
