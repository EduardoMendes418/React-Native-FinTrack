import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Switch,
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ScanFace, User, ChevronRight, HelpCircle } from 'lucide-react-native';

const SecuritySettingsScreen = ({ navigation }: any) => {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileWidget}>
          <View style={styles.avatarMini}>
            <User size={20} color="#FFFFFF" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Eduardo</Text>
            <Text style={styles.profileEmail}>eduardo@example.com</Text>
          </View>
        </View>

        <View style={styles.securityCard}>
          <Text style={styles.cardTitle}>Security Settings</Text>
          
          <View style={styles.biometricsContainer}>
            <View style={styles.faceIdFrame}>
              <ScanFace size={64} color="#008080" strokeWidth={1.5} />
            </View>
            <Text style={styles.biometricsTitle}>Face ID</Text>
            <Text style={styles.biometricsSubtitle}>Use biometrics for quick access</Text>
          </View>

          <View style={styles.settingsList}>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Enable Face ID</Text>
              <Switch 
                value={biometricsEnabled} 
                onValueChange={setBiometricsEnabled}
                trackColor={{ false: '#E2E8F0', true: '#008080' }}
                thumbColor="#FFFFFF"
                testID="biometric-toggle"
              />
            </View>
            <View style={styles.separator} />
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Two-Factor Auth</Text>
              <Switch 
                value={twoFactorEnabled} 
                onValueChange={setTwoFactorEnabled}
                trackColor={{ false: '#E2E8F0', true: '#008080' }}
                thumbColor="#FFFFFF"
              />
            </View>
            <View style={styles.separator} />
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Security Notifications</Text>
              <Switch 
                value={notificationsEnabled} 
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#E2E8F0', true: '#008080' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.helpLink}>
          <View style={styles.helpIconContainer}>
            <HelpCircle size={20} color="#64748B" />
          </View>
          <Text style={styles.helpText}>Go to Help Center</Text>
          <ChevronRight size={18} color="#94A3B8" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  scrollContent: {
    padding: 24,
  },
  profileWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  avatarMini: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  profileEmail: {
    fontSize: 12,
    color: '#64748B',
  },
  securityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 32,
    textAlign: 'center',
  },
  biometricsContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  faceIdFrame: {
    width: 120,
    height: 120,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderStyle: 'dashed',
  },
  biometricsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  biometricsSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  settingsList: {
    marginTop: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  separator: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  helpLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    padding: 16,
  },
  helpIconContainer: {
    marginRight: 8,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginRight: 4,
  },
});

export default SecuritySettingsScreen;
