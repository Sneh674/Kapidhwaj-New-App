import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop: 65,
        // paddingBottom: 40,
        backgroundColor: '#f5f5f5',
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
        color: '#000',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    onboardingButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#034F84',
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 10,
    },
    // onboardingIcon:{
    // },
    onboardingButtonText: {
        fontSize: 22,
        color: 'white',
    },
    onboardingFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        // position: 'absolute',
        // bottom: 40,
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
    },
    footerButtonText: {
        fontSize: 18,
        color: '#555',
    },
    stepNum: {
        fontSize: 18,
        color: '#555',
    },
});
