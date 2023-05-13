import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme'

interface Props {
    name: string;
}

export const TouchableIcon = ({ name }: Props) => {

    const { changeFavIcon } = useContext(AuthContext)
    return (
        <TouchableOpacity
            onPress={() => changeFavIcon(name)}
        >
            <Icon name={ name } size={80} color={ colors.primary } />
        </TouchableOpacity>
    )
}
