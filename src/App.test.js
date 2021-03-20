import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './Components/Copyright';

test('renders business directory header', () => {
  const { getByText } = render(<Copyright/>);
  const buttonText = getByText('Your Website');
  expect(buttonText).toBeInTheDocument();
});
