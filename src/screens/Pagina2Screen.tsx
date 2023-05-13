import { Button, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {

    const navigation = useNavigation<any>();

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola',
            headerBackTitle: 'Atras'
        });
    }, [])


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 2</Text>

            <Button
                title='Ir a pagina 3'
                onPress={() => navigation.navigate('Pagina3Screen') }
            />
        </View>
    )
}
