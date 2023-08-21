import * as React from 'react';
import classnames from 'classnames';
import * as calendar from './calendarSettings';
import './calendar.css';


export default class Calendar extends React.Component {



    static defaultProps = {
        date: new Date(),
        years: [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleSelectChange = () => {
        debugger
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        debugger
        this.setState({ selectedDate: date });

        this.props.onChange(date);
    };



    componentDidMount() {
        if (this.state.selectedDate !== null) {
            return this.props.props.newDateAC(this.state.date.getDate(), this.month + 1, this.year)
        } else {
            return this.props.props.newDateAC(this.state.currentDate.getDate(), this.month + 1, this.year)
        };
    };

    render() {
        debugger
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        const setClassNames = (date) => {
            if(calendar.areEqual(date, currentDate) && !this.props.props.dateIsSynchronized){
                debugger
                this.handleDayClick(date);
                this.props.props.dateSynchronizationAC(true);
                updateDate(date);
                
            }
            return(
                classnames('day', {
                    'today': calendar.areEqual(date, currentDate),
                    'selected': calendar.areEqual(date, selectedDate)
                })
            )
        };

        const updateDate = (date) => {

            if (selectedDate !== null) {
                return this.props.props.newDateAC(date.getDate(), this.month + 1, this.year)
            } else {
                return this.props.props.newDateAC(currentDate.getDate(), this.month + 1, this.year)
            };
        };


        return (
            <div className={"calendar"}>
                
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>}</button>

                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={setClassNames(date)}
                                        onClick={() => {
                                            debugger
                                            this.handleDayClick(date);
                                            updateDate(date);
                                        }}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}