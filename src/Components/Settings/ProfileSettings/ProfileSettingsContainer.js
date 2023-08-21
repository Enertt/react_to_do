import ProfileSettings from './ProfileSettings';
import { connect } from 'react-redux';
import { setNameAC } from '../../../Redux/userDataReduser';

let mapStateToProps = (state) => ({
    name: state.userDataReduser.name,
    photo: state.userDataReduser.photo,
    theme: state.userDataReduser.theme,
});

export default connect(mapStateToProps, {setNameAC}) (ProfileSettings);