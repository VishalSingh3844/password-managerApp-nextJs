# 🗂️ TODO – Password Manager App

Organized issue list based on feature areas for streamlined development and tracking.

---

## 🔐 Authentication

- [] Setup NextAuth.js with Credentials Provider
- [] Implement Email & Password Registration
- [] Implement Secure Login with Session Management
- [] Add Logout Functionality
- [] Setup Email Verification after Registration
- [] Integrate Two-Factor Authentication using TOTP (`speakeasy`)
- [ ] Add Password Reset / Forgot Password Flow

---

## 🧠 Core Features

- [] Add New Password Entry
- [] View Password Entry (Masked)
- [] Edit Password Entry
- [] Delete Password Entry
- [] Copy Password to Clipboard (Secure Copy)
- [] Add Tagging and Categorization for Passwords
- [] Implement Search and Filter by Website, Username, and Tags

---

## 📊 Dashboard & UI

- [] Build Responsive Dashboard Layout
- [] Display Overview Statistics (Total Passwords, Recent Updates)
- [] Add Sidebar Navigation (Passwords, Settings, Help)
- [] Optimize UI for Mobile Devices

---

## 🎨 UI / UX Enhancements

- [] Add Dark/Light Mode Toggle
- [] Build Secure Password Generator
- [ ] Add Password Strength Indicator
- [ ] Implement Auto-Lock Vault After Inactivity
- [ ] Add Animations and Microinteractions for Better UX

---

## 🛡️ Security Features

- [] Encrypt Passwords & Notes using AES-256
- [] Use Environment Variables for Encryption Keys
- [] Enforce HTTPS and Secure Cookies
- [ ] Add Master Password Prompt Before Revealing a Password
- [ ] Detect Suspicious Logins (New Device/IP)
- [ ] Log User Activity (Logins, Edits, Deletions)

---

## 🧩 Backend & API

- [] Setup RESTful API Routes using Next.js
- [] Setup Prisma ORM
- [] Connect Prisma to Neon PostgreSQL
- [] Add Rate Limiting and Brute-force Attack Protection
- [] (Optional) Implement Role-based Middleware

---

## ⚙️ Settings Panel

- [] Allow Profile Update (Email, Username)
- [ ] Allow Master Password Update
- [ ] Provide Encryption Settings in UI
- [ ] Theme and Layout Customization

---

## 📦 Import / Export

- [ ] Allow Export of Passwords as JSON
- [ ] Allow Import of JSON Data into Vault
- [ ] Build UI for Manual Backup and Restore
