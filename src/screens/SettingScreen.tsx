import React, { useContext } from 'react'
import { Text, View } from 'react-native'

import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingScreen = () => {

    const insets = useSafeAreaInsets();

    const { authState } = useContext(AuthContext)

    return (
        <View style={{
            marginTop: insets.top // trae la medida para poner el safe area arriba [top, bottom, left, right]
        }}>
            <Text>Settings</Text>
            <Text>{ JSON.stringify(authState) }</Text>

            {
                authState.favoriteIcon &&
                    <Icon
                        name={ authState.favoriteIcon }
                        size={80}
                        color={ colors.primary }
                    />
            }

        </View>
    )
}
