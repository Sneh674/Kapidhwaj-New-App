import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const onboardingModalLight = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.3)',
  },
  overlay: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  close: {
    fontSize: 24,
    color: 'red',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  closeButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  closeText: {
    color: '#6B7280',
    fontWeight: '500',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  saveText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },


  //for camera
  inputHalf: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    marginRight: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    marginTop: 12,
    marginBottom: 12,
    color: '#000',
  },
  cameraContainer: {
    marginTop: 20,
  },
  cameraTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cameraItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E5E7EB',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  cameraText: {
    color: '#000',
  },
  placeholder: {
    color: '#9CA3AF',
  },

});
