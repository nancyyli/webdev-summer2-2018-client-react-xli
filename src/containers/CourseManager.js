import React, {Component} from 'react';
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import ModuleEditor from "./ModuleEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class CourseManager
  extends Component {
  render() {
    return (
      <div>
        <Router>
            <div className="container-fluid">
          
            <Route path="/courses"
                component={CourseList}>
            </Route>
            <div className="row">
            <Route path="/course/:courseId"
                component={CourseEditor}>
            </Route>

            <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}>
            </Route>
            </div>

            <button className="btn btn-primary courses-link"> 
              <Link to={`/courses`}>Courses 
              </Link>
            </button>
            </div>
        </Router>
        </div>

    )
  }
}