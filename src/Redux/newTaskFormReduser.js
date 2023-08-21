// Actions
const CHANGE_INP1 = 'CHANGE-INP1';
const CHANGE_INP2 = 'CHANGE-INP2';
const CHANGE_INP3 = 'CHANGE-INP3';
const CHANGE_INP4 = 'CHANGE-INP4';
const CHANGE_INP5 = 'CHANGE-INP5';
const CHANGE_INP6 = 'CHANGE-INP6';

const CHANGE_ALL_INP = 'CHANGE-ALL-INP';
const CHANGE_MOD_STATE = 'CHANGE-MOD-STATE';
const CHANGE_CURRENT_ID = 'CHANGE-CURRENT-ID';
const CHANGE_VALID_STATE = 'CHANGE-VALID-STATE';


let initialState = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',

    isModifying: false,
    isValid: false,
    currentId: null,
};

const newTaskFormReduser = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_INP1:
            debugger
            return {
                ...state,
                input1: action.newState,
            };
        case CHANGE_INP2:
            return {
                ...state,
                input2: action.newState,
            };
        case CHANGE_INP3:
            return {
                ...state,
                input3: action.newState,
            };
        case CHANGE_INP4:
            return {
                ...state,
                input4: action.newState,
            };
        case CHANGE_INP5:
            return {
                ...state,
                input5: action.newState,
            };
        case CHANGE_INP6:
            return {
                ...state,
                input6: action.newState,
            };

        case CHANGE_ALL_INP:
            return {
                ...state,
                input1: action.inp1,
                input2: action.inp2,
                input3: action.inp3,
                input4: action.inp4,
                input5: action.inp5,
                input6: action.inp6,
            };

        case CHANGE_MOD_STATE:
            return {
                ...state,
                isModifying: action.newState,
            };
    
        case CHANGE_CURRENT_ID:
            return {
                ...state,
                currentId: action.newId,
            };

        case CHANGE_VALID_STATE:
            return {
                ...state,
                isValid: action.newState,
            };
        default: return state;
    }
};


// Action Creators
export const change1AC = (newState) => ({ type: CHANGE_INP1, newState });
export const change2AC = (newState) => ({ type: CHANGE_INP2, newState });
export const change3AC = (newState) => ({ type: CHANGE_INP3, newState });
export const change4AC = (newState) => ({ type: CHANGE_INP4, newState });
export const change5AC = (newState) => ({ type: CHANGE_INP5, newState });
export const change6AC = (newState) => ({ type: CHANGE_INP6, newState });

export const changeAllInpAC = (inp1, inp2, inp3, inp4, inp5, inp6) => ({ type: CHANGE_ALL_INP, inp1, inp2, inp3, inp4, inp5, inp6 });
export const changeModStateAC = (newState) => ({ type: CHANGE_MOD_STATE, newState });
export const changeCurrentIdAC = (newId) => ({ type: CHANGE_CURRENT_ID, newId });
export const changeValidStateAC = (newState) => ({ type: CHANGE_VALID_STATE, newState });


// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return (dispatch) => {

//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetchingAC(false));

//         });
//     }
// }

export default newTaskFormReduser;