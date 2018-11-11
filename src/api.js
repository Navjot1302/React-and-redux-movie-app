

function getMovies(searchText){
    axios.get(`http://www.omdbapi.com/?apikey=b7fb599a&${searchText}`)
      .then((response) => response.data.results)
      }
//   let movies = response.data.results;
//   let output = '';
//   $.each(movies, (index, movie) => {
//     output+=`
//       <div class="col-md-3">
//         <div class="well text-center">
//           <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
//           <h5>${movie.title}</h5>
//           <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
//         </div>
//       </div>
//     `;
//   });
//   $('#movies').html(output);
// })
// .catch(function (error) {
//   console.log(error);
// });

export default getMovies;