import React, {Component} from 'react'
import CourseList from "./CourseList";

export default class CourseManager
  extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <h1>Course Manager</h1>

          <Route path="/courses"
                 component={CourseList}>
          </Route>
        </div>
      </Router>
    )
  }
}