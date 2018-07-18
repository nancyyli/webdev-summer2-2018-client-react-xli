import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleServiceClient'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      module: { title: 'New Module' },
      modules: []
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.renderListOfModules = this.renderListOfModules.bind(this);
    this.setCourseId = this.setCourseId.bind(this);

    this.moduleService = ModuleService.instance;
  }
  setModules(modules) {
    this.setState({modules: modules})
  }

  findAllModulesForCourse(courseId) {
    this.moduleService
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }

  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId)
  }

  createModule() {
    this.moduleService
      .createModule(this.props.courseId, this.state.module)
      .then(() => { this.findAllModulesForCourse(this.props.courseId); });
  }
  titleChanged(event) {
    this.setState({module: {title: event.target.value}});
  }
  deleteModule(moduleId) {
    this.moduleService.deleteModule(moduleId).then(
        () => {
            this.findAllModulesForCourse(this.props.courseId);
            this.renderListOfModules();
        });
  }  
  renderListOfModules() {
    let modules = this.state.modules.map(function(module){
      return <ModuleListItem deleteModule={this.deleteModule} module={module}
                             key={module.id} courseId={this.props.courseId} />
    }, this);
    return modules;
  }
  render() {
    return (
      <div>
        <input onChange={this.titleChanged}
               value={this.state.module.title}
               placeholder="New Module"
               className="form-control"/>
        <button onClick={this.createModule} className="btn btn-primary btn-block">
          <i className="fa fa-plus"></i>
        </button>
        <br/>
        <ul className="list-group">
          {this.renderListOfModules()}
        </ul>
      </div>
    );
  }
}