import * as constants from "../constants/index"
import WidgetService from "../services/WidgetServiceClient"

let widgetService = WidgetService.instance;
export const widgetReducer = (state = {}, action) => {
  let newState;
  let newWidgets;
  switch (action.type) {

    case constants.PREVIEW:
      return {
        widgets: state.widgets,
        preview: !state.preview
      }

    case constants.TEXT_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if(widget.id === action.id) {
              widget.text = action.text
            }
            return Object.assign({}, widget)
        })  
        newState.widgets = newWidgets
        return newState

    case constants.LINK_TEXT_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if (widget.id === action.id) {
                widget.href = action.href
            }
            return Object.assign({}, widget)
        })
        newState.widgets = newWidgets
        return newState

    case constants.SRC_TEXT_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if (widget.id === action.id) {
                widget.src = action.src
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
    
    case constants.LIST_ITEMS_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if(widget.id === action.id) {
            widget.listItem = action.listItem
            }
            return Object.assign({}, widget)
        })  
        newState.widgets = newWidgets
        return newState

    case constants.LIST_TYPE_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if(widget.id === action.id) {
            widget.listType = action.listType
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

    case constants.SORT_ORDER_CHANGED:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map(widget => {
            if (widget.sortOrder === action.sortOrder) {
                if (action.direction === "up") {
                    widget.sortOrder += 1;
                }
                if (action.direction === "down") {
                    widget.sortOrder -= 1;
                }
            }
            if(widget.id === action.widgetId) {
                widget.sortOrder = action.sortOrder
            }
            return Object.assign({}, widget)
        })
        newState.widgets = newWidgets
        return newState
        
    case constants.SELECT_WIDGET_TYPE:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.map((widget) => {
            if(widget.id === action.id) {
              widget.widgetType = action.widgetType
            }
            return Object.assign({}, widget)
          })
          newState.widgets = newWidgets
          return newState

    case constants.SAVE:
        newState = Object.assign({}, state)
        state.widgets.map(widget => {
            widgetService.saveWidget(action.lessonId, widget)
        })
        newState.widgets = state.widgets;

        return newState

    case constants.FIND_ALL_WIDGETS:
        newState = Object.assign({}, state)
        newState.widgets = action.widgets
        newState.widgets.sort(function(a, b) {
                return a.sortOrder - b.sortOrder; })
        return newState

    case constants.DELETE_WIDGET:
        newState = Object.assign({}, state)
        newWidgets = state.widgets.filter(widget => (
            widget.id !== action.widgetId
            ))
        newState.widgets = newWidgets;
        return newState;

    case constants.ADD_WIDGET:
        newState = Object.assign({}, state)
        newWidgets = [
            ...state.widgets,
            {
            id: state.widgets.length - 200,
            text: 'New Text',
            sortOrder: state.widgets.length,
            widgetType: 'Heading',
            size: '1',
            name: 'New Widget Name',
            listType: 'Ordered',
            listItem: 'Sample List Item'
            }
        ]
        newState.widgets = newWidgets
        return newState

    default:
      return state
  }
}