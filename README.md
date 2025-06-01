# 🔐 Password Manager Web Application

A secure and modern password manager built with **Next.js**, **Tailwind CSS**, **Prisma**, and **NextAuth.js**, designed to store, manage, and organize passwords and sensitive information.

## 🚀 Tech Stack

| Layer         | Technology                                 |
|--------------|---------------------------------------------|
| **Frontend**  | Next.js, Tailwind CSS                       |
| **Auth**      | NextAuth.js (Credentials Provider)         |
| **ORM**       | Prisma                                     |
| **Database**  | Neon PostgreSQL                            |
| **Backend**   | Next.js API Routes                         |
| **Encryption**| Node.js `crypto` (AES-GCM or similar)      |
| **Hosting**   | Vercel                                      |

---

## 🧩 Features

### 🔐 Authentication
- User registration with email & password
- Login with secure credentials (NextAuth.js)
- Logout and session handling
- Email verification post-registration
- Two-Factor Authentication (2FA) using TOTP

### 📊 Dashboard
- Overview: Total passwords, recent updates
- Sidebar Navigation: Passwords, Settings, Help
- Fully responsive layout for mobile & desktop

### 🔑 Password Management
- Add, view, edit, and delete password entries
- Copy to clipboard without exposing the password
- Tagging and categorization (e.g. Work, Personal)
- Search and filter by website, username, tags

### 🛡️ Security Features
- Master Password prompt before revealing passwords
- Password strength indicator
- AES-256 encrypted password & notes field
- Auto-lock vault after inactivity

### 🌗 User Experience
- Dark/Light mode toggle
- Secure password generator
- Import/Export passwords as JSON

### ⚙️ Settings & Preferences
- Profile and email update
- Master password and encryption settings
- Theme and layout customization
- Manual backup & restore (no cloud sync)

---

## 🛠️ Backend & API

- RESTful API routes via Next.js
- Prisma ORM to connect to Neon PostgreSQL
- Passwords & notes encrypted with AES-256 before DB storage

### 📁 Database Schema (Neon DB)
- **Users Table**: Stores user credentials
- **Passwords Table**: Encrypted password and notes linked to users
- **Sessions Table**: Managed by NextAuth.js
- **Accounts Table**: For future OAuth integrations

---

## 🔐 Five-Layer Security Architecture

### Layer 1: Authentication & Authorization
- Email/password login
- 2FA using TOTP (`speakeasy`)
- Session management (JWT or DB)
- Rate limiting for brute-force prevention
- Master password verification

### Layer 2: Data Encryption
- AES-256 encryption at rest (Node.js `crypto`)
- Encryption keys via environment variables
- Client/server-side encryption before saving

### Layer 3: Transport Layer Security
- Enforced HTTPS
- Secure cookies (`secure`, `httpOnly`, `sameSite`)

### Layer 4: Database Security
- IP whitelisting for Neon DB
- Strong, unique DB credentials
- Backup encryption
- Prisma query audits

### Layer 5: User Behavior & Monitoring
- Activity logs for logins, edits, deletions
- Auto-lock after inactivity
- Suspicious login alerts (e.g. new location, multiple failures)

---

## 📦 Action Plan

- [x] Setup authentication via NextAuth.js (credentials provider)
- [x] Implement 2FA using `speakeasy`
- [x] AES encryption/decryption functions using Node.js `crypto`
- [x] Configure HTTPS and secure cookies
- [x] Apply IP whitelisting and review Prisma access
- [x] Add middleware for activity logging and auto-lock mechanism

---

## 🧪 Testing & Deployment


- **CI/CD**: GitHub Actions for build and deployment
- **Hosting**: Vercel (or optionally self-hosted server)



