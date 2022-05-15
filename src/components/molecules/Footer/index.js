import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconHome, IconMenu } from '../../../assets/icons'

const Footer = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.IconHome}>
                <IconHome />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View>
                <IconMenu/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconHome: {
        paddingLeft: 51,
        paddingTop: 3,
        paddingRight: 122.35,
    },
})