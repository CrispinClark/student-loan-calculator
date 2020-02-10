import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

type MoneyInputContainerProps = {
  label: string;
  value: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const MoneyInputContainer = ({
  label,
  value,
  onChange
}: MoneyInputContainerProps) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>£</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="number"
          value={value.toFixed(2).toString()}
          onChange={onChange}
          step={0.01}
        />
      </InputGroup>
    </>
  )
}

export default MoneyInputContainer;
