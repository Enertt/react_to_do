import style from './settings.module.css';
import no_img from '../../assets/img/no_image.jpg';
import { NavLink } from 'react-router-dom';

const Settings = (props) => {
    return (
        <div className={props.theme ? style.mainDark : style.main}>
            <div className={style.mainContent}>

                <div className={style.settingsItemWrapper}>

                    <NavLink to={'/profileSettings'}>
                        <div className={style.settingsItem}>
                            <span>Profile</span>
                        </div>
                    </NavLink>

                    <NavLink to={'/applicationSettings'}>
                        <div className={style.settingsItem}>
                            <span>Application</span>
                        </div>
                    </NavLink>

                    <NavLink to={'/aboutUs'}>
                        <div className={style.settingsItem}>
                            <span>About Us</span>
                        </div>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Settings;