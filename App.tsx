import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserComponent from './UserComponent';

ReactDOM.render(
    <div>
<h1>Hello world</h1>
<UserComponent name="Mohan" age ={21}/>
    </div>,document.getElementById("root")
)
