<template>
  <div>
      <b-card-group columns>
        <movie-card v-for="item in list" v-bind:key="item.id" :data="item"/>
      </b-card-group>

      <div>
        <b-button v-on:click="showMore()">Show more</b-button>
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
      list: [],
      currentPage: 1
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const { data } = await MoviesRepository.list(this.currentPage)
      this.list = this.list.concat(data.results)
    },
    async showMore () {
      this.currentPage++
      this.fetch()
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