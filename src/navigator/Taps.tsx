import { Platform, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from './StackNavigator';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { TopTabs } from './TopTab';
import { colors } from '../theme/appTheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIos />
        : <TabsAndroid />
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={ true }
            barStyle={{
                backgroundColor: colors.primary
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    elevation: 0,
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconString: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconString = 'heart-outline'
                            break;
                        case 'TopTabs':
                            iconString = 'glasses-outline'
                            break;
                        case 'StackNavigator':
                            iconString = 'layers-outline'
                            break;
                    }
                    return <Icon name={ iconString } size={25} color={ color } />
                }
            })}
        >
            <BottomTabAndroid.Screen
                options={{
                    title: 'Tab 1',
                }}
                name="Tab1Screen" component={Tab1Screen} />
            <BottomTabAndroid.Screen
                options={{
                    title: 'Tab 2'
                }}
                name="TopTabs" component={TopTabs} />
            <BottomTabAndroid.Screen
                options={{
                    title: 'Tab 3'
                }}
                name="StackNavigator" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {
    return (
        <BottomTabIos.Navigator
            sceneContainerStyle={{ // Contenido
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    elevation: 0,
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconString: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconString = 'heart-outline'
                            break;
                        case 'TopTabs':
                            iconString = 'glasses-outline'
                            break;
                        case 'StackNavigator':
                            iconString = 'layers-outline'
                            break;
                    }
                    return <Icon name="alarm-outline" size={25} color={ colors.primary } />
                }
            })}
        >
            <BottomTabIos.Screen
                options={{
                    // headerShown: false
                    title: 'Tab 1',
                }}
                name="Tab1Screen" component={Tab1Screen} />
            <BottomTabIos.Screen
                options={{
                    // headerShown: false,
                    title: 'Tab 2'
                }}
                name="TopTabs" component={TopTabs} />
            <BottomTabIos.Screen
                options={{
                    // headerShown: false
                    title: 'Tab 3'
                }}
                name="StackNavigator" component={StackNavigator} />
        </BottomTabIos.Navigator>
    );
}
