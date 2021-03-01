import React, { useContext } from "react";
import * as Nat from 'react-native'
import { SunContext } from '../../context/sunContext'

export function AllCompanies({ navigation }) {
    const { initialState: { currUser, students, companies, userState } } = useContext(SunContext)

    return (
        <Nat.ScrollView>
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
                                <Nat.TouchableOpacity style={styles.applyBtn} onPress={() => navigation.navigate('SingalCard', { detail : company, userState: "company" })}>
                                    <Nat.Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff" }}>Detail</Nat.Text>
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