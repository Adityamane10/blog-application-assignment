# Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start JSON Server** (in one terminal)
   ```bash
   npm run server
   ```
   - API runs on http://localhost:3001
   - If port 3001 is in use, kill the process or change port in package.json

3. **Start Dev Server** (in another terminal)
   ```bash
   npm run dev
   ```
   - App runs on http://localhost:5173

## Features Implemented

✅ Get all blogs (GET /blogs)
✅ Get blog by ID (GET /blogs/:id)
✅ Create new blog (POST /blogs)
✅ TanStack Query for data fetching
✅ Tailwind CSS for styling
✅ shadcn/ui components
✅ Loading states with skeletons
✅ Error handling
✅ Responsive design

## Testing the Application

1. Open http://localhost:5173
2. Click on any blog card to view details
3. Click "Create Blog" button to add a new blog
4. Fill the form and submit

## Project Structure

```
src/
├── components/
│   ├── BlogList.jsx          # Displays all blogs
│   ├── BlogCard.jsx           # Individual blog card
│   ├── BlogDetail.jsx         # Single blog view
│   ├── CreateBlogDialog.jsx   # Create blog form
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── api.js                 # API functions
│   └── utils.js               # Utilities
├── App.jsx                    # Main component
└── main.jsx                   # Entry point
```

## Technologies

- React 18
- Vite
- TanStack Query v5
- Tailwind CSS
- shadcn/ui
- JSON Server
