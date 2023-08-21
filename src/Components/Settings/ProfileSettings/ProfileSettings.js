import style from './settings.module.css';
import no_img from '../../../assets/img/no_image.jpg';
import { useState } from 'react';
import { useRef } from 'react';

const ProfileSettings = (props) => {

    let userName;
    if(props.name === null){
        userName = `name not seted`
    }else{
        userName = `${props.name}`
    }

    let startValue;
    if(props.name === null){
        startValue = '';
    }else{
        startValue = props.name;
    }

    const [changeNameButtonState, setChangeNameButtonState] = useState(false);
    const [nameValue, setNameValue] = useState(startValue)

    let newNameValue = useRef(null);

    const changeNameWindow = () => {
        
        if(changeNameButtonState === true){
            return(
                <div className={style.window1Wrapper}>
                    <div className={style.bacground}></div>
                    <div className={style.window}>
                        <svg  onClick={() => {setChangeNameButtonState(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        <span>Put a new name</span>
                        <input ref={newNameValue} value={nameValue} onChange={()=>{setNameValue(newNameValue.current.value)}} name='newName' type='text' placeholder='New Name'></input>
                        <div className={style.buttonWrapper}>
                            <button onClick={()=>{
                                props.setNameAC(newNameValue.current.value);
                                setChangeNameButtonState(false);
                            }}>Save</button>
                            <button onClick={() => {setChangeNameButtonState(false)}}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        }
        
    }

    return (
        <div className={props.theme ? style.mainDark : style.main}>
            <div className={style.mainContent}>
                <div className={style.profileInfoWrapper}>
                    <div className={style.imgBlock}>
                        <img src={no_img}/>
                        <input type="file"></input>
                    </div>
                    <div className={style.infoBlock}>
                        <span>{userName}</span>
                        <button onClick={() => {setChangeNameButtonState(true)}}>Change Name</button>
                    </div>
                </div>

                {changeNameWindow()}
            </div>
        </div>
    );
};

export default ProfileSettings;