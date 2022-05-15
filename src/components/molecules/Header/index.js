import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets/icons'
import { Gap, Tym, Foto } from '../../atoms';

const Header = ({title, onBack, tym, gambar}) => {
  return (
    <View style={styles.container}>
        <View style={styles.page}>
            {onBack &&(
                <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
                <View style={styles.back} >
                    <IconBack />
                </View>
            </TouchableOpacity>
            )}
            <Gap width={26} />
            <View>
            <Text style={styles.text}>{title}</Text>
            {tym &&(
                <View>
                    <Tym />
                </View>
            )}
            </View>
            {gambar &&(
                <Foto />
            )}
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    icon: {
    },
    gambar: {
        height: 50,
        width: 50,
        marginLeft: 99,
        borderRadius: 10,
    },
    container: {
        paddingVertical: 37,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    page: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'Poppins-Medium',
    },
    back: {
        marginBottom: 4,
        marginTop: 5,
        paddingLeft: 24,
    },
    nextText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }
})