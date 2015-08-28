import React from 'react';

export class BsAlert extends React.Component {
    render() {
        var classes = 'alert alert-' + this.props.type + (this.props.dismissible ? ' alert-dismissible' : '');
        //TODO: where to move this logic? Is there any way of making it better?
        //TODO(pk): how to avoid class manipulation / concatenation like this? It is pretty low-level....

        return <div className={classes} role="alert">
            {this.props.dismissible &&
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            }
            {this.props.children}
        </div>;
    }

    _handleClick() {
    }
}

BsAlert.defaultProps = { type: 'warning', dismissible: true }; //oh, this is sad :-( It doesn't look ES6 at all :-( Not to mention that it is hardly testable in isolation...

//TODO: validate type property
//Q: where to move classes calculation logic?
//Q: how to pass arguments to a event handler functions??? What am I loosing when there are no arguments?