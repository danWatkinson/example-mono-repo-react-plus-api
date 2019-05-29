const loki = require('lokijs');
const db = new loki('jokes');

function tidyResult(result) {
  return {id: result.id, value: result.value}
}

function tidyResults(results) {
  return results.map(tidyResult);
}

class JokeDAO {
  constructor() {
    this.jokes = db.addCollection('jokes', { indices: ['id'] });

    this.jokes.insert( { id : '1', value : 'my mother in law' } );
    this.jokes.insert( { id : '2', value : 'an englishman an irishman and a scotsman' } );
  }

  list() {
    return tidyResults(this.jokes.find());
  }

  getById(id) {
    return tidyResult( this.jokes.findOne({'id': { '$eq' : id }}) );
  }

  put(joke) {
    return tidyResult( this.jokes.insert(joke) );
  }

  getRandomJoke() {
    const allJokes = this.list();
    const selection = Math.floor(Math.random() * allJokes.length)
    return tidyResult( allJokes[selection] );
  }
}

module.exports = JokeDAO;
