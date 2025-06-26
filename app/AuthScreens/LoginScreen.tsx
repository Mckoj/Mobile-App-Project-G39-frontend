// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();

//   // Login handler
//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Validation Error', 'Email and Password are required');
//       return;
//     }

//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       Alert.alert('Success', 'You are now logged in');
//     } catch (error: any) {
//       Alert.alert('Login Failed', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#999"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#999"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleLogin}
//         disabled={loading}
//       >
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Login</Text>
//         )}
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
//         <Text style={styles.linkText}>Forgot Password?</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//     color: '#000',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   linkText: {
//     textAlign: 'center',
//     color: '#007AFF',
//     fontSize: 15,
//     marginTop: 10,
//   },
// });

// export default LoginScreen;
