import React from 'react';
import { 
  View, 
  StyleSheet, 
  ViewProps 
} from 'react-native';

interface FinCardProps extends ViewProps {
  children: React.ReactNode;
}

const FinCard: React.FC<FinCardProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
});

export default FinCard;
