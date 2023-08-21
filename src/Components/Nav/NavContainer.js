import Nav from "./Nav";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    theme: state.userDataReduser.theme,
});

export default connect(mapStateToProps, {}) (Nav);