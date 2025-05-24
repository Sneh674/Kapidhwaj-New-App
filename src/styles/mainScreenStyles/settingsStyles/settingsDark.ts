import { StyleSheet } from 'react-native';

export const settingsDark = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    display: 'flex',
    backgroundColor: '#1C1C1E', // dark background
    // backgroundColor : 'red',
    // paddingTop: '15%',
    height: '100%',
  },
  gradientContainer: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    // borderRadius: 25,
  },
  scrollContent: {
    paddingBottom: '60%',
    backgroundColor : 'rgb(255,255,255,0)',
    // backgroundColor: 'red',
    paddingTop: '15%',
    paddingHorizontal : '5%',
  },
  // mainContainer: {
  //   display: 'flex',
  //   backgroundColor: '#1C1C1E', // dark background
  //   paddingHorizontal: '5%',
  //   paddingTop: '15%',
  //   height: '100%',
  // },
  headerBox: {
    backgroundColor: '#2C2C2E', // dark surface card
    borderRadius: 50,
    padding: 15,
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF', // white text
  },
  optionsBox: {
    backgroundColor: '#2C2C2E',
    borderRadius: 25,
    paddingVertical: 8,
    paddingBottom: 20,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    marginRight: 18,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: '#FFFFFF', // white text
  },
  arrow: {
    fontSize: 40,
    color: '#999999', // dimmed arrow
  },
});
