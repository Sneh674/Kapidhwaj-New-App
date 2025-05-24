import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../../redux/store/themeStore';

import { onboardingModalLight } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsLight';
import { onboardingModalDark } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsDark';

interface CreateFolderModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (folderName: string) => void;
}

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({ visible, onClose, onSave }) => {
  const [folderName, setFolderName] = useState('');
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = theme.includes('dark') ? onboardingModalDark : onboardingModalLight;

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
            <Text style={styles.title}>Create Folder</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name here..."
            placeholderTextColor={theme.includes('dark') ? '#999' : '#666'}
            value={folderName}
            onChangeText={setFolderName}
            autoCapitalize="none"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeText}>✕ Close</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={() => onSave(folderName)}>
              <Text style={styles.saveText}>✔ Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateFolderModal;
