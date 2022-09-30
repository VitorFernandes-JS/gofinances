import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});