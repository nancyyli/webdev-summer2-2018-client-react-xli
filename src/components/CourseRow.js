import React from 'react';
import CourseList from '../containers/CourseList';
import { Link } from 'react-router-dom'


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
        <th className="title" scope="row">
        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link></th>
        <td className="owned-by">{this.props.course.ownedBy}</td>
        <td className="modified">{this.props.course.modified}</td>
        <td className="delete"><span onClick={this.deleteCourse} className="pull-right">
          <i className="fa fa-trash"></i>
        </span></td>
      </tr>
    )
  }
}
export default CourseRow;