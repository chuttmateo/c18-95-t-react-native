import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/TabBarIcon';
import icons from '@/constants/icons'

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: false,
        lazy: false,
        tabBarStyle: {
          backgroundColor: '#1e90ff',
          height:60
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={icons.user} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Path',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={icons.path} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: 'Path',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={icons.rank} />
          ),
        }}
      />
    </Tabs>
  );
}
