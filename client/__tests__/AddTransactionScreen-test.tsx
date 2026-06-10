import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import AddTransactionScreen from '../src/screens/AddTransactionScreen';

const navigationMock = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('AddTransactionScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    
    expect(getByText('Add Transaction')).toBeTruthy();
    expect(getByTestId('amount-input')).toBeTruthy();
    expect(getByTestId('save-transaction-button')).toBeTruthy();
  });

  it('updates amount and description when typing', () => {
    const { getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    
    const amountInput = getByTestId('amount-input');
    const descInput = getByTestId('description-input');

    fireEvent.changeText(amountInput, '150.50');
    fireEvent.changeText(descInput, 'Dinner with friends');

    expect(amountInput.props.value).toBe('150.50');
    expect(descInput.props.value).toBe('Dinner with friends');
  });

  it('processes Smart AI Entry correctly', async () => {
    const { getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    
    const aiInput = getByTestId('ai-input');
    const processButton = getByTestId('ai-process-button');

    fireEvent.changeText(aiInput, 'Spent 50 dollars on pizza today');
    fireEvent.press(processButton);

    // Advance timers for the mock parsing delay
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    await waitFor(() => {
      expect(getByTestId('amount-input').props.value).toBe('50');
      expect(getByTestId('description-input').props.value).toBe('Spent 50 dollars on pizza today');
    });
  });

  it('goes back when Save is pressed', () => {
    const { getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    
    fireEvent.press(getByTestId('save-transaction-button'));
    expect(navigationMock.goBack).toHaveBeenCalled();
  });

  it('disables Process button when AI input is empty', () => {
    const { getByTestId } = render(<AddTransactionScreen navigation={navigationMock} />);
    const processButton = getByTestId('ai-process-button');
    
    expect(processButton).toBeDisabled();
  });
});
