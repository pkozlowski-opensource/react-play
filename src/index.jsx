import React from 'react';

import {BsAlert} from './bs-alert/alert';
import {BsPagination} from './bs-pagination/pagination';


class BsDemo extends React.Component {
  render() {
    return <BsAlert onClose={console.log.bind(console)} type="success" dismissible={false}>
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
    </BsAlert>;
  }
}


React.render(<BsDemo/>, document.body);

//+ self-closing tags
//+ no issue with HTML lower-casing everything

//- testing without DI is so retarded...
//- no UI customization by swapping "templates"?
//- binding events to a "proper" context is pain in a neck...

//Q: how to pass arguments to a event handler functions??? What am I loosing when there are no arguments?