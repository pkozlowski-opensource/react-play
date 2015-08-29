import React from 'react';
import {BsAlert} from './bs-alert/alert';

React.render(
  <BsAlert onClose={console.log.bind(console)}>
    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
  </BsAlert>
  , document.body);

//+ self-closing tags
//+ no issue with HTML lower-casing everything

//- testing without DI is so retarded...
//- no UI customization by swapping "templates"?
//- binding events to a "proper" context is pain in a neck...