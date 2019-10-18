import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';

class App extends Component {
    render() {
        return <AppContainer />
    }
}
export default App;

// class  LoginScreen extends Component {
//     render () {
//         return (
//             <View>
//                 <Text>Login</Text>
//             </View>
//         )
//     }
// }

const HomeTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Beranda',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-home' size={24} color={tintColor} />
            )
        }
    },
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarLabel: 'Antrianku',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-list' size={24} color={tintColor} />
            )
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'Akun',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-person' size={24} color={tintColor} />
            )
        }
    },
}, {
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName,
            initialRouteName: 'Home',
            activeTintColor: '#4DC9FF',
        };
    }
})

const AppSwitchNavigator = createSwitchNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeTabNavigator },
    Signup: { screen: SignupScreen }
})

const AppContainer = createAppContainer(AppSwitchNavigator);
