import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {items} from './itemVideo';
const MyVerticallyCenteredModal = (props) => {
  console.log(items[props.keyPhim]);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <iframe
            // src={props.trailerPhim}
            src = {items[props.keyPhim].trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
          
        </Modal.Body>
      </Modal>
    );
  };

  const Video = ({showFrame,trailer,keyIndex}) => {
    const [modalShow, setModalShow] = React.useState(true);
    console.log(keyIndex);
    return (
      <>
        <MyVerticallyCenteredModal
          show={showFrame}
          onHide={() => setModalShow(false)}
          trailerPhim={trailer}
          keyPhim = {keyIndex}
        />
      </>
    );
  };


export default Video;