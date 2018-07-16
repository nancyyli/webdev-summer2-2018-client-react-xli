let _singleton = Symbol();


class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
          throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton]) {
            this[_singleton] = new CourseService(_singleton);
        }
        return this[_singleton];
    }

    createCourse(course) {

    }

    deleteCourse(course) {
        console.log('clicked delete');
    }

    findAllCourses() {
        var text = '{ "courses" : [' +
        '{ "id":"1" , "title":"Doe" , "created": "yesterday", "modified": "now"},' +
        '{ "id":"2" , "title":"fdlgjd" , "created": "yesterday", "modified": "now"}]}';
        var jsonText= JSON.parse(text);
        return jsonText;

    }

    findCourseById(id) {

    }

    updateCourse() {

    }
    // constructor(singletonToken) {
    //   if (_singleton !== singletonToken)
    //     throw new Error('Cannot instantiate directly.');
    // }
    // static get instance() {
    //   if(!this[_singleton])
    //     this[_singleton] = new CourseService(_singleton);
    //   return this[_singleton]
    // }
    // findAllCourses() {
    // //   return fetch(COURSE_API_URL)
    // //     .then(function(response){
    // //       return response.json();
    // //     });
    // }
    // createCourse(course) {
    //   return fetch(COURSE_API_URL, {
    //     body: JSON.stringify(course),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }).then(function (response) {
    //     return response.json();
    //   })}
  }
  export default CourseService;