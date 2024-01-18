import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerAction from '../actions/registerAction';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
            }
        }
    }
    localStorage = (event) => {
        const { data } = this.state
        data[event.target.name] = event.target.value
        this.setState({ data })
    }
    handleSubmit = () => {


        this.props.actions.registerUser(this.state.data)
        alert('Successfully Registered')
    }

    render() {
        return (
            <div className='container'>
                <table >
                    <tr><td>Name</td><td><input type='text' onChange={this.localStorage} name='name' placeholder='Enter Name' required /></td></tr>
                    <tr><td>Password</td><td><input type='password' onChange={this.localStorage} name='password' placeholder='Enter Password' required /></td></tr>
                    <tr><td>SapId</td><td><input type='text' onChange={this.localStorage} name='sapId' placeholder='Enter SapId' required /></td></tr>
                    <tr><td>Email Id</td><td><input type='email' onChange={this.localStorage} name='email' placeholder='Enter email' required /></td></tr>
                    <tr><td>Primary Skill</td><td><input type='text' onChange={this.localStorage} name='skill' placeholder='Enter Skill' required /></td></tr>
                    <tr><td>Band</td><td><input type='text' onChange={this.localStorage} name='band' placeholder='Enter Band' required /></td></tr>
                    <tr><td><button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button></td></tr></table></div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log('state', state)
    return {
        register: state.register
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(registerAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);