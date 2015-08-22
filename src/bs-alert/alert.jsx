import React from 'react';

export class BsAlert extends React.Component {

    render() {
        return <div className="alert alert-warning alert-dismissible" role="alert">
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </div>;
    }

    _handleClick() {
        console.log(this);
    }
}


//Q: how to pass arguments to a event handler functions??? What am I loosing when there are no arguments?