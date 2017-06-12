import React from 'react';
import GoalItem from './GoalItem';



class CompleteGoals extends React.Component {
    render() {
        return (
            <div>
            <h3>Complete Goal List</h3>
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        return <GoalItem {...completeGoal} key={index}/>
                    })
                }
            </div>
        )
    }
}

export default CompleteGoals;