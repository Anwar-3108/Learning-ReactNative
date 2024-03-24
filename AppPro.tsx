import React from "react";
import { View ,Text,StyleSheet,useColorScheme} from "react-native"



const AppPro = ():JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <Text style={isDarkMode?styles.whiteText:styles.blackText}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{`Dark Mode: ${isDarkMode}`}</Text>
        </View>
    );
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    whiteText:{
        color:"#fff",
    },
    blackText:{
        color:"#000000"
    }
})
export default AppPro
