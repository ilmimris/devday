// This component is used at the beginning of the exercise as a skeleton example
// We'll replace this component with one that uses GraphQL to fetch movies

import React, {Component} from 'react';
import {Item} from 'semantic-ui-react';
import Movie from './Movie';

class MovieList extends Component {

  data = {
    movies: [{
      "title": "River Runs Through It, A",
      "year": 1992,
      "imdbRating": 7.3,
      "poster": "https://m.media-amazon.com/images/M/MV5BNzE4YWZkOWMtOWZlNS00NzU4LTk5MDQtZjZkNDllMjM1NGI1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "plot": "The story about two sons of a stern minister -- one reserved, one rebellious -- growing up in rural Montana while devoted to fly fishing.",
      "genres": [
        "Drama"
      ],
      "similar": [
        {
          "title": "Forrest Gump",
          "year": 1994,
          "imdbRating": 8.8,
          "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          "plot": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
          "genres": [
            "War",
            "Romance",
            "Drama",
            "Comedy"
          ]
        },
        {
          "title": "Titanic",
          "year": 1997,
          "imdbRating": 7.7,
          "poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
          "plot": "A seventeen-year-old aristocrat falls in love with a kind, but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
          "genres": [
            "Drama",
            "Romance"
          ]
        },
        {
          "title": "Shawshank Redemption, The",
          "year": 1994,
          "imdbRating": 9.3,
          "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "genres": [
            "Drama",
            "Crime"
          ]
        }
      ]
    }

    ]
  };

  render() {
  if (this.data.loading) return <div>Loading...</div>;
  if (this.data.error) return <div>Error!</div>;
  if (this.data.movies.length === 0) return <div>No movies!</div>;

  return (
    <Item.Group divided>
      {this.data.movies.map(movie => (
        <Movie
          key={movie.movieId}
          title={movie.title}
          poster={movie.poster}
          plot={movie.plot}
          rating={movie.imdbRating}
          genres={movie.genres}
          similar={movie.similar}
          year={movie.year}

        />
      ))}
    </Item.Group>
  );
  }
}

export default MovieList;
