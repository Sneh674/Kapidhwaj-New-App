import { StyleSheet } from 'react-native';

const alertCardDark = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    padding: 12,
    marginVertical: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconWrap: {
    backgroundColor: '#2c2c2e',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  avatarWrap: {
    position: 'relative',
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  redDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 13,
    color: '#aaa',
  },
  timeWrap: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  iconOverlay: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 10,
    borderRadius: 24,
  },
});

export default alertCardDark;
