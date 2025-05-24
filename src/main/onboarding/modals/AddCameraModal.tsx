/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAppSelector } from '../../../redux/store/themeStore';
import { onboardingModalLight as lightStyles } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsLight';
import { onboardingModalDark as darkStyles } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsDark';

interface AddDeviceModalProps {
    visible: boolean;
    onClose: () => void;
    onRegister: (device: any) => void;
}

const AddDeviceModal: React.FC<AddDeviceModalProps> = ({ visible, onClose, onRegister }) => {
    // const theme = 'light';
    // const theme = 'dark';
    // const theme = 'lightAlt';
    // const theme = 'darkAlt';
    const theme = useAppSelector((state) => state.theme.theme);
    const styles = theme.includes('dark') ? darkStyles : lightStyles;

    const [name, setName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [site, setSite] = useState('Main Hub');
    const [folder, setFolder] = useState('');

    const folderOptions = [
        { label: 'Folder 1', value: 'folder1' },
        { label: 'Folder 2', value: 'folder2' },
        { label: 'Folder 3', value: 'folder3' },
    ];

    const nearbyCameras = [
        { label: 'Camera 1', ip: '10.0.0.125' },
        { label: 'Camera 1', ip: '10.0.0.125' },
    ];

    return (
        <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
            <View style={styles.overlay}>
                <ScrollView contentContainerStyle={styles.popup}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Add Device</Text>
                        <TouchableOpacity onPress={onClose}><Text style={styles.close}>✕</Text></TouchableOpacity>
                    </View>

                    <TextInput placeholder="Enter Name here..." value={name} onChangeText={setName} style={styles.input} placeholderTextColor={styles.placeholder.color} />
                    <TextInput placeholder="Enter IP Address" value={ipAddress} onChangeText={setIpAddress} style={styles.input} placeholderTextColor={styles.placeholder.color} />

                    <View style={styles.rowContainer}>
                        <TextInput placeholder="Enter username" value={username} onChangeText={setUsername} style={styles.inputHalf} placeholderTextColor={styles.placeholder.color} />
                        <TextInput placeholder="Enter Password" value={password} secureTextEntry onChangeText={setPassword} style={styles.inputHalf} placeholderTextColor={styles.placeholder.color} />
                    </View>

                    <TextInput value={site} editable={false} style={styles.input} />

                    <Picker
                        selectedValue={folder}
                        onValueChange={(itemValue) => setFolder(itemValue)}
                        style={styles.picker}
                        dropdownIconColor={styles.placeholder.color}
                    >
                        <Picker.Item label="Select Folder" value="" />
                        {folderOptions.map(opt => (
                            <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
                        ))}
                    </Picker>

                    <View style={styles.cameraContainer}>
                        <Text style={styles.cameraTitle}>Nearby Cameras</Text>
                        {nearbyCameras.map((cam, index) => (
                            <View key={index} style={styles.cameraItem}>
                                <Text style={styles.cameraText}>{cam.label}{'\n'}{cam.ip}</Text>
                                <TouchableOpacity><Text>📋</Text></TouchableOpacity>
                            </View>
                        ))}
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeText}>✕ Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onRegister({ name, ipAddress, username, password, site, folder })} style={styles.saveButton}>
                            <Text style={styles.saveText}>✔ Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default AddDeviceModal;
