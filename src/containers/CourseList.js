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

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        var foundCourses = this.courseService
          .findAllCourses();
        this.setState({courses: foundCourses});
    }

    deleteCourse(course) {
        this.courseService.deleteCourse(course);
    }

    renderCourseRows() {
        let courses = null;

        if(this.state) {
            console.log(this.state.courses.courses);
            console.log(this);
          courses = this.state.courses.courses.map(
            function (course) {
                console.log(this);
              return <CourseRow key={course.id}
                                course={course}/>
            }
          )
          console.log(courses);
        }
        return (
          courses
        )
      }

    render() {
        return (
            <div>
            <h2>Course List</h2>
            <table className="table">
              <thead>
                <tr><th>Title</th></tr>
                {/* <tr>
                  <th><input onChange={this.titleChanged}
                             className="form-control" id="titleFld"
                             placeholder="cs101"/></th>
                  <th><button onClick={this.createCourse}
                              className="btn btn-primary">
                    Add</button></th>
                </tr> */}
              </thead>
              <tbody>
                {this.renderCourseRows()}
              </tbody>
            </table>
          </div>
        )
      }
}
export default CourseList;