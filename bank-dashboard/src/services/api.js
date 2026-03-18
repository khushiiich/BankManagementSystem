import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/accounts",
});

export const getAccounts = () => API.get("/");

export const createAccount = (data) => API.post("/", data);

export const updateAccount = (id, data) => API.put(`/${id}`, data);

export const deleteAccount = (id) => API.delete(`/${id}`);

export const depositMoney = (id, amount) =>
  API.put(`/deposit/${id}?amount=${amount}`);

export const withdrawMoney = (id, amount) =>
  API.put(`/withdraw/${id}?amount=${amount}`);