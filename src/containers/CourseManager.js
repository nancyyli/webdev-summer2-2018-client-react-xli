import React, {Component} from 'react';
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import ModuleEditor from "./ModuleEditor";
import WidgetListContainer from "./WidgetList";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {widgetReducer} from "../reducers/widgetReducer"
import {createStore} from 'redux'
import {Provider} from 'react-redux'

let store = createStore(widgetReducer, {widgets: [], preview: false})
export default class CourseManager
  extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <Router>
            <div className="container-fluid">
          
            <Route path="/courses"
                component={CourseList}>
            </Route>
            <div className="row">
            <Route path="/course/:courseId"
                component={CourseEditor}>
            </Route>

               <div className="col-8">
              <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}>
              </Route>
              
              <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/widgets" component={WidgetListContainer}>
              </Route>
              </div>

            </div>

            <Link to={`/courses`}>
            <button className="btn btn-primary courses-link"> 
              Courses 
            </button>
            </Link>
            </div>
        </Router>
        </Provider>
        </div>

    )
  }
}