import Main from './Main';
import { connect } from 'react-redux';
import { newTaskFormAC, addNewTaskAC, modifyCheckedStateAC } from '../../Redux/taskReduser';
import { newDateAC, dateSynchronizationAC } from '../../Redux/selectedDateReduser';
import { changeAllInpAC, changeModStateAC, changeCurrentIdAC } from '../../Redux/newTaskFormReduser';

let mapStateToProps = (state) => ({
    newTaskButtonState: state.taskReduser.newTaskButtonState,
    tasks: state.taskReduser.tasks,
    taskCount: state.taskReduser.taskCount,
    day: state.selectedDateReduser.day,
    month: state.selectedDateReduser.month,
    year: state.selectedDateReduser.year,
    dateIsSelected: state.selectedDateReduser.dateIsSelected,
    dateIsSynchronized: state.selectedDateReduser.dateIsSynchronized,
    isAuth: state.authReduser.isAuth,
    theme: state.userDataReduser.theme,
});

export default connect(mapStateToProps, {modifyCheckedStateAC, dateSynchronizationAC, newTaskFormAC, addNewTaskAC, newDateAC, changeAllInpAC, changeModStateAC, changeCurrentIdAC}) (Main);