import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  variant = 'primary', 
  loading = false,
  style,
  disabled,
  ...props 
}) => {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isPrimary ? styles.primaryButton : isOutline ? styles.outlineButton : styles.secondaryButton,
        disabled && styles.disabledButton,
        style
      ]}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? "#008080" : "#FFF"} />
      ) : (
        <Text style={[
          styles.text, 
          isPrimary ? styles.primaryText : isOutline ? styles.outlineText : styles.secondaryText
        ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 54, // Global system height
    paddingHorizontal: 24,
    borderRadius: 12, // Global system border radius
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#008080',
  },
  secondaryButton: {
    backgroundColor: '#334155',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#008080',
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#008080',
  },
});

export default Button;
