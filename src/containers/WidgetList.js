import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'
import '../css/widget.css'

class WidgetList extends Component {
  constructor(props) {
    super(props)
    this.props.findAllWidgets(this.props.match.params.lessonId);
  }

  componentWillReceiveProps(newProps) {
      if (this.props.match.params.lessonId != newProps.match.params.lessonId) {
        this.props.findAllWidgets(newProps.match.params.lessonId);
      }
  }
  render() {
    return(
      <div className="widget-box">
        <h3 className="widgets-title">There are {this.props.widgets.length} widgets</h3>
        <div className="preview-toggle">
            <div className="preview-text">Preview</div>
            <label className="switch" > 
                <input type="checkbox" data-toggle="toggle"/>
                <span className="slider round" onClick={this.props.preview}></span>
            </label>
        </div>

        <button className="btn btn-success save-btn" hidden={this.props.previewMode} onClick={() => this.props.save(this.props.match.params.lessonId)}>
          Save
        </button>

        <ul className="widgets-list">
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}
                             lessonId={this.props.match.params.lessonId}/>
          ))}
        </ul>
        <button onClick={this.props.addWidget} className="btn btn-primary add-widget-btn">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
  lessonId: state.lessonId,
  widgets: state.widgets,
  previewMode: state.preview
})
const dispatcherToPropsMapper
  = dispatch => ({
  findAllWidgets: (lessonId) => actions.findAllWidgets(dispatch, lessonId),
  addWidget: () => actions.addWidget(dispatch),
  save: (lessonId) => actions.save(dispatch, lessonId),
  preview: () => actions.preview(dispatch)
})
const WidgetListContainer = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default WidgetListContainer
