import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

let { StyleSheet } = React;

import styles from '../style/style';

class LoginScreen extends Component {

    state = { email: "", password: "" }

    signup() {
        this.props.navigation.navigate('Signup')
    }

    checkLogin() {
        const { email, password } = this.state
        if (email == 'admin' && password == 'admin') {

            // fetch('http://localhost:0000', {method: 'POST', body: `email=${email}&password=${password}`})
            // .then (res => {
            //     console.warn(res)
            // })

            this.props.navigation.navigate('Home')
        } else {
            Alert.alert('Cek lagi dong', 'Email/Password salah', [{
                text: 'Kembali'
            }])
        }
    }

    render() {
        const { heading, input, container } = styles
        return (

            <View style={styles.container}>
                
                <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                    <Image source={require('../assets/wasd2.png')}
                        style={styles.image}
                    />
                </View>

                <Text style={styles.headingLogin}>Silahkan masuk</Text>
                <TextInput style={input} placeholder="Email" placeholderTextColor="#2F4F4F"  onChangeText={text => this.setState({ email: text })} />
                <TextInput style={input} secureTextEntry={true} placeholderTextColor="#2F4F4F" placeholder="Password" onChangeText={text => this.setState({ password: text })} />
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Button title="Masuk"
                        onPress={_ => this.checkLogin()}/>
                </View>
                <View>
                    <Text numberOfLines={1} style={{ padding: 40 }}>
                        __________________________________________
                    </Text>
                </View>
                <View style={styles.signupTextCont}>
                    
                    <Text style={styles.signupText}>Belum punya akun?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Daftar</Text></TouchableOpacity>
                </View>
                

            </View>


        );
    }
}

export default LoginScreen;