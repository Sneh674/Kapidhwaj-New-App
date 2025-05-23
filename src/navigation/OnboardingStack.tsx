// src/navigation/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateSite from '../main/onboarding/CreateSite';
import CreateFolder from '../main/onboarding/CreateFolder';
import AddHub from '../main/onboarding/AddHub';
import AddCamera from '../main/onboarding/AddCamera';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CreateSite" component={CreateSite} />
            <Stack.Screen name="CreateFolder" component={CreateFolder} />
            <Stack.Screen name="AddHub" component={AddHub} />
            <Stack.Screen name="AddCamera" component={AddCamera} />
        </Stack.Navigator>
    );
};

export default OnboardingStack;
