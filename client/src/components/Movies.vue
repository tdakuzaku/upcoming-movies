<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Upcoming Movies</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="search">
            <b-form-input v-model="searchText" size="sm" class="mr-sm-2" placeholder="Search by movie name"></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-spinner v-if="loading" label="Loading..." class="loading-spinner"></b-spinner>
    <div v-else>
      <b-card-group columns>
        <movie-card v-for="item in list" v-bind:key="item.id" :data="item" :genres="genres"/>
      </b-card-group>
      <div>
        <b-button v-on:click="showMore()">Show more</b-button>
      </div>
    </div>
  </div>
</template>

<script>
// TODO create the Navbar compoment
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
      genres: [],
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
      this.genres = MoviesRepository.genres()
      this.loading = false
    },
    async showMore () {
      this.currentPage++
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