import React from 'react';

function AccountCard({ account, onEdit, onDelete, onDeposit, onWithdraw }) {
  const formatBalance = (balance) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(balance);
  };

  const getAccountTypeColor = (type) => {
    const colors = {
      'Savings': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Current': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Fixed Deposit': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Recurring Deposit': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      'saving': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Fixed Deposit': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {account.accountHolderName || 'Account Holder'}
            </h3>
            <div className="mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getAccountTypeColor(account.accountType)}`}>
                {account.accountType || 'Savings'}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium mr-2">Account Holder:</span>
                <span>{account.accountHolderName || 'N/A'}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium mr-2">Account No:</span>
                <span>{account.accountNumber || 'N/A'}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium mr-2">Type:</span>
                <span>{account.accountType || 'N/A'}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium mr-2">Branch:</span>
                <span>{account.branch || 'N/A'}</span>
              </div>
            </div>
          </div>
          <div className="text-right ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Balance</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formatBalance(account.balance || 0)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Deposit and Withdraw Buttons */}
          <div className="flex gap-2 flex-1">
            <button
              onClick={() => onDeposit(account)}
              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              💰 Deposit
            </button>
            <button
              onClick={() => onWithdraw(account)}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              💸 Withdraw
            </button>
          </div>
          
          {/* Edit and Delete Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(account)}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => onDelete(account)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;