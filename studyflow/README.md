# StudyFlow — Academic Task Manager

> CSCI390 Web Programming — Project Phase 2 | Spring 2025–2026

## Project Description

**StudyFlow** is a responsive, student-focused academic task manager built with React JS and Tailwind CSS. It solves the real-world problem of students struggling to track deadlines and assignments across multiple courses. The app features a clean, modern UI with four fully responsive pages and an interactive task management system.

### Key Features
- Task Manager — Add, complete, and delete tasks by course and priority
- Deadline Tracker — Set due dates and filter by status
- Progress Bar — Visual indicator of task completion
- Responsive Design — Optimized for desktop, tablet, and mobile
- FAQ Accordion — Interactive collapsible Q&A
- Contact Form — Validated form with success state

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, stats, testimonials, CTA |
| Features | `/features` | Feature cards + live interactive task manager |
| About | `/about` | Problem/solution, timeline, tech stack, team |
| Contact | `/contact` | Contact form, FAQ accordion, info cards |

---

## Tech Stack

- **React JS** — Component-based frontend framework
- **Tailwind CSS v3** — Utility-first CSS styling
- **React Router DOM** — Client-side routing
- **Google Fonts** — Playfair Display + DM Sans
- **GitHub Pages** — Hosting and deployment
- **Git** — Version control

---

## Setup Instructions

### Prerequisites
Node.js v18+ and npm

### Install and Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/studyflow.git
cd studyflow
npm install
npm start
```

Opens at http://localhost:3000

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Add to package.json: `"homepage": "https://YOUR_USERNAME.github.io/studyflow"`
2. Run: `npm install --save-dev gh-pages`
3. Add scripts: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

---

## Project Structure

```
studyflow/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Group Contribution Statement

| Member | Role | Contribution |
|--------|------|-------------|
| [Name 1] | Lead Developer | Architecture, routing, Home & Features pages |
| [Name 2] | Frontend Developer | About & Contact pages, responsive layout |
| [Name 3] | UI/UX Designer | Design system, Tailwind config, styling |

---

## Academic Integrity

Original work created for CSCI390, Spring 2025-2026. No pre-built templates were used.
