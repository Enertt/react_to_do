import ApplicationSettings from './applicationSettings.js';
import { connect } from 'react-redux';
import { setNameAC } from '../../../Redux/userDataReduser';
import { setThemeAC } from '../../../Redux/userDataReduser';

let mapStateToProps = (state) => ({
    theme: state.userDataReduser.theme,
});

export default connect(mapStateToProps, {setThemeAC}) (ApplicationSettings);