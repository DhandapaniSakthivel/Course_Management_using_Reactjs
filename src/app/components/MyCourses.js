import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../actions/courseAction';
import Expand from './Expand';
class ExistingCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            doesShow: false,
            topicName: [],
            itemIndex: ''

        }

    }

    componentDidMount() {
        console.log("in did mount", this.props.course);
        this.setState({ course: this.props.course });
    }
    toggleItem = (id) => {
        this.state.topicName.pop();
        const itemIndex = this.state.course.find(i => { return i.title.find(f => { return f.courseId === id }) })
        console.log(itemIndex)
        const index = itemIndex.courseId
        this.state.topicName.push(itemIndex)
        const doesShow = this.state.doesShow
        this.setState({
            topicName: this.state.topicName,
            doesShow: !doesShow, itemIndex: index
        })
        console.log('topic', this.state.topicName)
        console.log('topic', this.state.itemIndex)

    }
    render() {

        return (
            <div className='container'>

                <table className='table table-bordered table-striped'>
                    <thead >
                        <tr>
                            <td><h3>Course Title</h3></td>
                            <td><h3>Expand Topics</h3></td>
                            <td><h3>Topic Name</h3></td>
                            <td><h3>Course Status</h3></td>
                            <td><h3>Comment</h3></td>

                        </tr>
                    </thead>


                    <tbody> {this.state.course.map((item, i) => {
                        return (
                            <tr>
                                {item.title.map((subItem, i) => {

                                    return (
                                        <> <td>{subItem.courseTitle}</td>




                                            <td><button type="button" className="btn btn-primary" onClick={() => this.toggleItem(subItem.courseId)}>Expand Topic</button></td>
                                            <td>{this.state.doesShow === true && this.state.itemIndex === subItem.courseId ?
                                                <Expand
                                                    list={this.state.topicName}></Expand> : null} </td>


                                            <td> <select name="tracker">
                                                <option>-Select-</option>
                                                <option>Yet To Start</option>
                                                <option >In Progress</option>
                                                <option >Completed</option>
                                            </select></td>
                                            <td><textarea rows='5' cols='20'></textarea></td>

                                        </>

                                    )
                                })}

                            </tr>
                        )
                    })}
                    </tbody>


                </table>



            </div>

        )

    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        course: state.course
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCourse);