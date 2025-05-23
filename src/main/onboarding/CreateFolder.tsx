/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'

import { useAppSelector } from '../../redux/store/themeStore';

import { styles as lightCreateFolderStyles } from '../../styles/onboardingStyles/createFolder/createFolderLight';
import { styles as darkCreateFolderStyles } from '../../styles/onboardingStyles/createFolder/createFolderDark';

const CreateFolder = ({ navigation }) => {
    const theme = 'light';
    // const theme = 'dark';
    // const theme = useAppSelector((state) => state.theme.theme);
    // const backgroundColor = theme === 'light' ? '#f9f9f9' : '#000';

    let tempStyles;
    if (theme === 'light') {
        tempStyles = lightCreateFolderStyles;
    }
    else {
        tempStyles = darkCreateFolderStyles;
    }
    const styles = StyleSheet.create(tempStyles);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../../assets/logo-rectangle.png')}
                style={{ width: 530, height: 70, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }}
            />
            <View style={styles.content}>
            <Image
                source={require('../../../assets/onboardingAssets/createFolder.png')}
                style={{ width: 350, height: 350, resizeMode: 'contain', alignSelf: 'center' }}
            />
            <Text style={styles.title}>Let's Get Started</Text>
            <Text style={styles.description}>create folder to start monitoring your space in real-time</Text>
            <TouchableOpacity
                style={styles.onboardingButton}
                onPress={() => console.log('Create Folder Button Pressed')}
            >
                <Image
                    source={require('../../../assets/onboardingAssets/createFolderIcon.png')}
                    style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center', marginRight: 10 }}
                />
                <Text style={styles.onboardingButtonText}>Create Folder</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.onboardingFooter}>
                <TouchableOpacity style={[styles.footerButton, { opacity: 1 }]} onPress={() => navigation.replace('CreateSite')}>
                    <Text style={styles.footerArrow}>‹</Text>
                    <Text style={styles.footerButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.stepNum}>Step 1</Text>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AddHub')}>
                    <Text style={styles.footerButtonText}>Next</Text>
                    <Text style={styles.footerArrow}>›</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CreateFolder;
