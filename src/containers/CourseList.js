import React from 'react';
import CourseRow from "../components/CourseRow";
import '../css/courselist.css'
import CourseService from "../services/CourseServiceClient";

class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
          courseId: '',
          course: { title: 'New Course', 
                    ownedBy: 'New User'},
          courses: []
        };
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
          course: { title: event.target.value,
                    ownedBy: 'New User' }
        });
    }

    createCourse() {
            this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    renderCourseRow(course) {
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
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Add a New Course</th>
                  <th scope="col"><input onChange={this.titleChanged}
                             className="form-control" id="titleFld"
                             placeholder="New Course"/></th>
                  <th scope="col"><button onClick={this.createCourse}
                              className="btn btn-primary">
                    Add</button></th>
                </tr>
                <tr>
                  <th className="title-head" scope="col">Title</th>
                  <th className="owned-head" scope="col">Owned By</th>
                  <th scope="col">Last Modified</th>
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