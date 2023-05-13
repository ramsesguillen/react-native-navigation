import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper';
import { colors } from '../theme/appTheme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {

    const { top } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{
                padding: top,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            screenOptions={({ route }) => ({
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    elevation: 0,
                    borderTopWidth: 0,
                    shadowColor: 'transparent'
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconString: string = '';

                    switch (route.name) {
                        case 'ChatScreen':
                            iconString = 'laptop-outline'
                            break;
                        case 'ContactsScreen':
                            iconString = 'bookmarks-outline'
                            break;
                        case 'AlbumsScreen':
                            iconString = 'book-outline'
                            break;
                    }
                    return <Icon name={ iconString } size={25} color={ color } />
                }
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}
