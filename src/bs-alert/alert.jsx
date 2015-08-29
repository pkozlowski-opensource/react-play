import React from 'react';

export class BsAlert extends React.Component {
    render() {
        return <div className={`alert alert-${this.props.type || 'warning'} ${this.props.dismissible ? ' alert-dismissible' : ''}`} role="alert">
            {this.props.dismissible &&
              <button type="button" className="close" aria-label="Close" onClick={this.close.bind(this)}>
                <span aria-hidden="true">×</span>
              </button>
            }
            {this.props.children}
        </div>;
    }

    close() {
        if(this.props.onClose) {
            this.props.onClose('closssing...');
        }
    }
}

BsAlert.defaultProps = { type: 'warning', dismissible: false }; //oh, this is sad :-( It doesn't look ES6 at all :-( Not to mention that it is hardly testable in isolation...

//TODO: validate type property to check it against a set of pre-defined values
//Q: where to move classes calculation logic?
//Q: how to pass arguments to a event handler functions??? What am I loosing when there are no arguments?