import React, { Component } from 'react';
class Expand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>

                {this.props.list.map((item) => {
                    return (


                        <ul>  {item.title.map((subItem) => {

                            return (
                                <div>{subItem.topic.map((topic) => {
                                    return (
                                        <div>    {topic.topicName !== null ?
                                            <li>{topic.topicName} <br />
                                                <input type='checkbox' value='Teach Others' />Teach Others
         </li> : null}</div>
                                    )

                                })}</div>


                            )
                        })}

                        </ul>

                    )
                })}
            </div>
        )
    }
}
export default Expand;