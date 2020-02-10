import React from "react";

import { Card, Form } from 'react-bootstrap';
import { DateTimePicker } from 'react-widgets';

import MoneyInputContainer from '../MoneyInputContainer';

import Moment from 'moment'
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import './InitialStateCard.css'

type InitialStateCardProps = {
  currentSalary: number,
  currentLoanRemaining: number,
  repaymentStartDate: Date,

  onCurrentSalaryChanged: (newSalary: number) => void
  onCurrentLoanChanged: (newLoan: number) => void
  onRepaymentStartDateChanged: (newStartDate: Date) => void
}

const InitialStateCard = ({
  currentSalary,
  currentLoanRemaining,
  repaymentStartDate,
  onCurrentSalaryChanged,
  onCurrentLoanChanged,
  onRepaymentStartDateChanged
}: InitialStateCardProps) => {
  function handleCurrentSalaryChanged(e: React.FormEvent<HTMLInputElement>) {
    onCurrentSalaryChanged(parseFloat(e.currentTarget.value))
  }

  function handleCurrentLoanChanged(e: React.FormEvent<HTMLInputElement>) {
    onCurrentLoanChanged(parseFloat(e.currentTarget.value))
  }

  function handleRepaymentStartDateChanged(date: Date | undefined) {
    if (date) {
      onRepaymentStartDateChanged(date)
    }
  }

  Moment.locale('en-GB');
  momentLocalizer();

  const monthFormat = moment().format('MM/YY')

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group controlId='formInitialStateCurrentLoan'>
            <MoneyInputContainer
              label='Current Loan Remaining'
              value={currentLoanRemaining}
              onChange={handleCurrentLoanChanged}
            />
          </Form.Group>

          <Form.Group controlId='formInitialStateCurrentSalary'>
            <MoneyInputContainer
              label='Current Salary'
              value={currentSalary}
              onChange={handleCurrentSalaryChanged}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Initial Repayment Date</Form.Label>
            <div className='input-group'>
              <DateTimePicker
                format='MM/YY'
                onChange={handleRepaymentStartDateChanged}
                value={repaymentStartDate}
                time={false}
              />
            </div>
          </Form.Group>

        </Form>
      </Card.Body>
    </Card>
  )
}

export default InitialStateCard;
