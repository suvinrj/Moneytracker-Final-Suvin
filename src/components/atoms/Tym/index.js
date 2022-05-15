import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TYM = () => {
  return (
    <View style={styles.text}>
      <Text>Track your money</Text>
    </View>
  )
}

export default TYM

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-light',
        fontSize: 14,
    }
})