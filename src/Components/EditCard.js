import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import axios from "axios";
import { get_api } from "../redux/Action/action";
const EditCard = ({ el }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(el.body);
  const [createdAt, setCreatedAt] = useState(el.createdAt);
  const [imageUrl, setImageUrl] = useState(el.imageUrl);
  const [namee, setNamee] = useState(el.namee);
  const [video, setVideo] = useState(el.video);
  // put methode nb that you need to send the id and data

  async function Edit() {
    // console.log(data);
   await axios
      .put("http://192.168.3.31:3333/api/updatepost/" + el.id, {
        title: title,
        body: body,
        createdAt: createdAt,
        imageUrl: imageUrl,
        namee: namee,
        video: video,
      })
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          setTimeout(() => {
            dispatch(get_api());
          }, 1000);
        }
      });
    handleClose();
  }
  const handleEdit = () => {
    dispatch(
      Edit(el.id, { title, body, createdAt, imageUrl, namee, video }),
      handleClose()
    );
  };
  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        edit
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
          <Button variant="primary" onClick={handleEdit}>
            Save change
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditCard;
