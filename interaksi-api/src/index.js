import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
//import HelloComponent from './component/HelloComponent';
//import StateFullComponent from './container/StateFullComponent';
//import HelloComponent from './components/HelloComponent.jsx';

import BlogPost from "./container/BlogPost/BlogPost";



// function HelloWorld()
// {
//     return <p>ini adalah function component</p>
// }

// const HelloWorld = () =>{
// return <p> Ini adalah arrow function </p>
// }

// class Statefullcomponent extends React.Component
// {
//     render (){
//         return <p> Ini adalah Statefull Component</p>
//     }
// }

ReactDOM.render(<BlogPost />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
