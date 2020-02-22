import * as React from 'react';

import UserInterface from './UserInterface';

export default class UserComponent extends React.Component<UserInterface,{}>{

constructor(props : UserInterface){
super(props);
}

render(){
    return (
        <div>
            <h1>User details</h1>
            Hello , {this.props.name}
            <p>
                Age : {this.props.age}
            </p>
        </div>
    )
}

}