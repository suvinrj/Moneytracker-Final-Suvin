import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const History = ({date, note, nominal, nominalColor='#D9435E'}) => {
  return (
    <View style={styles.page}>
      <View>
        <Text>{date}</Text>
        <Text style={styles.note}>{note}</Text>
      </View>
        <View style={styles.position}>
         <Text style={styles.nominal(nominalColor)}>{nominal}</Text>
        </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
    position: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 8,
    },
    page: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 0.2,
        paddingVertical: 11,
        paddingLeft: 20,
        marginHorizontal: 24,
        marginBottom: 10,
        fontFamily: 'Poppins-Reguler',
        fontSize: 14,
    },
    note: {
        color: 'black',
        marginTop: 5,
    },
    nominal: nominalColor => ({
        color: nominalColor,
        fontFamily: 'Poppins-Bold',
        marginVertical: 13,
    }),
})