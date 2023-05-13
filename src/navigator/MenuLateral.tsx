import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { colors, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons'
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { Tabs } from './Taps';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: (width >= 768) ? 'permanent' : 'front',
                headerShown: false,
            }}
            drawerContent={(props) => <MenuInterno {...props}/>}
        >
            <Drawer.Screen name="Tabs" options={{
                // headerShown: true
            }} component={Tabs} />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={ styles.avatarContainer }>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/147/147285.png'
                    }}
                    style={ styles.avatar }
                />
            </View>

            <View style={ styles.menuContainer }>
                <TouchableOpacity
                    style={ styles.menuBoton }
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={ styles.menuTexto }>
                        <Icon name="expand-outline" size={25} color={ colors.primary } />
                        Navegacion
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.menuBoton }
                    onPress={() => navigation.navigate('SettingScreen')}
                >
                    <Text style={ styles.menuTexto }>
                        <Icon name="code-slash-outline" size={25} color={ colors.primary } />
                        Ajustes
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}
