/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { useAppSelector } from '../../redux/store/themeStore';

import { styles as lightAddHubStyles } from '../../styles/onboardingStyles/onboardingLight';
import { styles as darkAddHubStyles } from '../../styles/onboardingStyles/onboardingDark';

import AddHubModal from './modals/AddHubModal';

const AddHub = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const theme = 'light';
  // const theme = 'dark';
  // const theme = 'lightAlt';
  // const theme = 'darkAlt';
  const theme = useAppSelector((state) => state.theme.theme);

  const handleAddHub = () => {
    setModalVisible(true);
  };

  let tempStyles;
  if (theme === 'light' || theme === 'lightAlt') {
    tempStyles = lightAddHubStyles;
  } else {
    tempStyles = darkAddHubStyles;
  }
  const styles = StyleSheet.create(tempStyles);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={
            theme === 'light' ? ['#fff', 'transparent', '#fff'] :
              theme === 'lightAlt' ? ['#E6C6A8', 'transparent', '#A8D7D1'] :
                theme === 'dark' ? ['#000', 'transparent', '#000'] :
                  ['#6B3B1A', 'transparent', '#3D7F78']
          }
          style={styles.gradientContainer}
        >
          <Image
            source={require('../../../assets/logo-rectangle.png')}
            style={{ width: 530, height: 70, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }}
          />
          <View style={styles.content}>
            <Image
              source={require('../../../assets/onboardingAssets/addHub.png')} // make sure to add this asset
              style={{ width: 350, height: 350, resizeMode: 'contain', alignSelf: 'center' }}
            />
            <Text style={styles.title}>Add Your Hub</Text>
            <Text style={styles.description}>connect your hub to start monitoring your devices securely</Text>
            <TouchableOpacity
              style={styles.onboardingButton}
              onPress={handleAddHub}
            >
              <Image
                source={require('../../../assets/onboardingAssets/addHubIcon.png')} // add this icon asset
                style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center', marginRight: 10 }}
              />
              <Text style={styles.onboardingButtonText}>Add Hub</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.onboardingFooter}>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
              <Text style={styles.footerArrow}>‹</Text>
              <Text style={styles.footerButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.stepNum}>Step 3</Text>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AddCamera')}>
              <Text style={styles.footerButtonText}>Next</Text>
              <Text style={styles.footerArrow}>›</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <AddHubModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={(name) => {
            console.log('Site Name:', name);
            setModalVisible(false);
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddHub;
