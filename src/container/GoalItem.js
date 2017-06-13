import React from 'react'
import {connect} from 'react-redux';
import {goalRef} from '../firebase';
import styled from 'styled-components';

import {NormalLevel, LowLevel, HighLevel, UrgentLevel} from '../components/Level';

const WrapItem = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    transition: all .15s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 15px rgba(0,0,0,.1);
    }
`;

const H3 = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0 5px;
`;

const GroupBtn = styled.div`
    display: block;
    text-align: right;
    margin: 15px 0 0;
`;

const Cta  = styled.button`
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 3px 10px rgba(0,0,0,.2);
    margin: 0 0 0 10px;
    color: #fff;

    background: ${props => props.done ? '#A6CD44' : '#F78722'};

    > i {
        line-height: 25px;
        font-size: 16px;
    }
`;


class GoalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit : false,
            title: this.props.title
        }
        
    }
    completeGoal = () => {   
        const {serverKey} = this.props; 
        goalRef.child(serverKey).update({isComplete: true});

        // goalRef.child(serverKey).remove();
        // completeGoals.push({email, title});
    }

    delGoal = () => {
        goalRef.child(this.props.serverKey).remove();
    }

    editGoal = () => {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
        }))
    }

    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {title} =  this.state;

        goalRef.child(this.props.serverKey).update({title})

        this.setState({
            isEdit: false
        })
    }

    renderLevel = () => {

        switch (this.props.level) {
            case "Low":
                return <LowLevel><span>Low</span></LowLevel>
            case "Hight": 
                return <HighLevel><span>High</span></HighLevel>;
            case "Urgent": 
                return <UrgentLevel><span>Urgent</span></UrgentLevel>;
            default:
                 return <NormalLevel><span>Normal</span></NormalLevel>;
        }
    }

    render() {

        const {title, isEdit} = this.state;
        
        return (
            <WrapItem>

                {this.renderLevel()}

                {isEdit ? (
                    <form onSubmit={this.onSubmit}>
                        <input type="text" value={title} onChange={this.onChange}/>
                    </form>
                ):(
                    <div>
                        <H3 onClick = {this.editGoal}>{this.props.title}</H3>
                    </div>
                   
                )}
                
                <small className="text-muted">by <i>{this.props.email}</i></small>

                <p>{this.props.note}</p>

                <GroupBtn>
                    {this.props.isComplete ? '' : (
                        <span>
                            <Cta 
                                onClick = {this.editGoal}
                            >
                                <i className="material-icons">edit</i>
                            </Cta>
                            <Cta 
                                done
                                onClick = {this.completeGoal}
                            >
                                <i className="material-icons">done</i>
                            
                            </Cta>
                        </span>
                    )}

                    <Cta 
                        onClick = {this.delGoal}
                    >
                        <i className="material-icons">delete</i>
                    </Cta>
                    
                    
                </GroupBtn>
            </WrapItem>
        )
    }
}

const mapStateToProps = (state) => {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);