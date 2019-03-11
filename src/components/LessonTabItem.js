import React from 'react';
import {Link} from 'react-router-dom';

export default class LessonTabItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (

            <li className='nav-item'
                onClick={() => {this.props.select(this.props.position)
                                this.props.selectLesson(this.props.lesson)
                }}
                key={this.props.position}>

                    {/*<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>*/}
                        <a className=  {'nav-link '+this.props.active}>
                            {this.props.lesson.title}

                            <i className="fa fa-times ml-2" onClick={() => {
                                    this.props.deleteLesson(this.props.lesson)
                                }}/>

                            <i className="fa fa-pencil ml-2" onClick={() => {
                                this.props.editLesson(this.props.lesson)
                            }}/>

                        </a>
                    {/*</Link>*/}
            </li>
        );
    }
}