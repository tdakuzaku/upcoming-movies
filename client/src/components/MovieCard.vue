<template>
    <div>
        <b-card
            :title="data.title"
            :img-src="'https://image.tmdb.org/t/p/w500' + data.backdrop_path"
            :img-alt="data.title"
            img-top
            tag="article"
            class="mb-3"
        >
        <b-card-text>
            <div class="movie-card-details" v-if="showDetails">
                <p>{{data.overview}}</p>
                <label>Avg. Vote:</label> {{data.vote_average}}
                <label>Release date:</label> {{data.release_date}}
            </div>
        </b-card-text>
        <b-button v-if="showDetails" v-on:click="lessDetails()">Less details</b-button>
        <b-button v-else v-on:click="moreDetails()" variant="primary">More details</b-button>
    </b-card>
    </div>
</template>

<script>

// genres: [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}],

export default {
  name: 'MovieCard',
  props: ['data'],
  data () {
    return {
      showDetails: false
    }
  },
  methods: {
    moreDetails () {
      this.showDetails = true
    },
    lessDetails () {
      this.showDetails = false
    }
  }
}
</script>
<style>
  .movie-card-details label {
    font-weight: 600;
    margin-left: 10px;
  }
</style>
