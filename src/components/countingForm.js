import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Clock from './Clock';

class CountingForm extends Component {
    
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);

        this.state = {
            startDate: moment(),
            formCompleted: false
        }

    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleGenerate() {
        this.setState({
            formCompleted: true
        })

    }

    render() {
        return (
            <div
            >{
                this.state.formCompleted ? 
                    <div>
                        <Clock countingFormState={this.state}/>
                    </div>
                
                :
                    <div>
                        <h1>My first component!</h1>
                        <DatePicker 
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                             />
                         <a onClick={this.handleGenerate}>Generate Your Total Time</a>
                    </div>


            }
                
            </div>
        )
    }
}

export default CountingForm;