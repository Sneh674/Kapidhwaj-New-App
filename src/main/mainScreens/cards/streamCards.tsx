import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles/mainScreenStyles/cardStyles/streamCard';
import LiveCamera from '../../../../assets/streamCard/liveCamera.svg';
import StreamCardArrow from '../../../../assets/streamCard/streamCardArrow.svg';

type StreamCardProps = {
  title: string;
  location: string;
  cameraTitle: string;
  image: any;
  onPress?: () => void;
};

const StreamCard = ({ title, location, cameraTitle, image, onPress }: StreamCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />

      {/* Live badge */}
      <View style={styles.liveBadge}>
        <LiveCamera width={14} height={14} style={{ marginRight: 6 }} />
        <Text style={styles.liveText}>Live</Text>
      </View>

      {/* Overlay */}
      <View style={styles.overlay}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {location} <Text style={{ fontSize: 16 }}>›</Text> {cameraTitle}
          </Text>
        </View>

        <TouchableOpacity onPress={onPress} style={styles.actionBtn}>
          <StreamCardArrow width={16} height={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StreamCard;
