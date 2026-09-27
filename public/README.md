# 🏋️ FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. FitLog lets users browse a curated library of twelve essential lifts, save them for later, and build a focused daily workout plan — all in a clean, modern, and fully responsive interface.

---

## 📖 Description

FitLog is a personal workout planner that helps you train with intent. It features a dynamic library of exercises loaded from a JSON API, a detailed view for each lift, and a personalized "My Plan" page where you can manage your daily routine.

The app uses **Next.js App Router**, **React Context** for global state management, and **Tailwind CSS** for styling. It also uses **localStorage** to persist your plan and saved items across page reloads.

---

## 🛠️ Technologies Used

| Technology                  | Purpose                                                              |
| --------------------------- | -------------------------------------------------------------------- |
| **Next.js 15 (App Router)** | Framework, file-based routing, server components                     |
| **React 19**                | UI library, component logic, hooks (useState, useEffect, useContext) |
| **TypeScript**              | Static typing for safety and better developer experience             |
| **Tailwind CSS**            | Utility-first styling for a clean, responsive design                 |
| **React Context API**       | Global state management for plan/saved items                         |
| **localStorage**            | Persisting user data across browser sessions                         |
| **Next/Image**              | Optimized image loading with responsive sizing                       |

---

## ✨ Key Features

1. **📚 Dynamic Workout Library** — Browse twelve exercises in a responsive 3-column grid, each displaying an image, muscle tags, duration, calories, and rating.

2. **🔍 Detailed Workout Pages** — Each card links to a dynamic detail page (`/exercise/[id]`) showing full instructions, a key-specs panel, and action buttons.

3. **📋 Today's Plan & Saved Lists** — Add exercises to your daily plan or save them for later. Both lists live on a dedicated **My Plan** page with live stats (total exercises, minutes, calories).

4. **🔔 Real-Time Toast Notifications** — Every action (add, remove, mark as done, duplicate warning) triggers a styled toast notification with distinct colors and icons.

5. **💾 Persistent State with localStorage** — Your plan and saved items survive page reloads and browser restarts, thanks to global React Context + localStorage sync.

6. **📱 Fully Responsive Design** — Optimized for mobile, tablet, and desktop with collapsible grids, stacked layouts, and a mobile-friendly navbar.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
