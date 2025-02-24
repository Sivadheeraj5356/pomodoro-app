import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '@/components/CustomButton'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
const page1 = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(25)
  const [pomo, setPomo] = useState(false)
  useEffect(()=>{
  let timeId : NodeJS.Timeout
  if(pomo){
    if (minutes === 0 && seconds === 0) {
      setPomo(false);
    }
    if (seconds === 0 && minutes > 0) {
   timeId = setTimeout(()=>{
      setMinutes((prev)=> prev-1);
      setSeconds(59)}
      ,1000) ;
    } else if (seconds > 0) {
      timeId = setTimeout(() => {
        setSeconds((prev)=> prev-1);
      }, 1000);
    }
  }
  return () => {
    clearTimeout(timeId);
  };
 
  },[seconds, minutes, pomo])
  return (
    <View className='flex-1 justify-center items-center bg-zinc-200'>
      <View className='flex justify-start  mt-20'>
        <Text onPress={()=> router.push("/")} className='mr-80'><Ionicons  name="arrow-back-circle-outline" size={50} color="black" /></Text>
      </View>
      <View className='flex-1 justify-center'>
        <View className='mx-auto bg-neutral-800 rounded-full w-56 h-56 justify-center items-center'>
          <Text className='text-5xl text-white'>
          {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` :seconds}
          </Text>
        </View>
      </View>

      <View>
        <CustomButton 
        title={pomo ? "Stop timer" : "Start timer"}
        onPress={()=>
          setPomo(!pomo)
        }
        ></CustomButton>
      </View>
    </View>
  )
}

export default page1