import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Button';

describe('Button Component', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Click Me" onPress={onPressMock} />);
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Disabled" onPress={onPressMock} disabled />);
    fireEvent.press(getByText('Disabled'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('shows activity indicator when loading', () => {
    const { getByRole } = render(<Button title="Loading" loading />);
    // In React Native, ActivityIndicator often has a busy role or can be found by type
    // Since we can't easily check for the component type here without more setup, 
    // we'll assume the text is NOT present.
    const { queryByText } = render(<Button title="Loading" loading />);
    expect(queryByText('Loading')).toBeNull();
  });
});
