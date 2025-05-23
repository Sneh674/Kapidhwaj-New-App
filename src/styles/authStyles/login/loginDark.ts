import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',  // dark background
    },
    gradientContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginCard: {
        width: '85%',
        backgroundColor: '#111',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 36,
        padding: 40,
        paddingTop: 0,
    },
    loginTitle: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
        color: '#fff', // white text
    },
    label: {
        marginTop: 10,
        marginBottom: 4,
        fontSize: 14,
        color: '#eee', // light text
    },
    input: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        backgroundColor: '#333', // darker input bg
        color: '#fff', // input text white
    },
    passwordRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    forgot: {
        color: '#bbb', // lighter grey text
        fontSize: 12,
    },
    centeredViewCaptcha: {
        display: 'flex',
        alignItems: 'center',
    },
    captcha: {
        marginVertical: 15,
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#444', // darker captcha bg
        alignItems: 'center',
        width: '70%',
    },
    signInBtn: {
        backgroundColor: '#4e6ae7', // brighter blue for dark mode button
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 5,
    },
    signInText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    orText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        marginVertical: 10,
        color: '#aaa',
        backgroundColor: '#444',
        padding: 5,
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    registerBtn: {
        backgroundColor: '#333',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    registerText: {
        color: '#bbb',
        fontWeight: '500',
    },
    lineBesideOr: {
        backgroundColor: '#444',
        width: 110,
        height: 2,
    },
});
