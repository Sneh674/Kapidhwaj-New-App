// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
// import Home from '../screens/Home';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {/* Auth stack: login and register */}
            <RootStack.Screen name="Auth" component={AuthStack} />
            {/* Onboarding stack: create site, folder, hub, camera */}
            <RootStack.Screen name="Onboarding" component={OnboardingStack} />
        </RootStack.Navigator>
    );
};

export default RootNavigator;
