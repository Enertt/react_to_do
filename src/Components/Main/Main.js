import style from './main.module.css';
import Calendar from './Calendar/Calendar';
import React from 'react';
import NewTaskFormContainer from '../NewTaskForm/NewTaskFormContainer';

const Main = (props) => {

    let taskList = () => {

        let tasks = props.tasks.map((element) => {

            if(element.date === `${props.day}.${props.month}.${props.year}`){
                let startTimeH = parseInt(element.startTime.split(':')[0]);
                let startTimeM = parseInt(element.startTime.split(':')[1]);
                let endTimeH = parseInt(element.endTime.split(':')[0]);
                let endTimeM = parseInt(element.endTime.split(':')[1]);

                let timeForWork = ( (endTimeH * 60 ) + endTimeM ) - ( (startTimeH * 60 ) + startTimeM );

                return (
                    <div className={element.checked ? style.checkedTask : style.task} onClick={() => { 
                        props.changeAllInpAC(startTimeH, startTimeM, endTimeH, endTimeM, element.title, element.body);
                        props.changeCurrentIdAC(element.id);
                        props.changeModStateAC(true);
                        props.newTaskFormAC(true);
                        }}>
                        <div className={style.timeSpan}>
                            <span>{`${element.startTime} - ${element.endTime}`}</span><br />
                            <span>{`${timeForWork} min`}</span>
                        </div>
                        <div className={style.titleSpan}>
                            <span>{element.title}</span>
                        </div>
                        <div className={style.input}>
                            {(()=>{
                                debugger
                                if(element.checked === true){
                                    return (
                                        <input type='checkbox' checked
                                         onClick={(event)=>{
                                            event.stopPropagation();
                                            props.modifyCheckedStateAC(element.id);
                                            }
                                        }
                                        ></input>
                                    )
                                }else{
                                    return (<input type='checkbox' 
                                     onClick={(event)=>{
                                        event.stopPropagation();
                                        props.modifyCheckedStateAC(element.id);
                                        }
                                    }
                                    ></input>)
                                }
                            })()}
                            
                        </div>
                        
                    </div>
                );
                }
            
        });

        return (
            <div>
                {tasks}
                <div className={style.newTasksContainer}>
                    <div className={style.newTasks} title='Add New Task' onClick={() => { props.newTaskFormAC(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    };

    return (
        
        <dev className={props.theme ? style.mainDark : style.main}>
            <dev className={style.mainContent}>
                <div className={style.tasks}>

                    <div className={props.newTaskButtonState ? style.newTaskForm_active : style.newTaskForm}>
                        <NewTaskFormContainer />
                    </div>

                    <div className={style.taskContainer}>
                        {(() => {
                            if (props.taskCount > 0) {
                                return taskList();
                            } else {
                                return (
                                    <div className={style.newTasks} title='Add New Task' onClick={() => { props.newTaskFormAC(true) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                );
                            }
                        })()}
                    </div>
                    <div className={style.daySpan}>
                        <span>{`${props.day}.${props.month}.${props.year}`}</span>
                    </div>

                </div>

                <div className={style.calendar}>
                    <Calendar props={props}/>
                </div>
            </dev>
        </dev>
    );
};

export default Main;