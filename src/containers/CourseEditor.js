import React from 'react';
import CourseService from '../services/CourseService'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import {Link} from "react-router-dom";

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from './../reducers/WidgetReducer';
import App from './../containers/WidgetList';
import WidgetListContainer from '../containers/WidgetListContainer'
import Toggle from "react-toggle";

export default class CourseEditor
    extends React.Component{

    constructor(props){
        // super(props);
        // this.selectCourse = this.selectCourse.bind(this);
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.courseId)
        const course = this.courseService.findCourseById(courseId)
        this.state = {
            course: course,
            module: (course.modules.length!=0) ? course.modules[0]: '',
            newModule: '',
            lesson: (course.modules.length!=0 && course.modules[0].lessons.length!=0)?course.modules[0].lessons[0]: '',
            newLesson:'',
            topic: (course.modules.length!=0 && course.modules[0].lessons.length!=0 && course.modules[0].lessons[0].topics.length!=0)? course.modules[0].lessons[0].topics[0]: '',
            newTopic:'',
            widgets: (course.modules.length!=0 && course.modules[0].lessons.length!=0 && course.modules[0].lessons[0].topics.length!=0 && course.modules[0].lessons[0].topics[0].widgets.length!=0)? course.modules[0].lessons[0].topics[0].widgets: [],
        }
        this.moduleTitleChanged = this.moduleTitleChanged.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.editModule = this.editModule.bind(this);
        this.updateModule = this.updateModule.bind(this);

        this.lessonTitleChanged = this.lessonTitleChanged.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.editLesson = this.editLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);

        this.topicTitleChanged = this.topicTitleChanged.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.editTopic = this.editTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);

        this.deleteWidget = this.deleteWidget.bind(this);
    }

    /** ---------Modules-----------**/

    moduleTitleChanged = (event) => {
        this.setState(
            {
                newModule: {
                    id: (new Date()).getTime(),
                    title: event.target.value,
                    lessons: []
                }

            });
    }


    selectModule = module => {
        this.setState({
            module: module,
            lesson: module.lessons[0],
            topic: module.lessons[0].topics[0],
            widgets: module.lessons[0].topics[0].widgets
        })
    }

    createModule = () => {
        var course = this.state.course;
        course.modules.push(this.state.newModule);
        document.getElementById('modTitle').value=''
        this.setState({
            course: course
        })
    }

    deleteModule = dm =>{
        var removeIndex = this.state.course.modules.map(function(item) { return item.title; }).indexOf(dm.title);
        this.state.course.modules.splice(removeIndex, 1);
    }

    editModule(module){
        var modTitle = document.getElementById('modTitle');
        modTitle.value= module.title;
        this.setState({module: module});
    }

    updateModule(){
        var moduleInd = this.state.course.modules.findIndex(x => x.id == this.state.module.id)
        this.state.module.title = this.state.newModule.title
        this.state.course.modules[moduleInd] = this.state.module
        document.getElementById('modTitle').value=''
        this.setState({module: this.state.module});
    }

    /** ---------Lessons-----------**/

    lessonTitleChanged(event){
        this.setState({
            newLesson: {
                id: (new Date()).getTime(),
                title: event.target.value,
                topics: []
            }
        });
    }

    selectLesson = lesson =>
        this.setState({
            lesson: lesson,
            topic: lesson.topics[0],
            widgets: lesson.topics[0].widgets
        })

    createLesson(){
        var course = this.state.course;
        this.state.module.lessons.push(this.state.newLesson);
        document.getElementById('lessTitle').value=''
        this.setState({
            course: course
        })
    }

    deleteLesson(lesson){
        var removeIndex = this.state.module.lessons.map(function(item) { return item.title; }).indexOf(lesson.title);
        this.state.module.lessons.splice(removeIndex, 1);
    }

    editLesson(lesson){
        var lessTitle = document.getElementById('lessTitle');
        lessTitle.value= lesson.title;
        this.setState({lesson: lesson});
    }

    updateLesson(){
        var lessInd = this.state.module.lessons.findIndex(x => x.id == this.state.lesson.id)
        this.state.lesson.title = this.state.newLesson.title
        this.state.module.lessons[lessInd] = this.state.lesson
        document.getElementById('lessTitle').value=''
        this.setState({lesson: this.state.lesson});
    }

    /** ---------Topics-----------**/
    selectTopic = topic =>
        this.setState({
            topic: topic,
            widgets: topic.widgets
        })

    topicTitleChanged(event) {
        this.setState(
            {newTopic: {
                id: (new Date()).getTime(),
                title : event.target.value
            }});
    }

    createTopic(){
        var course = this.state.course;
        this.state.lesson.topics.push(this.state.newTopic);
        document.getElementById('topTitle').value=''
        this.setState({
            course: course
        })
    }

    deleteTopic(topic) {
        var removeIndex = this.state.lesson.topics.map(function(item) { return item.title; }).indexOf(topic.title);
        this.state.lesson.topics.splice(removeIndex, 1);
    }

    editTopic(topic){
        var topTitle = document.getElementById('topTitle');
        topTitle.value= topic.title;
        this.setState({topic: topic});
    }

    updateTopic(){
        var topInd = this.state.lesson.topics.findIndex(x => x.id == this.state.topic.id)
        this.state.topic.title = this.state.newTopic.title
        this.state.lesson.topics[topInd] = this.state.topic
        document.getElementById('topTitle').value=''
        this.setState({topic: this.state.topic});
    }

    /**----------Widgets-------------**/

    deleteWidget(widget) {
        var removeIndex = this.state.topic.widgets.map(function(item) { return item.id; }).indexOf(widget.id);
        this.state.topic.widgets.splice(removeIndex, 1);
        this.setState({widgets: this.state.topic.widgets})
    }

    /**------------Render--------------**/
    render(){
        let initialState = {
            widgets: this.state.widgets,
            preview: false,
            nonUniqueName: false,
            courseId: this.state.course.id,
            moduleId: this.state.module.id,
            lessonId: this.state.lesson.id,
            topicId: this.state.topic.id
        }
        //
        // let store = createStore(widgetReducer, initialState);
        const store = createStore(widgetReducer, initialState);

        return (
            <div>
                <div className="row bg-dark">

                    <Link to={`/`}>
                        <button className="btn btn-dark btn-block"><i className="fa fa-times"  aria-hidden="true"></i></button>
                    </Link>
                    <a href='#' className='logo'> Course Editor: {this.state.course.title}</a>
                </div>
                <div className="row bg-dark">
                    &nbsp;
                </div>
                <div className="row longcol">
                    <div className="col-md-4 bg-dark d-none d-md-block " >
                            <ModuleList
                                courseId={this.state.course.id}
                                selectModule={this.selectModule}
                                titleChanged={this.moduleTitleChanged}
                                createModule={this.createModule}
                                deleteModule={this.deleteModule}
                                editModule={this.editModule}
                                updateModule={this.updateModule}
                                modules={this.state.course.modules}
                            />

                    </div>
                        <div className="col-md-8">
                            <div>&nbsp;</div>

                            <LessonTabs
                                    moduleid={this.state.module.id}
                                    courseId={this.state.course.id}
                                    selectLesson={this.selectLesson}
                                    titleChanged={this.lessonTitleChanged}
                                    createLesson={this.createLesson}
                                    deleteLesson={this.deleteLesson}
                                    updateLesson={this.updateLesson}
                                    editLesson={this.editLesson}
                                    lessons={this.state.module.lessons}

                            />

                            <div>&nbsp;</div>

                            <TopicPills
                                courseId={this.state.course.id}
                                moduleId={this.state.module.id}
                                lessonId={this.state.lesson.id}
                                topics={this.state.lesson.topics}
                                selectTopic={this.selectTopic}
                                titleChanged={this.topicTitleChanged}
                                createTopic={this.createTopic}
                                deleteTopic={this.deleteTopic}
                                updateTopic={this.updateTopic}
                                editTopic={this.editTopic}
                            />

                            <div>&nbsp;</div>

                            {/*<div className="row">*/}

                                {/*<div className="col text-right">*/}
                                        {/*<button className="btn btn-success">Save</button>*/}
                                        {/*<i className="fa fa-w-2 fa-toggle-on" aria-hidden="true"></i>*/}
                                        {/*Preview*/}
                                {/*</div>*/}

                            {/*</div>*/}
                            <div>
                                &nbsp;
                            </div>

                                {/*<Provider store={store}>*/}
                                    {/*<App*/}
                                        {/*courseId={this.state.course.id}*/}
                                        {/*moduleId={this.state.module.id}*/}
                                        {/*lessonId={this.state.lesson.id}*/}
                                        {/*topicId={this.state.topic.id}*/}
                                        {/*widgets={this.state.widgets}/>*/}
                                {/*</Provider>*/}


                            <Provider store={store}>
                                <WidgetListContainer
                                widgets={this.state.widgets}
                                // deleteWidget={this.deleteWidget}
                                />
                            </Provider>
                        </div>

                </div>

            </div>
        )
    }
}


