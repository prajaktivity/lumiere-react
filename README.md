# Lumière the Shine — React (Vite)

## Run on your computer
    npm install
    npm run dev          # opens http://localhost:5173

## Deploy on Vercel
1. Put this folder on GitHub (new repository, upload all files; do NOT upload node_modules).
2. vercel.com -> Add New -> Project -> import the repository.
3. Framework Preset: Vite (auto-detected). Build command: npm run build. Output: dist.
4. Click Deploy.

## Where to edit
src/config.js          Instagram, WhatsApp, email
src/data.js            photos, categories, prices, reviews, FAQs
public/images/         your photos (use src: "/images/name.jpg")
src/styles.css         all styling
src/components/        Gallery, Lightbox, Contact, Sections (Nav, Hero, About...)
src/App.jsx            order of sections; add new sections here
