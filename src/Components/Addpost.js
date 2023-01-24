import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import { add_post } from "../redux/Action/action";

const Addpost = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [namee, setNamee] = useState("");
  const [video, setVideo] = useState("");
  const handlePost = () => {
    dispatch(
      add_post({ title, body, createdAt, imageUrl, namee, video }),
      handleClose()
    );
  };
  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        Add Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Addpost;
