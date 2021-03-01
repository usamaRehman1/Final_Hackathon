import React, { useContext } from "react";
import * as Nat from 'react-native'
import { SunContext } from '../../context/sunContext'

export function AllStudents({ navigation }) {
    const { initialState: { currUser, students, companies, userState } } = useContext(SunContext)

    return (
        <Nat.ScrollView>
            <Nat.View>
                {
                    students.map((student) => {

                        let percentage = (student.obtainMarks / student.totalMarks) * 100
                        return (
                            <Nat.View style={styles.card} key={student.uid}>
                                <Nat.Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "#003034" }}>{student.name}</Nat.Text>
                                <Nat.View style={{ flexDirection: "row" }} >
                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>gender : </Nat.Text>
                                    <Nat.Text style={{ fontSize: 20, flex: 1 }}>{student.gender}</Nat.Text>
                                </Nat.View>
                                <Nat.View style={{ flexDirection: "row" }} >
                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Education : </Nat.Text>
                                    <Nat.Text style={{ fontSize: 20, flex: 1 }}>{student.education}</Nat.Text>
                                </Nat.View>
                                <Nat.View style={{ flexDirection: "row" }} >
                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Percentage : </Nat.Text>
                                    <Nat.Text style={{ fontSize: 20, flex: 1 }}>{`${percentage.toFixed(2)}%`}</Nat.Text>
                                </Nat.View>

                                <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => navigation.navigate('SingalCard', { detail : student, userState : "student"})}>
                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>DETAIL</Nat.Text>
                                </Nat.TouchableOpacity>

                            </Nat.View>
                        )

                    })

                }
            </Nat.View>
        </Nat.ScrollView>

    )

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