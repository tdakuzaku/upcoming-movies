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
    },
    async showMore () {
      this.currentPage++
      this.fetch()
    },
    async search () {
      const { data } = await MoviesRepository.search(this.searchText)
      this.list = data.results
    }
  }
}
</script>
