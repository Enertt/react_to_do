// Actions
const NEW_DATE = 'NEW-DATE';
const DATE_SYNCHONIZATION = 'DATE-SYNCHONIZATION';

let initialState = {
    day: '',
    month: '',
    year: '',

    dateIsSelected: false,
    dateIsSynchronized: false,
};

const selectedDateReduser = (state = initialState, action) => {

    switch (action.type) {
        case NEW_DATE:
            let newDay = action.day;
            let newMonth = action.month;

            if(newDay.toString().length === 1){
                newDay = `0${newDay}`;
            };
            if(newMonth.toString().length === 1){
                newMonth = `0${newMonth}`;
            };

            debugger
            return {
                ...state,
                day: newDay,
                month: newMonth,
                year: action.year,
            };

        case DATE_SYNCHONIZATION:
            return {
                ...state,
                dateIsSynchronized: action.newSate
            };
        default: return state;
    }
};


// Action Creators
export const newDateAC = (day, month, year) => ({ type: NEW_DATE, day, month, year });
export const dateSynchronizationAC = (newSate) => ({ type: DATE_SYNCHONIZATION, newSate });

// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return (dispatch) => {

//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetchingAC(false));

//         });
//     }
// }

export default selectedDateReduser;