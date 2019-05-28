const loki = require('lokijs');
const db = new loki('jokes');

class JokeData {
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
}

module.exports = JokeData;
