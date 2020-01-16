// Provide resolver functions for your schema fields

// TODO: Define each query
export const resolvers = {
    Query: {
      moviesByTitle: (root, args, context) => {
        let session = context.driver.session();
        let query = "MATCH (movie:Movie) WHERE movie.title CONTAINS $subString RETURN movie LIMIT $first;";
        return session.run(query, args)
          .then( result => { return result.records.map(record => { return record.get("movie").properties })})
      },
    },
    Movie: {
      genres: (movie, _, context) => {
        let session = context.driver.session();
        let params = {movieId: movie.movieId};
        let query = `
          MATCH(m:Movie)-[:IN_GENRE]->(g:Genre)
          WHERE m.movieId = $movieId
          RETURN g.name AS genre
        `;
        
        return session.run(query, params)
            .then( result => { return result.records.map(record => {return record.get("genre")})})
    
      },
      similar: (movie, _, context) => {
        let session = context.driver.session();
        let params = {movieId: movie.movieId};
        let query = `
          MATCH (m:Movie) WHERE m.movieId = $movieId
          MATCH (m)-[:IN_GENRE]->(g:Genre)<-[:IN_GENRE]-(movie:Movie)
          WITH m, movie, COUNT(*) AS genreOverlap
          MATCH (m)<-[:RATED]-(:User)-[:RATED]->(movie:Movie)
          WITH movie,genreOverlap, COUNT(*) AS userRatedScore
          RETURN movie ORDER BY (0.9 * genreOverlap) + (0.1 * userRatedScore)  DESC LIMIT 3
        `;
        
        return session.run(query, params)
            .then( result => {return result.records.map(record => {return record.get("movie").properties})})
      }
    }
  };