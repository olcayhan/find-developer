# Find Developer

Responsive job finding platform built with Next.js, React, Redux Toolkit, and Material UI.

## Project Overview

This project is a frontend implementation of a job search platform. It includes:
- **Homepage**: Hero section, featured jobs, and company logos.
- **Search Results**: Job listing with filtering and detailed view.
- **User Profile**: Comprehensive user profile management.

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19, Material UI (MUI) v7
- **State Management**: Redux Toolkit
- **Styling**: SCSS, MUI System
- **HTTP Client**: Axios (Mocked via service layer)
- **Form Validation**: React Hook Form / Yup (Ready for implementation)
- **Date Handling**: Day.js

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd find-developer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
project-root/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── common/           # Shared components (Header, Footer, Layout)
│   ├── home/             # Homepage specific components
│   ├── search/           # Search page components
│   └── profile/          # Profile page components
├── mock/                 # Mock JSON data
├── redux/                # Redux setup and slices
├── services/             # API service layer (mocked)
├── styles/               # Global styles and theme
└── public/               # Static assets
```

## Features

- **Responsive Design**: Mobile-first approach using MUI Grid system.
- **Theme**: Custom MUI theme configuration.
- **Mock Data**: Simulated API calls with delay to mimic real-world scenarios.
- **Components**: Reusable and modular component architecture.

## Screenshots

(Optional: Add screenshots here)
