import React from 'react';
import AddCourse from './AllCourse';
import ExistingCourse from './MyCourses';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const coursePage = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div>
                        <Link to="/coursePage/addCourse">All Courses</Link><br />
                        <Link to="/coursePage/existingCourse">My Courses</Link>
                    </div>
                    <Switch>
                        <Route path="/" render={() => <div></div>} exact />
                        <Route path="/coursePage/addCourse" component={AddCourse} />
                        <Route path="/coursePage/existingCourse" component={ExistingCourse} />


                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default coursePage;