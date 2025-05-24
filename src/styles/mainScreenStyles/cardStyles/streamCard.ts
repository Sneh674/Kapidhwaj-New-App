import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 12,
    width: '100%',
    aspectRatio: 16 / 9,
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  liveBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF3B30',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    zIndex: 2,
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    borderRadius: 16,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
