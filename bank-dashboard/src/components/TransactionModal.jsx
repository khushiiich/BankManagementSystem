import React, { useState } from 'react';

const TransactionModal = ({ isOpen, onClose, account, onConfirm, type }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const isDeposit = type === 'deposit';
  const title = isDeposit ? 'Deposit Money' : 'Withdraw Money';
  const buttonColor = isDeposit ? 'green' : 'blue';
  const buttonIcon = isDeposit ? '💰' : '💸';

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || parseFloat(value) >= 0) {
      setAmount(value);
      setError('');
    }
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    
    const amountValue = parseFloat(amount);
    
    if (!amount || amountValue <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    
    if (!isDeposit && amountValue > account.balance) {
      setError('Insufficient Balance');
      return;
    }
    
    onConfirm(account.id, amountValue);
  };

  const handleClose = () => {
    setAmount('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-sm mx-4">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {buttonIcon} {title}
          </h2>
          
          {/* Account Info */}
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Account: <span className="font-medium text-gray-900 dark:text-white">{account.accountHolderName}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Current Balance: <span className="font-medium text-green-600 dark:text-green-400">
                ₹{account.balance.toLocaleString('en-IN')}
              </span>
            </p>
          </div>

          <form onSubmit={validateAndSubmit} className="space-y-4">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={handleChange}
                min="0"
                step="0.01"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  error ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter amount"
              />
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 px-4 py-2 bg-${buttonColor}-600 hover:bg-${buttonColor}-700 text-white rounded-md transition-colors duration-200`}
              >
                {title}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
