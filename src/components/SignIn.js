import React, { Component } from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';


const H2 = styled.h2`
    font-size: 35px;
    font-weight: 300;
    margin: -100px 0 50px;
`;

const Outer =  styled.section`
    width: 90%;
    margin: auto;
    max-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const FooterLink = styled.div`
    margin-top: 30px;
`

const Error = styled.div`
    background: #dc3838;
    color: #fff;
    border-radius: 3px;
    padding: 15px;
    margin: 0 0 20px;
`

// Button = styled.button`
//     margin-top: 20px;
// `

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: '',
            error : {
                isError: false
            }
        }
        this.changText =  this.changText.bind(this);
        // this.signUp =  this.signUp.bind(this);
    }
    changText(e) {
        // console.log(e.target.type);
        this.setState({[e.target.type]: e.target.value})
    }
    signIn = (e) => {
        e.preventDefault();

        // console.log('this.state', this.state.error);

        const {email, password} =  this.state;

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('error', error)
             this.setState({
                isError: true,
                error
             })
        })
    }

    render() {
        return (
            <Outer className="text-center">
                
                <H2>Sign In</H2>
                {this.state.isError ? (<Error>{this.state.error.message}</Error>) : ''}

                <form onSubmit={this.signIn} autoComplete="off">
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email"
                        onChange={this.changText} 
                        value={this.state.email} 
                        />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.changText}
                        />  

                    <Button type="submit">Sign In</Button>
                </form>
                
                <FooterLink>Do not have an account. <Link to="/signup">Sign Up</Link></FooterLink>

            </Outer>
        );
    }
}

export default SignIn;