import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from '../src/components/Input';

describe('Input Component', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<Input label="Email" />);
    expect(getByText('Email')).toBeTruthy();
  });

  it('updates value when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter email" onChangeText={onChangeTextMock} />
    );
    
    fireEvent.changeText(getByPlaceholderText('Enter email'), 'test@example.com');
    expect(onChangeTextMock).toHaveBeenCalledWith('test@example.com');
  });

  it('shows error message when provided', () => {
    const { getByText } = render(<Input label="Email" error="Invalid email" />);
    expect(getByText('Invalid email')).toBeTruthy();
  });
});
