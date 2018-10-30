const mongoose = require('mongoose');

const db = 'mongodb://zq:aventador700@ds241133.mlab.com:41133/zqmovie';

mongodb: mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('mongoose connected to mongodb');
  })
  .catch(error => {
    console.log('mongoose connection error', error);
  });

//this line below doesn't have a 'new' as in blackboard slide

//Title, Year, Genre, Actors, Plot and Poster
const schema = mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: String
  },
  genre: {
    type: String
  },
  actors: {
    type: String
  },
  plot: {
    type: String
  },
  poster: {
    type: String
  }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie; //name of model
