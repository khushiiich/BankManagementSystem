# BankManagementSystem
Bank Management System (Frontend + Backend)


🚀 Overview

This is a Full Stack Bank Management System built using:

Frontend: React (Vite)

Backend: Spring Boot (REST API)

Database: PostgreSQL

The application allows users to manage bank accounts including:

Create account

View all accounts

Update account

Delete account

Deposit money

Withdraw money (with validation)


🏗️ Architecture
React (Frontend)
        ↓
Axios API Calls
        ↓
Spring Boot (Backend REST API)
        ↓
Service Layer (Business Logic)
        ↓
Repository Layer (JPA)
        ↓
PostgreSQL Database


⚙️ Tech Stack
🔹 Frontend : React (Vite), Axios, React Router, Context API

🔹 Backend : Spring Boot, Spring Web, Spring Data JPA, Hibernate

🔹 Database : PostgreSQL


📂 Project Structure
🔹 Backend (Spring Boot)
com.debugshala
│
├── controller
│      BankAccountController
│
├── service
│      BankAccountService
│
├── repository
│      BankAccountRepository
│
├── dto
│      BankAccountDTO
│
├── entity
│      BankAccount
│
└── TaskBankManagementSystemApplication


🔹 Frontend (React)
bank-dashboard
│
├── components
│      Navbar.jsx
│      Sidebar.jsx
│      AccountCard.jsx
│      AccountForm.jsx
│      Profile.jsx
│
├── pages
│      Dashboard.jsx
│
├── services
│      api.js
│
├── context
│      ThemeContext.jsx
│
├── App.jsx
└── main.jsx

How It Works -
When a user performs any action on the UI (like creating an account), the request is sent from React to the Spring Boot backend using Axios. The controller receives the request, passes it to the service layer for processing, and then the repository saves or retrieves data from the PostgreSQL database. The response is sent back to the frontend and displayed on the dashboard.
