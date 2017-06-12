import React, { Component } from 'react';
import GoalItem from './GoalItem';

class GoalList extends Component {

    renderList = () => {
        const {goals}  =  this.props;

        if(goals.length > 0) {
            return (
                goals.map((goal, index) => (
                    <GoalItem {...goal} key={index} />
                ))
            )
        } else {
            return <div>No Tasks</div>
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