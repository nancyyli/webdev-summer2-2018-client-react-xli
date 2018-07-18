import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'

export default class ModuleEditor
  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        moduleId: '',
        courseId: ''};
    this.selectModule = this.selectModule.bind(this);
    this.setCourse = this.setCourse.bind(this);
  }

  componentDidMount() {
    this.selectModule(this.props.match.params.moduleId);
    this.setCourse(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps){
      console.log('newprops?');
    this.selectModule(this.props.match.params.moduleId);
    this.setCourse(this.props.match.params.courseId);
  }

  selectModule(moduleId) {
      console.log(moduleId);
    this.setState({moduleId: moduleId});
  }

  setCourse(courseId) {
      this.setState({courseId: courseId});
  }

  render() { return(
    <div className="col-8">
        <h2>Editing Module: {this.state.moduleId}</h2>
            <LessonTabs moduleId={this.state.moduleId} courseId={this.state.courseId}/>
    </div>
    
  );}}