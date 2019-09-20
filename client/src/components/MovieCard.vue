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
            {{data.overview}}
        </b-card-text>

        <b-button href="#" variant="primary">More details</b-button>
    </b-card>
    </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['data']
}
</script>