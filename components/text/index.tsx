import React from 'react';
import { Text as RNText, TextStyle, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface TextProps {
    size?: 'small' | 'medium' | 'large';
    weight?: 'normal' | 'bold';
    color?: string;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
    size = 'medium',
    weight = 'normal',
    color = 'black',
    children,
}) => {

    const fontSize = width >= 768
        ? size === 'small' ? 16 : size === 'large' ? 24 : 20
        : size === 'small' ? 12 : size === 'large' ? 20 : 16;

    const styles = StyleSheet.create({
        text: {
            fontSize,
            fontWeight: weight === 'bold' ? 'bold' : 'normal',
            color,
        },
    });

    return <RNText style={styles.text}>{children}</RNText>;
};

export default Text;