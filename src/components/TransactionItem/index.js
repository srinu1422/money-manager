// Write your code here

import './index.css'

const TransactionItems = props => {
  const {transactionDetails, deletetransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteButton = () => {
    deletetransaction(id)
  }

  return (
    <li className="transactionList-container">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItems
