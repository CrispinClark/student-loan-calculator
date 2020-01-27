import React from "react";
import { InputDataState, dummyInputState } from "../../model/input";
import { Grid, Step } from 'semantic-ui-react';
import InitialValuesSegment from "./components/InitialValuesSegment";

export enum InputStep {
  CURRENT,
  EXPECTED_SAL,
  EXTRA_PAYMENTS
}

type UserInputFlowState = {
  ui: {
    activeStep: InputStep
  },
  data: InputDataState
}

class UserInputFlow extends React.Component<{}, UserInputFlowState> {
  state = {
    ui: {
      activeStep: InputStep.CURRENT
    },
    data: dummyInputState
  }

  setActiveStep = (step: InputStep) => {
    this.setState({
      ...this.state,
      ui: {
        activeStep: step
      }
    })
  }

  render() {
    const {
      ui: {
        activeStep
      },
      data: {
        initialSalary,
        initialLoanRemaining,
        monthsRemaining
      }
    } = this.state

    const renderMainPane = () => {
      switch (this.state.ui.activeStep) {
        case InputStep.CURRENT:
          return <InitialValuesSegment
            currentSalary={initialSalary}
            currentLoanRemaining={initialLoanRemaining}
            monthsRemaining={monthsRemaining}
          />
        default:
          return <>Ho</>
      }
    }

    return (
      <Grid padded centered stretched>
        <Grid.Row>
          <Step.Group ordered>
            <Step
              link
              active={activeStep==InputStep.CURRENT}
              onClick={() => this.setActiveStep(InputStep.CURRENT)}
            >
              <Step.Content>
                <Step.Title>Current Status</Step.Title>
              </Step.Content>
            </Step>
            <Step
              link
              active={activeStep==InputStep.EXPECTED_SAL}
              onClick={() => this.setActiveStep(InputStep.EXPECTED_SAL)}
            >
              <Step.Content>
                <Step.Title>Expected Salary</Step.Title>
              </Step.Content>
            </Step>
            <Step
              link
              active={activeStep==InputStep.EXTRA_PAYMENTS}
              onClick={() => this.setActiveStep(InputStep.EXTRA_PAYMENTS)}
            >
              <Step.Content>
                <Step.Title>Extra Payments</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        </Grid.Row>
        <Grid.Row>
          {renderMainPane()}
        </Grid.Row>
      </Grid>
    )
  }
}

export default UserInputFlow;
