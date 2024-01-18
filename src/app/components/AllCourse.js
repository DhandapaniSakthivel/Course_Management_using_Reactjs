import React, { Component } from 'react';
import Course from './Course';
import axios from 'axios';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as courseAction from '../actions/courseAction';
export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getData().then(response => {
            console.log(response.data)
            this.setState({ list: response.data })
        });
    }
    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/course/rest/getAllCourse').then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });
        });
    }



    render() {
        return (
            <div>
                <Course list={this.state.list} title={this.state.list.title} />
            </div>

        )
    }
}

