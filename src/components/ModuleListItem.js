import React from 'react';

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
    this.deleteModule = this.deleteModule.bind(this);
  }

  deleteModule() {
    var moduleId = this.props.module.id;
    this.props.deleteModule(moduleId);
  }
  render() {
    return (
      <li className="list-group-item">
        {this.props.module.title}

        <span onClick={this.deleteModule} className="float-right">
          <i className="fa fa-trash"></i>
        </span>
        <span className="float-right">
            <i className="fa fa-pencil"></i>
        </span>
      </li>
    );
  }
}