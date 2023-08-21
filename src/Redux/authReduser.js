// Actions
const UPDATE_AUTH_STATE = 'UPDATE-AUTH-STATE';
const UPDATE_LOGINING_STATE = 'UPDATE-LOGINING-STATE';
const UPDATE_CNA_STATE = 'UPDATE-CNA-STATE';

let initialState = {
    photo: null,
    name: null,
    tasksCount: null,

    isAuth: true, // DB mode: false

    isLogining: false, //DB mode: true
    isCretingNewAccount: false,
};

export let actualAuthState = initialState.isAuth;

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_AUTH_STATE:
            return {
                ...state,
                isAuth: action.newState,
            };

        case UPDATE_LOGINING_STATE:
        return {
            ...state,
            isLogining: action.newState,
        };

        case UPDATE_CNA_STATE:
        return {
            ...state,
            isCretingNewAccount: action.newState,
        };
        default: return state;
    }
};


// Action Creators
export const updateAuthStateAC = (newState) => ({ type: UPDATE_AUTH_STATE, newState });
export const updateLoginingStateAC = (newState) => ({ type: UPDATE_LOGINING_STATE, newState });
export const updateCNAStateAC = (newState) => ({ type: UPDATE_CNA_STATE, newState });

// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return (dispatch) => {

//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetchingAC(false));

//         });
//     }
// }

export default authReduser;