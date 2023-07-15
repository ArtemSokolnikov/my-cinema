import React from "react";
import { Card, Col } from "react-bootstrap";
import { PropsBuyCard } from "../../types";
import { MovieCardContainer } from "./styles/BuyCardStyles";

const BuyCard = ({ ticket }: PropsBuyCard) => {

  return (
    <MovieCardContainer>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{ticket.title}</Card.Title>
            <Card.Text>{ticket.date}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </MovieCardContainer>
  );
};

export default BuyCard;
