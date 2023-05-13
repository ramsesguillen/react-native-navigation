import { Button, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 1</Text>

            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen') }
            />
            <Text style={{ marginVertical: 20, fontSize: 20 }}>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    }) }
                >
                    <Text style={styles.botonGrandeText}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: 'coral'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    }) }
                >
                    <Text style={styles.botonGrandeText}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
