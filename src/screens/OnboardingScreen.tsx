import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Leaf } from 'lucide-react-native';
import Button from '../components/Button';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Leaf color="#008080" size={48} fill="#008080" />
          <Text style={styles.title}>FinTrack</Text>
          <Text style={styles.subtitle}>Personal Finance & Budget Manager</Text>
        </View>

        <View style={styles.illustrationContainer}>
          {/* Placeholder for the 3D isometric illustration */}
          <View style={styles.illustrationPlaceholder}>
            <View style={[styles.bar, { height: 40, backgroundColor: '#E2E8F0' }]} />
            <View style={[styles.bar, { height: 70, backgroundColor: '#94A3B8' }]} />
            <View style={[styles.bar, { height: 100, backgroundColor: '#008080' }]} />
            <Leaf color="#008080" size={32} style={styles.illustrationLeaf} />
          </View>
        </View>

        <View style={styles.footer}>
          <Button 
            title="Get Started" 
            onPress={() => navigation.navigate('Login')}
            testID="get-started-button"
          />
          <Button 
            title="Sign In" 
            variant="outline"
            style={styles.signInLink}
            onPress={() => navigation.navigate('Login')}
            testID="sign-in-link"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 8,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationPlaceholder: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 200,
    height: 150,
  },
  bar: {
    width: 30,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  illustrationLeaf: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  signInLink: {
    marginTop: 16,
    borderWidth: 0,
  },
});

export default OnboardingScreen;
