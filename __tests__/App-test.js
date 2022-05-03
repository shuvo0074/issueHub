/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import getTimeDifference from '../src/services/getTimeDifference';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('returns difference properly', () => {
  expect(getTimeDifference(new Date())).toBe('1 day')
})
