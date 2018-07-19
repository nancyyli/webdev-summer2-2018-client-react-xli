import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from './containers/CourseManager';
import { Link } from 'react-router-dom'

ReactDOM.render(
    <div className="container-fluid">
        <h1> Welcome to Whiteboard! </h1>
        <CourseManager/>
    </div>,
    document.getElementById('root')
  );