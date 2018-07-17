import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import LessonService from '../services/LessonServiceClient'

export default class LessonTabs extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          courseId: '',
          moduleId: '',
          lesson: { title: 'New Lesson' },
          lessons: [
            {title: 'Lesson 1', id: 123},
            {title: 'Lesson 2', id: 234},
            {title: 'Lesson 3', id: 345},
            {title: 'Lesson 4', id: 456},
            {title: 'Lesson 5', id: 567},
            {title: 'Lesson 6', id: 678}
          ]
        };
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.renderTabsOfLessons = this.TabsOfLessons.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.lessonService = LessonService.instance;
      }
      setLessons(lessons) {
        this.setState({lessons : lessons})
      }
    
      findAllLessonsForModule(moduleId) {
          this.lessonService.findAllLessonsForModule(moduleId);
        // this.moduleService
        //   .findAllModulesForCourse(courseId)
        //   .then((modules) => {this.setModules(modules)});
      }
    
      setCourseId(courseId) {
        this.setState({courseId: courseId});
      }

      setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
      }
    
      componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
      }
    
      componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.moduleId)
      }
    
      createLesson() {
        this.lessonService
          .createLesson(this.props.courseId, this.props.module.id, this.state.module);
      }

      titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
      }

      deleteLesson(lessonId) {
          this.lessonService.deleteLesson(lessonId);
        // this.moduleService.deleteModule(moduleId).then(
        //     () => {
        //         this.findAllModulesForCourse(this.props.courseId);
        //         this.renderListOfModules();
        //     });
      }  

      renderTabsOfLessons() {
        let lessons = this.state.lessons.map(function(lesson){
          return <LessonTabItem lesson={lesson}
                                 key={lesson.id} courseId={this.props.courseId} moduleId={this.props.moduleId} />
        }, this);
        return lessons;
      }
      render() {
        return (
          <div>
              <input onChange={this.titleChanged}
                   value={this.state.lesson.title}
                   placeholder="New Module"
                   className="form-control"/>
            <button onClick={this.createLesson} className="btn btn-primary btn-block">
              <i className="fa fa-plus"></i>
            </button>
            <br/>
            <ul className="nav nav-tabs">
                {this.renderTabsOfLessons()}
                <li className="nav-item"><a className="nav-link active"
                              href="#">Active Tab</a></li>
                <li className="nav-item"><a className="nav-link"
                              href="#">Another Tab</a></li>
            </ul>
          </div>
        );
    }
}

