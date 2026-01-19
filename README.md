# Blog Application

A modern blog application built with React, TanStack Query, Tailwind CSS, and shadcn/ui.

## Features

- View all blogs in a card layout
- Click on any blog to see full details
- Create new blog posts
- Responsive design
- Loading states and error handling

## Prerequisites

- Node.js (v18 or higher)
- npm

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the JSON Server

Open a terminal and run:

```bash
npm run server
```

The API will run on http://localhost:3001

### Start the dev server

Open another terminal and run:

```bash
npm run dev
```

The app will run on http://localhost:5173

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── textarea.jsx
│   │   ├── badge.jsx
│   │   └── skeleton.jsx
│   ├── BlogList.jsx     # Displays all blogs
│   ├── BlogCard.jsx     # Individual blog card
│   ├── BlogDetail.jsx   # Single blog view
│   └── CreateBlogDialog.jsx  # Form to create new blog
├── lib/
│   ├── api.js           # API functions
│   └── utils.js         # Utility functions
├── App.jsx              # Main app component
├── main.jsx             # Entry point with QueryClientProvider
└── index.css            # Tailwind CSS styles
```

## API Endpoints

The JSON Server provides the following endpoints:

| Method | Endpoint      | Description                |
|--------|---------------|----------------------------|
| GET    | /blogs        | Get all blogs              |
| GET    | /blogs/:id    | Get a specific blog by ID  |
| POST   | /blogs        | Create a new blog          |

## Technologies Used

- React 18
- Vite
- TanStack Query v5
- Tailwind CSS
- shadcn/ui
- JSON Server

## Notes

- TanStack Query is configured with `refetchOnWindowFocus: false` for better UX
- Query invalidation ensures data stays fresh after mutations
- Tailwind CSS custom theme with CSS variables
- shadcn/ui components are fully customizable

## Troubleshooting

If you encounter any issues:

1. Make sure both servers are running (JSON server on 3001, dev server on 5173)
2. Check that all dependencies are installed: `npm install`
3. Clear browser cache and reload
4. Check console for any error messages
