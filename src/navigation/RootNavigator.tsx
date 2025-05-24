// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import MainScreensTab from './MainScreensTab';
import { StatusBar } from 'react-native';
import { useAppSelector } from '../redux/store/themeStore';

// import Home from '../screens/Home';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    const theme = useAppSelector((state) => state.theme.theme);

    return (
        <>
            <StatusBar
                barStyle={theme.includes('dark') ? 'light-content' : 'dark-content'}
                backgroundColor="transparent" // or your header color
                translucent={true}
            />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {/* Auth stack: login and register */}
                <RootStack.Screen name="Auth" component={AuthStack} />
                {/* Onboarding stack: create site, folder, hub, camera */}
                <RootStack.Screen name="Onboarding" component={OnboardingStack} />
                {/* Main screens tab: home, alerts, favourites, streams */}
                <RootStack.Screen name="Main" component={MainScreensTab} />
            </RootStack.Navigator>
        </>
    );
};

export default RootNavigator;
