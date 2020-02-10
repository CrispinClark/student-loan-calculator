export type Month = {
  number: number,
  interestRate: number,
  income: number,
  extraLump?: number,
  extraRecurring?: number,
  loanRemaining: number
}

export type InterestRate = {
  id: string,
  fromMonth: number,
  rate: number
}

export type ExpectedSalary = {
  id: string,
  month: number,
  amount: number
}

export type RecurringPayment = {
  id: string,
  startMonth: number,
  endMonth: number,
  amount: number
}

export type LumpPayment = {
  id: string,
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
      id: 'exSal_1',
      month: 12,
      amount: 65000
    }
  ],
  recurringExtraPayments: [
    {
      id: 'extraMonthly_1',
      startMonth: 0,
      endMonth: 320,
      amount: 300.00
    }
  ],
  lumpExtraPayments: [
    {
      id: 'extraLump_1',
      date: 0,
      amount: 0
    }
  ]
}
