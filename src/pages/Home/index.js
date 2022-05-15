import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Footer, Gap, Header } from '../../components'

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Money Tracker" tym={() => {}} gambar={() => {}} />
      <View style={styles.contentWrapper}>
        <Text style={styles.text1}>Your Balance</Text>
        <Text style={styles.nominal1}>Rp. 10.000.000</Text>
        <View style={styles.contentWrapper2}>
          <Text style={styles.text2}>Cash on Hand</Text>
          <Text style={styles.nominal2}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.contentWrapper2}>
          <Text style={styles.text3}>Cash on Bank</Text>
          <Text style={styles.nominal3}>Rp. 6.000.000</Text>
        </View>
      </View>
      <View style={styles.contentWrapper3}>
        <Text style={styles.text1}>Add Transaction</Text>
        <Gap height={8.81}/>
        <View style={styles.button}>
          <Button 
          title="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}/>
          <Gap height={18.04}/>
          <Button 
          title="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')} />
        </View>
      </View>
      <Footer />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 24,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  contentWrapper: {
    backgroundColor: "white",
    marginTop: 20,
    paddingBottom: 40,
  },
  text1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
    paddingLeft: 24,
    paddingTop: 13,
  },
  nominal1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 18,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 24,
    marginRight: 25,
  },
  text2: {
    fontFamily: 'Poppins-Reguler',
    color: 'black',
    marginTop: 20,
    marginHorizontal: 20,
  },
  nominal2: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginTop: 20,
  },
  text3: {
    fontFamily: 'Poppins-Reguler',
    color: 'black',
    marginTop: 11,
    marginHorizontal: 20,
  },
  nominal3: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginTop: 11,
    marginLeft: 2,
  },
  contentWrapper2: {
    flexDirection: 'row',
    fontSize: 14,
  },
  contentWrapper3: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingBottom: 71.27,
  }
})