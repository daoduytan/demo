import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import styled from 'styled-components';

import {getData} from '../actions';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoals from './CompleteGoals';

const Header = styled.header`
    background: #fff;
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0px 0px 15px rgba(0,0,0,.1);
`;

const SignOut =  styled.span`
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    display: inline-block;
    margin-top: 15px;
`;

const Wrapper = styled.div`
    padding: 50px 0;
`;

const Logo =  styled.h1`
    font-weight: 300;
    font-size: 30px;
    margin: 0;
`;


class App extends Component {
    componentDidMount() {
        this.props.getData();
    }

    signOut() {
        firebaseApp.auth().signOut();
    }
    render() {
        
        return (
            <div>
                <Header>
                    <Logo>My Tasks</Logo>

                    <div className="header-right">
                        <SignOut onClick={() => this.signOut()}>
                            Sign out
                        </SignOut>
                    </div>
                </Header>

                <Wrapper className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <AddGoal />
                            </div>
                            <div className="col-sm-9">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <GoalList goals={
                                            this.props.goals.filter((goal) => goal.isComplete === false)
                                        } />
                                    </div>
                                    <div className="col-sm-6">
                                        <CompleteGoals completeGoals={
                                            this.props.goals.filter((goal) => goal.isComplete === true)
                                        }  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    const  {goals, completeGoals} = state;
    return {goals,completeGoals}
}

export default connect(mapStateToProps, {getData})(App);