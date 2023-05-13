import { Button, View } from 'react-native';
import React, { useContext, useEffect } from 'react'

import { AuthContext } from '../context/AuthContext';
import { Text } from 'react-native-paper';

export const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext);

    useEffect(() => {
        console.log('tab 1');
    }, [])

    return (
        <View>
            <Text>ContactsScreen</Text>
            {
                !authState.isLoggedIn &&
                    <Button
                        title='SignIn'
                        onPress={ signIn }
                    />
            }
        </View>
    )
}
