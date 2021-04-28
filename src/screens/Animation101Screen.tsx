import React, { useContext, useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={ styles.container }>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                opacity,
                transform: [{
                    translateX: position
                }]

            }} />

            <Button
                title="FadeIn"
                onPress={() => {
                    fadeIn(),
                    startMovingPosition(100)
                }}
                color={ colors.primary }
            />

            <Button
                title="FadeOut"
                onPress={ fadeOut }
                color={ colors.primary }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150,
    }
});
