/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import Home from '../main/mainScreens/Home';
import Alerts from '../main/mainScreens/Alerts';
import Favourites from '../main/mainScreens/Favourites';
import Streams from '../main/mainScreens/Streams';
import Settings from '../main/mainScreens/Settings';

import { useAppSelector } from '../redux/store/themeStore';

import { navbarLight } from '../styles/navBarStyles/navBarLight';
import { navbarDark } from '../styles/navBarStyles/navBarDark';

import HomeIcon from '../../assets/navBarIcons/Home.svg';
import AlertsIcon from '../../assets/navBarIcons/Alerts.svg';
import FavouritesIcon from '../../assets/navBarIcons/Favourites.svg';
import StreamsIcon from '../../assets/navBarIcons/Streams.svg';
import SettingsIcon from '../../assets/navBarIcons/Settings.svg';

import { View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainScreensTab = () => {
    // const theme = 'light';
    // const theme = 'dark';
    // const theme = 'lightAlt';
    // const theme = 'darkAlt';
    const theme = useAppSelector((state) => state.theme.theme);
    let tempStyles;
    if (theme === 'light' || theme === 'lightAlt') {
        tempStyles = navbarLight;
    } else {
        tempStyles = navbarDark;
    }
    const styles = StyleSheet.create(tempStyles);

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: [styles.tabBar,
            {
                borderTopWidth: 0,         // removes the top border
                elevation: 0,              // Android shadow
                shadowColor: 'transparent', // iOS shadow
            },
            ],
        }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIcon,
                        focused ? styles.focusedIcon : styles.unfocusedIcon,
                        ]}
                            pointerEvents="none"
                        >
                            <HomeIcon width={24} height={24} color={focused ? 'white' : '#555'} fill={focused ? 'blue' : 'white'} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Streams" component={Streams}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIcon,
                        focused ? styles.focusedIcon : styles.unfocusedIcon,
                        ]}
                            pointerEvents="none"
                        >
                            <StreamsIcon width={24} height={24} color={focused ? 'white' : '#555'} fill={focused ? 'blue' : 'white'} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Alerts" component={Alerts}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIcon,
                        focused ? styles.focusedIcon : styles.unfocusedIcon,
                        ]}
                            pointerEvents="none"
                        >
                            <AlertsIcon width={24} height={24} color={focused ? 'white' : '#555'} fill={focused ? 'blue' : 'white'} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Favourites" component={Favourites}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIcon,
                        focused ? styles.focusedIcon : styles.unfocusedIcon,
                        ]}
                            pointerEvents="none"
                        >
                            <FavouritesIcon width={24} height={24} color={focused ? 'white' : '#555'} fill={focused ? 'blue' : 'white'} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIcon,
                        focused ? styles.focusedIcon : styles.unfocusedIcon,
                        ]}
                            pointerEvents="none"
                        >
                            <SettingsIcon width={24} height={24} color={focused ? 'white' : '#555'} fill={focused ? 'blue' : 'white'} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainScreensTab;
