import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: (width >= 768) ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingScreen" options={{ title: 'Settings' }} component={SettingScreen} />
        </Drawer.Navigator>
    );
}
