let _singleton = Symbol();
const COURSE_API_URL =
  'http://localhost:8080/api/course';


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
        return fetch(COURSE_API_URL, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
              'Content-Type': 'application/json'

            }
          }).then(function (response) {
              var course = response.json();
            return course;
        })
    }

    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId, {
            method: 'delete'
        });
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
        .then(function(response){
          return response.json();
        });
    }

    findCourseById(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId).then(function(response) {
            return response.json();
        })
    }

    updateCourse() {

    }
  }
  export default CourseService;