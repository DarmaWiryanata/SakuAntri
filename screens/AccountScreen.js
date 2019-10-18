import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableHighlight
} from 'react-native';

import styles from '../style/style';
import AccountData from '../components/Home/AccountData';

class AccountScreen extends Component {

    logout() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View >
                    <Text style={styles.headingAccount}>Akun</Text>
                </View>

                <AccountData imageUri={require('../assets/wasd2.png')}
                    Username="Nama pengguna"
                    Email="nama-pengguna@mailprovider.com"
                    Handphone="+62 345 678 90"
                    Address="Indonesia" />
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button 
                    title= 'Keluar'
                    onPress={_ => this.logout()}
                    />
                </View>
            </View>
        );
    }
}

export default AccountScreen;