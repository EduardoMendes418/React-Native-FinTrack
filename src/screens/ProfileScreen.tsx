import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Settings, Bell, Shield, HelpCircle, ChevronRight, Tag, Target } from 'lucide-react-native';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <User size={48} color="#FFFFFF" />
          </View>
        </View>
        <Text style={styles.userName}>Eduardo</Text>
        <Text style={styles.userEmail}>eduardo@example.com</Text>
      </View>

      <ScrollView style={styles.menuContainer}>
        <MenuItem 
          icon={<User size={20} color="#64748B" />} 
          label="Profile" 
          onPress={() => {}}
        />
        <MenuItem 
          icon={<Tag size={20} color="#64748B" />} 
          label="Category Manager" 
          onPress={() => navigation.navigate('CategoryManager')}
        />
        <MenuItem 
          icon={<Target size={20} color="#64748B" />} 
          label="Savings Goals" 
          onPress={() => navigation.navigate('SavingsGoals')}
        />
        <MenuItem 
          icon={<Settings size={20} color="#64748B" />} 
          label="Account Settings" 
          onPress={() => {}}
        />
        <MenuItem 
          icon={<Bell size={20} color="#64748B" />} 
          label="Notifications" 
          onPress={() => {}}
        />
        <MenuItem 
          icon={<Shield size={20} color="#64748B" />} 
          label="Security" 
          onPress={() => navigation.navigate('SecuritySettings')}
        />
        <MenuItem 
          icon={<HelpCircle size={20} color="#64748B" />} 
          label="Help Center" 
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, label, onPress }: { icon: any, label: string, onPress: () => void }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <View style={styles.menuIconContainer}>{icon}</View>
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <ChevronRight size={20} color="#94A3B8" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#1E293B',
    paddingVertical: 48,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userEmail: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
  menuContainer: {
    padding: 24,
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
});

export default ProfileScreen;
