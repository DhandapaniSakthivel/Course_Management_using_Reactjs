import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerAction from '../actions/registerAction';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            user: []
        }
    }
    componentDidMount() {
        console.log("in did mount", this.props.register);
        this.setState({ user: this.props.register });
    }
    handleChange = (event) => {
        const { data } = this.state
        data[event.target.name] = event.target.value
        this.setState({ data })
    }
    formSubmit = () => {
        if (this.state.user.find(item => item.email === this.state.data.email) && this.state.user.find(item => item.password === this.state.data.password)) {
            alert('Valid User')
            this.props.history.push("/coursePage")
        }
        else {
            alert('Invalid User')
        }

    }
    render() {

        console.log('render', this.state.user)

        return (
            <div className='container'>
                <form> <table>
                    <tr><td>Email Id</td><td><input type='email' name='email' onChange={this.handleChange} /></td></tr>
                    <tr><td>Password</td><td><input type='password' name='password' onChange={this.handleChange} /></td></tr>
                    <tr><button type="button" className="btn btn-primary" onClick={this.formSubmit}>Submit</button></tr>
                </table></form>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        register: state.register

    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(registerAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);