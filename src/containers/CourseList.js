import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseServiceClient";

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.deleteCourse = this.deleteCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.renderCourseRows = this.renderCourseRows.bind(this);
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

    titleChanged(event) {
        this.setState({
          course: { title: event.target.value }
        });
    }

    createCourse() {
        this.courseService.createCourse(this.state.course);
        // this.courseService
        //     .createCourse(this.state.course)
        //     .then(() => { this.findAllCourses(); });
    }

    renderCourseRows() {
        let courses = null;

        if(this.state) {
          courses = this.state.courses.courses.map(
            function (course) {
              return <CourseRow key={course.id}
                                course={course}/>
            }
          )
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
                <tr>
                  <th><input onChange={this.titleChanged}
                             className="form-control" id="titleFld"
                             placeholder="cs101"/></th>
                  <th><button onClick={this.createCourse}
                              className="btn btn-primary">
                    Add</button></th>
                </tr>
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