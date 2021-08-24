import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Cards = (props) => {
  const { title, date, amount, onDeleteBtnClicked, detail } = props;
  return (
    <>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>
            {date} {amount}
          </Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Button variant="primary" onClick={onDeleteBtnClicked}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
