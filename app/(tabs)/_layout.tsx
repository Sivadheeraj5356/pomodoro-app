import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import Entypo from '@expo/vector-icons/Entypo';


const TabsLayout = () => {
  return (
     <Tabs screenOptions={{ headerShown: false , tabBarActiveTintColor:Colors.primary}}>
  <Tabs.Screen name='page1'
   options={{
     tabBarLabel: "Home",
     tabBarIcon : ({ color })=>(
        <Entypo name="home" size={24} color={color} />
     )
    }}

  />
  <Tabs.Screen name='affirmations'
   options={{
     tabBarLabel: "Settings",
     tabBarIcon : ({ color })=>(
  <Entypo name="open-book" size={24} color={color} />     )
    }}

  />
     </Tabs>
  )
}

export default TabsLayout