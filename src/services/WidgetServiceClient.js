// const WIDGET_API_URL =
//   'https://webdev-summer2-xli.herokuapp.com/api/lesson';
// const WIDGET_CREATE_URL = 
// 'https://webdev-summer2-xli.herokuapp.com/api/course/courseId/module/moduleId/lesson';
const WIDGET_API_URL =
  'http://localhost:8080/';

let _singleton = Symbol();
export default class WidgetService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Does not equal the right token');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new WidgetService(_singleton);
    return this[_singleton]
  }

  findAllWidgets(lessonId) {
    return fetch(WIDGET_API_URL + 'api/lesson/' + lessonId + '/widget')
    .then(response => (response.json()))
  }

  saveWidget(lessonId, widget) {

    return fetch(WIDGET_API_URL + 'api/lesson/' + lessonId +'/widget', {
        method: 'post',
        body: JSON.stringify(widget),
        headers: {
          'content-type': 'application/json'}
      })
  }

  deleteWidget(widgetId) {
    return fetch(WIDGET_API_URL + 'api/widget/' + widgetId, {
        method: 'delete'
    });
  }


}
