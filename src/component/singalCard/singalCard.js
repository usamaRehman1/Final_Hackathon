import React, { useContext } from 'react';
import * as Nat from 'react-native'
import database from '@react-native-firebase/database'
import { SunContext } from '../../context/sunContext'

export function SingalCard({ route, navigation }){

    const { detail, userState } = route.params;
    console.log(detail, userState )

    const { initialState , getAllStudents, getAllCompanies } = useContext(SunContext)


    const removeStudent = () => {
        database().ref('/').child(`users/student/${detail.uid}`).remove();
        getAllStudents()
        navigation.navigate('AllStudents')

    }

    const removeCompany = () => {
        database().ref('/').child(`users/company/${detail.uid}`).remove();
        getAllCompanies()
        navigation.navigate('AllCompanies')

    }

    if(userState === "student"){
        
        let percentage = (detail.obtainMarks / detail.totalMarks) * 100
        return(
            <Nat.View style={styles.card}>
            <Nat.Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "#003034" }}>{detail.name}</Nat.Text>
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>gender : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.gender}</Nat.Text>
            </Nat.View>
    
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Education : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.education}</Nat.Text>
            </Nat.View>
    
            
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Percentage : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{`${percentage.toFixed(2)}%`}</Nat.Text>
            </Nat.View>

            
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Country : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.country}</Nat.Text>
            </Nat.View>

            
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Email : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.email}</Nat.Text>
            </Nat.View>
    
            <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => removeStudent()}>
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>REMOVE STUDENT</Nat.Text>
            </Nat.TouchableOpacity>
    
        </Nat.View>
        )

    }

    if(userState === 'company'){
        return(
            <Nat.View style={styles.card}>
            <Nat.Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "#003034" }}>{detail.name}</Nat.Text>
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Designation : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.designation}</Nat.Text>
            </Nat.View>
    
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Email : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.email}</Nat.Text>
            </Nat.View>
            
            <Nat.View style={{ flexDirection: "row" }} >
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Description : </Nat.Text>
                <Nat.Text style={{ fontSize: 20, flex: 1 }}>{detail.description}</Nat.Text>
            </Nat.View>
    
            <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => removeCompany()}>
                <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>REMOVE STUDENT</Nat.Text>
            </Nat.TouchableOpacity>
    
        </Nat.View>
        )

    }

  
}



const styles = Nat.StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#003034",
        marginTop: 10,
        padding: 10,
        borderRadius: 5
    },
    applyBtn: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#eb7734"
    }
  
})