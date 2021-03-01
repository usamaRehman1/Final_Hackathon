import  React ,{ useContext } from "react";
import * as Nat from 'react-native'
import { SunContext } from '../../context/sunContext'

export function AdminePage({ navigation }) {
    const { initialState: { currUser, students, companies, userState }, getCurrUserState, getCurrUser, getAllStudents, getAllCompanies } = useContext(SunContext)

    const logOut = () => {
        getCurrUserState('')
        getCurrUser([])
        getAllStudents([])
        getAllCompanies([])
        navigation.navigate("UserPicker")
    }

    return (
        <Nat.View>
        <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => navigation.navigate('AllStudents')}>
            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>VIEW STUDENTS</Nat.Text>
        </Nat.TouchableOpacity>
        <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => navigation.navigate('AllCompanies')}>
            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>VIEW COMPANIES</Nat.Text>
        </Nat.TouchableOpacity>

        <Nat.TouchableOpacity style={styles.logOutBtn} onPress={() => logOut()}>
            <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>LOGOUT</Nat.Text>
        </Nat.TouchableOpacity>
    </Nat.View>

    )

}


const styles = Nat.StyleSheet.create({
    applyBtn: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#eb7734"
    },
    logOutBtn:{
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#003034"
    }
})