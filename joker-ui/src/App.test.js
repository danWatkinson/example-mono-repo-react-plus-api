import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Joker from './joke/components/Joker';
import jokerAPI from './joke/api/joker-api';

it('renders the Joker component, using chucknorris.io to populate the data', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Joker getJoke={jokerAPI} />)).toBe(true);
});
