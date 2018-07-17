const LESSON_API_URL =
  'http://localhost:8080/api/lesson';

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
      console.log('finding all lessons');
    // return fetch(MODULE_API_URL)
    // .then(function(response){
    // return response.json();
    // });
  }

  findLessonById(lessonId) {
      console.log('finding lesson by id');
    // return fetch(MODULE_API_DELETE_URL.replace('MID', moduleId)).then(function(response) {
    //     return response.json();
    // })
  }

  findAllModulesForCourse(courseId) {
    console.log('finding all modules');
    return fetch(
      MODULE_API_URL
        .replace('CID', courseId))
      .then(function (response) {
        return response.json();
      })
  }

  createModule(courseId, module) {
    return fetch(MODULE_API_URL.replace('CID', courseId),
      {
        body: JSON.stringify(module),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }

  deleteModule(moduleId) {
    return fetch(MODULE_API_DELETE_URL.replace('MID', moduleId), {
        method: 'delete'
    });
  }

  updateModule(moduleId) {

  }

}
