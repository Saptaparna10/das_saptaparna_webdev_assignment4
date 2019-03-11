import courses from '../resources/courses.json'

class CourseService {
    constructor() {
        this.courses = courses;
    }
    addCourse = course => {
        if(course === null) {
            course = {
                id :(new Date()).getTime(),
                    title:'New Course',
                    modules:[{
                    title: '',
                    lessons: [{
                        title:'',
                        topics:[{
                            title:''
                        }]
                    }]
                }]
            }

        }
        course.id = (new Date()).getTime()
        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.course = this.courses.find(
            course => course.id == courseId
        )


    findAllCourses = () =>
        this.courses;

    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

    updateCourse = (selectedCourse, newCourse) => {
        var foundIndex =  this.courses.findIndex(x => x.id == selectedCourse.id);
        selectedCourse.title = newCourse.title;
        this.courses[foundIndex] = selectedCourse;
        return this.courses
    }

    /** WIDGETS **/

    findAllWidgetsForTopic = (courseId, moduleId, lessonId, topicId) => {
        var course = this.courses.find(
            course => course.id == courseId
        );
        var module = course.modules.find(
            module => module.id === moduleId
        );
        var lesson = module.lessons.find(
            lesson => lesson.id === lessonId
        );
        var topic = lesson.topics.find(
            topic => topic.id === topicId
        );
        return topic.widgets;
    }

    sort(jsonObj) {

        jsonObj.sort(function (p, q) {
            return p.orderOfWidget - q.orderOfWidget;
        });

        return jsonObj;
    }

    deleteWidget = (widgets, id) =>
         widgets.filter(w =>
            w.id !== id
        )


}
export default CourseService