import React, { useEffect, useState } from 'react';
import { Stack, useRouter} from 'expo-router';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./config/Firebase"
import {User} from 'firebase/auth'
import { View, ActivityIndicator} from 'react-native' 

export default function RootLayout() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     setLoading(false);
  //     if (!user && router.pathname !== '/(AuthScreens)/Login') {
  //       router.replace('/(AuthScreens)/Login');
  //     } else if (user && !router.pathname.startsWith('/(tabs)')) {
  //       router.replace('/(tabs)');
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
