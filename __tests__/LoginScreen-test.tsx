import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';

const navigationMock = {
  navigate: jest.fn(),
};

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<LoginScreen navigation={navigationMock} />);
    
    expect(getByText('FinTrack')).toBeTruthy();
    expect(getByTestId('login-email-input')).toBeTruthy();
    expect(getByTestId('login-password-input')).toBeTruthy();
    expect(getByTestId('login-submit-button')).toBeTruthy();
  });

  it('navigates to Main when Sign In is pressed', () => {
    const { getByTestId } = render(<LoginScreen navigation={navigationMock} />);
    
    fireEvent.press(getByTestId('login-submit-button'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('Main');
  });
});
