import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'

const DetailScreen = ({ route, navigation }) => {

    const deeplinks = () => {
        Linking.openURL('navigs://HomeScreen')
        console.log('deepLinking :: HomeScreen')
    }

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.title}>Go to HomeScreen...</Text>
       </TouchableOpacity>
       <Text style={styles.title}>Deep Link</Text>
       <TouchableOpacity onPress={deeplinks}>
        <Text style={styles.title}>HomeScreen...</Text>
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

export default DetailScreen
