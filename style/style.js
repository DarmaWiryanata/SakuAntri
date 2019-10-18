import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    heading: {
        fontSize: 18,
        fontWeight: '500',
    },

    headingLogin: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },

    semiHeading: {
        fontSize: 18,
        fontWeight: '700',
    },

    headingAccount: {
        fontSize: 25,
        paddingBottom: 20,
        paddingTop: 40,
        paddingLeft: 20,
        fontWeight: '700',

    },

    normal: {
        fontSize: 14,
    },

    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        margin: 10,
    },

    image: {
        height: 100,
        width: 100,
        borderRadius: 10
    },

    imageAccount: {
        height: 150,
        width: 150,
        paddingBottom: 50,
        borderRadius: 100
    },

    signupButton: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    
    logoutButton: {
        marginBottom: 30,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        elevation: 5
      },

    signupTextCont: {

        justifyContent: 'center',
        paddingTop: 10,
        flexDirection: 'row'
    },

    signupText: {
        color: 'black',
        fontSize: 16
    },

    alternativeLayoutButtonContainer: {
        // margin: 20,
        flexDirection: 'row',
        justifyContent: 'center'
      },

      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      },

      cardTextHeading: {
          fontSize: 20,
          fontWeight: '700',
      },
      cardTextNormal: {
        fontSize: 16,
    },
    cardTextNomor: {
        fontSize: 26,
        fontWeight: '700',
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})