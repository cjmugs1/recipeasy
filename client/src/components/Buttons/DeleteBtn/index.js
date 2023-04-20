// component for displaying delete button on saved recipes or any other component that needs a delete button

import React from "react";


function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
