import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
function Cards() {


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

    </div>
  )
}

export default Cards