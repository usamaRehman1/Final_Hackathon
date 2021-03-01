import React from 'react'
import * as Nat from 'react-native' 

export function SplashScreen ({ navigation }){

    setTimeout(() => {
        navigation.navigate('UserPicker')
        
    }, 3000);

    return(
        <Nat.View style={styles.container}>
        <Nat.View style={{ marginTop: 200 }}>
            <Nat.Image source={require("../../images/logo.png")} style={{ width: 150, height: 220 }} />
        </Nat.View>
        <Nat.View style={{ marginTop: 200 }}>
            <Nat.Text style={styles.auther}>From</Nat.Text>
            <Nat.Text style={styles.auther}>Muhammad Usama</Nat.Text>
        </Nat.View>

    </Nat.View>
    )
}

const styles = Nat.StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#003034",
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    },
    auther:{
        textAlign: "center",
        fontSize: 15,
        color: "#fff" 
    }
})