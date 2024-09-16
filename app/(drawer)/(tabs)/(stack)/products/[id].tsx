import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store';

const ProductScreen = () => {

    // const params = useLocalSearchParams();

    // console.log(params);// muestra por ejemplo {id: 2}

    const { id } = useLocalSearchParams();// este "id" viene gracias a que el nombre del archivo actual se llama "[id].tsx"

    const navigation = useNavigation();

    const product = products.find((p) => p.id === id);

    useEffect(() => {
        navigation.setOptions({
            title: product?.title ?? 'Producto',
        });
    }, [product]);// Disparar este efecto cuando el product cambie

    if (!product) {
        return <Redirect href='/' />
    }

    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black'>{product.title}</Text>
            <Text className=''>{product.description}</Text>
            <Text className='font-work-black'>${product.price}</Text>
        </View>
    )
}

export default ProductScreen