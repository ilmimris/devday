// Provide resolver functions for your schema fields

// TODO: Define each query
export const resolvers = {
    Query: {
      moviesByTitle: (root, args, context) => {
        let session = context.driver.session();
        let query = "QUERY FOR MOVIES BY TITLE HERE";
        return session.run(query, args)
          .then( result => { return result.records.map(record => { return record.get("movie").properties })})
      },
    },
    Movie: {
      genres: (movie, _, context) => {
        let session = context.driver.session();
        let params = {movieId: movie.movieId};
        let query = `
                  QUERY FOR GENRES FOR A GIVEN MOVIE HERE
              `;
        
        return session.run(query, params)
            .then( result => { return result.records.map(record => {return record.get("genre")})})
    
      },
      similar: (movie, _, context) => {
        let session = context.driver.session();
        let params = {movieId: movie.movieId};
        let query = `
                MOVIE RECOMMENDATION QUERY HERE
              `;
        
        return session.run(query, params)
            .then( result => {return result.records.map(record => {return record.get("movie").properties})})
      }
    }
  };