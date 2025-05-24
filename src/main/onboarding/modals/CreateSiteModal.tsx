import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../../redux/store/themeStore';

import { onboardingModalLight } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsLight';
import { onboardingModalDark } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsDark';

interface AddSiteModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (siteName: string) => void;
}

const AddSiteModal: React.FC<AddSiteModalProps> = ({ visible, onClose, onSave }) => {
  const [siteName, setSiteName] = useState('');
  // const theme = 'light';
  // const theme = 'dark';
  // const theme = 'lightAlt';
  // const theme = 'darkAlt';
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = theme.includes('dark') ? onboardingModalDark : onboardingModalLight;
  // const styles = theme.includes('dark') ? onboardingModalDark : onboardingModalLight;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <View style={styles.header}>
            <Text style={styles.title}>Add Site</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name here..."
            placeholderTextColor={theme.includes('dark') ? '#999' : '#666'}
            value={siteName}
            onChangeText={setSiteName}
            autoCapitalize="none"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeText}>✕ Close</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={() => onSave(siteName)}>
              <Text style={styles.saveText}>✔ Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddSiteModal;
