import { useState } from "react";

function AccountForm({ onSubmit }) {
  const [form, setForm] = useState({
    accountHolderName: "",
    accountNumber: "",
    accountType: "",
    branch: "",
    balance: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="accountHolderName"
        placeholder="Holder Name"
        onChange={handleChange}
      />

      <input
        name="accountNumber"
        placeholder="Account Number"
        onChange={handleChange}
      />

      <input
        name="accountType"
        placeholder="Account Type"
        onChange={handleChange}
      />

      <input
        name="branch"
        placeholder="Branch"
        onChange={handleChange}
      />

      <input
        name="balance"
        placeholder="Initial Balance"
        onChange={handleChange}
      />

      <button>Create Account</button>
    </form>
  );
}

export default AccountForm;