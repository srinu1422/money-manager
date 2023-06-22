// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expensesAmount, incomeAmount, balanceAmount} = props
  return (
    <div className="moneydetails-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo"
        />
        <div className="container">
          <p className="heading">Your Balance </p>
          <p className="amount" data-testid="balanceAmount">
            {' '}
            Rs {balanceAmount}{' '}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="logo"
        />
        <div className="container">
          <p className="heading"> Your Income </p>
          <p className="amount" data-testid="incomeAmount">
            {' '}
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo"
        />
        <div className="container">
          <p className="heading"> Your Expenses </p>
          <p className="amount" data-testid="expensesAmount">
            {' '}
            Rs {expensesAmount}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
