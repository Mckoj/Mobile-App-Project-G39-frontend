// app/tabs/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons,MaterialIcons,AntDesign,Octicons ,Feather,FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function TabsLayout() {
  const navigation = useNavigation();
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Following') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }
           else if (route.name === 'Spaces') {
           iconName = focused ? "people-circle" : 'people-circle-outline';
          
          } else if (route.name ==='Answer') {
            iconName = focused ? 'pencil-square': 'pencil-square-o';
            return <FontAwesome name={iconName} size={size} color={color} />
          
          } else if (route.name === 'Notifications') {
            iconName = focused ? "notifications-sharp" : "notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name ="index"/>
      <Tabs.Screen name ="Following"/>
      <Tabs.Screen name ="Answer"/>
      <Tabs.Screen name ="Spaces"/>
      <Tabs.Screen name ="Notifications"/>
    </Tabs>
  );
}
