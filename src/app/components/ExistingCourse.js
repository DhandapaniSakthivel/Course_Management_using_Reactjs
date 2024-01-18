import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../actions/courseAction';
class ExistingCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: []
        }

    }
    
    componentDidMount() {
        console.log("in did mount", this.props.course);
        this.setState({ course: this.props.course });
    }
    render() {
        return (
            <div className='container'>

                <table className='table table-bordered table-striped'>
                    <thead >
                        <tr>
                            <td><h3>Course Id</h3></td>
                            <td><h3>Course Name</h3></td>
                            {/* <td><h3>Course Title</h3></td>
                            <td><h3>Course Link</h3></td>
                            <td><h3>Topic Name</h3></td> */}
                            
                        </tr>
                    </thead>


                    <tbody> {this.state.course.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                {item.title.map((subItem, i) => {
                                        return (
                <div>      <div> {subItem.courseTitle}</div> 
                       <div></div> 
                                       
                                          
                                        
                                         
                                   
                                  </div>)  })} 

                                </td>
                                {/* <td>
                                    {item.title}
                                </td> */}
                                {/* <td>
                                    {item.title.link}
                                </td> */}
                                {/* <td>
                                    {item.title.topic.topicName}
                                </td> */}
                              
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
const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(courseAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExistingCourse);