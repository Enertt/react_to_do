// Actions
const NEW_TASK_FORM = 'NEW-TASK-FORM';
const ADD_NEW_TASK = 'ADD-NEW-TASK';
const MODIFY_TASK = 'MODIFY-TASK';
const DELETE_TASK = 'DELETE-TASK';
const MODIFY_CHECKED_STATE = 'MODIFY-CHECKED-STATE';


let initialState = {
    tasks: [],
    //{id: 1, title: 'Homework', body: 'Math #134, #135. Geography: page 45-49', startTime: '13:45', endTime: '14:30', date: '23.07.2023', checked: false}
    newTaskButtonState: false,
    taskCount: 0,
    maxIndex: 0,
};

const taskReduser = (state = initialState, action) => {

    switch (action.type) {
        case NEW_TASK_FORM:
            return {
                ...state,
                newTaskButtonState: action.newTaskButtonState,
            };

        case ADD_NEW_TASK:

        debugger

            let stateCopyforNewTask = {...state};
            
            stateCopyforNewTask.maxIndex = stateCopyforNewTask.tasks.length;
            let newTitle;
            if(action.title.length === 0 ){
                newTitle = action.body;
            }else{
                newTitle = action.title;
            };
            let newTask = {
                id: stateCopyforNewTask.maxIndex + 1,
                title: newTitle,
                body: action.body,
                startTime: action.startTime,
                endTime: action.endTime,
                date: action.date,
                checked: false,
            };
            let taskArray = [];
            

            

            taskArray = stateCopyforNewTask.tasks;
            taskArray.push(newTask);
            taskArray.sort(function(elementA, elementB) {
                let startH1 = elementA.startTime.split(':')[0];
                let startM1 = elementA.startTime.split(':')[1];

                let startH2 = elementB.startTime.split(':')[0];
                let startM2 = elementB.startTime.split(':')[1];

                return (startH1*60 + startM1) - (startH2*60 + startM2);
            });
            let newTaskCount = stateCopyforNewTask.taskCount + 1;

            return {
                ...stateCopyforNewTask,
                tasks: taskArray,
                taskCount: newTaskCount,
            };

        case MODIFY_TASK:

            let stateCopyforModTask = {...state};

            let modTitle;
            if(action.title.length === 0 ){
                modTitle = action.body;
            }else{
                modTitle = action.title;
            };
            debugger
            stateCopyforModTask.tasks.map((element) => {
                if(element.id === action.id){
                    element.title = modTitle;
                    element.body = action.body;
                    element.startTime = action.startTime;
                    element.endTime = action.endTime;
                    element.date = action.date;
                }
            })

            return {
                ...stateCopyforModTask
            };
        
        case DELETE_TASK:

            let stateCopyforDelTask = {...state};

            let newArrayOfTask = [];
            stateCopyforDelTask.tasks.map((element) => {
                if(element.id !== action.id){
                    newArrayOfTask.push(element);
                }
            })

            let newTaskCountForDel = stateCopyforDelTask.taskCount - 1;

            newArrayOfTask.map((element) => {
                element.id = newArrayOfTask.indexOf(element) + 1;
            })

            return {
                ...stateCopyforDelTask,
                tasks: newArrayOfTask,
                taskCount: newTaskCountForDel,
            };

        case MODIFY_CHECKED_STATE:
debugger
        let stateCopyforModCheckedState = {...state};

        let newArrayOfTaskForCheckedState = [];
        stateCopyforModCheckedState.tasks.map((element) => {
            if(element.id === action.id){
                element.checked = !element.checked;
                newArrayOfTaskForCheckedState.push(element);
            }else{
                newArrayOfTaskForCheckedState.push(element);
            }
        })

        return {
            ...stateCopyforModCheckedState,
            tasks: newArrayOfTaskForCheckedState,
        };
        default: return state;
    }
};


// Action Creators
export const newTaskFormAC = (newTaskButtonState) => ({ type: NEW_TASK_FORM, newTaskButtonState });
export const addNewTaskAC = (title, body, startTime, endTime, date) => ({ type: ADD_NEW_TASK, title, body, startTime, endTime, date });
export const modifyTaskAC = (id, title, body, startTime, endTime, date) => ({ type: MODIFY_TASK, id, title, body, startTime, endTime, date });
export const deleteTaskAC = (id) => ({ type: DELETE_TASK, id });
export const modifyCheckedStateAC = (id) => ({ type: MODIFY_CHECKED_STATE, id });


// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return (dispatch) => {

//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetchingAC(false));

//         });
//     }
// }

export default taskReduser;