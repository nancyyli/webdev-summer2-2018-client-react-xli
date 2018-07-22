import React from 'react';
import '../css/lesson.css'
import { Link } from 'react-router-dom'

export default class LessonTabItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: '',
        selected: ''
      };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
  }

  componentDidMount() {
    this.lessonSelected(this.props.selectedLesson);
  }

  componentWillReceiveProps(newProps){
    this.lessonSelected(newProps.selectedLesson);
  }

  deleteConfirmation() {
      this.setState({active: 'active'});
  }

  deleteLesson() {
    var lessonId = this.props.lesson.id;
    this.props.deleteLesson(lessonId);
  }

  cancelDelete() {
    this.setState({active: ''});
  }

  lessonSelected(selectedLesson) {
    if (selectedLesson == this.props.lesson.id) {
      this.setState({selected: 'active'});
    }
    else {
      this.setState({selected: ''});
    }
  }

  render() {
    return (

        <div onClick={this.props.onClick}> 
            <div className={'delete-confirmation ' + this.state.active}>
            Are you sure you want to delete lesson {this.props.lesson.title}?
            <span className="confirm-btn" onClick={this.deleteLesson}> <i className="fa fa-check"></i></span>
            <span className="cancel-btn" onClick={this.cancelDelete}> <i className="fa fa-times"></i></span>
            </div>
              <li className="nav-item"> 
                <a className={'nav-link ' + this.state.selected} href="#">
                    {this.props.lesson.title}
                    <span onClick={this.deleteConfirmation}>
                     <i className="fa fa-trash delete-lesson"></i>
                    </span>
                </a>
            </li>
        </div>
    );
  }
}