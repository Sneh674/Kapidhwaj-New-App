import { StyleSheet } from 'react-native';

export const navbarDark = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: '7%',
    elevation: 0,
    backgroundColor: 'rgba(34, 34, 34, 0.85)', // semi-transparent dark
    marginHorizontal: 25,
    borderRadius: 35,
  },
  tabIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // neutral dark for icons
    borderRadius: 70,
    padding: 30,
    bottom: '-62%',
  },
  focusedIcon: {
    backgroundColor: '#2563EB', // vibrant blue for active tab
  },
  unfocusedIcon: {
    backgroundColor: '#333', // consistent with tabIcon
  },
});
