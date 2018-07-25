import * as constants from "../constants/index"

export const widgetReducer = (state = {}, action) => {
  let newState;
  let newWidgets;
  switch (action.type) {

    case constants.PREVIEW:
      return {
        widgets: state.widgets,
        preview: !state.preview
      }

    case constants.HEADING_TEXT_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if(widget.id === action.id) {
              widget.text = action.text
            }
            return Object.assign({}, widget)
        })  
        newState.widgets = newWidgets
        return newState

    case constants.HEADING_SIZE_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if(widget.id === action.id) {
            widget.size = action.size
            }
            return Object.assign({}, widget)
        })  
        newState.widgets = newWidgets
        return newState
    
      case constants.WIDGET_NAME_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if(widget.id === action.id) {
                widget.name = action.name
            }
            return Object.assign({}, widget)
        })  
        newState.widgets = newWidgets
        return newState

    case constants.SELECT_WIDGET_TYPE:
      let newState = {
        widgets: state.widgets.filter((widget) => {
          if(widget.id === action.id) {
            widget.widgetType = action.widgetType
          }
          return true;
        })
      }
      return JSON.parse(JSON.stringify(newState))

    case constants.SAVE:
    console.log(state);
      fetch('http://localhost:8080/api/lesson/' + state.lessonId +'/widget', {
        method: 'post',
        body: JSON.stringify(state.widgets[0]),
        headers: {
          'content-type': 'application/json'}
      })


      return state

    case constants.FIND_ALL_WIDGETS:
      newState = Object.assign({}, state)
      newState.widgets = action.widgets
      return newState


    case constants.DELETE_WIDGET:
      return {
        widgets: state.widgets.filter(widget => (
          widget.id !== action.id
        ))
      }
    case constants.ADD_WIDGET:
      return {
        widgets: [
          ...state.widgets,
          {
            id: state.widgets.length + 1,
            text: 'New Heading Text',
            widgetType: 'Heading',
            size: '2',
            name: 'New Widget Name'
          }
        ]
      }
    default:
      return state
  }
}