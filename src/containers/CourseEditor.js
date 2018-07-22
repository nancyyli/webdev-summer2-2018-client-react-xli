import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'
import CourseService from "../services/CourseServiceClient";

export default class CourseEditor
  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        courseId: '',
        course: {}
    };
    this.selectCourse = this.selectCourse.bind(this);
    this.courseService = CourseService.instance;
  }

  componentDidMount() {
    this.selectCourse
    (this.props.match.params.courseId);
    this.findCourseById(this.props.match.params.courseId);
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  findCourseById(courseId) {
    this.courseService.findCourseById(courseId).then((course) => {
        this.setState({course: course});
      });
  }
  
  render() { return(
    <div className="col-4">
      <h2>Editing course: {this.state.course.title}</h2>
        <ModuleList courseId={this.state.courseId}/>
      </div>
  );}}