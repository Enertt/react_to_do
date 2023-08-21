import LoginPage from './LoginPage';
import { connect } from 'react-redux';
import { updateLoginingStateAC, updateCNAStateAC,  } from '../../Redux/authReduser';


let mapStateToProps = (state) => ({
    isLogining: state.authReduser.isLogining,
    isCretingNewAccount: state.authReduser.isCretingNewAccount,
});

export default connect(mapStateToProps, {updateLoginingStateAC, updateCNAStateAC}) (LoginPage);