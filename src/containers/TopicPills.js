// export default class TopicPills
//     extends React.Component {
//     render() {
//         return(
//             <ul className="nav nav-pills">
//                 <li className="nav-item">
//                     <a className="nav-link active"
//                        href="#">Topic 1</a></li>
//                 <li className="nav-item ">
//                     <a className="nav-link"
//                        href="#">Topic 2</a></li></ul>
//         );}}

import React from 'react'
import {Link, Route} from 'react-router-dom'

export default class TopicPills extends React.Component{

    constructor(props){
        super(props);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.select = this.select.bind(this);
        this.state={
            moduleId: this.props.moduleId,
            courseId: this.props.courseId,
            lessonId: '',
            lessons: this.props.lessons,
            topic: this.props.topic,
            topics: this.props.topics,
            selectedTopic: 0
        }
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    select = index => {
        this.setState({selectedTopic: index})
    }

    renderTopics() {
        let topics = this.props.topics.map((topic, i) => {
            let active = i === this.state.selectedTopic ? 'active' : '';
            //alert('Topic!!!!!! i' + i+' active= '+active);
            return (
                    <li className="nav-item "
                        onClick={() => {this.select(i)
                            this.props.selectTopic(topic)}}
                        key={i}>
                        {/*<Link*/}
                            {/*to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}>*/}
                        <a className= {`nav-link ${active}`}>
                                {topic.title}
                                <i className='fa fa-times ml-2' onClick={() => {this.props.deleteTopic(topic)}}/>
                                 <i className="fa fa-pencil ml-2" onClick={() => {
                                     this.props.editTopic(topic)
                                }}/>
                            </a>
                        {/*</Link>*/}
                    </li>
            )
        });

        return (
                    <div className="nav item">
                        {topics}
                        <div className="input-group input-group mb-3">
                            <input id='topTitle'
                                   className='form-control'
                                   onChange={this.props.titleChanged}
                                   placeholder='Topic Name'/>
                            <div>
                                <button onClick={this.props.updateTopic}
                                        className="btn btn-success btn-block">
                                    <i className="fa fa-check"></i>
                                </button>
                            </div>
                            <div>
                                <button className='btn btn-secondary'
                                        onClick={this.props.createTopic}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

        );
    }


    render() {
        return(
                <ul className="nav nav-pills flex-column">
                    {this.renderTopics()}
                </ul>
        )
    }
}
