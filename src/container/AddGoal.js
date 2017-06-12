import React, { Component } from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';
import styled from 'styled-components';

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    display: block;
    width: 100%;
    margin-bottom: 10px;

    &.error {
        border-color: red;
    }
`;

const Select =  styled.select`
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    display: block;
    width: 100%;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px;
    display: block;
    background: #30caff;
    border: none;
    color: #fff;
    width: 100%;
    font-weight: 600;
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    min-height: 100px;
`;

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            level: '',
            note: '',
            error: false,
            isComplete: false
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    } 
    onSubmit = (e) => {
        e.preventDefault();
        const {email} = this.props.user;
        const {title, level, note, isComplete} = this.state;
    
        if(title.length !== 0) {
            goalRef.push({email, title, level, note, isComplete})
            this.setState({
                title: '', 
                level: '', 
                note: '',
                error: false
            })
        } else {
            this.setState({error: true});
        }

        
    }

    render() {
        return (
            <div>
                <h3>Add task</h3>
                
                <form action="" onSubmit={this.onSubmit}>
                    <Input 
                        className={this.state.error ? 'error' : ''}
                        type="text" 
                        name="title"
                        placeholder="Title..."
                        value={this.state.title}
                        onChange={this.onChange}/>

                    <Select name="level" id="" onChange={this.onChange} value={this.state.level}>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="Hight">Hight</option>
                        <option value="Urgent">Urgent</option>
                        
                    </Select >

                    <Textarea name="note" onChange={this.onChange} value={this.state.note}></Textarea>
                   
                    <Button className="btn btn-success">Add Goal</Button>

                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {user} = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddGoal);