import React from 'react';

export class MessageList extends React.Component {

    renderChildren() {
        return this.props.children
            .filter((child) => {
                return child.type === 'message' && child.props.active !== false;
            })
            .map((message) => {
                return (
                    <div style={{border: 'dashed'}}>
                        <h3>{message.props.title}</h3>
                        {message.props.children}
                    </div>
                );
            });
    }

    render() {
        return (
            <div>
                <h1>Messages:</h1>
                {this.renderChildren()}
            </div>
        );
    }
}

