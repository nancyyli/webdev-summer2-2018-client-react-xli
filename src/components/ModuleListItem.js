import React from 'react';
import '../css/modules.css'
import { Link } from 'react-router-dom'

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        module: '0',
        active: this.props.active,
        selected: ''
      };
    this.deleteModule = this.deleteModule.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
    this.moduleSelected = this.moduleSelected.bind(this);
  }

  componentDidMount() {
    this.moduleSelected(this.props.selectedModule);
  }

  componentWillReceiveProps(newProps){
    this.moduleSelected(newProps.selectedModule);
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

  moduleSelected(selectedModule) {
    if (selectedModule == this.props.module.id) {
      this.setState({selected: 'selected'});
    }
    else {
      this.setState({selected: ''});
    }
  }

  render() {
    return (
      <li className={'list-group-item ' + this.state.selected}>
        <div className={'delete-confirmation ' + this.state.active}>
            Are you sure you want to delete module {this.props.module.title}?
            <span className="confirm-btn" onClick={this.deleteModule}> <i className="fa fa-check"></i></span>
            <span className="cancel-btn" onClick={this.cancelDelete}> <i className="fa fa-times"></i></span>
        </div>
        <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
        <div onClick={this.props.onClick} className="module">
            {this.props.module.title}
        </div>
        </Link>

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