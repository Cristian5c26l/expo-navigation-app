import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {
    return (

        <SafeAreaView>
            <View className='px-2 mt-5'>
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}


                <CustomButton className='mb-2' onPress={() => router.push('/products')}>Productos</CustomButton>
                <CustomButton className='mb-2' color='secondary' onPress={() => router.push('/profile')}>Perfil</CustomButton>
                <CustomButton className='mb-2' color='tertiary' onPress={() => router.push('/settings')}>Ajustes</CustomButton>

                <Link href='/products' asChild>
                    <CustomButton variant='text-only' className='mb-2'>Productos</CustomButton>
                </Link>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen