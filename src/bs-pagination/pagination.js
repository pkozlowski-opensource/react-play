import React from 'react';

export class BsPagination extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <ul class="pagination pagination-lg">{renderPages()}</li>;
  }

  renderPages() {
    var pages = [];
    var pageCount = Math.ceil(this.props.collectionSize / this.props.pageSize);

    //TODO: calculate new state: this is probably not the best place, need to better understand what gets called when
    pages.push(renderPage('<<', false, false));
    for(var i=0; i<pageCount; i++) {
      pages.push(renderPage(i, false, false));
    }
    pages.push(renderPage('<<', true, false));
  }

  renderPage(text, active, disabled) {
    return <li class={`${active ? 'active' : ''`} ${disabled ? 'disabled' : ''`}}><a>{text}</a></li>;
  }
}

//pageNo', 'collectionSize', 'pageSize

BsAlert.defaultProps = {
  pageSize: 10
};

//TODO: support "size" property