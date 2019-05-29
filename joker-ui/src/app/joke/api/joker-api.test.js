const nock = require('nock');

import jokerAPI from './joker-api';

describe( 'joker-api', () => {

  it('resolves with response from http://localhost:3000/joke/random', async() => {

    const mockJoke = {
      id: '123',
      value: 'a man walked into a bar'
    };

    await nock('http://localhost:3000')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/joke/random')
      .reply(200, mockJoke);

    const actual = await jokerAPI();

    expect(actual).toEqual(mockJoke);

  });
});
