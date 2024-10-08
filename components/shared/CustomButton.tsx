import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {// Props al final de cuentas será un tipo de dato que es un objeto con las propiedades children, color y todas las propiedades de componente Pressable donde estas ultimas son opcionales
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = React.forwardRef(({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className }: Props, ref: React.Ref<View>) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];

    if (variant === 'text-only') {// Crear Button de solo texto
        return (
            <Pressable className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
            ref={ref}
        >
            <Text className='text-white text-center font-work-medium'>{children}</Text>
        </Pressable>
    )
})

export default CustomButton