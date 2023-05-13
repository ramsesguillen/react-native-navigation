import { Button, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { AuthContext } from '../context/AuthContext';
import { RootSackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootSackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ navigation, route }: Props) => {

    const params = route.params;

    const { changeUserName } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre)
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>{
                JSON.stringify(params, null, 3)
            }</Text>

            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen') }
            />

        </View>
    )
}
