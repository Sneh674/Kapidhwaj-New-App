import { StyleSheet } from 'react-native';

export const navbarLight = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        // bottom: 40,
        // left: 20,
        // right: 20,
        bottom : '7%',
        elevation: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        marginHorizontal: 25,
        borderRadius: 35,
    },
    tabIcon: {
        width: 24,
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 70,
        padding: 30,
        // bottom: -18,
        bottom : '-62%',
    },
    focusedIcon: {
        backgroundColor: 'blue',
    },
    unfocusedIcon: {
        backgroundColor: 'white',
    },
});
