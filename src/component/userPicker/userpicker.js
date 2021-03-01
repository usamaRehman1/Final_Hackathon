import React, { useState } from 'react';
import * as Nat from 'react-native'
import { Button, Text, Spinner, Picker, Form } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function UserPicker({ navigation }) {

    const [selected, isSelected] = useState(undefined)
    const [loder , setLoder] = useState(false)
    
    const continueT0LoginPage = () => {
        setLoder(true)

        let promise = new Promise(function(resolve, reject){
    
            if(selected != undefined){
                setTimeout(() => {
                    resolve();
                }, 2000)
            }else{
                reject();
            }
        })

        promise.then(() => {
            navigation.navigate('SingIn', {
                userState: selected,
            })
            setLoder(false)

        }).catch(() => {
            setLoder(false)
            alert("Please Select any One Option")
        })
    
    }


    return (
        <Nat.View style={styles.container}>
            <Nat.Image source={require('../../images/rs.jpg')} style={{ width: "100%", height: "60%", flex: 2 }} />
            <Nat.View style={styles.innerContainer}>

                <Nat.View style={styles.picker}>
                    <Nat.Picker
                        style={{ flex: 5 }}
                        selectedValue={selected}
                        onValueChange={(value, itemIndex) => isSelected(value)}
                    >
                        <Nat.Picker.Item label="__select__" value="__select__" />
                        {
                            ["admin", "student", "company"].map((gen, ind) => {
                                return <Nat.Picker.Item label={gen} value={gen} key={ind} />
                            })
                        }
                    </Nat.Picker>
                </Nat.View>

                <Button block danger style={{ width: "99%", marginTop:10,}} onPress={() => continueT0LoginPage()}>
                    { loder ? (
                        <Spinner color='#003034' />
                    ) : (
                        <Text style={{fontSize:20, fontWeight:"bold", letterSpacing:2, color: "#003034"}}> CONTINUE </Text>
                    )}
                </Button>

                <Nat.View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                    <Nat.Text style={{ color: "#fff" }}>If You continue, you are accepting</Nat.Text>
                    <Nat.Text style={{ color: "#fff", textDecorationLine: "underline" }}>Rising Sun Term and condition and privacy policy</Nat.Text>
                </Nat.View>

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
    },
    innerContainer: {
        flex: 1,
        width: "100%",
        padding:10,
    },
    picker: {
        marginTop: 5,
        width: "99%",
        borderBottomWidth: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        flexDirection: "row",
        borderColor: "#d9d9d9",
        position: "relative",
    }
})