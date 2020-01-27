export type Month = {
  number: number,
  interestRate: number,
  income: number,
  extraLump?: number,
  extraRecurring?: number,
  loanRemaining: number
}

export type ExpectedSalary = {
  month: number,
  amount: number
}

export type RecurringPayment = {
  startMonth: number,
  endMonth: number,
  amount: number
}

export type LumpPayment = {
  date: number,
  amount: number
}

export type InputDataState = {
  initialLoanRemaining: number,
  monthsRemaining: number,
  initialSalary: number,
  expectedSalaries: ExpectedSalary[],
  recurringExtraPayments: RecurringPayment[],
  lumpExtraPayments: LumpPayment[]
}

export const dummyInputState: InputDataState = {
  initialLoanRemaining: 55000,
  monthsRemaining: 320,
  initialSalary: 60000,
  expectedSalaries: [
    {
      month: 12,
      amount: 65000
    }
  ],
  recurringExtraPayments: [
    {
      startMonth: 0,
      endMonth: 320,
      amount: 300.00
    }
  ],
  lumpExtraPayments: [
    {
      date: 0,
      amount: 0
    }
  ]
}
