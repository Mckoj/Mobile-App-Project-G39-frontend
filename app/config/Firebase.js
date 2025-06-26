// // Import the functions you need from the SDKs
// import { initializeApp } from 'firebase/app'
// import {
//   initializeAuth,
//   getReactNativePersistence
// } from 'firebase/auth'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// // Your Firebase config
// const firebaseConfig = {
//   apiKey: 'AIzaSyAdE0DrlPCp1kLEbmwOo-xYe5k2WNAGph8',
//   authDomain: 'vesterapp-46245.firebaseapp.com',
//   projectId: 'vesterapp-46245',
//   storageBucket: 'vesterapp-46245.firebasestorage.app',
//   messagingSenderId: '157448495564',
//   appId: '1:157448495564:web:37f4e52418f1f9d71cbd69',
//   measurementId: 'G-ME6ZSFDF5Z'
// }

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig)

// // ✅ Initialize Auth with AsyncStorage persistence
// let auth
// try {
//   auth = getAuth(app)
// } catch (error) {
//   // If auth hasn't been initialized yet
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
//   })
// }

// export { auth }
