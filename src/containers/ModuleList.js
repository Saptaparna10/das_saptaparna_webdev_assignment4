import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

class ModuleList extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            selectModuleInd: 0,
            module: {
                "id": "",
                "title": "",
                "lessons": []

            },
            modules: this.props.modules,
            courseId: this.props.courseId
        };

        this.selectModuleInd = this.selectModuleInd.bind(this);
    }

    selectModuleInd(moduleIndex){
        this.setState({selectModuleInd: moduleIndex});
    }

    render() {
        return(

        <div>
                    <div className="input-group mb-3">
                        <input id='modTitle'
                               className="form-control"
                               onChange={this.props.titleChanged}
                               placeholder="Module 1.1"/>
                        <div>
                            <button onClick={this.props.createModule}
                                    className="btn btn-dark btn-block">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div>
                            <button onClick={this.props.updateModule}
                                    className="btn btn-dark btn-block">
                                <i className="fa fa-check"></i>
                            </button>
                        </div>
                    </div>

            <ul className="nav flex-column nav-pills">
                {
                    this.props.modules.map(
                        (module, index) => {
                            let active = this.state.selectModuleInd === index ? 'active' : '';
                            return (
                                <ModuleListItem
                                    select={this.selectModuleInd}
                                    position={index}
                                    active={active}
                                    key={index}
                                    courseId={this.props.courseId}
                                    module={module}
                                    selectModule={this.props.selectModule}
                                    deleteModule={this.props.deleteModule}
                                    editModule={this.props.editModule}
                                    />
                            )
                        }
                    )
                }
            </ul>

                <div>
                    &nbsp;
                </div>

        </div>
        )
    }
}
export default ModuleList;