import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// export const getMoviesTrending = async () => {
//   const response = await axios.get("/trending/movie/day", {
//     params: {
//       language: "en-US",
//       api_key: "5e18e99079974297010e6b9ba642f0c3",
//     },
//   });

//   console.log(response);
//   return response.data.results;
// };

export const getMoviesTrending = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE4ZTk5MDc5OTc0Mjk3MDEwZTZiOWJhNjQyZjBjMyIsInN1YiI6IjY2NWViZWE5N2IyMTUyMDZlODU0OGQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuAmjixyR5ZEvp4uJbVCqsrTnbTqxfU-cBNgdP2s9yg",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getMovieById = async (Id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${Id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE4ZTk5MDc5OTc0Mjk3MDEwZTZiOWJhNjQyZjBjMyIsInN1YiI6IjY2NWViZWE5N2IyMTUyMDZlODU0OGQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuAmjixyR5ZEvp4uJbVCqsrTnbTqxfU-cBNgdP2s9yg",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getMovieCasts = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE4ZTk5MDc5OTc0Mjk3MDEwZTZiOWJhNjQyZjBjMyIsIm5iZiI6MTcyMjI0MzcxMC4wOTU3NjIsInN1YiI6IjY2NWViZWE5N2IyMTUyMDZlODU0OGQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bd6dga8yik5rPdshbEQXf3egG_IVVttzf60Qv2nrlgI",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.cast);
      return response.data.cast;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getMovieReviews = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE4ZTk5MDc5OTc0Mjk3MDEwZTZiOWJhNjQyZjBjMyIsIm5iZiI6MTcyMjI0MzcxMC4wOTU3NjIsInN1YiI6IjY2NWViZWE5N2IyMTUyMDZlODU0OGQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bd6dga8yik5rPdshbEQXf3egG_IVVttzf60Qv2nrlgI",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getMovieSearch = async (value) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      include_adult: "false",
      language: "en-US",
      page: "1",
      query: value,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE4ZTk5MDc5OTc0Mjk3MDEwZTZiOWJhNjQyZjBjMyIsIm5iZiI6MTcyMjMzMDc1Ni45NzgzNDcsInN1YiI6IjY2NWViZWE5N2IyMTUyMDZlODU0OGQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-rTXoHBZY18kFkUFkPbcipfQdv_pIQDFhl7HZCDTAg",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
};
// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE4ZTk5MDc5OTc0Mjk3MDEwZTZiOWJhNjQyZjBjMyIsInN1YiI6IjY2NWViZWE5N2IyMTUyMDZlODU0OGQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuAmjixyR5ZEvp4uJbVCqsrTnbTqxfU-cBNgdP2s9yg",
//   },
// };

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
