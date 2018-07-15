import React from 'react';

class CourseRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <li className="list-group-item">
        {this.props.title}
        {this.props.ownedBy}
        {this.props.lastModified}
        <span className="pull-right">
          <i style={{'margin-right': '5px'}} className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
        </span>
      </li>
    )
  }
}
export default CourseRow;