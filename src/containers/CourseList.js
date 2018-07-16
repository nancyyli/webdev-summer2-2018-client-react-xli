import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseServiceClient";

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.deleteCourse = this.deleteCourse.bind(this);
        // this.titleChanged = this.titleChanged.bind(this);
        // this.createCourse = this.createCourse.bind(this);
    }

    deleteCourse(course) {
        this.courseService.deleteCourse(course);
    }
    render() {
        return (
          <div>
            <h1>Module List</h1>
            <ul className="list-group">
              <CourseRow deleteCourse={this.deleteCourse} title="Module 1" ownedBy="Prof 1" lastModified="Today"/>
              <CourseRow title="Module 2" ownedBy="Prof 2" lastModified="Yesterday"/>
              <CourseRow title="Module 3" ownedBy="Prof 3" lastMofidied="Tomorrow"/>
              <CourseRow title="Module 4" ownedBy="Prof 4" lastMofidied=""/>
            </ul>
          </div>
        )
      }
}
export default CourseList;