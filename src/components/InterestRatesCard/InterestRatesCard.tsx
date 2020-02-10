import React from 'react';

import { InterestRate } from "../../model/input";

import { Card, Form } from 'react-bootstrap';
type InterestRatesCardProps = {

  rates: InterestRate[]
}

const InterestRatesCard = ({rates}: InterestRatesCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Current Interest Rate</Form.Label>
            <Form.Control as='input' disabled />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}
