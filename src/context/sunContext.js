import React, { createContext , useReducer} from "react";
import { AUTH_REDUCERS } from "../reducers/authReducer";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'

const INITIALSTATE = {
    authentication : false,
    students: [],
    companies: [],
    currUser: {},
    userState: '',
    adminKey: '12345678',
}


export const SunContext = createContext(INITIALSTATE)

export const SunProvider = ({ children }) => {

    const [state , authdispatch] = useReducer(AUTH_REDUCERS , INITIALSTATE)

    function getCurrUserState(user) {
        authdispatch({
            type:"SET_STATE",
            payload: user,
        })

    }

    function getCurrUser(user) {
        authdispatch({
            type: "CURR_USER",
            payload: user,
        })
    }

    function getAllStudents(){
        database().ref('/').child("users/student/").on("child_added", dataSnap => {
            authdispatch({
                type: "ALL_STUDENTS",
                payload: dataSnap.val(),
            })
        })
    }

    
    function getAllCompanies(){
        database().ref('/').child("users/company/").on("child_added", dataSnap => {
            authdispatch({
                type: "ALL_COMPANIES",
                payload: dataSnap.val(),
            })
        })
    }


    return(
        <SunContext.Provider value={{initialState : state , getCurrUserState, getCurrUser, getAllStudents, getAllCompanies}}> 
            { children }
        </SunContext.Provider>
        
    )
} 

