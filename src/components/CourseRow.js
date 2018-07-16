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
    return(
      <li className="list-group-item">
        {this.props.title}
        {this.props.ownedBy}
        {this.props.lastModified}
        <span onClick={this.deleteCourse} className="pull-right">
          <i className="fa fa-trash"></i>
        </span>
      </li>
    )
  }
}
export default CourseRow;