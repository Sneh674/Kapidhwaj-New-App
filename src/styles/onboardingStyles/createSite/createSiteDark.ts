import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop: 65,
        backgroundColor: '#121212', // dark background
        paddingHorizontal: 20,
    },
    gradientContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 65,
        paddingBottom: 40,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 29,
        color: '#ffffff',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#ccc', // lighter gray for readability
        textAlign: 'center',
        marginBottom: 20,
    },
    onboardingButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1f7aec', // brighter blue for dark mode
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 10,
    },
    onboardingButtonText: {
        fontSize: 22,
        color: '#ffffff',
    },
    onboardingFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    footerButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerArrow: {
        fontSize: 40,
        marginHorizontal: 10,
        position: 'relative',
        bottom: 4,
        color: '#ffffff',
    },
    footerButtonText: {
        fontSize: 18,
        color: '#ffffff',
    },
    stepNum: {
        fontSize: 18,
        color: '#ccc',
    },
});
