import React from 'react';

//inputs: max, rate, readonly
//outputs: change, hover, leave

export class BsRate extends React.Component {
    render() {
        var className = `glyphicon glyphicon-star${!this.props.selected ? '-empty' : ''}`;
        return <span onClick={this.props.onSelect}>
            <span className="sr-only">{this.props.value}</span>
            <i className={className}></i>
        </span>;
    }
}

export class BsRating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: props.value};
    }

    render() {
        let ratings = [];

        for (let i=1; i<=5; i++) {
            ratings.push(
                <BsRate value={i} selected={i<=this.state.value} onSelect={this.ratingSelected.bind(this, i)}/>
            );
        }

        return <div>{ratings}</div>;
    }

    ratingSelected(selectedValue) {
        this.setState({value: selectedValue});
    }
}