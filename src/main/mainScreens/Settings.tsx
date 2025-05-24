import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../redux/store/themeStore';
import { settingsLight } from '../../styles/mainScreenStyles/settingsStyles/settingsLight';
import { settingsDark } from '../../styles/mainScreenStyles/settingsStyles/settingsDark';
import LinearGradient from 'react-native-linear-gradient';


const menuItems = [
  { label: 'Main Settings', color: '#6A4CFF' },
  { label: 'Manage Cameras', color: '#F79009' },
  { label: 'Manage Sites & Folder', color: '#606060' },
  { label: 'Select Languages', color: '#12B76A' },
  { label: 'Profile', color: '#F04438' },
  { label: 'Change Password', color: '#12B76A' },
  { label: 'Help & Support', color: '#A855F7' },
  { label: 'Manage People', color: '#F04438' },
  { label: 'Manage Access', color: '#1D4ED8' },
  { label: 'Change Theme', color: '#606060' },
  { label: 'Logout', color: '#F04438' },
];

const Settings = () => {
  // const theme = 'light';
  // const theme = 'dark';
  // const theme = 'lightAlt';
  // const theme = 'darkAlt';
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = theme.includes('dark') ? settingsDark : settingsLight;

  const handlePress = (label: string) => () => {
    console.log(`Pressed ${label}`);
    // Add your navigation logic here
    if (label === 'Change Theme') {
      // Navigate to the theme modal
      // navigation.navigate('ThemeModal');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={
          theme === 'light' ? ['#fff', 'transparent', '#fff'] :
            theme === 'lightAlt' ? ['#E6C6A8', 'transparent', '#A8D7D1'] :
              theme === 'dark' ? ['#000', 'transparent', '#000'] :
                theme === 'darkAlt' ? ['#6B3B1A', 'transparent', '#3D7F78'] :
                  ['#E6C6A8', '#A8D7D1']
        } // Top to bottom gradient
        style={styles.gradientContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.headerBox}>
            <Text style={styles.header}>Settings</Text>
          </View>

          <View style={styles.optionsBox}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.itemRow} onPress={handlePress(item.label)}>
                <View style={[styles.iconBox, { backgroundColor: item.color }]} />
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Settings;
