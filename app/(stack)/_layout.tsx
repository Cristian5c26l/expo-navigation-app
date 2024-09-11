import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    // Con Stack, se muestra el componente del primer app/index.tsx que se haya encontrado. Ademas, se muestra un StackNavigator que contiene el nombre de la ruta actual
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio',
                    // animation: 'ios',
                }}
            />

            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Productos',
                }}
            />

            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Perfil',
                }}
            />

            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes',
                }}
            />
        </Stack>
    )
}

export default StackLayout