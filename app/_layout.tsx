// import '../global.css';

// // app/_layout.tsx
// import { Stack } from 'expo-router';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// export default function RootLayout() {
//   return (
//     <SafeAreaProvider>
//       <Stack screenOptions={{ headerShown: false }} />
//     </SafeAreaProvider>
//   );
// }

// app/_layout.tsx
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';


// export default function DrawerLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer
//       screenOptions={{
//         header: () => null , // we'll use our own header component in child screens
//       }}
//     />
//     </GestureHandlerRootView>
//   );
// }


import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreens" />  {/* Auth Flow */}
      <Stack.Screen name="(drawer)" />      {/* Main App */}
      <Stack.Screen
        name="modals/editProfile"
        options={{
          presentation: 'modal',       // Important: makes it appear as a modal
          headerTitle: 'Edit Profile',  // Optional: show title at the top of the modal
        }}
      />
    </Stack>
  );
}
