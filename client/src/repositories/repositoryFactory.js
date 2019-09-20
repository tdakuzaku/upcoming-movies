import moviesRepository from './moviesRepository'

const repositories = {
  movies: moviesRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
