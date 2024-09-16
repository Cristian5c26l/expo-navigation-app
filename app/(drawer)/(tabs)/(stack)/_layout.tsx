import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
            navigation.dispatch(StackActions.pop());
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    // Con Stack, se muestra el componente del primer app/index.tsx que se haya encontrado. Ademas, se muestra un StackNavigator que contiene el nombre de la ruta actual
    return (
        <Stack
            screenOptions={{
                // headerShown: false,// Ocultar el titulo asociado al nombre de la ruta
                // headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },

                headerLeft: ({ tintColor, canGoBack }) => (<Ionicons size={20} name={canGoBack ? 'arrow-back-outline' : 'grid-outline'} className='mr-5' onPress={() => onHeaderLeftClick(canGoBack)} />)
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