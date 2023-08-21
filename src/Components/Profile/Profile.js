import style from './profile.module.css';
import no_img from '../../assets/img/no_image.jpg';

const Profile = (props) => {

    let userName;
    if(props.name === null){
        userName = `name not seted`
    }else{
        userName = `${props.name}`
    }




    return(
        <div className={props.theme ? style.mainDark : style.main}>
            <div className={style.mainContent}>
                <div className={style.profileInfoWrapper}>
                    <div className={style.imgBlock}>
                        <img src={no_img}/>
                    </div>
                    <div className={style.infoBlock}>
                        <span>{userName}</span>
                    </div>

                    {/* <div className={style.infoBlock}>
                        <span>{`Some information`}</span>
                    </div> */}

                    <div className={style.infoBlock}>
                        <span>{`Count of tasks: ${props.countOfTasks}`}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;