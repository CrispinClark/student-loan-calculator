import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';

type InitialValuesSegmentProps = {
  currentLoanRemaining: number,
  currentSalary: number,
  monthsRemaining: number
}

const InitialValuesSegment = ({
  currentLoanRemaining,
  currentSalary,
  monthsRemaining
}: InitialValuesSegmentProps) => {
  return (
    <Form>
      <Form.Field>
        <label>Current student loan</label>
        <Input labelPosition='left' type='number' label='£'>
          {currentLoanRemaining}
        </Input>
      </Form.Field>
    </Form>
  )
};

export default InitialValuesSegment;
