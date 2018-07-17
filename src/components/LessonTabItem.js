import React from 'react';
import { Link } from 'react-router-dom'

export default class LessonTabItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: '',
      };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
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

  render() {
    return (

        <div>
                    {/* <div className={'delete-confirmation ' + this.state.active}>
            Are you sure you want to delete lesson {this.props.lesson.title}?
            <span className="confirm-btn" onClick={this.deleteModule}> <i className="fa fa-check"></i></span>
            <span className="cancel-btn" onClick={this.cancelDelete}> <i className="fa fa-times"></i></span>
        </div> */}
              <li className="nav-item"> 
                <a className="nav-link active" href="#">
                    {this.props.lesson.title}
                    <span onClick={this.deleteLesson}>
                     <i className="fa fa-trash"></i>
                    </span>
                </a>
            </li>
        </div>
    );
  }
}