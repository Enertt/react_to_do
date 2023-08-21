import NewTaskForm from "./NewTaskForm";
import { connect } from "react-redux";
import { validationNTF } from "./validationNTF";
import { newTaskFormAC, addNewTaskAC, modifyTaskAC, deleteTaskAC } from "../../Redux/taskReduser";
import { change1AC, change2AC, change3AC, change4AC, change5AC, 
    change6AC, changeModStateAC, changeAllInpAC, changeValidStateAC} from "../../Redux/newTaskFormReduser"; 

const mapStateToPrors = (state) => ({
    input1Value: state.newTaskFormReduser.input1,
    input2Value: state.newTaskFormReduser.input2,
    input3Value: state.newTaskFormReduser.input3,
    input4Value: state.newTaskFormReduser.input4,
    input5Value: state.newTaskFormReduser.input5,
    input6Value: state.newTaskFormReduser.input6,
    isModifying: state.newTaskFormReduser.isModifying,
    isValid: state.newTaskFormReduser.isValid,
    currentId: state.newTaskFormReduser.currentId,

    day: state.selectedDateReduser.day,
    month: state.selectedDateReduser.month,
    year: state.selectedDateReduser.year,
    theme: state.userDataReduser.theme,
});

export default connect(mapStateToPrors, { changeValidStateAC, validationNTF, changeAllInpAC, changeModStateAC, deleteTaskAC, newTaskFormAC, addNewTaskAC, modifyTaskAC, change1AC, change2AC, change3AC, change4AC, change5AC, change6AC})(NewTaskForm);