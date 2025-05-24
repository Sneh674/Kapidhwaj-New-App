import { StyleSheet } from 'react-native';

const homeDark = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    safeArea: {
        flex: 1,
    },
    scrollContainer: {
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        justifyContent: 'space-between',
    },
    headerLeft : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    profileBadge: {
        backgroundColor: '#2E3C6F',
        borderRadius: 40,
        paddingVertical: 8,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    profileName: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    profileDevices: {
        color: '#aaccff',
        fontSize: 12,
    },
    notifBadge: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        position: 'relative',
    },
    notifDot: {
        position: 'absolute',
        top: 4,
        right: 4,
        backgroundColor: '#FF6868',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 1,
    },
    notifDotText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    viewAllButton : {
        backgroundColor : '#111',
        padding: 7,
        borderRadius : 30,
    },
    viewAll: {
        fontSize: 13,
        color: '#eee',
    },
    cardSection: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 16,
        borderRadius: 24,
        marginBottom: 24,
        shadowOffset: { width: 0, height: 4 },
    },
    innerCardContainer: {
        marginTop: 12,
        gap: 14,
    },
    footerBox: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    footerText: {
        fontSize: 12,
        color: '#aaa',
    },
});

export default homeDark;
