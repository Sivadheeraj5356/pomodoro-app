import { Slot, SplashScreen, Stack } from "expo-router";


export default function Rootlayout(){
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown:false}} />
            <Stack.Screen name="index" options={{ headerShown:false}}
    />
        </Stack>
    )
}