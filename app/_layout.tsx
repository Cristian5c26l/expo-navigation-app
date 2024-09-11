import { Slot, SplashScreen, Stack } from 'expo-router'

import { useFonts } from 'expo-font';

import "./global.css"
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync(); // Esto evita que el SplashScreen se quite hasta que las fuentes esten cargadas

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    })

    // Hasta que las fuentes esten cargadas, tenemos que quitar el SplashScreen. Esto se hace desde useEffect
    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        < Slot />
        // <Stack />
    )
}

export default RootLayout