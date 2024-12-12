import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Text from '../text';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text size="large" weight="bold" color="black">
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: Platform.OS === 'ios' ? 50 : 20,
        marginBottom: 8,
    },
});

export default Header;