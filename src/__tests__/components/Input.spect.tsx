import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Input from '../../components/Input';

describe('Input Component', () => {
  it('should show a text', () => {
    const value = 'Deadpool';
    const {getByDisplayValue} = render(
      <Input onClear={jest.fn} onSubmit={jest.fn} value={value} />,
    );
    expect(getByDisplayValue(value)).toBeTruthy();
  });

  it('should clear the content when pressed the clear button', () => {
    let value = 'Deadpool';
    const onClear = jest.fn(() => (value = ''));
    const onChange = jest.fn(text => (value = text));
    const {getByTestId} = render(
      <Input
        onClear={onClear}
        onSubmit={jest.fn}
        value={value}
        onChangeText={onChange}
      />,
    );

    fireEvent.press(getByTestId('clearButton'));
    expect(onClear).toHaveBeenCalled();
    expect(value).toBe('');
  });

  it('should submit', () => {
    const onSubmit = jest.fn(() => {});
    const {getByTestId} = render(
      <Input
        onClear={jest.fn}
        onSubmit={onSubmit}
        value=""
        onChangeText={jest.fn}
      />,
    );

    const input = getByTestId('input');
    fireEvent.changeText(input, 'Deadpool');
    fireEvent(input, 'submitEditing');

    expect(onSubmit).toHaveBeenCalled();
  });
});
