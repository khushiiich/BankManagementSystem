import { useEffect, useState } from "react";
import {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  depositMoney,
  withdrawMoney,
} from "../services/api";

import AccountCard from "../components/AccountCard";
import AccountModal from "../components/AccountModal";
import TransactionModal from "../components/TransactionModal";
import ConfirmationDialog from "../components/ConfirmationDialog";

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Modal states
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [transactionType, setTransactionType] = useState('deposit');
  const [editingAccount, setEditingAccount] = useState(null);

  const loadAccounts = async () => {
    try {
      setLoading(true);
      const res = await getAccounts();
      setAccounts(res.data || []);
      setError('');
    } catch (err) {
      setError('Failed to load accounts. Please try again.');
      console.error('Error loading accounts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAccounts();
  }, []);

  const handleCreateAccount = () => {
    setEditingAccount(null);
    setShowAccountModal(true);
  };

  const handleEditAccount = (account) => {
    setEditingAccount(account);
    setShowAccountModal(true);
  };

  const handleSaveAccount = async (formData) => {
    try {
      if (editingAccount) {
        await updateAccount(editingAccount.id, formData);
        setError('Account updated successfully.');
      } else {
        await createAccount(formData);
        setError('Account created successfully.');
      }
      setShowAccountModal(false);
      loadAccounts();
    } catch (err) {
      setError('Failed to save account. Please try again.');
      console.error('Error saving account:', err);
    }
  };

  const handleDeleteClick = (account) => {
    setSelectedAccount(account);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAccount(selectedAccount.id);
      setShowConfirmDialog(false);
      setSelectedAccount(null);
      setError('Account deleted successfully.');
      loadAccounts();
    } catch (err) {
      setError('Failed to delete account. Please try again.');
      console.error('Error deleting account:', err);
    }
  };

  const handleDepositClick = (account) => {
    setSelectedAccount(account);
    setTransactionType('deposit');
    setShowTransactionModal(true);
  };

  const handleWithdrawClick = (account) => {
    setSelectedAccount(account);
    setTransactionType('withdraw');
    setShowTransactionModal(true);
  };

  const handleConfirmTransaction = async (accountId, amount) => {
    try {
      if (transactionType === 'deposit') {
        await depositMoney(accountId, amount);
      } else {
        await withdrawMoney(accountId, amount);
      }
      setShowTransactionModal(false);
      setSelectedAccount(null);
      loadAccounts();
    } catch (err) {
      setError(`Failed to ${transactionType} money. Please try again.`);
      console.error(`Error ${transactionType}:`, err);
    }
  };

  const totalBalance = accounts.reduce((sum, account) => sum + (account.balance || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Accounts
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage customer bank accounts and transactions
              </p>
            </div>
            <button
              onClick={handleCreateAccount}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-200 flex items-center space-x-2"
            >
              <span>➕</span>
              <span>Add Account</span>
            </button>
          </div>
        </div>

        {/* Success Message */}
        {error && error.includes('success') && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md">
            <p className="text-green-600 dark:text-green-400">{error}</p>
          </div>
        )}

        {/* Error Message */}
        {error && !error.includes('success') && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-md">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Accounts</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{accounts.length}</p>
              </div>
              <div className="text-3xl">🏦</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Balance</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ₹{totalBalance.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Active Status</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">Online</p>
              </div>
              <div className="text-3xl">🟢</div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-2xl mb-4">⏳</div>
            <p className="text-gray-600 dark:text-gray-400">Loading accounts...</p>
          </div>
        ) : (
          /* Accounts Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.length > 0 ? (
              accounts.map((account) => (
                <AccountCard
                  key={account.id}
                  account={account}
                  onEdit={handleEditAccount}
                  onDelete={handleDeleteClick}
                  onDeposit={handleDepositClick}
                  onWithdraw={handleWithdrawClick}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No accounts found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Create your first account to get started
                </p>
                <button
                  onClick={handleCreateAccount}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        )}

        {/* Modals */}
        <AccountModal
          isOpen={showAccountModal}
          onClose={() => setShowAccountModal(false)}
          account={editingAccount}
          onSave={handleSaveAccount}
        />

        <TransactionModal
          isOpen={showTransactionModal}
          onClose={() => setShowTransactionModal(false)}
          account={selectedAccount}
          onConfirm={handleConfirmTransaction}
          type={transactionType}
        />

        <ConfirmationDialog
          isOpen={showConfirmDialog}
          onClose={() => setShowConfirmDialog(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Account"
          message={`Are you sure you want to delete the account for ${selectedAccount?.accountHolderName}?`}
        />
      </div>
    </div>
  );
}

export default Accounts;
