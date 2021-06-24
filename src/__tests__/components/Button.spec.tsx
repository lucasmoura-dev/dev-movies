import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Button from '../../components/Button';

describe('Button Component', () => {
  it('should show a text', () => {
    const {getByTestId} = render(<Button>Hello</Button>);
    expect(getByTestId('buttonContent')).toBeTruthy();
  });
});
