import style from './loginPage.module.css';

const LoginPage = (props) => {

    if(props.isLogining){
        return (
            <div className={style.main}>
                <div className={style.formWrapper}>
    
                    <h2>Log In</h2>
    
                    <form>

                        <input 
                        placeholder='Email'
                        ></input>
    
                        <input 
                        placeholder='Password'
                        ></input>
    
                        <button>Sign In</button>
    
                        <span onClick={()=>{
                            props.updateLoginingStateAC(false);
                            props.updateCNAStateAC(true);
                        }}>Creare New Account</span>
                    </form>
    
    
                    
                </div>
            </div>
        );
    }else if(props.isCretingNewAccount){
        return(
            <div className={style.main}>
                <div className={style.formWrapper}>
    
                    <h2>Creare New Account</h2>
    
                    <form>
    
                        <input 
                        placeholder='Name'
                        ></input>

                        <input 
                        placeholder='Email'
                        ></input>
    
                        <input 
                        placeholder='Password'
                        ></input>
    
                        <button>Create</button>
    
                        <span onClick={()=>{
                            props.updateCNAStateAC(false);
                            props.updateLoginingStateAC(true);
                        }}>Sign In</span>
                    </form>
    
    
                    
                </div>
            </div>
        );
    }
};

export default LoginPage;