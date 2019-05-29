const request = require('supertest');

const app = require('./app');

const knownDefaultJokes = [
  {id: '1', value: 'my mother in law'},
  {id: '2', value: 'an englishman an irishman and a scotsman'}
];

describe('/joke', function() {
  let cachedFunction;

  beforeEach( () => {
    cachedFunction = Math.random;
    Math.random = jest.fn();
  });

  afterEach( () => {
    Math.random = cachedFunction;
  });

  it('GET : /joke lists all jokes', function() {
    return request(app)
      .get('/joke')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(knownDefaultJokes);
      });
  });

  it('GET : /joke/id gives a single joke', function() {
    return request(app)
      .get('/joke/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(knownDefaultJokes[0]);
      });
  });

  it('GET : /joke/random picks a random joke', async function() {

    Math.random.mockReturnValue(0);
    await request(app)
      .get('/joke/random')
      .then(response => {
        expect(response.body).toEqual(knownDefaultJokes[0]);
      });

    Math.random.mockReturnValue(0.999);
    return request(app)
      .get('/joke/random')
      .then(response => {
        expect(response.body).toEqual(knownDefaultJokes[1]);
      });

  });

  it('PUT : /joke adds a joke', async function() {
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
        expect(response.body).toEqual(newJoke);
      });
  });
});
