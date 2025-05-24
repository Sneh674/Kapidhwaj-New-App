import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StreamCard from './cards/streamCards';

const Home = () => {
  return (
    <View style={{
      display: 'flex', justifyContent: 'center', height: '100%',
      alignItems: 'center',
    }}>
      <Text>Home</Text>
      <StreamCard
        title="Main Office"
        location="HQ"
        cameraTitle="Front Side Camera"
        image={require('../../../assets/image.png')}
        onPress={() => console.log('Card tapped')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});