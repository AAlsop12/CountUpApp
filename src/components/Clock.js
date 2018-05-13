import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props)


        this.state = {
            totalTime : {}
        }
    }

    render() {
        const data = this.state.totalTime;

        return (
            <div>
                <label>Days {data.days}</label>
                <label>Hours {data.days}</label>
                <label>Minutes {data.days}</label>
                <label>Seconds {data.days}</label>
            </div>
        )
    } 

    componentDidMount() {
        this.counting = this.props.countingFormState.startDate.toString();
        alert(this.counting);
    }

}

export default Clock;