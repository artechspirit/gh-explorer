# 🚀 GitHub Repositories Explorer

A sleek, responsive web application built with React + TypeScript to explore GitHub users and their public repositories. Search for up to 5 users by username and expand to view their repositories — all with a clean UI and great UX.

> ✅ Created for a React developer recruitment task
> ✅ Live Demo available (see below)

---

## 🔗 Live Demo

🌍 [https://artechspirit.github.io/gh-explorer](https://your-github-username.github.io/github-explorer)

---

## 📸 Screenshots

| Search View | Expanded User |
|-------------|----------------|
| ![](./screenshots/search.png) | ![](./screenshots/repos.png) |

---

## 🎯 Features

- 🔎 Search GitHub users by username
- ⬇️ Show top 5 matching results
- 📦 Expand user to reveal public repositories
- 🌟 Display repo name, description & star count
- 🧼 Clean UI with **shadcn/ui**
- 💬 All text in English
- 📱 Fully responsive design (mobile-friendly)
- 🔁 Centralized state with **Redux Toolkit**
- ⚡ API integration with **RTK Query**
- 🧪 Fully tested with **Vitest** & **React Testing Library**
- 📦 Public repository & deployed via GitHub Pages

---

## 🧱 Tech Stack

| Layer      | Stack                                |
|------------|--------------------------------------|
| Frontend   | React, TypeScript, Vite              |
| Styling    | Tailwind CSS, shadcn/ui              |
| State      | Redux Toolkit, RTK Query             |
| Testing    | Vitest, Testing Library              |
| Deployment | GitHub Pages                         |

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-explorer.git
cd github-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development

```bash
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

## ✅ Running Tests

Run all tests:

```bash
npm run test
```

With coverage report:

```bash
npm run test -- --coverage
```

---

## 🚀 Deployment (GitHub Pages)

1. Update `vite.config.ts`:

```ts
export default defineConfig({
  base: "/gh-explorer/",
  plugins: [react()],
})
```

2. Add the deploy script to `package.json`:

```json
"scripts": {
  "build": "vite build",
  "deploy": "vite build && gh-pages -d dist"
}
```

3. Deploy:

```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 📂 Folder Structure

```
src/
├── components/         # UI components (SearchBar, UserCard)
├── features/           # Redux slice for search state
├── services/           # GitHub API via RTK Query
├── test/              # MSW and test setup
├── hooks.ts            # Typed Redux hooks
├── store.ts            # Redux store
├── App.tsx             # Root component
└── main.tsx            # App entrypoint
```

---

## ✍️ Author

**Beta Priyoko**  
📧 artechspirit@gmail.com  
🔗 [https://github.com/artechspirit](https://github.com/artechspirit)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE)

---

## 🙏 Acknowledgements

- [GitHub REST API](https://docs.github.com/en/rest)
- [shadcn/ui](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [MSW](https://mswjs.io/)
- [Vitest](https://vitest.dev/)
