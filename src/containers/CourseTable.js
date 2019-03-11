import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'
import CourseGrid from '../containers/CourseGrid'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.renderView = this.renderView.bind(this);
        this.state = {
            courses: this.props.courses,
            view: 'list',
            course: {}
        }
    }


    renderView(){
            return (
                <table className='table table-striped'>
                    <thead className='thead-light'>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th className='d-none d-sm-table-cell'>Owned By</th>
                        <th className='d-none d-sm-table-cell'>Last Modified</th>
                        <th>&nbsp;</th>
                        <th className='d-none d-sm-table-cell'>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRow()}
                    </tbody>
                </table>
            );
    }

    renderCourseRow(){
        var courses = this.props.courses.map(
            (course, index) => {
                 return <CourseRow
                        key={index}
                        course={course}
                        deleteCourse={this.props.deleteCourse}
                        editCourse={this.props.editCourse}/>
            }
        )

        return(
            courses
        )
    }

    render() {
        return (
            <div className='heading-bar'>

                <div>
                   {this.renderView()}
                </div>
            </div>


        )
    }
}
export default CourseTable