import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleServiceClient'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      selectedModuleIndex : 0,
      module: { title: 'New Module' },
      modules: [],
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.renderListOfModules = this.renderListOfModules.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.selectModule = this.selectModule.bind(this);
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
    if (newProps.courseId != this.state.courseId) {
      this.setCourseId(newProps.courseId);
      this.findAllModulesForCourse(newProps.courseId);
    }
  }

  selectModule(index) {
    this.setState({selectedModuleIndex : index});
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
    let modules = this.state.modules.map((module, i) => {
      console.log(this.state.selectedModuleIndex);
      return (<ModuleListItem  selectedModule={this.state.selectedModuleIndex} onClick={() => this.selectModule(module.id)} deleteModule={this.deleteModule} module={module}
                             key={module.id} courseId={this.props.courseId} />
    )});
    return modules;
  }

  //onClick={() => this.selectModule(module.id)}
  render() {
    return (
      <div>
             Module:   {this.selectedModule}
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