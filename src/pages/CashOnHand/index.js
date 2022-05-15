import { View, StyleSheet, Text } from 'react-native'
import { Header, Gap, Button, TextInput, History } from '../../components'
import React from 'react'

const CashOnHand = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Cash On Hand" onBack={() => navigation.goBack()}/>
      <View style={styles.contenWrapper}>
        <TextInput 
          title="Description" 
         placeholder="Add the description" 
        />
        <Gap height={17} />
        <TextInput 
          title="Type" 
          placeholder="Debit / Credit" 
        />
        <Gap height={22} />
        <Button 
          title="Save"
          onPress={() => {}}
        />
      </View>
      <View style={styles.history}>
        <Text style={styles.text}>Last 3 Transactions</Text>
        <History date="17 April 2020" note="Water, Food" nominal="-Rp. 300.000" />
        <History date="18 April 2020" note="Office supplies" nominal="-Rp. 300.000" />
        <History date="19 April 2020" note="Top Up" nominal="+Rp. 300.000" nominalColor='#1ABC9C'/>
      </View>
    </View>
  )
}

export default CashOnHand

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginLeft: 24,
    color: 'black',
  },
  contenWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
  },
  history: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingTop: 16,
  },
})