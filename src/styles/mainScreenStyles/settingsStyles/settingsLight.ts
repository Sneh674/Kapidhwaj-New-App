import { StyleSheet } from 'react-native';

export const settingsLight = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    display: 'flex',
    backgroundColor: '#f5f5f5',
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
  headerBox: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 15,
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  optionsBox: {
    backgroundColor: '#ffffff',
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
    color: '#000',
  },
  arrow: {
    fontSize: 40,
    color: '#999',
  },
});
