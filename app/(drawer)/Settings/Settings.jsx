import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const router = useRouter();

  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    // 🔗 Integrate Firebase logout logic here
    Alert.alert('Logged Out', 'You have been successfully logged out.');
  };

  const handleDeleteAccount = () => {
    // 🔗 Integrate delete account API from your Spring Boot backend
    Alert.alert('Account Deleted', 'Your account has been deleted.');
  };

  const handleChangePassword = () => {
    // 🔗 Navigate or trigger change password logic
    // Optionally integrate Spring Boot API to update password
    Alert.alert('Change Password', 'Password change flow triggered.');
  };

  const handlePrivacyPolicy = () => {
    // 🔗 Link to your privacy policy or navigate to webview
    Alert.alert('Privacy Policy', 'Display your privacy policy here.');
  };

  const handleTerms = () => {
    // 🔗 Link to your terms of service or navigate to webview
    Alert.alert('Terms & Conditions', 'Display your terms and conditions here.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push('/modals/EditProfile')}
          accessibilityLabel="Edit your profile"
        >
          <Ionicons name="person-circle-outline" size={22} color="#555" />
          <Text style={styles.rowText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={handleChangePassword}
          accessibilityLabel="Change your account password"
        >
          <Ionicons name="key-outline" size={22} color="#555" />
          <Text style={styles.rowText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.rowText}>Push Notifications</Text>
          <Switch value={pushNotifications} onValueChange={setPushNotifications} />
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.rowText}>Email Updates</Text>
          <Switch value={emailNotifications} onValueChange={setEmailNotifications} />
        </View>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity
          style={styles.row}
          onPress={handlePrivacyPolicy}
          accessibilityLabel="Read our privacy policy"
        >
          <Ionicons name="document-text-outline" size={20} color="#555" />
          <Text style={styles.rowText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={handleTerms}
          accessibilityLabel="Read terms and conditions"
        >
          <Ionicons name="information-circle-outline" size={20} color="#555" />
          <Text style={styles.rowText}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>

      {/* Danger Zone */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          accessibilityLabel="Logout from your account"
        >
          <MaterialCommunityIcons name="logout" size={20} color="white" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAccount}
          accessibilityLabel="Delete your account permanently"
        >
          <MaterialCommunityIcons name="delete" size={20} color="white" />
          <Text style={styles.deleteText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    // paddingTop: StatusBar.currentHeight || 20,
    marginTop:StatusBar.currentHeight || 20,
    marginBottom:50
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#ff3b30',
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: '#555',
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
