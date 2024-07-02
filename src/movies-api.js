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
//   return response;
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

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
};

// const response = await axios.get(options);
// console.log(response);

// return response;
