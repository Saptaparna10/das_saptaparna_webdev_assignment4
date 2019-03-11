import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseService from '../services/CourseService'
import CourseEditor from './CourseEditor';
import CourseGrid from './CourseGrid'
import {BrowserRouter as Router, Route} from "react-router-dom";

export default class CourseManager
    extends Component{

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.toggleView = this.toggleView.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.renderView = this.renderView.bind(this);
        this.editCourse=this.editCourse.bind(this);
        this.state = {
            courses: this.courseService.findAllCourses(),
            view: 'list',
            course: '',
            newCourse:''
        }
    }


    titleChanged(event) {
        this.setState(
            {
                newCourse:{
                    id :(new Date()).getTime(),
                    title: event.target.value,
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
        );
    }

    toggleView(){
        if(this.state.view === 'list') {
            this.setState({view: 'tabs'})
        }
        else
            this.setState({view: 'list'})
    }

    addCourse(){
        const courses = this.courseService.addCourse(this.state.newCourse);
        document.getElementById('titleFld').value=''
        this.setState({courses: courses});
    }

    deleteCourse(course){
        const courses = this.courseService.deleteCourse(course);
        this.setState({courses: courses});

    }

    editCourse(course){
        var courseInput = document.getElementById('titleFld');
        courseInput.value= course.title;
        this.setState({course: course});
    }

    updateCourse(){
        const courses = this.courseService.updateCourse(this.state.course, this.state.newCourse);
        document.getElementById('titleFld').value=''
        this.setState({courses: courses});
    }

    renderView(){
        if(this.state.view === 'list'){
            return (
                <CourseTable
                    deleteCourse={this.deleteCourse}
                    editCourse={this.editCourse}
                    courses={this.state.courses}/>

            );
        }
        else {
            return (
                <CourseGrid
                    editCourse={this.editCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
            );
        }
    }

    render(){
        return (
            <div className='table-responsive'>
                    <table className="table table-striped table-dark">
                        <thead>
                        <tr>
                            <th><i className='fa fa-bars'></i></th>
                            <th className="pull-left"> <a href='#' className='logo'>Course Manager</a></th>
                            <th><input onChange={this.titleChanged}
                                                   className="form-control d-none d-sm-table-cell"
                                                   id="titleFld"
                                                   placeholder="cs101"/></th>
                            <th className='pull-right d-none d-sm-table-cell'>
                                <button onClick={this.updateCourse}
                                        className="btn btn-success btn-block"
                                        id="updateBtn">
                                    <i className='fa fa-check'></i>
                                </button>
                            </th>
                            <th className='pull-right'>
                                <button onClick={this.addCourse}
                                        className="btn btn-primary btn-block d-none d-sm-table-cell"
                                        id="addBtn">
                                    <i className='fa fa-plus'></i>
                                </button>
                            </th>

                            <th>
                                <button onClick={this.toggleView}
                                        className='btn btn-warning'
                                        id='toggleBtn'>
                                    <i className='fa fa-th'></i>
                                </button>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    {this.renderView()}

                </div>
        )
    }
}