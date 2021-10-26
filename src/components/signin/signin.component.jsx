import React from 'react'
import './signin.style.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util'

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    sumitHandle = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.sumitHandle}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    onChange={this.handleChange} 
                    label="Email"
                    value={this.state.email} 
                    required />
                    
                    <FormInput 
                    type="password" 
                    name="password" 
                    label="Password"
                    onChange={this.handleChange} 
                    value={this.state.password} 
                    required />
                    <div className="buttons">

                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isitGoogle={true}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default Signin;