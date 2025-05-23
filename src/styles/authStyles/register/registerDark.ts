import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', // dark background
    },
    registerCard: {
        width: '90%',
        backgroundColor: '#111', // dark card bg
        borderRadius: 36,
        padding: 35,
        paddingTop: 0,
        shadowColor: '#888',
        shadowOffset: { width: 8, height: 4 },
        shadowOpacity: 0.3, // stronger shadow
        shadowRadius: 6,
        elevation: 5,
    },
    registerTitle: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10,
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
        paddingVertical: 14,
        fontSize: 12,
        backgroundColor: '#333', // dark input bg
        color: '#fff', // input text color white
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
        backgroundColor: '#444', // dark captcha bg
        alignItems: 'center',
        width: '70%',
    },
    createAccBtn: {
        backgroundColor: '#4e6ae7', // brighter blue for dark mode button
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 35,
    },
    createAccText: {
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
    signInBtn: {
        backgroundColor: '#333',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    signInText: {
        color: '#bbb',
        fontWeight: '500',
    },
    lineBesideOr: {
        backgroundColor: '#444',
        width: 110,
        height: 2,
    },
});
