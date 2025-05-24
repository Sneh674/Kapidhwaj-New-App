/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useAppSelector } from '../../../redux/store/themeStore';

import { onboardingModalLight } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsLight';
import { onboardingModalDark } from '../../../styles/onboardingStyles/onboardingModalsStyles/onboardingModalsDark';

import { Picker } from '@react-native-picker/picker';

interface AddHubModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (siteName: string) => void;
}

const AddHubModal: React.FC<AddHubModalProps> = ({ visible, onClose, onSave }) => {
    const [hubName, setHubName] = useState('');
    const [siteName, setSiteName] = useState('');
    const [password, setPassword] = useState('');
    const [hubId, setHubId] = useState('');
    // const theme = 'light';
    // const theme = 'dark';
    // const theme = 'lightAlt';
    // const theme = 'darkAlt';
    const theme = useAppSelector((state) => state.theme.theme);
    const styles = theme.includes('dark') ? onboardingModalDark : onboardingModalLight;

    const siteOptions = [
        { label: 'Site Alpha', value: 'siteAlpha' },
        { label: 'Site Beta', value: 'siteBeta' },
        { label: 'Site Gamma', value: 'siteGamma' },
        // Add more sites as needed
    ];

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent
            onRequestClose={onClose}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.overlay}>
                    <View style={styles.popup}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Add Hub</Text>
                            <TouchableOpacity onPress={onClose}>
                                <Text style={styles.close}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Name here..."
                            placeholderTextColor={theme.includes('dark') ? '#999' : '#666'}
                            value={hubName}
                            onChangeText={setHubName}
                            autoCapitalize="none"
                        />
                        <Text style={styles.label}>Hub ID</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Hub ID..."
                            placeholderTextColor={theme.includes('dark') ? '#999' : '#666'}
                            value={hubId}
                            onChangeText={setHubId}
                            autoCapitalize="none"
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password here..."
                            placeholderTextColor={theme.includes('dark') ? '#999' : '#666'}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            secureTextEntry={true}
                        />

                        <Text style={styles.label}>Select Site</Text>
                        <Picker
                            selectedValue={siteName}
                            onValueChange={(itemValue) => setSiteName(itemValue)}
                            style={[styles.input, {
                                borderRadius: 20, height: 50, textAlignVertical: 'center',
                                backgroundColor: theme.includes('dark') ? '#333' : '#fff',
                                color: theme.includes('dark') ? '#999' : '#666',
                            }]}
                            dropdownIconColor={theme.includes('dark') ? '#999' : '#666'} // optional styling
                        >
                            <Picker.Item label="Select a site..." value="" style={{
                                height: '100%',
                                color: theme.includes('dark') ? '#999' : '#666',
                                backgroundColor: theme.includes('dark') ? '#333' : '#fff',
                            }} />
                            {siteOptions.map(site => (
                                <Picker.Item key={site.value} label={site.label} value={site.value} style={{
                                    height: '100%',
                                    color: theme.includes('dark') ? '#999' : '#666',
                                    backgroundColor: theme.includes('dark') ? '#333' : '#fff',
                                }} />
                            ))}
                        </Picker>

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
            </ScrollView>
        </Modal>
    );
};

export default AddHubModal;
