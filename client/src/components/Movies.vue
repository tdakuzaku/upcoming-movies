<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Upcoming Movies</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input v-model="searchText" size="sm" class="mr-sm-2" placeholder="Search by movie name"></b-form-input>
            <b-button v-on:click="search()" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-spinner v-if="loading" label="Loading..." class="loading-spinner"></b-spinner>
    <div v-else>
      <b-card-group columns>
        <movie-card v-for="item in list" v-bind:key="item.id" :data="item"/>
      </b-card-group>
      <div>
        <b-button v-on:click="showMore()">Show more</b-button>
      </div>
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
      loading: true,
      list: [],
      searchText: '',
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
      this.loading = false
    },
    async showMore () {
      this.currentPage++
      this.loading = true
      this.fetch()
    },
    async search () {
      this.loading = true
      const { data } = await MoviesRepository.search(this.searchText)
      this.loading = false
      this.list = data.results
    }
  }
}
</script>
<style scoped>
  .loading-spinner {
    margin: 50px 0;
  }
</style>