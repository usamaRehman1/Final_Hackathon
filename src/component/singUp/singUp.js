import React, { useState } from 'react';
import * as Nat from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
import { Form, Item, Label, Input, Spinner, Button, Text,Textarea } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function SingUp({ route, navigation }) {

    const { userState } = route.params;
    console.log("useState =>", userState)
    const [loder, setLoder] = useState(false)

    let [name, setName] = useState('')
    let [grNum, setgrNum] = useState('')
    let [phoneNum, setPhoneNum] = useState('')
    let [country, setCountry] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [designation, setDesignation] = useState('')
    let [description, setDescription] = useState('')
    const [gender, setGender] = useState("__select gender__");
    const [education, setEducation] = useState("__select curr. class__");
    let [totalMarks, setTotalMarks] = useState('')
    let [obtainMarks, setObtainMarks] = useState('')

    const companyLogin = () => {
        setLoder(true)

        if (CompanyValidation()) {
            let newUser = { name, email, password, designation, description}

            auth().createUserWithEmailAndPassword(email, password).then((response) => {
                // console.log("Response=>", response.user.uid)
                let newUserWithUid = { ...newUser, uid: response.user.uid }

                database().ref('/').child(`users/company/${response.user.uid}`).set(newUserWithUid)
                    .then(() => {
                        setDefaultState()
                        alert("User regestered successfully")
                        navigation.navigate("SingIn", {   userState:userState, })
                    })

            }).catch((error) => {
                setDefaultState()
                alert("Error=>", error.message)
            })

        }else{
            setLoder(false)
        }
    }

    const CompanyValidation = () => {
        
        let flag = true;

        let rgxName = /^([a-zA-z])/;
        let rgxEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})/;
        let rgxPass = /^([a-zA-Z0-9_\.]{6,8})/;
        // let rgxCell = /^([0-9]{11})/;

        
        if (name.match(rgxName)) {
            setName(name)
        } else {
            alert("Incorrect Name")
            flag = false;
        }

        if (designation !== "") {
            setDesignation(designation)
        } else {
            alert("pleaes enter designation")
            flag = false;
        }

        // if (phoneNum.match(rgxCell)) {
        //     setPhoneNum(phoneNum)
        // } else {
        //     alert("incorect Cell No.")
        //     flag = false;
        // }

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

        if (description !== "") {
            setDescription(description)
        } else {
            alert("pleaes enter description")
            flag = false;
        }

        return flag

    }


    const studentLogin = () => {
        setLoder(true)

        if (validation()) {
            let newUser = { name,grNum, email, password, phoneNum, country, gender, education, totalMarks,obtainMarks }

            console.log("Users=>", newUser)

            auth().createUserWithEmailAndPassword(email, password).then((response) => {
                // console.log("Response=>", response.user.uid)
                let newUserWithUid = { ...newUser, uid: response.user.uid }

                database().ref('/').child(`users/student/${response.user.uid}`).set(newUserWithUid)
                    .then(() => {
                        setDefaultState()
                        alert("User regestered successfully")
                        navigation.navigate("SingIn", {   userState:userState, })
                    })

            }).catch((error) => {
                setDefaultState()
                alert("Error=>", error.message)
            })

        }else{
            setLoder(false)
        }
    }

    
    const validation = () => {

        let flag = true;

        let rgxName = /^([a-zA-z])/;
        let rgxEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})/;
        let rgxPass = /^([a-zA-Z0-9_\.]{6,8})/;
        let rgxCell = /^([0-9]{11})/;

        if (name.match(rgxName)) {
            setName(name)
        } else {
            alert("Incorrect Name")
            flag = false;
        }

        if (phoneNum.match(rgxCell)) {
            setPhoneNum(phoneNum)
        } else {
            alert("incorect Cell No.")
            flag = false;
        }

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

        if (gender !== "__select gender__") {
            setGender(gender)
        } else {
            alert('Please enter gender')
            flag = false;
        }

        if (education !== "__select curr. class__") {
            setEducation(education)
        } else {
            alert("pleaes enter education")
            flag = false;
        }

        if (totalMarks != '') {
            setTotalMarks(totalMarks)
        } else {
            alert("incorect Total Marks")
            flag = false;
        }

        
        if (obtainMarks !== '') {
            setObtainMarks(obtainMarks)
        } else {
            alert("incorect Obtain Marks")
            flag = false;
        }

        return flag

    }

    
    const setDefaultState = () => {
        setLoder(false)
        setName("")
        setEmail("")
        setPassword("")
        setPhoneNum("")
        setCountry("")
        setGender("__select gender__")
        setEducation("__select curr. class__")
        setObtainMarks("")
        setTotalMarks("")
    }



    

    switch (userState) {
        case 'student':
            return (
                <Nat.ScrollView>
                <Nat.View>
                    <Form>
                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="person" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter full name"  onChangeText={text => setName(text)} value={name}/>
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="book" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter GR number"  onChangeText={text => setgrNum(text)} value={grNum} keyboardType='numeric'/>
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="call" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter phone number"  onChangeText={text => setPhoneNum(text)} value={phoneNum} keyboardType='numeric'  maxLength={11}/>
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="flag" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter nationality"  onChangeText={text => setCountry(text)} value={country}/>
                        </Item>

                        

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="mail" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter email"  textContentType="emailAddress" onChangeText={text => setEmail(text)} value={email}/>
                        </Item>


                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="lock-closed" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter password"  secureTextEntry onChangeText={text => setPassword(text)} value={password} />
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="person" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Nat.Picker
                                style={{ flex: 5 , borderWidth:2}}
                                selectedValue={gender}
                                onValueChange={(genderValue, itemIndex) => setGender(genderValue)}
                            >
                                <Nat.Picker.Item label="__select gender__" value="__select gender__" />
                                {
                                    ["Male", "Female"].map((gen, ind) => {
                                        return <Nat.Picker.Item label={gen} value={gen} key={ind} />
                                    })
                                }
                            </Nat.Picker>
                        </Item>
                        
                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="school" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Nat.Picker
                                style={{ flex: 5 , borderWidth:2}}
                                selectedValue={education}
                                onValueChange={(value, itemIndex) => setEducation(value)}
                            >
                                <Nat.Picker.Item label="__select curr. class__" value="__select curr. class__" />
                                {
                                    ["under Matric","Matric","Inter",  "Graduation", "Master",].map((edu, ind) => {
                                        return <Nat.Picker.Item label={edu} value={edu} key={ind} />
                                    })
                                }
                            </Nat.Picker>
                        </Item>

                        
                        <Item style={{ borderBottomColor: "#fff" , flexDirection:"row"}}>
                            <Nat.View style={{flex:1}}>
                               <Input style={styles.input} placeholder="total marks" onChangeText={text => setTotalMarks(text)} value={totalMarks} keyboardType='numeric' />
                            </Nat.View>
                            <Nat.View>
                               <Input style={styles.input} placeholder="obtain marks" onChangeText={text => setObtainMarks(text)} value={obtainMarks} keyboardType='numeric'/>
                            </Nat.View>
                        </Item>
                        

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Button block danger style={{ width: "98%", marginTop: 10, }} onPress={() => studentLogin()}>
                                {loder ? (
                                    <Spinner color='#003034' />
                                ) : (
                                        <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "#003034" }}> SUBMIT </Text>
                                    )}
                            </Button>
                        </Item>
                    </Form>
                </Nat.View>
                </Nat.ScrollView>
            )
        case 'company':
            return (
                <Nat.View>

                     <Form>
                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="business" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter company name" onChangeText={text => setName(text)} value={name}/>
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="logo-designernews" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter designation" onChangeText={text => setDesignation(text)} value={designation}/>
                        </Item>

                        
                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="mail" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter email"  textContentType="emailAddress"  onChangeText={text => setEmail(text)} value={email}/>
                        </Item>


                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Ionicons name="lock-closed" style={{ fontSize: 30, color: "#003034" }}></Ionicons>
                            <Input style={styles.input} placeholder="enter password" secureTextEntry onChangeText={text => setPassword(text)} value={password}  />
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Textarea 
                                rowSpan={5}
                                bordered 
                                placeholder="Enter description" 
                                value={description}
                                onChangeText={text => setDescription(text)} 
                                style={{borderWidth: 1,
                                    width:"95%",
                                    padding: 5,
                                    margin: 10,
                                    borderColor: "#003034",
                                    borderRadius: 5,
                                }}/>
                        </Item>

                        <Item style={{ borderBottomColor: "#fff" }}>
                            <Button block danger style={{ width: "98%", marginTop: 10, }} onPress={() => companyLogin()}>
                                {loder ? (
                                    <Spinner color='#003034' />
                                ) : (
                                        <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "#003034" }}> SUBMIT </Text>
                                    )}
                            </Button>
                        </Item>
                    </Form>
                </Nat.View>
            )
        default:
            alert("Somthing missing in previous step")
    }


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
    },
    picker: {
        marginTop: 5,
        width: "98%",
        borderBottomWidth: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        flexDirection: "row",
        borderColor: "#d9d9d9",
        position: "relative",
    }
})