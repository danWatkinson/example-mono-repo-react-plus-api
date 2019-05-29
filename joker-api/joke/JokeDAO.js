const loki = require('lokijs');
const db = new loki('jokes');

class JokeDAO {
  constructor() {
    this.jokes = db.addCollection('jokes', { indices: ['id'] });

    this.jokes.insert( { id : '1', value : 'my mother in law' } );
    this.jokes.insert( { id : '2', value : 'an englishman an irishman and a scotsman' } );
  }

  list() {
    return this.jokes.find();
  }

  getById(id) {
    return this.jokes.findOne({'id': { '$eq' : id }});
  }

  put(joke) {
    return this.jokes.insert(joke);
  }

  getRandomJoke() {
    const allJokes = this.list();
    const selection = Math.floor(Math.random() * allJokes.length)
    return allJokes[selection];
  }
}

module.exports = JokeDAO;
