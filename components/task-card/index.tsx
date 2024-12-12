import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';
import Text from '../text';

interface TaskCardProps {
    title: string;
    completed: boolean;
    onPress: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, completed, onPress }) => {
    return (
        <Card style={[styles.card, completed && styles.completedCard]}>
            <Card.Content>
                <View style={styles.cardContent}>
                    <View style={styles.title}>
                        <Text size="medium" weight="normal" color="black">
                            {title}
                        </Text>
                    </View>
                    <View style={styles.completedContainer}>
                        <Text size="small" weight="normal" color="black" >
                            Complete?
                        </Text>
                        <RadioButton
                            value="checked"
                            status={completed ? 'checked' : 'unchecked'}
                            onPress={onPress}
                            color='black'
                            theme={{ roundness: 50 }}

                        />
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    completedCard: {
        backgroundColor: '#d4edda',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        width: "80%",
    },
    completedContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    completeText: {
        marginRight: 8,
    },
});

export default TaskCard;