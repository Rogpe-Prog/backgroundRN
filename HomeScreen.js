import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import BackgroundTimer from 'react-native-background-timer'

const HomeScreen = ({ navigation }) => {
           
    const calltimer = () => {
        const intervalId = BackgroundTimer.setTimeout(() => {
            console.log('ticq')
           deeplink()
        }, 5000)
    }

    const deeplink = () => {
        Linking.openURL('navigs://HomeScreen')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
            <Text style={styles.title}>Go to DetailScreen...</Text>
        </TouchableOpacity>
        <Text style={styles.title}>..............................</Text>
        <TouchableOpacity onPress={calltimer}>
            <Text style={styles.title}>Deep Linking</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    title: {
        color: '#FFF',
        fontSize: 28,
    },
})

export default HomeScreen
