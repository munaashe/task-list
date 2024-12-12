import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
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
                <Text size="medium" weight="normal" color="black">{title}</Text>
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" onPress={onPress}>
                    {completed ? 'Completed' : 'Mark as Complete'}
                </Button>
            </Card.Actions>
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
});

export default TaskCard;