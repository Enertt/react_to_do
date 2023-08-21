import style from './App.css';
import { Route, Routes } from 'react-router-dom';
import updateAuthState from './Components/server_requests/isAuth/isAuth';
import { actualAuthState } from './Redux/authReduser';
import NavContainer from './Components/Nav/NavContainer';
import MainContainer from './Components/Main/MainContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import SettingsContainer from './Components/Settings/SettingsContainer';
import LoginPageContainer from './Components/Login/LoginPageContainer';
import ProfileSettingsContainer from './Components/Settings/ProfileSettings/ProfileSettingsContainer';
import ApplicationSettingsContainer from './Components/Settings/ApplicationSettings/applicationSettingsContainer';

updateAuthState();

function App() {

  if(actualAuthState){
    return (
      <div className={style.app}>
        <div className={style.navWrapper}>
          <NavContainer />
        </div>
        <div className={style.mainWrapper}>
          <Routes>
            <Route path="" element={<MainContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profileSettings" element={<ProfileSettingsContainer />} />
            <Route path="/applicationSettings" element={<ApplicationSettingsContainer />} />
          </Routes>
        </div>
      </div>
    );
  }else{
    return (
      <div className={style.login}>
        <LoginPageContainer />
      </div>
    );
  }
  
}

export default App;
