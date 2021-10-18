<template>
  <form @submit.prevent="findMovies" class="bg-white rounded elevation-1">
    <div class="form-group d-flex align-items-center m-3">
      <label for="search" class="sr-only"></label>
      <input v-model="query"
             type="text"
             name="search"
             class="form-control bg-white border-0 shadow"
             placeholder="search"
      >
      <button class="btn mx-3" type="submit">
        <i class="search-bg mdi mdi-movie-search f-18"></i>
      </button>
    </div>
  </form>
  <div class="component">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { moviesService } from '../services/MoviesService'
import Pop from '../utils/Pop'
import { onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const query = ref('')

    onMounted(() => {
      moviesService.getMovies()
      AppState.searchPhrase = window.localStorage.getItem('phrase')
      logger.log('search phrase', AppState.searchPhrase)
    })
    return {
      query,
      async findMovies() {
        try {
          await moviesService.searchMovies(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  },
  components: {}

}
</script>

<style lang="scss" scoped>
.search-bg{
  transition: all .2s ease-in-out;
}
.search-bg:hover {
  transform: scale(1.1); }
</style>
