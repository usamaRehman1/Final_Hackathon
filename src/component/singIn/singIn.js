import React, { useState , useContext } from 'react';
import * as Nat from 'react-native'
import { Container, Header, Content, Form, Item, Label, Input, Body, Title, Spinner, Button, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SunContext } from '../../context/sunContext';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'


export function SingIn({ route, navigation }) {

    const { userState } = route.params;

    const { initialState :  { adminKey } ,getCurrUserState, getCurrUser, getAllStudents, getAllCompanies } = useContext(SunContext)

    const [loder, setLoder] = useState(false)
    const [key , setKey] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    const login = () => {
        setLoder(true)

        if(validation()){
            
            auth().signInWithEmailAndPassword(email, password).then((response) => {
                database().ref('/').child(`users/${userState}/${response.user.uid}`).once('value',async (data) => {
                    let curr_user = data.val()
                    getCurrUser(curr_user)
                    getCurrUserState(userState)
                    getAllStudents()
                    getAllCompanies()
                })

                navigation.navigate('TabNavigation', { userState : userState })
            }).catch((error) => {
                setDefaultState()
                alert("error=>", error.message)
            })
        }else{
            setLoder(false)
        }
    }

   
    const validation = () => {

        let flag = true;
        let rgxEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})/;
        let rgxPass = /^([a-zA-Z0-9_\.]{6,8})/;

        if (email.match(rgxEmail)) {
            setEmail(email)
        } else {
            alert("Incorrect Email")
            flag = false;
        }

        if (password.match(rgxPass)) {
            setPassword(password)
        } else {
            alert("incorrect Password")
            flag = false;
        }

        return flag
    }

    const AdmineLogin = () => {

        setLoder(true)

        if(key.toString() === adminKey){
            getCurrUser(userState)
            getCurrUserState(userState)
            getAllStudents()
            getAllCompanies()

            setTimeout(() => {
                setLoder(false)
                navigation.navigate('AdminePage')
            }, 2000);
        }else{
            setLoder(false)
            alert("Your key is wron")
        }
    }

    
    
    const setDefaultState = () => {
        setLoder(false)
        setEmail("")
        setPassword("")
    }


    if (userState === "admin") {
        return (
            <Nat.View>
                <Form>
                    <Item style={{ borderBottomColor: "#fff" }}>
                        <Ionicons name="lock-closed" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                        <Input style={styles.input} placeholder="enter admin ID" secureTextEntry  onChangeText={text => setKey(text)} value={key} keyboardType='numeric'/>
                    </Item>

                    <Item style={{ borderBottomColor: "#fff" }}>
                        <Button block danger style={{ width: "98%", marginTop: 10, }} onPress={() => AdmineLogin()}>
                            {loder ? (
                                <Spinner color='#003034' />
                            ) : (
                                    <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "#003034" }}> SUBMIT </Text>
                                )}
                        </Button>
                    </Item>

                    
            <Nat.View style={{ margin: 10 }}>
                <Nat.Text>If you are not Admin and by mistak you come here So</Nat.Text>
                <Nat.TouchableOpacity onPress={() => navigation.navigate('UserPicker')} >
                    <Nat.Text style={styles.createAccountLink}>Go Back</Nat.Text>
                </Nat.TouchableOpacity>

                <Nat.Text>Admin Key : 12345678</Nat.Text>
            </Nat.View>
                </Form>
            </Nat.View>
        )
    }


    return (
        <Nat.View>
            <Form>
                <Item style={{ borderBottomColor: "#fff" }}>
                    <Ionicons name="mail" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                    <Input style={styles.input} placeholder="Enter email" textContentType="emailAddress" onChangeText={text => setEmail(text)} value={email} />
                </Item>

                <Item style={{ borderBottomColor: "#fff" }}>
                    <Ionicons name="lock-closed" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                    <Input style={styles.input} placeholder="Enter password" secureTextEntry onChangeText={text => setPassword(text)} value={password} />
                </Item>


                <Item style={{ borderBottomColor: "#fff" }}>
                    <Button block danger style={{ width: "98%", marginTop: 10, }} onPress={() => login()}>
                        {loder ? (
                            <Spinner color='#003034' />
                        ) : (
                                <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "#003034" }}> LOGIN </Text>
                            )}
                    </Button>
                </Item>
            </Form>

            <Nat.View style={{ margin: 20 }}>
                <Nat.Text>If you Dont have an Account please register now</Nat.Text>
                <Nat.TouchableOpacity onPress={() => navigation.navigate('SingUp', { userState: userState, })} >
                    <Nat.Text style={styles.createAccountLink}>Create Account?</Nat.Text>
                </Nat.TouchableOpacity>
            </Nat.View>


        </Nat.View>

    )
}

const styles = Nat.StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 5,
        margin: 10,
        borderColor: "#003034",
        borderRadius: 5,
    },
    createAccountLink: {
        fontSize: 18,
        fontWeight: "bold",
        color: "blue",
        textAlign: "center"
    }
})
