import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import ModuleService from "../services/ModuleServiceClient";

export default class ModuleEditor
  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        moduleId: '',
        courseId: '',
        module: {}
    };
    this.selectModule = this.selectModule.bind(this);
    this.setCourse = this.setCourse.bind(this);
    this.moduleService = ModuleService.instance;
    this.findModuleById = this.findModuleById.bind(this);
  }

  componentDidMount() {
    this.selectModule(this.props.match.params.moduleId);
    this.setCourse(this.props.match.params.courseId);
    // this.findModuleById(this.props.match.params.moduleId);
  }

  componentWillReceiveProps(newProps){
    this.selectModule(this.props.match.params.moduleId);
    this.setCourse(this.props.match.params.courseId);
    console.log(this.findModuleById(this.props.match.params.moduleId));
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setCourse(courseId) {
      this.setState({courseId: courseId});
  }

  findModuleById(moduleId) {
    this.moduleService.findModuleById(moduleId).then((module) => {
      this.setState({module: module});
    });
    return this.state.module.title;
  }

  render() { return(
    <div className="col-8">
        <h2 className="editing-module">Editing Module: {this.props.match.params.moduleId}</h2>
            <LessonTabs moduleId={this.props.match.params.moduleId} courseId={this.state.courseId}/>
    </div>
    
  );}}