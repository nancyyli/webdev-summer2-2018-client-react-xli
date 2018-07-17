const MODULE_API_URL =
  'http://localhost:8080/api/course/CID/module';
const MODULE_API_DELETE_URL =
  'http://localhost:8080/api/module/MID';

let _singleton = Symbol();
export default class ModuleService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Does not equal the right token');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new ModuleService(_singleton);
    return this[_singleton]
  }

  findAllModules() {
    return fetch(MODULE_API_URL)
    .then(function(response){
    return response.json();
    });
  }

  findModuleById(moduleId) {
    return fetch(MODULE_API_DELETE_URL.replace('MID', moduleId)).then(function(response) {
        return response.json();
    })
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
