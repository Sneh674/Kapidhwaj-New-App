import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const onboardingModalDark = StyleSheet.create({
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
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: width * 0.8,
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
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
    color: '#fff',
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    color: '#D1D5DB',
    marginBottom: 8,
  },
  input: {
    borderRadius: 25,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  closeButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  closeText: {
    color: '#E5E7EB',
    fontWeight: '500',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#60A5FA',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  saveText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },


  // for camera
  inputHalf: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#fff',
    marginRight: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    borderRadius: 25,
    backgroundColor: '#1F2937',
    marginTop: 12,
    marginBottom: 12,
    color: '#fff',
  },
  cameraContainer: {
    marginTop: 20,
  },
  cameraTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  cameraItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#374151',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  cameraText: {
    color: '#fff',
  },
  placeholder: {
    color: '#9CA3AF',
  },

});
