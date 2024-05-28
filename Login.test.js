import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  const { getByPlaceholderText } = render(<Login />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Senha');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});