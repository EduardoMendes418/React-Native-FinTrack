import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTransactionScreen from '../src/screens/AddTransactionScreen';

const navigationMock = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('AddTransactionScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    
    expect(getByText('Add Transaction')).toBeTruthy();
    expect(getByTestId('amount-input')).toBeTruthy();
    expect(getByTestId('save-transaction-button')).toBeTruthy();
  });

  it('goes back when Save is pressed', () => {
    const { getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    
    fireEvent.press(getByTestId('save-transaction-button'));
    expect(navigationMock.goBack).toHaveBeenCalled();
  });
});
