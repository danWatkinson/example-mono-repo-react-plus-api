const request = require('supertest');
const assert = require('assert');

const app = require('./app');

const knownDefaultJokes = [
  {id: '1', value: 'my mother in law'},
  {id: '2', value: 'an englishman an irishman and a scotsman'}
];

describe('/joke', function() {

  it('GET : /joke lists all jokes', function() {
    return request(app)
      .get('/joke')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const actual = response.body.map( joke => {return {id: joke.id, value: joke.value}} );
        const expected = knownDefaultJokes;

        assert.deepEqual(actual, expected);
      });
  });

  it('GET : /joke/id gives a single joke', function() {
    return request(app)
      .get('/joke/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const actual = {id: response.body.id, value: response.body.value}
        const expected = knownDefaultJokes[0];

        assert.deepEqual(actual, expected);
      });
  });

  it('PUT : /JOKE adds a joke', async function() {
    const newJoke = {id: '3', value: 'a man walks into a bar'};

    await request(app)
      .put('/joke')
      .send({joke: newJoke})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    return request(app)
      .get('/joke/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const actual = {id: response.body.id, value: response.body.value}
        const expected = newJoke;

        assert.deepEqual(actual, expected);
      });
  });
});
