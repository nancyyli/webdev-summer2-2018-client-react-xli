import React from 'react';
import '../css/modules.css'
export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: '',
      };
    this.deleteModule = this.deleteModule.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
  }


  deleteConfirmation() {
      this.setState({active: 'active'});
  }
  deleteModule() {
    var moduleId = this.props.module.id;
    this.props.deleteModule(moduleId);
  }

  cancelDelete() {
    this.setState({active: ''});
  }
  render() {
    return (
      <li className="list-group-item">
        <div className={'delete-confirmation ' + this.state.active}>
            Are you sure you want to delete module {this.props.module.title}?
            <span className="confirm-btn" onClick={this.deleteModule}> <i className="fa fa-check"></i></span>
            <span className="cancel-btn" onClick={this.cancelDelete}> <i className="fa fa-times"></i></span>
        </div>
        {this.props.module.title}

        <span onClick={this.deleteConfirmation} className="float-right">
          <i className="fa fa-trash"></i>
        </span>
        <span className="float-right">
            <i className="fa fa-pencil"></i>
        </span>
      </li>
    );
  }
}