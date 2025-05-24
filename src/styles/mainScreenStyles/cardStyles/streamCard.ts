import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 12,
    backgroundColor: '#ccc', // fallback color while image loads
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    // padding: 10,
    paddingHorizontal: 5,
    paddingTop: 14,
    paddingBottom: 5,
  },
  liveBadge: {
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 104, 104, 0.7)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  overlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 100,
    padding: 10,
    paddingLeft: 20,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 2,
  },
  subtitle: {
    color: '#ddd',
    fontSize: 13,
  },
  actionBtn: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
