# Blog Application - Submission Summary

## Project Overview
A modern blog application built with React, TanStack Query, Tailwind CSS, and shadcn/ui components.

## Live Application
- **Dev Server**: http://localhost:5173
- **API Server**: http://localhost:3001

## How to Run

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start JSON Server
Open a terminal and run:
```bash
npm run server
```

### Step 3: Start Development Server
Open another terminal and run:
```bash
npm run dev
```

### Step 4: Open Browser
Navigate to http://localhost:5173

## Features Implemented

### 1. View All Blogs (GET /blogs)
- Displays all blogs in card format
- Shows title, description, categories, and date
- Click on any card to view full details
- Loading skeletons while fetching
- Error handling with clear messages

### 2. View Single Blog (GET /blogs/:id)
- Displays full blog content
- Shows cover image
- Category badges
- Formatted date
- Responsive layout

### 3. Create New Blog (POST /blogs)
- Dialog form with all fields
- Title, categories, description, cover image URL, content
- Form validation
- Loading state during submission
- Automatically refreshes blog list after creation

## Technologies Used

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server

### Required Technologies
- **TanStack Query v5** - Server state management
  - `useQuery` for fetching data
  - `useMutation` for creating blogs
  - Query invalidation for cache updates
  
- **Tailwind CSS** - Utility-first CSS framework
  - Custom configuration
  - Responsive design
  - Custom color scheme
  
- **shadcn/ui** - Component library
  - Button, Card, Dialog, Input, Textarea, Label
  - Badge, Skeleton components
  - Fully customizable

### Additional
- **JSON Server** - Mock REST API
- **Lucide React** - Icons
- **Radix UI** - Accessible primitives

## Project Structure
```
src/
├── components/
│   ├── BlogList.jsx          # List all blogs
│   ├── BlogCard.jsx           # Individual blog card
│   ├── BlogDetail.jsx         # Single blog view
│   ├── CreateBlogDialog.jsx   # Create blog form
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── api.js                 # API functions
│   └── utils.js               # Utility functions
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point with QueryClientProvider
└── index.css                  # Tailwind CSS imports
```

## Key Implementation Details

### TanStack Query Setup
- QueryClient configured in `main.jsx`
- `refetchOnWindowFocus: false` for better UX
- Query keys: `['blogs']` and `['blog', id]`
- Mutation with automatic query invalidation

### API Integration
- Base URL: http://localhost:3001
- All endpoints properly implemented
- Error handling for failed requests
- Automatic date timestamp on creation

### UI/UX Features
- Two-panel responsive layout
- Sticky positioning for better navigation
- Loading skeletons for better perceived performance
- Empty states when no blog is selected
- Error states with helpful messages
- Smooth transitions and hover effects

## Git Commits
```
d2f338a - Initial commit: Blog application with React, TanStack Query, and Tailwind CSS
422f78c - Add setup guide and documentation
```

## Testing Instructions

1. **View Blogs**: Open the app to see 3 sample blogs
2. **Select Blog**: Click any blog card to view full details
3. **Create Blog**: 
   - Click "Create Blog" button
   - Fill in all required fields
   - Submit to see new blog in the list
4. **Responsive**: Resize browser to test mobile layout

## Notes
- All required technologies properly implemented
- Clean, organized code structure
- Proper error handling throughout
- Responsive design for all screen sizes
- Loading states for better UX
