import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
// import {FIND_ALL_WIDGETS, ADD_WIDGET, DELETE_WIDGET, SAVE} from "./constants/index"
import {widgetReducer} from "../reducers/widgetReducer"
// import {WidgetContainer} from './components/widget'
// import {findAllWidgets, addWidget, save} from "./actions/index"
import App from './WidgetList'


// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
      }

    render() {
        let store = createStore(widgetReducer, {lessonId: this.props.match.params.lessonId, widgets: [], preview: false});
      return (
        <Provider store={store}>
             <App/>
        </Provider>
      );
  }
}
