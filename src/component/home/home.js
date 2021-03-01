import React, { useContext } from 'react';
import * as Nat from 'react-native'
import { SunContext } from '../../context/sunContext'
import { Card, CardItem, Body, Text } from 'native-base';


export function Home({ navigation }) {

    const { initialState: { currUser, students, companies, userState } } = useContext(SunContext)

    return (
        <Nat.ScrollView>
            <Nat.View style={styles.body}>

                {
                    (userState !== 'student') ? (
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

                                        </Nat.View>
                                    )

                                })

                            }
                        </Nat.View>

                    ) : (
                            <Nat.View>
                                {
                                    companies.map((company) => {
                                        return (
                                            <Nat.View style={styles.card} key={company.uid}>

                                                <Nat.Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "#003034" }}>{company.name}</Nat.Text>
                                                <Nat.View style={{ flexDirection: "row" }} >
                                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Job Designation:</Nat.Text>
                                                    <Nat.Text style={{ fontSize: 20, flex: 1 }}>{company.designation}</Nat.Text>
                                                </Nat.View>
                                                <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => navigation.navigate('SingalCard')}>
                                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>Apply</Nat.Text>
                                                </Nat.TouchableOpacity>
                                            </Nat.View>
                                        )

                                    })

                                }
                            </Nat.View>
                        )
                }

            </Nat.View>
        </Nat.ScrollView>
    )
}


const styles = Nat.StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#003034",
    },
    body: {
        flex: 1,
        width: "100%",
        padding: 10,
    },
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
