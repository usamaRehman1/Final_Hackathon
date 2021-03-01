import React, { useState,useContext } from 'react';
import * as Nat from 'react-native'
import { SunContext } from '../../context/sunContext'
import {Item, Spinner, Button, Text } from 'native-base';


export function Account({ navigation }) {

    const { initialState: { currUser, students, companies, userState } , getCurrUser, getAllStudents,getAllCompanies} = useContext(SunContext)
    console.log("CurrUser=>", currUser)
    const [loder, setLoder] = useState(false)


    let percentage = (currUser.obtainMarks / currUser.totalMarks) * 100 ;
    console.log(percentage.toFixed(2))

    const logOut = () => {
        setLoder(true)

        setTimeout(() => {
            setLoder(false)
            navigation.navigate("UserPicker")
        }, 2000);
    }

    switch (userState) {
        case "student":
            return(

                <Nat.View style={styles.container}>

                <Nat.View style={styles.table}>
                    <Nat.View style={styles.profile}>
                        <Nat.Text style={styles.profileImage} >{currUser.name[0]}</Nat.Text>
                    </Nat.View>
    
                    <Nat.View style={styles.card}>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Name</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.name}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Country</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.country}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Gender</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.gender}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Cell</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.phoneNum}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Education</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.education}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Percentage </Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{`${percentage.toFixed(2)}%`}</Nat.Text>
                        </Nat.View>
    
                      
    
                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Button block danger style={{ width: "98%", marginTop: 10, }} onPress={() => logOut()}>
                                {loder ? (
                                    <Spinner color='#003034' />
                                ) : (
                                    <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "#003034" }}> LOGOUT </Text>
                                )}
                            </Button>
                        </Item>
    
    
                    </Nat.View>
    
    
    
                </Nat.View>
    
            </Nat.View>
                
            )
        case "company":
            return(
                <Nat.View style={styles.container}>

                <Nat.View style={styles.table}>
                    <Nat.View style={styles.profile}>
                        <Nat.Text style={styles.profileImage} >{currUser.name[0]}</Nat.Text>
                    </Nat.View>
    
                    <Nat.View style={styles.card}>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Name</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.name}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Designation</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.designation}</Nat.Text>
                        </Nat.View>
    
                        <Nat.View style={styles.cardSection}>
                            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1, color: "#b5561b"}}>Email</Nat.Text>
                            <Nat.Text style={{ fontSize: 20, flex: 1 }}>{currUser.email}</Nat.Text>
                        </Nat.View>
    
                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Button block danger style={{ width: "98%", marginTop: 10, }} onPress={() => logOut()}>
                                {loder ? (
                                    <Spinner color='#003034' />
                                ) : (
                                    <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "#003034" }}> LOGOUT </Text>
                                )}
                            </Button>
                        </Item>
    
    
                    </Nat.View>
    
    
    
                </Nat.View>
    
            </Nat.View>
                    
            )
        default:
            break;
    }
}


const styles = Nat.StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        padding: 20,
        margin: 10,
        width: 80,
        borderRadius: 70,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        backgroundColor: "#003034",
        color: "#fff",

    },
    table: {
        flex: 1,
        marginTop: 50,
    },
    card: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "#d9d9d9",
        borderBottomWidth: 0,
        shadowColor: "#000000",
        backgroundColor: "#fff",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        padding: 10,
    },
    cardSection: {
        marginTop: 5,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#fff",
        justifyContent: "center",
        flexDirection: "row",
        borderColor: "#d9d9d9",
        position: "relative",
    },
})