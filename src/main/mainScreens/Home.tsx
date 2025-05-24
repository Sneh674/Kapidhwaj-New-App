import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StreamCard from './cards/streamCards';
import AlertCard from './cards/alertCard';
import AlertIcon from '../../../assets/alert.svg';
import { useAppSelector } from '../../redux/store/themeStore';

import homeLight from '../../styles/mainScreenStyles/homeStyles/homeLight';
import homeDark from '../../styles/mainScreenStyles/homeStyles/homeDark';

const Home = ({ navigation }) => {
  // const theme = 'light'
  // const theme = 'darkAlt'
  // const theme = 'lightAlt'
  // const theme = 'dark'
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = theme.includes('dark') ? homeDark : homeLight;

  const userName = 'Neha trailanasdh';
  const userDevices = 7;
  const numberOfAlerts = 2;

  const gradientColors =
    theme === 'light'
      ? ['#fff', '#fff']
      : theme === 'lightAlt'
        ? ['#E6C6A8', 'transparent', '#A8D7D1']
        : theme === 'dark'
          ? ['#000', '#000']
          : theme === 'darkAlt'
            ? ['#6B3B1A', 'black', '#3D7F78']
            : ['#fff', '#fff'];

  return (
    <View style={styles.rootContainer}>
      <LinearGradient colors={gradientColors} style={styles.gradient} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image
                source={require('../../../assets/logo-square.png')}
                style={styles.logoImage}
              />
              <View style={styles.profileBadge}>
                <Text style={styles.profileName}>Hi, {userName}</Text>
                <Text style={styles.profileDevices}>{userDevices} devices active</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notifBadge} onPress={()=>{navigation.navigate('Alerts');}}>
              <AlertIcon width={20} height={20} />
              {numberOfAlerts > 0 && (
                <View style={styles.notifDot}>
                  <Text style={styles.notifDotText}>{numberOfAlerts}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Favourites Section */}
          <View style={styles.cardSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Favourites</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAll}>View All</Text>
                <Text>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.innerCardContainer}>
              <StreamCard title="Main Office" location="HQ" cameraTitle="Front Side Camera" image={require('../../../assets/image.png')} />
              <StreamCard title="Main Office" location="HQ" cameraTitle="Front Side Camera" image={require('../../../assets/image.png')} />
            </View>
          </View>

          {/* Alerts Section */}
          <View style={styles.cardSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Alerts</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAll}>View All</Text>
                <Text>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.innerCardContainer}>
              <AlertCard title="Intrusion" location="HQ" cameraTitle="Camera 4" date="24th Aug 2025" time="07:30 am" image={require('../../../assets/alert-image.png')} themeProp={theme} />
              <AlertCard title="Neha Shah" location="HQ" cameraTitle="Office Area" date="24th Aug 2025" time="07:30 am" image={require('../../../assets/alert-image.png')} avatar={require('../../../assets/person-logo.png')} isLive themeProp={theme} />
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footerBox}>
            <Text style={styles.footerText}>Kapidhwaj Ai</Text>
            <Text style={styles.footerText}>v3.0.0-2025</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
