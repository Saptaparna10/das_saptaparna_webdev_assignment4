import React from 'react'
import {Link} from 'react-router-dom';


export default class CourseRow extends React.Component{

    constructor(props){
        super(props);

    }


    render(){
        return(
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}`}>
                        <i className='fa fa-file-text'>&nbsp;</i>
                    </Link>
                </td>
                <td id='courseTitle'>
                    {this.props.course.title}
                </td>
                <td className='d-none d-sm-table-cell'>me</td>
                <td className='d-none d-sm-table-cell'>6:45 PM</td>
                <td className='d-none d-sm-table-cell'><button className="btn btn-secondary" onClick={() =>{this.props.editCourse(this.props.course)}}>
                    <i className="fa fa-pencil"></i>
                </button></td>
                <td><button className="btn btn-danger" onClick={() => {this.props.deleteCourse(this.props.course)}}>
                    <i className="fa fa-trash"></i>
                </button></td>
            </tr>
        )
    }
}
