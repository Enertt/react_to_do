import Profile from './Profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    name: state.userDataReduser.name,
    photo: state.userDataReduser.photo,
    theme: state.userDataReduser.theme,
    countOfTasks: state.taskReduser.taskCount,
});

export default connect(mapStateToProps, {}) (Profile);