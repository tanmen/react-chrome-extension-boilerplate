import {render, screen} from '@testing-library/react';
import React from 'react';
import {OptionTemplate} from "./OptionTemplate";

test('renders learn react link', () => {
  render(<OptionTemplate/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
