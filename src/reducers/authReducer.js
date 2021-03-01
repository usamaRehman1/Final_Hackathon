export const AUTH_REDUCERS = (state , action) => {
    switch (action.type) {
        case "SET_STATE":
            return(
                {
                    ...state,
                    userState: action.payload,
                }
            )
        case "CURR_USER":
            return(
                {
                    ...state,
                    currUser: action.payload,
                }
            )
        case "ALL_STUDENTS":
            return(
                {
                    ...state,
                    students: [...state.students , action.payload]
                }
            )
        case "ALL_COMPANIES":
            return(
                {
                    ...state,
                    companies: [...state.companies , action.payload]
                }
            )
        default:
            return state
    }

}