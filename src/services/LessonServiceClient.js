const LESSON_API_URL =
  'https://webdev-summer2-xli.herokuapp.com/api/lesson';
const LESSON_CREATE_URL = 
'https://webdev-summer2-xli.herokuapp.com/api/course/courseId/module/moduleId/lesson';

let _singleton = Symbol();
export default class LessonService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Does not equal the right token');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new LessonService(_singleton);
    return this[_singleton]
  }

  findAllLessons() {
    return fetch(LESSON_API_URL)
    .then(function(response){
    return response.json();
    });
  }

  findLessonById(lessonId) {
    return fetch(LESSON_API_URL + '/' + lessonId).then(function(response) {
        return response.json();
    })
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(LESSON_CREATE_URL.replace('courseId', courseId).replace('moduleId', moduleId))
      .then(function (response) {
        return response.json();
      })
  }

  createLesson(courseId, moduleId, lesson) {
    return fetch(LESSON_CREATE_URL.replace('courseId', courseId).replace('moduleId', moduleId),
      {
        body: JSON.stringify(lesson),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }

  deleteLesson(lessonId) {
    return fetch(LESSON_API_URL + '/' + lessonId, {
        method: 'delete'
    });
  }

  updateLesson(lessonId) {

  }

}
