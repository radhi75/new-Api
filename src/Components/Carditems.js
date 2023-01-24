import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { get_api } from "../redux/Action/action";
import EditCard from "./EditCard";
const Carditems = ({ el }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  function Delete(el) {
    axios
      .delete("http://192.168.3.31:3333/api/deletepost/" + el.id)
      .then((res) => {
        if (res.status === 202) {
          setTimeout(() => {
            dispatch(get_api());
          }, 1000);
        }
      });
    handleClose();
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.body}</Card.Text>
          <Button variant="danger" onClick={handleShow}>
            delete
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => Delete(el)}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
          <EditCard el={el} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carditems;
