import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseServiceClient";

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.renderCourseRow = this.renderCourseRow.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.renderCourseRows = this.renderCourseRows.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService
        .findAllCourses()
        .then((courses) => {
          this.setState({courses: courses});
        })
    }

    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId).then(
            () => {
                this.findAllCourses();
                this.renderCourseRows(); 
            });
    }

    titleChanged(event) {
        this.setState({
          course: { title: event.target.value }
        });
        console.log(event.target.value);
    }

    createCourse() {
            this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    renderCourseRow(course) {
        console.log('rending rows');
        console.log(this);
        return <CourseRow key={course.id}
        course={course}/>
    }

    renderCourseRows() {
        let courses = null;
        if(this.state) {
          courses = this.state.courses.map(
            function (course) {
              return <CourseRow deleteCourse={this.deleteCourse} key={course.id}
                                course={course}/>
            }, this
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
                <tr>
                  <th>Add a New Course</th>
                  <th><input onChange={this.titleChanged}
                             className="form-control" id="titleFld"
                             placeholder="New Course"/></th>
                  <th><button onClick={this.createCourse}
                              className="btn btn-primary">
                    Add</button></th>
                </tr>
                <tr>
                <th>Title</th>
                <th>Owned By</th>
                <th>Last Modified</th>
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