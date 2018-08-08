import React, { Components } from 'react';

class WorkHistory extends React.Component {
    render() {
        return (

            <div class="job">
                <div class="job__years">
                    <h6 class="job__end">{this.props.jobs.years.end}</h6>
                    <h6 class="job__start">{this.props.jobs.years.start}</h6>
                </div>
                <h5 class="job__title">{this.props.jobs.title}}</h5>
                <h5 class="job__company">{this.props.jobs.company}}</h5>
                <p class="job__description">{this.props.jobs.description}</p>
            </div>
        );
    }
}
export default WorkHistory;