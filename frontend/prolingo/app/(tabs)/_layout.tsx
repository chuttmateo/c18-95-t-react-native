import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/TabBarIcon';
import icons from '@/constants/icons'

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon  color={color} icon={ icons.user} />
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
