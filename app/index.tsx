import { View, Text, ImageBackground , SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import beachImage from '@/assets/meditation-images/beach.webp'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
const App = () => {
  const router = useRouter()
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <LinearGradient className='flex-1  w-full'
        colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className='flex-1 px-2 justify-between mx-5'>
            <View>
        <Text className="text-white text-center text-5xl font-bold mt-14">POMODORO</Text>
           <Text className='text-white text-center text-xl'>Maximize your daily productivity</Text>
            </View>
            <View>
              <CustomButton title='Get Started'
              onPress={()=> router.push('/page1')}
             containerStyles='bg-white '
            ></CustomButton>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App
