import { Button, View } from 'react-native';
import React, { useContext, useEffect } from 'react'

import { AuthContext } from '../context/AuthContext';
import { Text } from 'react-native-paper';

export const AlbumsScreen = () => {

    const { authState, logout } = useContext(AuthContext)

    useEffect(() => {
        console.log('tab 1');
    }, [])
    return (
        <View>
            <Text>AlbumsScreen</Text>

            {
                authState.isLoggedIn &&
                    <Button
                        title='Logout'
                        onPress={ logout }
                    />
            }
        </View>
    )
}
