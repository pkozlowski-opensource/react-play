import React from 'react';

class BsPage extends React.Component {
  render() {
    return <li className={`${this.props.active ? 'active' : ''} ${this.props.disabled ? 'disabled' : ''}`}>
      <a onClick={this.props.onSelect}>{this.props.children}</a>
    </li>;
  }
}

export class BsPagination extends React.Component {


  constructor(props) {
    super(props);
    this.state = {pageNo: this.props.pageNo};
  }

  render() {
    return <ul className="pagination">{this.renderPages()}</ul>;
  }

  renderPages() {
    var pages = [];
    var pageCount = Math.ceil(this.props.collectionSize / this.props.pageSize);

    pages.push(<BsPage disabled={this.state.pageNo <= 1} onSelect={}>&laquo;</BsPage>);
    for(var i=0; i<pageCount; i++) {
      pages.push(<BsPage>{i + 1}</BsPage>);
    }
    pages.push(<BsPage>&raquo;</BsPage>);

    return pages;
  }

  selectPage(pageNo) {
  console.log('Selecting: ', pageNo);
  this.setState({pageNo: pageNo});
  }
}

BsPagination.defaultProps = {
  pageSize: 10
};

//TODO: support "size" property