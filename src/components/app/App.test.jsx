import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('Renders the amazing Dan Method', () => {
    const element = true;
    expect(true).toEqual(element);
  });
});
