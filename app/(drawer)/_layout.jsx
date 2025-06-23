import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function Layout() {
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

