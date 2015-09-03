import React from 'react';

function noop() {}

export class BsAlert extends React.Component {
    constructor(props) {
      super(props);
      this.cssClasses = `alert alert-${this.props.type} ${this.props.dismissible ? ' alert-dismissible' : ''}`;
    }

    render() {
        return <div className={this.cssClasses} role="alert">
            {this.props.dismissible &&
              <button type="button" className="close" aria-label="Close" onClick={this.close.bind(this)}>
                <span aria-hidden="true">×</span>
              </button>
            }
            {this.props.children}
        </div>;
    }

    close() {
      this.props.onClose();
    }
}

BsAlert.defaultProps = {
  type: 'warning',
  dismissible: false,
  onClose: noop
}; //oh, this is sad :-( It doesn't look ES6 at all :-( Not to mention that it is hardly testable in isolation...


//TODO: self-closing / closing on timeout (?)