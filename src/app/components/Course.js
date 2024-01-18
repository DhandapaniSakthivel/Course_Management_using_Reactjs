import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as courseAction from '../actions/courseAction';
class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

    }
    addToCourse = (courseAdded) => {
        console.log(courseAdded)
        this.props.actions.addCourse(courseAdded)
        alert("Course Added Successfully")

    }
    clickEvent = (event) => {
        let search = event.target.value.toLowerCase(),
            displayItem = this.props.list.filter((e) => {
                let searchValue = e.courseName.toLowerCase();
                return searchValue.indexOf(search) !== -1;
            })
        this.setState({
            list: displayItem
        })
    }


    render() {
        return (
            <div className='container'>

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" onChange={this.clickEvent} />
                    <div className="input-group-addon">
                        <button class="btn btn-primary" type="submit" >Search</button>
                    </div></div>
                <table className='table table-bordered table-striped'>
                    <thead >
                        <tr>
                            <td><h3>Course Id</h3></td>
                            <td><h3>Course Name</h3></td>
                            {/* <td><h3>Course Title</h3></td>
                            <td><h3>Course Link</h3></td> */}
                            <td><h3>Action</h3></td>
                        </tr>
                    </thead>


                    <tbody> {this.state.list.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>

                                    {item.courseId}

                                </td>
                                <td>
                                    {item.courseName}
                                </td>


                                {/* {item.title.map((subItem, i) => {
                                        return (
                  <>   <td>{subItem.courseTitle}</td>
                     <td><a href={subItem.link}>{subItem.link}</a></td> 
                                     
                                        
                                      
                                                  
                                
                                   </>
                                  )  })}  */}



                                <td><button type="button" className="btn btn-primary" onClick={() => this.addToCourse(item)}>Add Course</button></td>


                            </tr>
                        )
                    })}
                    </tbody>


                </table>


            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(Course);

