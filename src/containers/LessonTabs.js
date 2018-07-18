import React from 'react'
import LessonTabItem from '../components/LessonTabItem'
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
        this.renderTabsOfLessons = this.renderTabsOfLessons.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.lessonService = LessonService.instance;
      }
      setLessons(lessons) {
        this.setState({lessons : lessons})
      }
    
      findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
          .findAllLessonsForModule(courseId, moduleId)
          .then((lessons) => {this.setLessons(lessons)});
      }
    
      setCourseId(courseId) {
        this.setState({courseId: courseId});
      }

      setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
      }
    
      componentDidMount() {
        console.log(this.props.moduleId);
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
      }
    
      componentWillReceiveProps(newProps){
          console.log('receiving');
          console.log(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId)
      }
    
      createLesson() {
        this.lessonService.createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
        .then(() => { this.findAllLessonsForModule(this.props.courseId, this.props.moduleId); });;
      }

      titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
      }

      deleteLesson(lessonId) {
          console.log('deleting in lesson');
        this.lessonService.deleteLesson(lessonId).then(
            () => {
                this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);
                this.renderTabsOfLessons();
            });
      }  

      renderTabsOfLessons() {
        let lessons = this.state.lessons.map(function(lesson){
          return <LessonTabItem deleteLesson={this.deleteLesson} lesson={lesson}
                                 key={lesson.id} courseId={this.props.courseId} moduleId={this.props.moduleId} />
        }, this);
        return lessons;
      }
      render() {
        return (
          <div>
              <input onChange={this.titleChanged}
                   value={this.state.lesson.title}
                   placeholder="New Lesson"
                   className="form-control"/>
            <button onClick={this.createLesson} className="btn btn-primary btn-block">
              <i className="fa fa-plus"></i>
            </button>
            <br/>
            <ul className="nav nav-tabs">
                {this.renderTabsOfLessons()}
            </ul>
          </div>
        );
    }
}
