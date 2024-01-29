const API_KEY = "8189cf205090e584646358807f4bd1e4"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
}

export default requests;