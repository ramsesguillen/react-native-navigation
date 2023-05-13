import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab 1');
    }, [])
    return (
        <View style={{
            marginTop: top + 10,
        }}>
            <Text style={ styles.title }>Icons</Text>
            <View>
                <TouchableIcon name="alarm-outline" />
                <TouchableIcon name="archive-outline" />
                <TouchableIcon name="bug-outline" />
            </View>
        </View>
    )
}
