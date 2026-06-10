import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OnboardingScreen from '../src/screens/OnboardingScreen';

const navigationMock = {
  navigate: jest.fn(),
};

describe('OnboardingScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<OnboardingScreen navigation={navigationMock} />);
    
    expect(getByText('FinTrack')).toBeTruthy();
    expect(getByText('Personal Finance & Budget Manager')).toBeTruthy();
    expect(getByTestId('get-started-button')).toBeTruthy();
  });

  it('navigates to Login when Get Started is pressed', () => {
    const { getByTestId } = render(<OnboardingScreen navigation={navigationMock} />);
    
    fireEvent.press(getByTestId('get-started-button'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('Login');
  });

  it('navigates to Login when Sign In is pressed', () => {
    const { getByTestId } = render(<OnboardingScreen navigation={navigationMock} />);
    
    fireEvent.press(getByTestId('sign-in-link'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('Login');
  });
});
