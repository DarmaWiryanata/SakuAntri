import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from '../../style/style';

class KartuIsi extends Component {

    render() {
        return (
            <View style={{ height: null, width: 310, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 10 }} onPress>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ padding: 10 }}>
                        <Image source={this.props.imageUri}
                            style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 10 }} />
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text style={styles.cardTextHeading}>{this.props.lokasi}</Text>

                        <Text style={styles.cardTextNormal}>{this.props.bagian}</Text>

                        <View style={{ position: 'absolute', right: 10, bottom: 10}}>
                        <TouchableOpacity style={{ justifyContent: 'center', height: 30, width: 70, padding: 10, margin: 10, backgroundColor: '#4DC9FF', borderRadius: 5 }}>
                            <Text style={{textAlign: 'center'}}>Pilih</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>

        );
    }
}

export default KartuIsi;