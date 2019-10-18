import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import KartuIsi from '../components/Home/KartuIsi';
import styles from '../style/style'

class IsiMerchant extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white', }}
            showsHorizontalScrollIndicator={false}>
                
                <View >
                    <Text style={styles.headingAccount}>Nama Merchant</Text>
                </View>
                
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <KartuIsi imageUri={require('../assets/wasd2.png')}
                        lokasi="Nama Merchant"
                        bagian="Lokasi merchant"/>
                </View>
                
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <KartuIsi imageUri={require('../assets/wasd2.png')}
                        lokasi="Nama Merchant 2"
                        bagian="Lokasi merchant 2"/>
                </View>
                
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <KartuIsi imageUri={require('../assets/wasd2.png')}
                        lokasi="Nama Merchant 3"
                        bagian="Lokasi merchant 3"/>
                </View>

                <View style={{ alignItems: 'center', padding: 20 }}>
                    <KartuIsi imageUri={require('../assets/wasd2.png')}
                        lokasi="Nama Merchant 4"
                        bagian="Lokasi merchant 4"/>
                </View>

                <View style={{ alignItems: 'center', padding: 20 }}>
                    <KartuIsi imageUri={require('../assets/wasd2.png')}
                        lokasi="Nama Merchant 5"
                        bagian="Lokasi merchant 5"/>
                </View>

            </ScrollView>

            
        );
    }
}

export default IsiMerchant;