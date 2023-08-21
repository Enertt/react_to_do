import style from './newTaskForm.module.css';
import React from 'react';
import { Ref } from 'react';


const NewTaskForm = (props) => {
    debugger
    const closeForm = () => {
        props.changeAllInpAC('', '', '', '', '', '');
        props.newTaskFormAC(false);
    };
    return (
        <dev className={style.formWrapper}>


            <div className={style.svgClose}>
                <svg onClick={() => { closeForm() }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
            </div>

            <div className={style.form}>
                <NewTask props={props} />
            </div>

        </dev>
    );
};


const NewTask = (props) => {

    let input1 = React.createRef();
    let input2 = React.createRef();
    let input3 = React.createRef();
    let input4 = React.createRef();
    let input5 = React.createRef();
    let input6 = React.createRef();

    const submitForm = (event) => {
        event.preventDefault();

        if (props.props.isModifying === true) {
            debugger
            props.props.modifyTaskAC(props.props.currentId, props.props.input5Value, props.props.input6Value, startTime, endTime, `${props.props.day}.${props.props.month}.${props.props.year}`);
            props.props.changeAllInpAC('', '', '', '', '', '');
            props.props.changeModStateAC(false);
            props.props.newTaskFormAC(false);
        } else {
            props.props.addNewTaskAC(props.props.input5Value, props.props.input6Value, startTime, endTime, `${props.props.day}.${props.props.month}.${props.props.year}`);
            props.props.changeAllInpAC('', '', '', '', '', '');
            props.props.newTaskFormAC(false);
        }
    };

    const delOnClick = () => {
        props.props.deleteTaskAC(props.props.currentId);
        props.props.changeAllInpAC('', '', '', '', '', '');
        props.props.changeModStateAC(false);
        props.props.newTaskFormAC(false);
    };

    let h1, m1, h2, m2;

    
    
    if(props.props.input1Value.length === 1){
        h1 = `0${props.props.input1Value}`
    }else{
        h1 = `${props.props.input1Value}`
    }
    if(props.props.input2Value.length === 1){
        m1 = `0${props.props.input2Value}`
    }else{
        m1 = `${props.props.input2Value}`
    }
    if(props.props.input3Value.length === 1){
        h2 = `0${props.props.input3Value}`
    }else{
        h2 = `${props.props.input3Value}`
    }
    if(props.props.input4Value.length === 1){
        m2 = `0${props.props.input4Value}`
    }else{
        m2 = `${props.props.input4Value}`
    }
    let startTime = `${h1}:${m1}`;
    let endTime = `${h2}:${m2}`;
    
    let isValid = false;
    const validationNTF = (h1, m1, h2, m2, title, body) => {
        
        let validationPoints = 0;
        
        if(parseInt(h1) >= 0 && parseInt(h1) <= 23 
        && parseInt(m1) >= 0 && parseInt(m1) <= 59
        && parseInt(h2) >= 0 && parseInt(h2) <= 23 
        && parseInt(m2) >= 0 && parseInt(m2) <= 59){
            validationPoints += 1;
        }
    
        if(((parseInt(h1) * 60) + parseInt(m1)) < ((parseInt(h2) * 60) + parseInt(m2))){
            validationPoints += 1;
        }
    
        if(title.length > 0 || body.length > 0){
            validationPoints += 1;
        };
    
        if(validationPoints === 3){
            isValid = true;
            props.props.changeValidStateAC(true);
        }else{
            props.props.changeValidStateAC(false);
        }
    
        return isValid;
    };


    return (
        <form className={style.taskForm} onSubmit={submitForm}>

            <div className={style.timeInputs}>
                <div className={style.h1Input}>
                    <label>From</label><br />
                    <input name="title"
                        value={props.props.input1Value}
                        placeholder='08'
                        label="Title"
                        type="text"
                        onChange={() => {
                            if (input1.current) {
                                return props.props.change1AC(input1.current.value)
                            } else {
                                return props.props.change1AC('')
                            }
                        }}
                        ref={input1}></input>
                </div><div className={style.symbols}><p>:</p></div>

                <div className={style.m1Input}>
                    <label></label><br />
                    <input name="title"
                        value={props.props.input2Value}
                        placeholder='30'
                        label="Title"
                        type="text"
                        onChange={() => {
                            if (input2.current) {
                                return props.props.change2AC(input2.current.value)
                            } else {
                                return props.props.change2AC('')
                            }
                        }}
                        ref={input2}></input>
                </div><div className={style.symbols}><p> - </p></div>


                <div className={style.h2Input}>
                    <label>To</label><br />
                    <input name="title"
                        value={props.props.input3Value}
                        placeholder='09'
                        label="Title"
                        type="text"
                        onChange={() => {
                            if (input3.current) {
                                return props.props.change3AC(input3.current.value)
                            } else {
                                return props.props.change3AC('')
                            }
                        }}
                        ref={input3}></input>
                </div><div className={style.symbols}><p>:</p></div>

                <div className={style.m2Input}>
                    <label></label><br />
                    <input name="title"
                        value={props.props.input4Value}
                        placeholder='40'
                        label="Title"
                        type="text"
                        onChange={() => {
                            if (input4.current) {
                                return props.props.change4AC(input4.current.value)
                            } else {
                                return props.props.change4AC('')
                            }
                        }}
                        ref={input4}></input>
                </div>
            </div>


            <div className={style.titleInput}>
                <label>Title</label><br />
                <input name="title"
                    value={props.props.input5Value}
                    placeholder=''
                    label="Title"
                    type="text"
                    onChange={() => {
                        if (input5.current) {
                            return props.props.change5AC(input5.current.value)
                        } else {
                            return props.props.change5AC('')
                        }
                    }}
                    ref={input5}></input>
            </div>

            <div className={style.bodyInput}>
                <label>Description</label><br />
                <textarea name="description"
                    value={props.props.input6Value}
                    placeholder=''
                    label="Description"
                    type="text"
                    onChange={() => {
                        if (input6.current) {
                            return props.props.change6AC(input6.current.value)
                        } else {
                            return props.props.change6AC('')
                        }
                    }}
                    ref={input6}></textarea>

            </div>

            {/* <div className={style.checkRememberMe}>
                <Field

                    name='rememberMe'
                    type='checkbox'
                    component={'input'}
                />
                <label>Remember Me</label>
            </div> */}

            {(() => {
                if (props.props.isModifying) {
                    debugger
                    return (
                        <div className={style.buttonDelete}>
                            <button onClick={delOnClick}>
                                Delete
                            </button>
                        </div>
                    );
                }
            })()}

            <div className={props.props.isValid ? style.buttonSave : style.disabledButtonSave}>
                <button type='submit' disabled={!validationNTF(
                                                                            props.props.input1Value, 
                                                                            props.props.input2Value,
                                                                            props.props.input3Value,
                                                                            props.props.input4Value,
                                                                            props.props.input5Value,
                                                                            props.props.input6Value)}>
                    Save
                </button>
            </div>
        </form>
    );
};


export default NewTaskForm;