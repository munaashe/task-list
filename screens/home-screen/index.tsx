import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import TaskCard from '../../components/task-card';
import Text from '../../components/text';
import { Todo } from '../../utils/types';
import Header from '../../components/header';

const fetchTasks = async ({ pageParam = 1 }: { pageParam?: number }): Promise<Todo[]> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`
    );
    const data = await response.json();
    return data;
};

const HomeScreen: React.FC = () => {
    const [tasks, setTasks] = useState<Todo[]>([]); // Local state for tasks

    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ['todos'],
        queryFn: ({ pageParam = 1 }) => fetchTasks({ pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
        },
    });

    // Function to merge new data with the current tasks, preserving completion status
    const mergeTasks = (newTasks: Todo[]) => {
        setTasks((prevTasks) => {
            // Create a map of the current tasks for quick lookup
            const taskMap = new Map(prevTasks.map((task) => [task.id, task]));

            // Update or add new tasks, preserving the completed status
            newTasks.forEach((task) => {
                if (taskMap.has(task.id)) {
                    // Preserve completed status if task already exists
                    task.completed = taskMap.get(task.id)?.completed || false;
                }
                taskMap.set(task.id, task);
            });

            // Convert the map back to an array
            return Array.from(taskMap.values());
        });
    };

    // Update local state whenever new data is fetched
    useEffect(() => {
        if (data?.pages) {
            const flattenedData = data.pages.flat(); // Flatten all pages
            mergeTasks(flattenedData);
        }
    }, [data]);

    // Handler for marking a task as completed
    const handleCompleteTask = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const renderItem = ({ item }: { item: Todo }) => (
        <TaskCard
            title={item.title}
            completed={item.completed}
            onPress={() => handleCompleteTask(item.id)} // Toggle completed state
        />
    );

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.loaderContainer}>
                <Text color="red">Something went wrong!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header title='Task List' />
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={() => {
                    if (hasNextPage) fetchNextPage();
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    isFetchingNextPage ? <ActivityIndicator style={styles.footerLoader} /> : null
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        marginBottom: 16,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerLoader: {
        marginVertical: 16,
    },
});

export default HomeScreen;