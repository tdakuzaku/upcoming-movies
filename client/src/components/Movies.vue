<template>
  <div class="hero">
    <div>
        <b-card-group deck>
          <movie-card v-for="item in list" />
        </b-card-group>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import { RepositoryFactory } from '../repositories/repositoryFactory'

const MoviesRepository = RepositoryFactory.get('movies')

export default {
  name: 'MoviesList',
  components: {
    MovieCard
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const { data } = await MoviesRepository.list()
      this.list = data
    }
  }
}
</script>

<style>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
  }
</style>