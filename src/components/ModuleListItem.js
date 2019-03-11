import React from 'react'
import {Link} from 'react-router-dom';

export default class ModuleListItem
    extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
                <li className={'list-group-item list-group-item-dark ' + this.props.active}
                    onClick={() => {
                        this.props.select(this.props.position)
                        this.props.selectModule(this.props.module)
                    }}>
                    {/*<Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>*/}
                    {this.props.module.title}
                    {/*</Link>*/}

                    <span className="pull-right">

                        <button className='btn bg-transparent' onClick={() => {
                            this.props.deleteModule(this.props.module);
                        }}>
                        <i className="fa fa-trash"></i>
                        </button>
                        <button className='btn bg-transparent' onClick={() => {
                            this.props.editModule(this.props.module);
                        }}
                        >
                        <i className="fa fa-pencil"></i>
                        </button>
                        </span>

                </li>
        );}
}