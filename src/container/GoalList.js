import React, { Component } from 'react';
import GoalItem from './GoalItem';

class GoalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLoading: true
        }
    }
    
    componentDidMount() {
        this.startDate = Date.now();
    }

    componentWillUpdate() {
        this.endDate = Date.now();
    }

    renderList = () => {
        const { goals } = this.props;

        if (goals.length > 0) {
            return (
                goals.map((goal, index) => (
                    <GoalItem {...goal} key={index} />
                ))
            )
        } else {
            return <div className="loader"></div>
        }
    }

    render() {
        return (
            <div>
                <h3>List Goals</h3>
                
                {this.renderList()}
            </div>
        );
    }
}

export default GoalList;