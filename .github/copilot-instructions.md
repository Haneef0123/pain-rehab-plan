# Copilot Instructions for Pain Management Rehabilitation App

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a Next.js 14+ rehabilitation web application for an 8-week desk-focused rehab plan targeting lumbar disc bulge (L4-L5/L5-S1) and cervical lordosis loss. The app is designed for desk-bound professionals like software engineers.

## Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL/SQLite
- **State Management**: React Context/Hooks

## Code Standards & Patterns

1. Use TypeScript for all files with proper type definitions
2. Follow Next.js App Router conventions (app directory structure)
3. Use functional components with hooks
4. Implement responsive design with Tailwind CSS
5. Use Radix UI for accessible components
6. Follow the component-based architecture pattern

## Key Features to Implement

1. **User Authentication**: Secure login/signup with NextAuth.js
2. **Safety Checklist**: Daily safety checks before exercise routines
3. **Exercise Routines**: Weekly structured routines (Morning, Desk Break, Evening)
4. **Progress Tracking**: User progress through 8-week program
5. **Red Flag Monitoring**: Safety warnings and medical consultation prompts
6. **Ergonomic Guidance**: Workspace setup and posture advice
7. **Notifications**: Desk break reminders and daily recap

## File Structure Conventions

- `/src/app/` - App Router pages and layouts
- `/src/components/` - Reusable UI components
- `/src/lib/` - Utility functions and configurations
- `/src/types/` - TypeScript type definitions
- `/src/data/` - Static data and exercise content
- `/prisma/` - Database schema and migrations

## Component Naming

- Use PascalCase for component names
- Use descriptive names (e.g., `SafetyChecklist`, `ExerciseRoutine`, `ProgressDashboard`)
- Group related components in folders

## Data Management

- Store exercise routines and content in structured JSON/Markdown format
- Use Prisma for database operations
- Implement proper error handling and validation
- Use server actions for form submissions

## Accessibility Requirements

- Ensure WCAG 2.1 AA compliance
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation support
- Maintain proper color contrast ratios

## Security Considerations

- Validate all user inputs
- Implement proper authentication checks
- Use environment variables for sensitive data
- Follow Next.js security best practices

When generating code, prioritize user safety, accessibility, and a clean, professional healthcare interface.
