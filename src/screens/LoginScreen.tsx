import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Leaf, Mail, Lock } from 'lucide-react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Leaf color="#008080" size={40} fill="#008080" />
          <Text style={styles.title}>FinTrack</Text>
        </View>

        <View style={styles.form}>
          <Input 
            label="Email"
            placeholder="Enter your email"
            icon={<Mail size={20} color="#64748B" />}
            keyboardType="email-address"
            autoCapitalize="none"
            testID="login-email-input"
          />
          <Input 
            label="Password"
            placeholder="Enter your password"
            icon={<Lock size={20} color="#64748B" />}
            secureTextEntry
            testID="login-password-input"
          />
          
          <Button 
            title="Sign In" 
            onPress={() => navigation.navigate('Main')}
            style={styles.signInButton}
            testID="login-submit-button"
          />

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.line} />
          </View>

          <Button 
            title="Sign In with Google" 
            variant="outline"
            style={styles.socialButton}
            testID="google-login-button"
          />
          <Button 
            title="Sign In with Apple" 
            variant="outline"
            style={styles.socialButton}
            testID="apple-login-button"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 8,
  },
  form: {
    width: '100%',
  },
  signInButton: {
    marginTop: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#64748B',
    fontSize: 14,
  },
  socialButton: {
    marginBottom: 16,
    borderColor: '#E2E8F0',
  },
});

export default LoginScreen;
