import { View, Image, StyleSheet} from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Image 
      style={styles.gambar}
      source={require('../../../assets/image/avatar.jpg')}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  gambar: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginLeft: 99,
  }
})