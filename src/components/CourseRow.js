import React from 'react';
import CourseList from '../containers/CourseList';


class CourseRow extends React.Component {
  constructor(props) {
      super(props);
      this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse() {
    var courseId = this.props.course.id;
    this.props.deleteCourse(courseId);
  }
  render() {
    return(
      <tr className="list-group-item">
        <td>{this.props.course.title}</td>
        <td>{this.props.course.ownedBy}</td>
        <td>{this.props.course.created}</td>

        <td>{this.props.course.modified}</td>
        <td><span onClick={this.deleteCourse} className="pull-right">
          <i className="fa fa-trash"></i>
        </span></td>
      </tr>
    )
  }
}
export default CourseRow;