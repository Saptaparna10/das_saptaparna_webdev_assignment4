import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseManagerApp from './containers/CourseManagerApp';
import '../node_modules/font-awesome/css/font-awesome.css';
import css from './index.css';
import WhiteBoard from "./containers/Whiteboard";


ReactDOM.render(

    <div className="container-fluid">
        <meta
            name="viewport"
            content="width=device-width,
            initial-scale=1"/>
       <WhiteBoard/>
    </div>,
    document.getElementById("root")
);