import React from 'react';
import CourseList from '../containers/CourseList';


class CourseRow extends React.Component {
  constructor(props) {
      super(props);
      this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(course) {
      this.props.deleteCourse();
  }
  render() {
      console.log(this.props.course.title);
    return(
      <tr className="list-group-item">
        <td>{this.props.course.title}</td>
        {/* {this.props.course.ownedBy} */}
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