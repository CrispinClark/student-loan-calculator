import React, { useState } from 'react';
import InitialStateCard from '../InitialStateCard';
import { Col, Container, Row } from 'react-bootstrap';

const RepaymentCalculator = ({}) => {
  const [currentSalary, setCurrentSalary] = useState<number>(60000.00);
  const [currentLoanRemaining, setCurrentLoanRemaining] = useState(55168.86);
  const [repaymentStartDate, setRepaymentStartDate] = useState(new Date(2016, 9));

  return (
    <Container>
      <Row>
        <Col xs={4}>
          <InitialStateCard
            currentSalary={currentSalary}
            currentLoanRemaining={currentLoanRemaining}
            repaymentStartDate={repaymentStartDate}
            onCurrentLoanChanged={setCurrentLoanRemaining}
            onCurrentSalaryChanged={setCurrentSalary}
            onRepaymentStartDateChanged={setRepaymentStartDate}
          />
        </Col>
        <Col xs={8}/>
      </Row>
    </Container>
  )
};

export default RepaymentCalculator;
