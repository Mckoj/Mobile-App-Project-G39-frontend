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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      screenOptions={{
        header: () =>null , // we'll use our own header component in child screens
      }}
    />
    </GestureHandlerRootView>
  );
}


