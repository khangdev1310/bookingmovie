import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <iframe
            src="https://www.youtube.com/embed/SGlBQR-ftVI"
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

  const Video = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button onClick={() => setModalShow(true)}></Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  };


export default Video;