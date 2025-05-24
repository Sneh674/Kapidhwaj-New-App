import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../../redux/store/themeStore';

import alertCardLight from '../../../styles/mainScreenStyles/cardStyles/alertCardLight';
import alertCardDark from '../../../styles/mainScreenStyles/cardStyles/alertCardDark';

type AlertCardProps = {
    title: string;
    location: string;
    cameraTitle: string;
    date: string;
    time: string;
    image: any;
    avatar?: any;
    isLive?: boolean;
    onPress?: () => void;
    themeProp: string;
};

const AlertCard = ({
    title,
    location,
    cameraTitle,
    date,
    time,
    image,
    avatar,
    isLive = false,
    onPress,
    themeProp,
}: AlertCardProps) => {
    // const theme = 'light';
    // const theme = 'dark';
    // const theme = 'lightAlt';
    // const theme = 'darkAlt';
    //   const theme = useAppSelector((state) => state.theme.theme);
    const theme = themeProp;
    const styles = theme.includes('dark') ? alertCardDark : alertCardLight;

    return (
        <View style={styles.cardContainer}>
            {/* Header */}
            <View style={styles.header}>
                {avatar ? (
                    <View style={styles.avatarWrap}>
                        <Image source={avatar} style={styles.avatar} />
                        {isLive && <View style={styles.redDot} />}
                    </View>
                ) : (
                    // {/* just spacing placeholder */ }
                    < View style={styles.iconWrap} />
                )}

                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>
                        {location} <Text style={{ fontSize: 14 }}>›</Text> {cameraTitle}
                    </Text>
                </View>

                <View style={styles.timeWrap}>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>

            {/* Image section */}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
                <TouchableOpacity style={styles.iconOverlay} onPress={onPress}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>⤢</Text> {/* fallback action icon */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AlertCard;
