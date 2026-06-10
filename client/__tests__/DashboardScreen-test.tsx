import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DashboardScreen from '../src/screens/DashboardScreen';

const navigationMock = {
  navigate: jest.fn(),
};

describe('DashboardScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<DashboardScreen navigation={navigationMock} />);
    
    expect(getByText('Total Balance')).toBeTruthy();
    expect(getByText('$2,500.00')).toBeTruthy();
    expect(getByText('Recent Transactions')).toBeTruthy();
    expect(getByTestId('add-transaction-fab')).toBeTruthy();
  });

  it('navigates to AddTransaction when FAB is pressed', () => {
    const { getByTestId } = render(<DashboardScreen navigation={navigationMock} />);
    
    fireEvent.press(getByTestId('add-transaction-fab'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('AddTransaction');
  });

  it('navigates to Transactions when See All is pressed', () => {
    const { getByText } = render(<DashboardScreen navigation={navigationMock} />);
    
    fireEvent.press(getByText('See All'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('Transactions');
  });
});
