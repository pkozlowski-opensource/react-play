import React from 'react';
import {MessageList} from './lists';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {active: true};
    }

    toggleActive() {
        this.setState({active: !this.state.active});
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleActive.bind(this)}>Toggle active</button>
                <MessageList>
                    <message title="Foo" active={this.state.active}>Foo content</message>
                    <message title="Bar">Bar content</message>
                    <message title="Baz">Baz content</message>
                </MessageList>
            </div>
        );
    }
}

React.render((<App></App>), document.body);
