import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  movies: [],
  searchedMovies: [],
  searchPhrase: '',
  watchlist: [],
  currentQuery: '',
  currentPage: 0,
  totalPages: 0
})
