import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    ListItem,
    Item
} from 'react-native';

import Category from '../components/Home/Category';
import styles from '../style/style';

import IsiMerchant from './IsiMerchant';

const { height, width } = Dimensions.get('window')

class HomeSceen extends Component {

    _terakhir1() {
        this.props.navigation.navigate('IsiMerchant')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView scrollEventThrotle={16} >

                    <View style={{ flex: 1, backgroundColor: 'white' }}>

                        <View >
                            <Text style={styles.headingAccount}>SakuAntri</Text>
                        </View>

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={styles.heading}>ANTRIAN TERAKHIR</Text>
                        </View>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={_ => this._terakhir1()}>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 1" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.antrianTerakhir1}>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 2" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.antrianTerakhir1}>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 3" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.antrianTerakhir1}>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 4" />
                                </TouchableOpacity>

                            </ScrollView>
                        </View>

                        <View >
                            <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                                <Text style={styles.heading}>
                                    ANTRIAN POPULER
                                </Text>
                            </View>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={styles.normal}>Semua yang kamu mau tunggu, jadi satu disini</Text>
                                <TouchableOpacity>
                                    <View style={{ width: width - 40, height: 250, marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }}>
                                        <Image
                                            style={{ flex: 2.5, height: null, width: null, resizeMode: 'cover', borderRadius: 10 }}
                                            source={require('../assets/wasd2.png')} />
                                        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                            <Text style={styles.semiHeading}>
                                                Antrian paling populer
                                        </Text>
                                            <Text style={styles.normal}>
                                                Skidipappap Sawadihap Konkunhap Alahaphapljhdfsglhdflghdlfkhg
                                        </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 130, marginTop: 10 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 1" />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 2" />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 3" />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 4" />
                                </TouchableOpacity>

                            </ScrollView>
                        </View>

                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                KATEGORI
                            </Text>
                        </View>

                        <View style={styles.container}>
                            {/* <FlatList
                            data={[
                                require('../assets/wasd2.png'),

                            ]}
                            renderItem={({ item }) => {
                                return <ListItem image={item} />
                            }}
                            keyExtractor={
                                (index) => { return index }
                            }
                        /> */}
                        </View>

                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default HomeSceen;