const API_KEY = "eb0b083f4cd7f39610f1d01ff7a4b200";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_keywords=action`,
  fetchComedyMoveies: `/discover/movie?api_key=${API_KEY}&with_keywords=comedy`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_keywords=horror`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_keywords=romance`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_keywords=documentries`,
};

export default requests;

// /discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_keywords=documentries
