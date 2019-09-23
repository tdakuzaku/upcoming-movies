<template>
    <div>
        <b-card
          @click="showDetails(data.id)"
          :img-src="'https://image.tmdb.org/t/p/w500' + data.backdrop_path"
          :img-alt="data.title"
          img-top
        >
        <div v-if="data.id == this.showId" class="movie-card-details">
          <h2>{{data.title}}</h2>
          <p>{{data.overview}}</p>
          <label>Genre(s):</label> {{showMovieGenres(data.genre_ids)}}
          <label>Release date:</label> {{data.release_date}}
          <label>Avg. Vote:</label> {{data.vote_average}}
        </div>
    </b-card>
    </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['data', 'genres'],
  data () {
    return {
      showId: null
    }
  },
  methods: {
    showDetails (id) {
      this.showId = (this.showId !== id) ? id : null
    },
    showMovieGenres (ids) {
      var genreIds = JSON.parse(JSON.stringify(ids))
      var movieGenres = []
      this.genres.forEach((el) => {
        var index = genreIds.indexOf(el.id)
        if (index >= 0) {
          movieGenres.push(this.genres[index].name)
        }
      })
      return movieGenres.join(',')
    }
  }
}
</script>
<style>
  .card-body {
    color: #FFF;
    background-color:rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    height: 100%;
    padding: 1.25rem 0!important;
  }
  .movie-card-details label {
    font-weight: 600;
    margin-left: 10px;
  }
</style>
