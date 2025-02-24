import { View, Text } from 'react-native'
import React from 'react'

const affirmations = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <View>
      <Text className='text-xl mx-5'>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. </Text>
        <Text className='text-xl mx-5'>It helps improve focus and productivity by breaking work into short intervals, typically 25 minutes long, called pomodoros, followed by a short break.</Text> 
        <Text className='text-xl mx-5'> Here's how it works:</Text> 

        <Text className='text-xl mx-5'> 1. Work for 25 minutes (1 Pomodoro).</Text>
        <Text className='text-xl mx-5'> 2. Take a 5-minute break.</Text> 
        <Text className='text-xl mx-5'>  3. After completing four Pomodoros, take a longer break of 15–30 minutes.</Text> 
      <Text className='text-xl mx-5'> This cycle helps maintain focus and prevent burnout, promoting productivity by leveraging the balance between concentrated work and regular rest.</Text>
      </View>
    </View>
  )
}

export default affirmations