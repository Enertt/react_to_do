// Actions
const SET_NAME = 'SET-NAME';
const SET_THEME = 'SET-THEME';


let initialState = {
    name: null,
    photo: null,
    theme: false,
};

const userDataReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_NAME:
            let newName;
            if(action.name === null || action.name.length === 0){
                newName = null;
            }else{
                newName = action.name;
            }
            return {
                ...state,
                name: newName,
            };

        case SET_THEME:
            return {
                ...state,
                theme: action.theme,
            };
        default: return state;
    }
};


// Action Creators
export const setNameAC = (name) => ({ type: SET_NAME, name });
export const setThemeAC = (theme) => ({ type: SET_THEME, theme });

// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return (dispatch) => {

//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetchingAC(false));

//         });
//     }
// }

export default userDataReduser;