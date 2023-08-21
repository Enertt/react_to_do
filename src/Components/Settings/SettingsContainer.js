import Settings from './Settings'
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    theme: state.userDataReduser.theme,
});

export default connect(mapStateToProps, {}) (Settings);