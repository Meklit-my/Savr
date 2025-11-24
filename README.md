# 📊 Savr – Smart Expense & Budget Tracking (Front-End)

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Technologies](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Overview  
Savr is a responsive, student-friendly budgeting and personal finance application designed to help users track income, expenses, goals, and spending patterns—directly from the browser.  
Built entirely using **HTML, CSS, and JavaScript**, the platform demonstrates scalable front-end architecture, modular UI design, and future-ready integration points for server-side and AI upgrades.

The solution is engineered to support seamless expansion into a full stack system with persistent data, authentication layers, real-time insights, and intelligent recommendations in future phases.

---

## 🧭 Business Value  
University students often struggle with financial literacy and tracking everyday spending. Savr bridges that gap by offering:

- A structured and intuitive dashboard to visualize financial health  
- Fast and offline-friendly expense tracking using browser storage  
- A clean user experience powered by component-based architecture  
- A solid foundation for future enterprise-level enhancements

---

## 🚀 Core Features

### 🌐 Multi-Page Experience
- **Landing Page** – Clear product value and calls to action  
- **About Us** – Mission, vision, and contributor profiles  
- **How It Works** – Step-by-step explanation of tracking and analysis  
- **Register & Login** – Structured authentication forms  
- **Dashboard**  
  - Summary cards (Income, Expense, Total Balance)  
  - Recent transactions  
  - Budget progress visualization  
  - Chart placeholders  
  - Alert banner support  
- **Add Transaction Page** – Form to submit income and expense details  
- **Goals Page** – Savings goals, progress tracking, and updates

### 🧩 Component-Based UI
Reusable components including:

- Header  
- Footer  
- Alert Banner  
- Dashboard widgets (cards, charts, lists, progress)

### 💾 Front-End Data Storage
- Utilizes `localStorage` for temporary persistence  
- Modular JavaScript files manage calculation and UI rendering

---

## 🏗️ System Structure

Frontend
├── index.html
├── about.html
├── how-it-works.html
├── dashboard.html
├── login.html
├── register.html
├── add-transaction.html
├── goals.html
├── css/
│ ├── style.css
│ ├── dashboard.css
│ ├── forms.css
│ └── responsive.css
├── js/
│ ├── app.js
│ ├── budgetCalculator.js
│ ├── chartRenderer.js
│ ├── uiController.js
│ └── alertSystem.js
├── assets/
│ ├── icons/
│ └── images/
├── components/
│ ├── dashboard/
│ │ ├── summary-cards.html
│ │ ├── expense-chart.html
│ │ ├── transaction-list.html
│ │ └── budget-progress.html
│ └── ui/
│ ├── header.html
│ ├── footer.html
│ └── alert-banner.html
└── lib/
└── utils.js



---

## 🧪 Installation & Setup

### ✔ Requirements
- Any modern web browser (Chrome, Firefox, Edge, Safari)

### 📥 Setup Steps
1. Clone or download the repository:
   ```bash
   git clone <repo-link>
Open the project folder.

Launch index.html in the browser.

No server or backend required for this phase.

▶️ How to Run

Simply open:

index.html


All navigation works through built HTML links, and scripts load automatically through ES6 modules.

📚 Usage

Navigate to the Login or Register page to simulate account access

Open the Dashboard to view:

Total balance

Spending insights

Recent activity

Add income or expense entries through the Add Transaction page

Track long-term objectives via the Goals page

All transaction and goal data is stored temporarily using localStorage

📸 Screenshots (Placeholders)
[ Dashboard Overview Screenshot ]
[ Transaction Entry Form Screenshot ]
[ Goals Tracking Screenshot ]


Replace the placeholders with actual screenshots once available.

🔮 Future Enhancements (Phase II Roadmap)

Backend using PHP + MySQL

Real authentication and session management

Persistent data storage

Automated email alerts

AI-powered spending insights

Dynamic Chart.js visualizations

Real-time dashboards and notifications

🧑‍🤝‍🧑 Team Contributions
Member	Responsibility
Lalisa Tamene	Home page, Header, Footer
Leoul Zerihun	About Us, How It Works
Meklit Yemane	Login & Register pages
Nebiyu Yalemgeta	Dashboard design
Negasi Berihu	Add Transaction module
Robel Wondwossen	Goals page & Alert Banner component
🤝 Contributing

Fork the repository

Create a new feature branch

git checkout -b feature/your-feature


Commit improvements

Open a pull request

Clean, maintainable structure and DRY code practices are encouraged.

📄 License

This project is released under the MIT License.

⭐ Show Your Support

If this project inspires your next innovative solution, drop a ⭐ on the repository!
