import React, { useEffect } from 'react'

import { Text } from 'react-native-paper';
import { View } from 'react-native';

export const ChatScreen = () => {
    useEffect(() => {
        console.log('tab 1');
    }, [])
    return (
        <View>
            <Text>ChatScreen</Text>
        </View>
    )
}
